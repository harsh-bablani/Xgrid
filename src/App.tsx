import { lazy, Suspense, useEffect, type ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { isProductionHost, PRODUCT_DOMAINS, productSite, type ProductSite } from './lib/site';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import RouteSeo from './components/RouteSeo';
import SiteChatbot from './components/SiteChatbot';
import { AuthProvider } from './context/AuthContext';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const XJewelERP = lazy(() => import('./pages/XJewelERP'));
const XCuraHMS = lazy(() => import('./pages/XCuraHMS'));
const XRetailERP = lazy(() => import('./pages/XRetailERP'));
const Services = lazy(() => import('./pages/Services'));
const Blogs = lazy(() => import('./pages/Blogs'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Careers = lazy(() => import('./pages/Careers'));
const FAQ = lazy(() => import('./pages/FAQ'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function SiteHome() {
  if (productSite === 'jewelbiz') return <XJewelERP />;
  if (productSite === 'curabiz') return <XCuraHMS />;
  return <Home />;
}

/**
 * On the public domains each product lives at the root of its own domain:
 * /jewelbiz/ on slatebiz.com goes to jewelbiz.in, and /jewelbiz/ on jewelbiz.in goes to /.
 * Localhost and Vercel previews keep rendering the page in place.
 */
function ProductRoute({ product, children }: Readonly<{ product: ProductSite; children: ReactNode }>) {
  const offDomain = isProductionHost && productSite !== product;

  useEffect(() => {
    if (offDomain) window.location.replace(`${PRODUCT_DOMAINS[product]}/`);
  }, [offDomain, product]);

  if (productSite === product) return <Navigate to="/" replace />;
  if (offDomain) return <PageFallback />;
  return <>{children}</>;
}

const AdminLayout = lazy(() => import('./admin/AdminLayout'));
const AdminLogin = lazy(() => import('./admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));
const AdminBlogEditor = lazy(() => import('./admin/AdminBlogEditor'));

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" aria-busy="true">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#0C69B6]/25 border-t-[#0C69B6]" />
    </div>
  );
}

function MainSite() {
  return (
    <div className="min-h-screen flex flex-col">
      <RouteSeo />
      <Header />
      <main className="flex-grow safe-pb-fab md:pb-0">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<SiteHome />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us/" element={<About />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/jewelbiz/" element={<ProductRoute product="jewelbiz"><XJewelERP /></ProductRoute>} />
            <Route path="/curabiz/" element={<ProductRoute product="curabiz"><XCuraHMS /></ProductRoute>} />
            <Route path="/retailbiz/" element={<XRetailERP />} />
            <Route path="/blogs/" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/:slug/" element={<BlogPost />} />
            <Route path="/blogs/:brand/:slug" element={<BlogPost />} />
            <Route path="/blogs/:brand/:slug/" element={<BlogPost />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <SiteChatbot />
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="blogs/new" element={<AdminBlogEditor />} />
            <Route path="blogs/:id" element={<AdminBlogEditor />} />
          </Route>
        </Routes>
      </Suspense>
    );
  }

  return <MainSite />;
}

/** Everything inside the router; the browser and the prerender script supply their own router. */
export function AppShell() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <AppRoutes />
    </AuthProvider>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
