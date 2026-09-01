import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import XJewelERP from './pages/XJewelERP';
import XCuraHMS from './pages/XCuraHMS';
import XRetailERP from './pages/XRetailERP';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import AdminLayout from './admin/AdminLayout';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminBlogEditor from './admin/AdminBlogEditor';

function MainSite() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow safe-pb-fab md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us/" element={<About />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/jewelbiz/" element={<XJewelERP />} />
          <Route path="/curabiz/" element={<XCuraHMS />} />
          <Route path="/retailbiz/" element={<XRetailERP />} />
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blogs/:brand/:slug" element={<BlogPost />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
      <a
        href="https://wa.me/919257373668"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex items-center justify-center group transition-transform hover:scale-105 duration-300"
        aria-label="Contact on WhatsApp"
        style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <img
          src="/wa.png"
          alt="WhatsApp"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain drop-shadow-xl"
        />
        <span className="pointer-events-none absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm text-white text-[12px] font-medium rounded-lg opacity-0 group-hover:opacity-100 hidden sm:block transition-all duration-300 whitespace-nowrap translate-y-1 group-hover:translate-y-0">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="blogs/new" element={<AdminBlogEditor />} />
          <Route path="blogs/:id" element={<AdminBlogEditor />} />
        </Route>
      </Routes>
    );
  }

  return <MainSite />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
