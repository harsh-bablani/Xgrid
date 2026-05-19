import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us/" element={<About />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/enterprise-resource-planning/jewelbiz/" element={<XJewelERP />} />
            <Route path="/enterprise-resource-planning/curabiz/" element={<XCuraHMS />} />
            <Route path="/enterprise-resource-planning/retailbiz/" element={<XRetailERP />} />
            <Route path="/blogs/" element={<Blogs />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919257373668"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center group transition-transform hover:scale-110 duration-300"
        aria-label="Contact on WhatsApp"
      >
        <img 
          src="/wa.png" 
          alt="WhatsApp" 
          className="w-20 h-20 object-contain drop-shadow-xl"
        />

        <span className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm text-white text-[12px] font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap translate-y-1 group-hover:translate-y-0">
          Chat on WhatsApp
        </span>
      </a>
    </Router>
  );
}

export default App;
