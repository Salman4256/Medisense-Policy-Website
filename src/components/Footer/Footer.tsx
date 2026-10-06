import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Globe, Shield, ArrowUp, FileText, Trash2, Award, Info, Cpu, Smartphone } from 'lucide-react';
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
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-logo-badge">
                <HeartPulse size={22} />
              </div>
              <span className="footer-brand-title">{siteConfig.appName}</span>
            </div>
            <p className="footer-tagline">{siteConfig.tagline}</p>
            <p className="footer-description">
              Offline-first personal health assistant engineered with on-device machine learning, medication exact alarms, and privacy-by-design architecture.
            </p>
            <div className="footer-meta-tags">
              <span className="footer-spec-tag">
                <Smartphone size={12} />
                <span>{siteConfig.appPackageName}</span>
              </span>
              <span className="footer-spec-tag">
                <Cpu size={12} />
                <span>v{siteConfig.appVersion}</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Portal Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  <Shield size={14} />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <a href="/#about" className="footer-link">
                  <Info size={14} />
                  <span>About MediSense</span>
                </a>
              </li>
              <li>
                <a href="/#features" className="footer-link">
                  <Cpu size={14} />
                  <span>Core Features</span>
                </a>
              </li>
              <li>
                <a href="/#medical-disclaimer" className="footer-link">
                  <Shield size={14} className="text-amber" />
                  <span>Medical Disclaimer</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Governance &amp; Play Store</h4>
            <ul className="footer-links">
              <li>
                <Link to="/terms" className="footer-link">
                  <FileText size={14} />
                  <span>Terms &amp; Conditions</span>
                </Link>
              </li>
              <li>
                <Link to="/data-deletion" className="footer-link">
                  <Trash2 size={14} />
                  <span>Account &amp; Data Deletion</span>
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="footer-link">
                  <Award size={14} />
                  <span>Play Store Compliance</span>
                </Link>
              </li>
              <li>
                <a href="/#device-permissions" className="footer-link">
                  <Smartphone size={14} />
                  <span>Permissions Breakdown</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Identity &amp; Support</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <Mail size={14} className="contact-icon" />
                <span className="contact-text">
                  Support: <a href={`mailto:${siteConfig.supportEmail}`}><strong>{siteConfig.supportEmail}</strong></a>
                </span>
              </div>
              <div className="contact-item">
                <Globe size={14} className="contact-icon" />
                <span className="contact-text">
                  Developer: <strong>{siteConfig.developerName}</strong>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-badge">{siteConfig.playStoreCategory}</span>
              </div>
              <div className="contact-item">
                <span className="contact-badge font-mono">{siteConfig.minAndroidVersion}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.appName} ({siteConfig.developerName}). All rights reserved.
            </p>
            <p className="footer-revision">
              Last Updated &amp; Effective: {siteConfig.effectiveDate} &bull; Target Android SDK 36 (Android 14+)
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
