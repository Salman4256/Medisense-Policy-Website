import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Printer, Check, Link2, HeartPulse, FileText, Trash2, Award, Info, Menu, X } from 'lucide-react';
import siteConfig from '../../config/siteConfig';
import './Header.css';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="brand-link" aria-label={`${siteConfig.appName} Home`} onClick={closeMenu}>
          <div className="brand-logo-badge">
            <HeartPulse className="brand-icon" size={24} />
          </div>
          <div className="brand-text-block">
            <div className="brand-title-row">
              <span className="brand-name">{siteConfig.appName}</span>
              <span className="brand-badge">Official Portal</span>
            </div>
            <span className="brand-tagline">{siteConfig.tagline}</span>
          </div>
        </Link>

        {/* Primary Desktop Navigation */}
        <nav className="header-nav">
          <Link
            to="/"
            className={`nav-tab ${location.pathname === '/' || location.pathname === '/privacy-policy' ? 'active' : ''}`}
          >
            <Shield size={14} />
            <span>Privacy Policy</span>
          </Link>

          <a href="/#about" className="nav-tab">
            <Info size={14} />
            <span>About &amp; Features</span>
          </a>

          <Link
            to="/terms"
            className={`nav-tab ${location.pathname === '/terms' ? 'active' : ''}`}
          >
            <FileText size={14} />
            <span>Terms</span>
          </Link>

          <Link
            to="/data-deletion"
            className={`nav-tab ${location.pathname === '/data-deletion' ? 'active' : ''}`}
          >
            <Trash2 size={14} />
            <span>Data Deletion</span>
          </Link>

          <Link
            to="/compliance"
            className={`nav-tab ${location.pathname === '/compliance' ? 'active' : ''}`}
          >
            <Award size={14} />
            <span>Play Compliance</span>
          </Link>
        </nav>

        {/* Actions & Utilities */}
        <div className="header-actions">
          <button
            type="button"
            onClick={handleCopyLink}
            className="action-btn copy-btn print-hide"
            aria-label="Copy Policy URL"
            title="Copy Public URL"
          >
            {copied ? (
              <>
                <Check size={16} className="btn-icon text-emerald" />
                <span className="btn-label">Copied</span>
              </>
            ) : (
              <>
                <Link2 size={16} className="btn-icon" />
                <span className="btn-label">Share</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="action-btn print-btn print-hide"
            aria-label="Print Page"
            title="Print or Save as PDF"
          >
            <Printer size={16} className="btn-icon" />
            <span className="btn-label">PDF</span>
          </button>

          <a
            href="/#medical-disclaimer"
            className="disclaimer-chip print-hide"
            aria-label="Jump to Medical Disclaimer"
            onClick={closeMenu}
          >
            <Shield size={14} />
            <span>Medical Notice</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="mobile-menu-toggle print-hide"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer print-hide">
          <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
            <Shield size={16} />
            <span>Privacy Policy</span>
          </Link>
          <a href="/#about" className="mobile-nav-link" onClick={closeMenu}>
            <Info size={16} />
            <span>About &amp; Core Features</span>
          </a>
          <Link to="/terms" className="mobile-nav-link" onClick={closeMenu}>
            <FileText size={16} />
            <span>Terms of Service &amp; Disclaimer</span>
          </Link>
          <Link to="/data-deletion" className="mobile-nav-link" onClick={closeMenu}>
            <Trash2 size={16} />
            <span>Account &amp; Data Deletion</span>
          </Link>
          <Link to="/compliance" className="mobile-nav-link" onClick={closeMenu}>
            <Award size={16} />
            <span>Google Play Compliance Resource</span>
          </Link>
          <a href="/#medical-disclaimer" className="mobile-nav-link highlight" onClick={closeMenu}>
            <Shield size={16} />
            <span>Primary Medical Notice</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
