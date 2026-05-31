import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import SiteMeta from './components/SiteMeta.jsx';
import Home from './pages/Home.jsx';
import GrantWriting from './pages/GrantWriting.jsx';
import BusinessConsultancy from './pages/BusinessConsultancy.jsx';
import SzkoleniaPL from './pages/SzkoleniaPL.jsx';
import Contact from './pages/Contact.jsx';

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
          <Route path="/business-consultancy" element={<BusinessConsultancy />} />
          <Route path="/szkolenia-pl" element={<SzkoleniaPL />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
