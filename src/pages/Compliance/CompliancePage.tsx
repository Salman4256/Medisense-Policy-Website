import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  CheckCircle2,
  ArrowLeft,
  FileCheck
} from 'lucide-react';
import siteConfig from '../../config/siteConfig';
import './CompliancePage.css';

interface ChecklistItem {
  requirement: string;
  policyStatus: string;
  implementationDetail: string;
  status: 'compliant' | 'verified';
}

export const CompliancePage: React.FC = () => {
  const checklistItems: ChecklistItem[] = [
    {
      requirement: "Publicly Accessible Privacy Policy URL",
      policyStatus: "Fully Accessible (No Login / No Paywall)",
      implementationDetail: `Hosted publicly on Vercel at ${siteConfig.privacyPolicyUrl}. Accessible across desktop and mobile browsers.`,
      status: "compliant"
    },
    {
      requirement: "HTML Web Format (Not a PDF)",
      policyStatus: "Live Responsive Web App",
      implementationDetail: "Built as an accessible, responsive HTML/React portal rather than a raw PDF or non-indexable document.",
      status: "compliant"
    },
    {
      requirement: "Unambiguous App Identification",
      policyStatus: "Identified Across Headers & Footers",
      implementationDetail: `Clearly identifies ${siteConfig.appName}, Android package ${siteConfig.appPackageName}, and developer entity ${siteConfig.developerName}.`,
      status: "compliant"
    },
    {
      requirement: "Official Support & Contact Presence",
      policyStatus: "Clickable Mailto & Domain Listed",
      implementationDetail: `Verified support email ${siteConfig.supportEmail} linked throughout policy, footer, and in-app support intents.`,
      status: "compliant"
    },
    {
      requirement: "Google Play Health App Declaration",
      policyStatus: "Self-Management / Decision Support",
      implementationDetail: "Accurately declared as Personal Health Management & Decision Support. Explicitly disclaims FDA medical device status.",
      status: "compliant"
    },
    {
      requirement: "Data Safety: Personal Info (Email)",
      policyStatus: "Collected (Optional Auth)",
      implementationDetail: "Used exclusively for account creation, Supabase authentication, and account-scoped data isolation.",
      status: "compliant"
    },
    {
      requirement: "Data Safety: Health & Fitness Data",
      policyStatus: "Collected & Encrypted in Transit",
      implementationDetail: "Stored in on-device Room database; optional cloud sync via Supabase PostgreSQL with user UUID Row-Level Security.",
      status: "compliant"
    },
    {
      requirement: "Data Safety: Photos / Camera Input",
      policyStatus: "User-Initiated & Transient",
      implementationDetail: "Optional photo capture for AI assistant queries via FileProvider; transmitted over TLS 1.3 to Groq/Gemini vision APIs.",
      status: "compliant"
    },
    {
      requirement: "Data Safety: Audio / Microphone Input",
      policyStatus: "User-Initiated Dictation Only",
      implementationDetail: "Transcribed via Android system speech recognizer into text; raw audio files are never archived or saved.",
      status: "compliant"
    },
    {
      requirement: "Data Safety: No Data Sold or Ad Shared",
      policyStatus: "Zero Commercial Data Sharing",
      implementationDetail: "No third-party advertising SDKs, no behavioral trackers, no broker sales, no insurance data feeds.",
      status: "compliant"
    },
    {
      requirement: "Account Deletion Mechanism & Policy",
      policyStatus: "Dedicated Public Deletion URL",
      implementationDetail: `Documented at ${siteConfig.deletionUrl} featuring in-app Room database wipe instructions and cloud purge SLA within 30 days.`,
      status: "compliant"
    },
    {
      requirement: "Prominent Medical Disclaimer",
      policyStatus: "Visible Top Callout & Dedicated Section",
      implementationDetail: "Explicit notice clarifying that predictions and AI answers are not medical diagnoses, treatments, or prescriptions.",
      status: "compliant"
    },
    {
      requirement: "Exact Alarms & Background Receivers",
      policyStatus: "Transparent Justifications",
      implementationDetail: "SCHEDULE_EXACT_ALARM and RECEIVE_BOOT_COMPLETED justified strictly for user-scheduled medication dose reminders.",
      status: "compliant"
    },
    {
      requirement: "In-App Privacy Policy Link",
      policyStatus: "Integrated via Android SupportIntentHelper",
      implementationDetail: "Accessible in-app from Profile > Privacy & Security > Official Website / Privacy Policy.",
      status: "compliant"
    }
  ];

  return (
    <main className="compliance-page" id="main-content">
      {/* Hero */}
      <section className="compliance-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to Privacy Portal</span>
          </Link>

          <div className="hero-badge-row">
            <span className="badge badge-emerald">
              <Award size={14} />
              <span>Google Play Developer Program</span>
            </span>
            <span className="badge badge-cyan">
              <FileCheck size={14} />
              <span>Health Apps Policy Verified</span>
            </span>
          </div>

          <h1 className="compliance-title">
            Google Play <span className="gradient-text">Compliance Resource</span>
          </h1>

          <p className="compliance-subtitle">
            This reference document verifies that {siteConfig.appName} ({siteConfig.appPackageName}) adheres strictly to Google Play Developer Policies, including the Health Apps Policy, User Data Policy, and Data Safety Form requirements.
          </p>

          <div className="compliance-meta-grid">
            <div className="meta-card">
              <span className="meta-label">Application</span>
              <span className="meta-value">{siteConfig.appName}</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Package Name</span>
              <span className="meta-value font-mono">{siteConfig.appPackageName}</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Target SDK</span>
              <span className="meta-value">Android 14+ (API 36)</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Version Code / Name</span>
              <span className="meta-value">Code 4 (v{siteConfig.appVersion})</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Checklist */}
      <section className="compliance-body">
        <div className="container compliance-container">

          <div className="compliance-intro-card">
            <h2 className="intro-title">Google Play Health App Declaration Summary</h2>
            <p className="intro-text">
              Google Play requires all health-related apps to maintain a comprehensive, publicly accessible privacy policy covering access, collection, use, sharing, security, retention, and deletion of personal and sensitive user data. The policy must be linked from both the Play Console store listing and within the application client.
            </p>
          </div>

          <div className="table-card">
            <h3 className="table-title">Play Console Compliance Checklist</h3>
            <div className="table-responsive">
              <table className="compliance-table">
                <thead>
                  <tr>
                    <th>Requirement</th>
                    <th>Policy &amp; Architecture Status</th>
                    <th>Implementation Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {checklistItems.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="req-cell">
                          <CheckCircle2 size={16} className="text-emerald" />
                          <strong>{item.requirement}</strong>
                        </div>
                      </td>
                      <td>
                        <span className="status-badge">{item.policyStatus}</span>
                      </td>
                      <td className="detail-cell">
                        {item.implementationDetail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Data Safety Form Quick Mapping */}
          <div className="data-safety-guide">
            <h2 className="guide-title">Play Console Data Safety Form Guidance</h2>
            <p className="guide-desc">
              When completing the Data Safety questionnaire in Google Play Console, use these factual responses directly aligned with the codebase:
            </p>

            <div className="safety-grid">
              <div className="safety-item">
                <h4>Personal Info (Email Address)</h4>
                <ul>
                  <li><strong>Collected?</strong> Yes (Optional for authenticated sync).</li>
                  <li><strong>Shared?</strong> No (Not shared with third parties).</li>
                  <li><strong>Ephemeral?</strong> No (Stored for account lifecycle).</li>
                  <li><strong>Required?</strong> No (Users can use guest mode offline).</li>
                  <li><strong>Purpose:</strong> App functionality, account management.</li>
                </ul>
              </div>

              <div className="safety-item">
                <h4>Health &amp; Fitness (Health Info)</h4>
                <ul>
                  <li><strong>Collected?</strong> Yes (User-entered profile &amp; logs).</li>
                  <li><strong>Shared?</strong> No (User-controlled Android share sheet only).</li>
                  <li><strong>Encrypted in transit?</strong> Yes (TLS 1.3).</li>
                  <li><strong>Deletable upon request?</strong> Yes (In-app + email purge).</li>
                  <li><strong>Purpose:</strong> Health management, decision support.</li>
                </ul>
              </div>

              <div className="safety-item">
                <h4>Photos &amp; Videos (Images)</h4>
                <ul>
                  <li><strong>Collected?</strong> Yes (User-attached photos in AI chat).</li>
                  <li><strong>Shared?</strong> Transmitted to AI API (Groq/Gemini) for query answering.</li>
                  <li><strong>Ephemeral?</strong> Yes (Not permanently retained on AI servers).</li>
                  <li><strong>Required?</strong> No (Optional camera permission).</li>
                  <li><strong>Purpose:</strong> AI assistant multimodal inquiry.</li>
                </ul>
              </div>

              <div className="safety-item">
                <h4>Audio Files (Voice Input)</h4>
                <ul>
                  <li><strong>Collected?</strong> Transcribed into text via Android speech engine.</li>
                  <li><strong>Raw audio stored?</strong> No (Raw audio is never saved).</li>
                  <li><strong>Required?</strong> No (Optional microphone permission).</li>
                  <li><strong>Purpose:</strong> Voice dictation for accessibility.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default CompliancePage;
