import { useEffect, useState } from 'react';
import { fetchPublishedPosts, fetchPostBySlug, fetchPostByPublicSlug } from '../lib/blogService';
import { POSTS as STATIC_POSTS } from '../pages/blog-posts';
import type { BlogPost } from '../types/blog';
import { checkApiHealth } from '../lib/api';

const STATIC_KEYS = new Set(STATIC_POSTS.map((p) => `${p.brand}/${p.slug}`));

function withStaticDefaults(post: BlogPost): BlogPost {
  return {
    ...post,
    imageAlt: post.imageAlt || post.title,
    author: post.author || 'SlateBiz Editorial',
    tags: post.tags || [],
  };
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(STATIC_POSTS.map(withStaticDefaults));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    checkApiHealth()
      .then(async (ok) => {
        if (!ok) return;
        const remote = await fetchPublishedPosts();
        const remoteSlugs = new Set(remote.map((p) => `${p.brand}/${p.slug}`));
        const staticOnly = STATIC_POSTS.filter((p) => !remoteSlugs.has(`${p.brand}/${p.slug}`)).map((p) => ({
          ...withStaticDefaults(p),
          isStatic: true,
        }));
        setPosts([...remote.map(withStaticDefaults), ...staticOnly]);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Could not load blog posts.');
      })
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
}

export function useBlogPostBySlug(slug: string | undefined) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [redirectTo, setRedirectTo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const staticPost = STATIC_POSTS.find((p) => p.slug === slug) ?? null;
    const staticWithFlag = staticPost ? { ...withStaticDefaults(staticPost), isStatic: true } : null;

    let cancelled = false;
    setLoading(true);
    setRedirectTo(null);
    setError('');

    checkApiHealth()
      .then(async (apiUp) => {
        if (cancelled) return;

        if (!apiUp) {
          setPost(staticWithFlag);
          return;
        }

        try {
          const remote = await fetchPostByPublicSlug(slug);
          if (cancelled) return;

          if (remote) {
            if (remote.slug !== slug) {
              setRedirectTo(`/blog/${remote.slug}`);
            }
            setPost(withStaticDefaults(remote));
            return;
          }

          if (staticWithFlag) {
            setPost(staticWithFlag);
          } else {
            setPost(null);
          }
        } catch (err) {
          if (cancelled) return;
          setError(err instanceof Error ? err.message : 'Failed to load post.');
          setPost(staticWithFlag);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { post, redirectTo, loading, error };
}

export function useBlogPost(brand: string | undefined, slug: string | undefined) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!brand || !slug) {
      setLoading(false);
      return;
    }

    const staticPost =
      STATIC_POSTS.find((p) => p.brand === brand && p.slug === slug) ?? null;
    const staticWithFlag = staticPost ? { ...withStaticDefaults(staticPost), isStatic: true } : null;
    const key = `${brand}/${slug}`;

    let cancelled = false;

    checkApiHealth()
      .then(async (apiUp) => {
        if (cancelled) return;

        if (!apiUp) {
          setPost(staticWithFlag);
          return;
        }

        try {
          const remote = await fetchPostBySlug(brand as BlogPost['brand'], slug);
          if (cancelled) return;

          if (remote) {
            setPost(withStaticDefaults(remote));
            return;
          }

          if (STATIC_KEYS.has(key)) {
            setPost(staticWithFlag);
          } else {
            setPost(null);
          }
        } catch (err) {
          if (cancelled) return;
          setError(err instanceof Error ? err.message : 'Failed to load post.');
          setPost(staticWithFlag);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [brand, slug]);

  return { post, loading, error };
}
