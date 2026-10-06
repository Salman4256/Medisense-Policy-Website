import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Trash2,
  AlertTriangle,
  Mail,
  Copy,
  Check,
  ArrowLeft,
  Smartphone,
  Cloud,
  ShieldCheck
} from 'lucide-react';
import siteConfig from '../../config/siteConfig';
import './DataDeletionPage.css';

export const DataDeletionPage: React.FC = () => {
  const [userEmail, setUserEmail] = useState('');
  const [reason, setReason] = useState('Account Closure / No longer needed');
  const [notes, setNotes] = useState('Please permanently delete my MediSense account, authentication record, and all associated personal and health data stored in the cloud PostgreSQL database.');
  const [copied, setCopied] = useState(false);

  const previewBody = `To: MediSense Privacy & Security Team (${siteConfig.supportEmail})
Subject: [DATA DELETION REQUEST] MediSense App Account Deletion

Dear MediSense Privacy Team,

I am writing to formally request the complete and permanent deletion of my MediSense account and all associated personal health data in accordance with Google Play Store User Data Policies and applicable privacy regulations.

Account Identification:
- Registered Email Address: ${userEmail || '[Your Registered Email Address]'}
- Application Name: ${siteConfig.appName}
- Android Package: ${siteConfig.appPackageName}
- Reason for Deletion: ${reason}
- Additional Instructions: ${notes}

I understand that this action is irreversible and will permanently wipe:
1. My Supabase authentication profile and canonical User UUID
2. Cloud-synchronized health profiles, vital records, and clinical histories
3. Medication schedules and adherence history logs
4. Scheduled doctor appointments
5. Disease prediction history and Explainable AI logs
6. AI Assistant conversation logs and any transmitted query media

Please confirm once the cloud-side data purge has been completed.

Sincerely,
MediSense User`;

  const mailtoLink = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent('[DATA DELETION REQUEST] MediSense App Account Deletion')}&body=${encodeURIComponent(previewBody)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(previewBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="deletion-page" id="main-content">
      {/* Hero */}
      <section className="deletion-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to Privacy Portal</span>
          </Link>

          <div className="hero-badge-row">
            <span className="badge badge-rose">
              <Trash2 size={14} />
              <span>Google Play Compliant</span>
            </span>
            <span className="badge badge-cyan">
              <ShieldCheck size={14} />
              <span>User Data Sovereignty</span>
            </span>
          </div>

          <h1 className="deletion-title">
            Account &amp; Data <span className="gradient-text">Deletion Request</span>
          </h1>

          <p className="deletion-subtitle">
            {siteConfig.appName} gives you complete control over your health information. Follow the instructions below to wipe your device's local database or request a permanent cloud account purge.
          </p>

          <div className="deletion-meta-grid">
            <div className="meta-card">
              <span className="meta-label">Application Package</span>
              <span className="meta-value font-mono">{siteConfig.appPackageName}</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Deletion SLA</span>
              <span className="meta-value">Within 30 Calendar Days</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Support Email</span>
              <span className="meta-value">{siteConfig.supportEmail}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="deletion-body">
        <div className="container deletion-container">

          {/* How to Delete Data */}
          <div className="deletion-box">
            <h2 className="box-heading">How to Delete Your Data</h2>
            <p className="box-sub">
              Depending on whether you wish to reset your phone's local storage or completely eliminate your cloud account from our servers, choose the corresponding method:
            </p>

            {/* Method 1: In-App Local Wipe */}
            <div className="step-card">
              <div className="step-num">1</div>
              <div className="step-content">
                <div className="step-title-row">
                  <Smartphone size={20} className="text-cyan" />
                  <h3>Method 1: Instant In-App Local Data Wipe (Self-Service)</h3>
                </div>
                <p>If you currently have the {siteConfig.appName} app installed on your smartphone:</p>
                <ol className="step-list">
                  <li>Open <strong>{siteConfig.appName}</strong> on your Android device.</li>
                  <li>Tap the <strong>Profile</strong> or <strong>Settings</strong> icon on the bottom navigation bar.</li>
                  <li>Select <strong>Privacy &amp; Security</strong>.</li>
                  <li>Tap the red button labeled <strong>"Clear Local Health Data"</strong>.</li>
                  <li>Confirm the dialog. All locally stored Room SQLite database tables (health profile, medications, appointments, prediction history, and chat logs) will be immediately and irreversibly wiped from device storage.</li>
                </ol>
              </div>
            </div>

            {/* Method 2: Cloud Account & Backend Purge */}
            <div className="step-card">
              <div className="step-num">2</div>
              <div className="step-content">
                <div className="step-title-row">
                  <Cloud size={20} className="text-purple" />
                  <h3>Method 2: Complete Cloud Account &amp; Backend Purge (Permanent)</h3>
                </div>
                <p>
                  To permanently delete your cloud database records and authentication credentials from our PostgreSQL cloud database (Supabase), submit the formal deletion request below.
                </p>
                <p className="text-muted">
                  This option is available to all users, even if you have already uninstalled the application.
                </p>

                {/* Interactive Generator */}
                <div className="generator-form">
                  <h4 className="generator-title">Generate Cloud Deletion Request Email</h4>

                  <div className="form-group">
                    <label className="form-label" htmlFor="del-email">
                      Registered Email Address (Used in {siteConfig.appName}) *
                    </label>
                    <input
                      id="del-email"
                      type="email"
                      className="form-input"
                      placeholder="e.g. user@example.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="del-reason">
                      Reason for Deletion (Optional)
                    </label>
                    <select
                      id="del-reason"
                      className="form-input"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    >
                      <option value="Account Closure / No longer needed">Account Closure / No longer needed</option>
                      <option value="Privacy Preferences">Privacy Preferences</option>
                      <option value="Switching to another device">Switching to another device</option>
                      <option value="General Data Purge Request">General Data Purge Request</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="del-notes">
                      Additional Instructions (Optional)
                    </label>
                    <textarea
                      id="del-notes"
                      className="form-textarea"
                      placeholder="Any specific instructions regarding your data..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Generated Request Preview:</label>
                    <textarea
                      className="form-textarea preview-box"
                      readOnly
                      value={previewBody}
                      rows={7}
                    />
                  </div>

                  <div className="btn-row">
                    <a href={mailtoLink} className="btn btn-primary">
                      <Mail size={16} />
                      <span>Send Request via Email</span>
                    </a>

                    <button type="button" onClick={handleCopy} className="btn btn-outline">
                      {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                      <span>{copied ? 'Copied to Clipboard' : 'Copy Request Text'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Scope of Deleted Data & Timelines */}
          <div className="scope-box">
            <h2 className="box-heading">Scope of Deleted Data &amp; Timelines</h2>
            <div className="table-responsive">
              <table className="scope-table">
                <thead>
                  <tr>
                    <th>Data Category</th>
                    <th>Action Taken</th>
                    <th>Retention / Purge Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Supabase Auth User Account</strong></td>
                    <td>User credential record and canonical auth UUID permanently deleted.</td>
                    <td>Purged within 7 business days.</td>
                  </tr>
                  <tr>
                    <td><strong>Personal Health Profiles (PHR)</strong></td>
                    <td>All measurements, demographics, clinical history, and allergies erased.</td>
                    <td>Purged within 7 business days.</td>
                  </tr>
                  <tr>
                    <td><strong>Medication Regimens &amp; Adherence</strong></td>
                    <td>Medication schedules and timestamped adherence records deleted.</td>
                    <td>Purged within 7 business days.</td>
                  </tr>
                  <tr>
                    <td><strong>Doctor Appointments</strong></td>
                    <td>All scheduled appointments and clinical notes deleted.</td>
                    <td>Purged within 7 business days.</td>
                  </tr>
                  <tr>
                    <td><strong>Prediction &amp; XAI History</strong></td>
                    <td>Historical prediction logs and symptom vectors permanently cleared.</td>
                    <td>Purged within 7 business days.</td>
                  </tr>
                  <tr>
                    <td><strong>Encrypted Cloud Backups</strong></td>
                    <td>Rolling disaster-recovery database snapshots age out automatically.</td>
                    <td>Fully overwritten within 30 calendar days.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="irreversible-callout">
              <AlertTriangle size={20} className="text-amber" />
              <div>
                <strong>Irreversible Action:</strong> Once your cloud account and data have been purged, this action cannot be undone. If you wish to preserve your medical records prior to deletion, please use the <strong>Health Data Portability</strong> feature in the application to export your records as an encrypted JSON archive.
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default DataDeletionPage;
