import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import SiteMeta from './components/SiteMeta.jsx';
import Home from './pages/Home.jsx';
import GrantWriting from './pages/GrantWriting.jsx';
import BusinessSupport from './pages/BusinessSupport.jsx';
import SzkoleniaPL from './pages/SzkoleniaPL.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import CookiePolicy from './pages/CookiePolicy.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-porcelain font-body text-charcoal antialiased">
      <ScrollToTop />
      <SiteMeta />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/third-sector-support" element={<GrantWriting />} />
          <Route path="/grant-writing" element={<Navigate to="/third-sector-support" replace />} />
          <Route path="/business-support" element={<BusinessSupport />} />
          <Route path="/business-consultancy" element={<Navigate to="/business-support" replace />} />
          <Route path="/szkolenia-pl" element={<SzkoleniaPL />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
