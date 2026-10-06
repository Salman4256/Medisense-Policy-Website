import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsPage from './pages/Terms/TermsPage';
import DataDeletionPage from './pages/DataDeletion/DataDeletionPage';
import CompliancePage from './pages/Compliance/CompliancePage';

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
        <Route path="/about" element={<PrivacyPolicy />} />
        <Route path="/features" element={<PrivacyPolicy />} />
        
        {/* Terms of Service & Medical Disclaimer */}
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        
        {/* Google Play Account & Data Deletion Portal */}
        <Route path="/data-deletion" element={<DataDeletionPage />} />
        <Route path="/account-deletion" element={<DataDeletionPage />} />
        
        {/* Google Play Health App Compliance & Data Safety Resource */}
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/play-compliance" element={<CompliancePage />} />

        {/* Wildcard fallback to Privacy Policy */}
        <Route path="*" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
