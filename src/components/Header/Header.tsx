import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Printer, Check, Link2, Activity, HeartPulse } from 'lucide-react';
import siteConfig from '../../config/siteConfig';
import './Header.css';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="brand-link" aria-label={`${siteConfig.appName} Home`}>
          <div className="brand-logo-badge">
            <HeartPulse className="brand-icon" size={24} />
          </div>
          <div className="brand-text-block">
            <div className="brand-title-row">
              <span className="brand-name">{siteConfig.appName}</span>
              <span className="brand-badge">Official Policy</span>
            </div>
            <span className="brand-tagline">{siteConfig.tagline}</span>
          </div>
        </Link>

        <div className="header-actions">
          <div className="package-tag" title="Android Package Identifier">
            <Activity size={14} className="package-icon" />
            <span>{siteConfig.appPackageName}</span>
          </div>

          <button
            type="button"
            onClick={handleCopyLink}
            className="action-btn copy-btn"
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
            aria-label="Print Privacy Policy"
            title="Print or Save as PDF"
          >
            <Printer size={16} className="btn-icon" />
            <span className="btn-label">Print / PDF</span>
          </button>

          <a
            href="#medical-disclaimer"
            className="disclaimer-chip print-hide"
            aria-label="Jump to Medical Disclaimer"
          >
            <Shield size={14} />
            <span>Medical Notice</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
