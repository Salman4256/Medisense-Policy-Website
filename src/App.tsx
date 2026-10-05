import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

// Scroll to top helper or handle anchor hashes on route changes
const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Wildcard redirect for safety */}
        <Route path="*" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
