import { Helmet } from 'react-helmet-async';
import {
  buildBlogPostingJsonLd,
  resolveSeo,
  type SeoSource,
} from '../lib/seo';

type Props = {
  source: SeoSource;
  /** When false, skip JSON-LD (e.g. drafts / noindex pages still get robots). */
  includeJsonLd?: boolean;
};

export default function SeoHead({ source, includeJsonLd = true }: Props) {
  const seo = resolveSeo(source);
  const jsonLd =
    includeJsonLd && !source.noIndex
      ? buildBlogPostingJsonLd(source, seo)
      : null;

  return (
    <Helmet>
      <title>{seo.metaTitle}</title>
      <meta name="description" content={seo.metaDescription} />
      {seo.seoKeywords ? <meta name="keywords" content={seo.seoKeywords} /> : null}
      <meta name="robots" content={seo.robots} />
      <link rel="canonical" href={seo.canonicalUrl} />

      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="SlateBiz Softwares" />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:url" content={seo.canonicalUrl} />
      <meta property="og:image" content={seo.ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.twitterTitle} />
      <meta name="twitter:description" content={seo.twitterDescription} />
      <meta name="twitter:image" content={seo.twitterImage} />

      {source.publishedAt ? (
        <meta property="article:published_time" content={source.publishedAt} />
      ) : null}
      {source.updatedAt ? (
        <meta property="article:modified_time" content={source.updatedAt} />
      ) : null}
      {source.author ? <meta property="article:author" content={source.author} /> : null}

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
