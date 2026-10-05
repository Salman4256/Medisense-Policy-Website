import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Globe, Shield, ArrowUp } from 'lucide-react';
import siteConfig from '../../config/siteConfig';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-logo-badge">
                <HeartPulse size={22} />
              </div>
              <span className="footer-brand-title">{siteConfig.appName}</span>
            </div>
            <p className="footer-tagline">{siteConfig.tagline}</p>
            <p className="footer-description">
              Engineered with privacy-by-design, on-device machine learning, and transparent health intelligence.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Policy & Legal</h4>
            <ul className="footer-links">
              <li>
                <Link to="/privacy-policy" className="footer-link">
                  <Shield size={14} />
                  <span>Privacy Policy (Active)</span>
                </Link>
              </li>
              <li>
                <a href="#medical-disclaimer" className="footer-link">
                  <span>Medical Disclaimer</span>
                </a>
              </li>
              <li>
                <span className="footer-link-disabled" title="Terms of Service will be available in future website module">
                  Terms of Use (Planned)
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-col-title">Support & Identity</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <Mail size={14} className="contact-icon" />
                <span className="contact-text">
                  Support: <strong>{siteConfig.supportEmail}</strong>
                </span>
              </div>
              <div className="contact-item">
                <Globe size={14} className="contact-icon" />
                <span className="contact-text">
                  Developer: <strong>{siteConfig.developerName}</strong>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-badge">Android: {siteConfig.appPackageName}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.appName}. All rights reserved.
            </p>
            <p className="footer-revision">
              Last Updated: {siteConfig.lastUpdated} | Effective: {siteConfig.effectiveDate}
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn print-hide"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
