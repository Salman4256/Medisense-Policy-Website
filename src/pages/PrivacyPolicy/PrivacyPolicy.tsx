import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Cpu,
  Database,
  Lock,
  Calendar,
  Layers,
  Sparkles,
  Smartphone
} from 'lucide-react';
import siteConfig from '../../config/siteConfig';
import { privacySections } from '../../data/privacyPolicyContent';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import PrivacySection from '../../components/PrivacySection/PrivacySection';
import './PrivacyPolicy.css';

export const PrivacyPolicy: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(privacySections[0]?.id || '');

  // IntersectionObserver to dynamically highlight the currently scrolled section
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the first intersecting entry from the top
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveSectionId(visibleEntry.target.id);
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    privacySections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="privacy-page" id="main-content">
      {/* Hero Header Section */}
      <section className="privacy-hero">
        <div className="container hero-container">
          <div className="hero-badges-row">
            <span className="badge badge-cyan">
              <ShieldCheck size={14} />
              <span>Official Privacy Policy</span>
            </span>
            <span className="badge badge-emerald">
              <Smartphone size={14} />
              <span>{siteConfig.appPackageName}</span>
            </span>
            <span className="badge badge-amber">
              <Cpu size={14} />
              <span>On-Device ML Architecture</span>
            </span>
          </div>

          <h1 className="hero-title">
            MediSense <span className="gradient-text">Privacy Policy</span>
          </h1>

          <p className="hero-subtitle">
            Comprehensive transparency regarding our offline-first architecture, local on-device machine learning, encrypted cloud synchronization, and your health data rights.
          </p>

          <div className="hero-meta-grid">
            <div className="meta-card">
              <Calendar size={16} className="meta-icon" />
              <div className="meta-info">
                <span className="meta-label">Effective Date</span>
                <span className="meta-value">{siteConfig.effectiveDate}</span>
              </div>
            </div>

            <div className="meta-card">
              <Layers size={16} className="meta-icon" />
              <div className="meta-info">
                <span className="meta-label">Last Updated</span>
                <span className="meta-value">{siteConfig.lastUpdated}</span>
              </div>
            </div>

            <div className="meta-card">
              <Smartphone size={16} className="meta-icon" />
              <div className="meta-info">
                <span className="meta-label">Application Version</span>
                <span className="meta-value">v{siteConfig.appVersion}</span>
              </div>
            </div>

            <div className="meta-card">
              <Cpu size={16} className="meta-icon" />
              <div className="meta-info">
                <span className="meta-label">ML Engine</span>
                <span className="meta-value">TensorFlow Lite (Offline)</span>
              </div>
            </div>
          </div>

          {/* Core Privacy Pillars Highlight Banner */}
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon-box bg-cyan">
                <Cpu size={20} />
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">100% On-Device ML</h3>
                <p className="pillar-desc">
                  Disease predictions and XAI feature attributions run entirely on your phone. No symptom vectors are uploaded for prediction.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box bg-emerald">
                <Database size={20} />
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">Offline-First Storage</h3>
                <p className="pillar-desc">
                  Health profiles, medication schedules, and appointments are stored in local Room SQLite storage with optional encrypted cloud sync.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box bg-indigo">
                <Lock size={20} />
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">No Data Monetization</h3>
                <p className="pillar-desc">
                  We do not sell, rent, or monetize personal health information, nor do we embed third-party advertising SDKs.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box bg-teal">
                <Sparkles size={20} />
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">Complete User Sovereignty</h3>
                <p className="pillar-desc">
                  Instant local data clearing, full JSON data export with SHA-256 integrity, and user-initiated PDF sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky TOC Sidebar */}
      <section className="privacy-body-section">
        <div className="container layout-grid">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="layout-sidebar">
            <TableOfContents
              sections={privacySections}
              activeId={activeSectionId}
              onSelectSection={(id) => setActiveSectionId(id)}
            />
          </aside>

          {/* Right Column: All Policy Content Sections */}
          <article className="layout-content privacy-content">
            {privacySections.map((section) => (
              <PrivacySection key={section.id} section={section} />
            ))}
          </article>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
