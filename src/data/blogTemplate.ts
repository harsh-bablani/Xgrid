import { createEmptySection, type BlogSection } from '../types/blog';

/** One empty intro section — matches the old frontend layout (add more sections as needed). */
export function createBlogTemplate(): BlogSection[] {
  return [createEmptySection()];
}

/** Starter HTML for the article body (title + hero image are set in Post details above). */
export const HTML_BLOG_STARTER = `<h2>Introduction</h2>
<p>First paragraph of your article.</p>

<img src="https://your-project.supabase.co/storage/v1/object/public/blog-images/blogs/your-image.png" alt="Describe the image" />

<h3>Heading after the image</h3>
<p>More detail here. Use a new &lt;p&gt; tag for each paragraph.</p>

<h2>Next section</h2>
<p>Continue your article...</p>
`;
