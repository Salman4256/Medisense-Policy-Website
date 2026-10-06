import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, CheckCircle, Mail, ArrowLeft } from 'lucide-react';
import siteConfig from '../../config/siteConfig';
import './TermsPage.css';

export const TermsPage: React.FC = () => {
  return (
    <main className="terms-page" id="main-content">
      {/* Hero */}
      <section className="terms-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to Privacy Portal</span>
          </Link>

          <div className="hero-badge-row">
            <span className="badge badge-cyan">
              <Shield size={14} />
              <span>Legal Governance</span>
            </span>
            <span className="badge badge-amber">
              <AlertTriangle size={14} />
              <span>Medical Terms &amp; Disclaimer</span>
            </span>
          </div>

          <h1 className="terms-title">
            Terms of Service &amp; <span className="gradient-text">Medical Disclaimer</span>
          </h1>

          <p className="terms-subtitle">
            Please review these Terms of Service carefully before utilizing the {siteConfig.appName} Android application ({siteConfig.appPackageName}).
          </p>

          <div className="terms-meta-grid">
            <div className="meta-card">
              <span className="meta-label">Package Identifier</span>
              <span className="meta-value font-mono">{siteConfig.appPackageName}</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Target Platform</span>
              <span className="meta-value">{siteConfig.minAndroidVersion}</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Effective Date</span>
              <span className="meta-value">{siteConfig.effectiveDate}</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Application Version</span>
              <span className="meta-value">v{siteConfig.appVersion}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="terms-body">
        <div className="container terms-container">

          {/* Primary Medical Disclaimer Callout */}
          <div className="medical-disclaimer-box" id="medical-disclaimer">
            <div className="disclaimer-header">
              <AlertTriangle size={24} className="disclaimer-icon" />
              <h2 className="disclaimer-heading">PRIMARY MEDICAL NOTICE &amp; DISCLAIMER</h2>
            </div>
            <p className="disclaimer-body">
              <strong>{siteConfig.appName} is intended for health-management support, personal health education, and decision support only.</strong> Information, machine-learning predictions, explainability feature attributions, contextual risk scores, personalized guidance, and AI-generated conversational responses provided by {siteConfig.appName} are <strong>NOT medical diagnoses, clinical treatment plans, or prescriptions</strong>, and should never be considered a substitute for professional medical evaluation, diagnosis, or advice from a certified healthcare provider.
            </p>
            <div className="disclaimer-highlights">
              <div className="disclaimer-hl-item">
                <CheckCircle size={16} className="text-amber" />
                <span><strong>Do not use {siteConfig.appName} to make emergency medical decisions.</strong></span>
              </div>
              <div className="disclaimer-hl-item">
                <CheckCircle size={16} className="text-amber" />
                <span>For diagnosis, urgent medical concerns, or medication changes, always consult an appropriately qualified healthcare professional or emergency medical services immediately.</span>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <article className="terms-article">
            <section className="terms-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, launching, creating an account, or interacting with {siteConfig.appName} (the "App"), you confirm that you have read, understood, and agreed to be legally bound by these Terms of Service and our <Link to="/privacy-policy">Privacy Policy</Link>. If you do not accept these terms in their entirety, you must not install or use the application.
              </p>
            </section>

            <section className="terms-section">
              <h2>2. Eligibility &amp; User Accounts</h2>
              <p>
                You must be at least 18 years of age (or the legal age of majority in your jurisdiction) to establish an independent account. Minors may use the application solely under direct parental or legal guardian supervision. You agree to provide truthful and accurate information when registering your account and maintaining your personal health records.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your device and authentication credentials. If you suspect unauthorized access to your account, you must notify us immediately at <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
              </p>
            </section>

            <section className="terms-section">
              <h2>3. Nature of Machine Learning &amp; AI Features</h2>
              <p>
                The disease prediction models (bundled locally as TensorFlow Lite / LiteRT) and conversational AI interfaces (powered by Groq and Google Gemini API):
              </p>
              <ul>
                <li>Provide probabilistic approximations based on computational algorithms, neural network weights, and statistical correlations.</li>
                <li>Do not constitute diagnostic pathology, laboratory blood work, certified clinical testing, or individualized clinical advice.</li>
                <li>Must be treated strictly as educational reference points to help you formulate questions for discussions with your licensed physician.</li>
                <li>Model confidence indicators reflect mathematical pattern alignment with training distributions and do not indicate clinical medical certainty.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>4. User Responsibility for Medications &amp; Appointments</h2>
              <p>
                While {siteConfig.appName} implements high-precision Android system alarm scheduling (<code>SCHEDULE_EXACT_ALARM</code> / <code>AlarmManager</code>) to alert you of scheduled medication times and appointments:
              </p>
              <ul>
                <li>External technical factors—such as device battery depletion, OS aggressive background killing, manufacturer Doze policies, or hardware malfunction—could delay or suppress alarms.</li>
                <li>{siteConfig.appName} does NOT determine dosages, write prescriptions, or make clinical medication changes.</li>
                <li>You remain solely responsible for managing your prescriptions, confirming exact dosing instructions with your doctor or pharmacist, and adhering to professional medical advice.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>5. User-Provided Content &amp; Media</h2>
              <p>
                When you input health details, notes, symptoms, or capture photos of packaging or prescriptions in the AI Health Assistant:
              </p>
              <ul>
                <li>You confirm that you have the right to provide this information for your personal health tracking.</li>
                <li>You acknowledge that photos and queries submitted to the conversational assistant are transmitted securely via TLS 1.3 to third-party AI inference providers (Groq/Gemini) solely to generate conversational responses.</li>
                <li>You retain full ownership of your personal health data and can export it or purge it at any time.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>6. Intellectual Property Rights</h2>
              <p>
                The interface design, graphics, software code, compiled neural network architectures, and logos within {siteConfig.appName} are the proprietary intellectual property of {siteConfig.developerName} and are protected under applicable copyright and intellectual property laws. You are granted a limited, personal, non-exclusive, non-transferable license to use the app for personal, non-commercial purposes.
              </p>
            </section>

            <section className="terms-section">
              <h2>7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, {siteConfig.developerName}, its contributors, and underlying infrastructure providers shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from the use of, or inability to use, {siteConfig.appName}. This includes, without limitation, personal health decisions, delayed medical treatment, reliance on model-generated outputs, or technical alarm failures.
              </p>
            </section>

            <section className="terms-section">
              <h2>8. Account Termination &amp; Data Deletion</h2>
              <p>
                You may terminate your relationship with {siteConfig.appName} at any time by clearing your local data via in-app settings and submitting an account deletion request through our <Link to="/data-deletion">Account Deletion Portal</Link>. We reserve the right to suspend or terminate accounts that violate acceptable use or attempt to reverse-engineer or compromise application infrastructure.
              </p>
            </section>

            <section className="terms-section">
              <h2>9. Changes to These Terms</h2>
              <p>
                We may modify these Terms of Service periodically to reflect changes in our application architecture, regulatory guidance, or platform policies. Continued use of the Application following published updates constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section className="terms-section">
              <h2>10. Contact Information</h2>
              <p>
                For legal inquiries or questions regarding these Terms of Service, contact {siteConfig.developerName} at:
              </p>
              <div className="contact-callout">
                <Mail size={18} className="text-cyan" />
                <span>Email: <a href={`mailto:${siteConfig.supportEmail}`}><code>{siteConfig.supportEmail}</code></a></span>
              </div>
            </section>
          </article>

        </div>
      </section>
    </main>
  );
};

export default TermsPage;
