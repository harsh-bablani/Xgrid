export type ProductSite = 'jewelbiz' | 'curabiz';

export const PRODUCT_DOMAINS: Record<ProductSite, string> = {
  jewelbiz: 'https://www.jewelbiz.in',
  curabiz: 'https://www.curabiz.in',
};

const PRODUCTION_HOSTS = new Set(['slatebiz.com', 'slatebiz.in', 'jewelbiz.in', 'curabiz.in']);

const currentHost =
  typeof window === 'undefined' ? '' : window.location.hostname.toLowerCase().replace(/^www\./, '');

/** True on the real public domains; false on localhost and *.vercel.app previews. */
export const isProductionHost = PRODUCTION_HOSTS.has(currentHost);

export const productSite: ProductSite | null = (() => {
  if (currentHost === 'jewelbiz.in' || import.meta.env.VITE_SITE === 'jewelbiz') return 'jewelbiz';
  if (currentHost === 'curabiz.in' || import.meta.env.VITE_SITE === 'curabiz') return 'curabiz';
  return null;
})();
