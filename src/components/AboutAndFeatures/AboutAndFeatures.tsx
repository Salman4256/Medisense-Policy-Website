import React, { useState } from 'react';
import {
  Activity,
  Cpu,
  Brain,
  Pill,
  Calendar,
  LineChart,
  FileSpreadsheet,
  Download,
  AlertTriangle,
  Sparkles,
  Layers,
  CheckCircle2,
  Clock,
  Smartphone
} from 'lucide-react';
import siteConfig from '../../config/siteConfig';
import './AboutAndFeatures.css';

interface FeatureCard {
  id: string;
  category: 'core' | 'ai' | 'management' | 'portability';
  icon: React.ReactNode;
  title: string;
  badge: string;
  badgeColor: string;
  summary: string;
  details: string[];
  disclaimer?: string;
}

export const AboutAndFeatures: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'core' | 'ai' | 'management' | 'portability'>('all');

  const features: FeatureCard[] = [
    {
      id: 'phr',
      category: 'core',
      icon: <Activity size={22} className="text-cyan" />,
      title: 'Personal Health Records (PHR)',
      badge: 'Offline-First Room DB',
      badgeColor: 'badge-cyan',
      summary: 'Centralized, user-managed personal health profile designed to organize personal health history on your Android device.',
      details: [
        'Optional fields include: Full name, date of birth, biological gender, blood group, height, and weight.',
        'Health context logs: Known allergies, existing chronic conditions, current medications, family clinical history, emergency contacts, and personal health notes.',
        'Complete user control: No health profile fields are mandatory; you only enter what you choose to track.',
        'Stored locally on your device within SQLite/Room database with optional encrypted cloud backup.'
      ]
    },
    {
      id: 'prediction',
      category: 'core',
      icon: <Cpu size={22} className="text-emerald" />,
      title: 'Symptom-Based Disease Prediction',
      badge: '100% On-Device TensorFlow Lite',
      badgeColor: 'badge-emerald',
      summary: 'Runs fully offline on your device using LiteRT / TensorFlow Lite to evaluate user-selected symptoms for educational decision support.',
      details: [
        'Deterministic on-device inference: No symptom vectors or clinical inputs are uploaded to external cloud servers for prediction.',
        'Zero-latency offline operation: Predictions run without requiring active internet access.',
        'Supports educational triage and personalized discussion preparation with your doctor.'
      ],
      disclaimer: 'MediSense provides model-generated prediction results based on selected symptoms for educational and decision-support purposes only. It is NOT a medical diagnosis, NOT guaranteed, and NEVER replaces a certified physician.'
    },
    {
      id: 'xai',
      category: 'ai',
      icon: <Brain size={22} className="text-indigo" />,
      title: 'Explainable AI (XAI) Attribution',
      badge: 'Transparent Contribution Matrices',
      badgeColor: 'badge-indigo',
      summary: 'Reveals human-readable factor attributions explaining why specific candidate conditions were highlighted by the machine-learning model.',
      details: [
        'Deterministic attribution weights: Displays positive, neutral, and negative symptom contribution factors.',
        'Transparent reasoning: Eliminates black-box ML predictions by highlighting key symptomatic correlations.',
        'Distinguishes statistical model confidence from clinical truth.'
      ],
      disclaimer: 'Model confidence reflects mathematical pattern correlation in training datasets and is NOT the same as medical certainty.'
    },
    {
      id: 'assistant',
      category: 'ai',
      icon: <Sparkles size={22} className="text-purple" />,
      title: 'AI Health Assistant',
      badge: 'Groq API + Google Gemini Fallback',
      badgeColor: 'badge-purple',
      summary: 'Interactive health conversational assistant supporting text, user-initiated camera photo input, and voice input.',
      details: [
        'Powered by external AI APIs: High-speed Groq API (compound LLMs) with automatic secondary fallback to Google Gemini (e.g. Gemini 1.5 Flash).',
        'User-initiated camera/photo input: Camera permission (CAMERA) is requested only when capturing or attaching health images for AI discussion.',
        'User-initiated voice input: Microphone permission (RECORD_AUDIO) is activated only when tapping the voice button, using Android system speech recognition.',
        'User-controlled context: Health queries are transmitted securely via TLS 1.3 only when you explicitly submit a question.'
      ],
      disclaimer: 'AI-generated assistant responses are strictly educational decision-support tools. AI responses are not clinically verified diagnoses or physician advice.'
    },
    {
      id: 'medication',
      category: 'management',
      icon: <Pill size={22} className="text-amber" />,
      title: 'Medication Management & Exact Alarms',
      badge: 'AlarmManager + Full-Screen Alerts',
      badgeColor: 'badge-amber',
      summary: 'Structured dosage schedules, timely exact alarm reminders, and longitudinal adherence recording.',
      details: [
        'Exact alarm scheduling: Utilizes Android SCHEDULE_EXACT_ALARM / USE_EXACT_ALARM APIs to alert at precise medication times.',
        'Full-screen ringing alert: Launches dedicated AlarmActivity with audio/vibration to ensure critical doses are not missed.',
        'Adherence tracking: Logs timestamped taken, skipped, and postponed actions to monitor your treatment consistency.',
        'Boot persistence: Automatically reschedules active alarms after device reboots via RECEIVE_BOOT_COMPLETED.'
      ],
      disclaimer: 'MediSense does not prescribe medications or determine dosages. All schedules are based entirely on user or physician inputs.'
    },
    {
      id: 'appointment',
      category: 'management',
      icon: <Calendar size={22} className="text-teal" />,
      title: 'Appointment Management',
      badge: 'Clinical Visit Tracking',
      badgeColor: 'badge-teal',
      summary: 'Organize consultations, hospital appointments, physician details, preparation notes, and scheduled alert reminders.',
      details: [
        'Comprehensive visit logging: Record clinic/hospital names, specialist departments, dates, times, and preparatory notes.',
        'Timely visit reminders: Scheduled notifications alert you in advance of upcoming appointments.',
        'Historical visit records: Track past consultations alongside medical outcomes.'
      ]
    },
    {
      id: 'trends',
      category: 'management',
      icon: <LineChart size={22} className="text-blue" />,
      title: 'Health Trends & Analytics',
      badge: 'MPAndroidChart Visualizations',
      badgeColor: 'badge-blue',
      summary: 'Longitudinal visualization of health management patterns, medication adherence, recurring symptoms, and prediction histories.',
      details: [
        'Visual adherence graphs: View percentage compliance trends over 7-day, 30-day, and custom time windows.',
        'Symptom frequency tracking: Identify recurring symptom clusters and temporal health patterns.',
        'Prediction confidence evolution: Review model-suggested risk distributions over time.'
      ],
      disclaimer: 'Visual health trends are application-generated descriptive statistics based on user-entered logs and do NOT constitute clinical diagnostic reports.'
    },
    {
      id: 'guidance',
      category: 'ai',
      icon: <Layers size={22} className="text-indigo" />,
      title: 'Personalized Health Context & Guidance',
      badge: 'Deterministic Rules Engine',
      badgeColor: 'badge-indigo',
      summary: 'Synthesizes your recorded profile, active medications, and recent predictions into a structured personal health context.',
      details: [
        'Context-aware guidance: Generates lifestyle, hydration, and appointment reminder suggestions based on active conditions.',
        'Deterministic engine: Uses transparent rule-based logic rather than ungrounded generative hallucinations.',
        'Safety boundaries: Recommends physician follow-ups whenever high-risk symptom patterns appear.'
      ],
      disclaimer: 'Personalized guidance is informational health-management guidance. It is NOT a clinical treatment plan and cannot replace doctor consultation.'
    },
    {
      id: 'emergency',
      category: 'core',
      icon: <AlertTriangle size={22} className="text-rose" />,
      title: 'Emergency Health Card',
      badge: 'Rapid Offline Access',
      badgeColor: 'badge-rose',
      summary: 'Instant single-screen view of vital medical details for first responders and caregivers in urgent situations.',
      details: [
        'Critical information display: Blood group, severe drug/food allergies, chronic conditions, and current medications.',
        'Emergency contact integration: Direct one-touch phone dialer intent for nominated family members or contacts.',
        'Offline immediate access: Operates without internet connectivity directly from local Room database.'
      ],
      disclaimer: 'The Emergency Health Card displays information you provided. MediSense does NOT detect medical emergencies or auto-dispatch emergency services.'
    },
    {
      id: 'reports',
      category: 'portability',
      icon: <FileSpreadsheet size={22} className="text-teal" />,
      title: 'Health Reports & User-Controlled Sharing',
      badge: 'Selective Category Export',
      badgeColor: 'badge-teal',
      summary: 'Generate structured health summaries and securely share selected categories with your healthcare providers.',
      details: [
        'Granular category selection: You explicitly select which data types to include (e.g. only medications, or only appointment history).',
        'Secure Android FileProvider: Generates local content URIs without world-readable permissions or public cloud links.',
        'Standard Android share sheet: Transmit via user-chosen apps (email, secure messaging, or print).'
      ]
    },
    {
      id: 'portability',
      category: 'portability',
      icon: <Download size={22} className="text-cyan" />,
      title: 'Health Data Portability & Backup',
      badge: 'JSON Archive + SHA-256 Checksum',
      badgeColor: 'badge-cyan',
      summary: 'Full export and import of your complete health database in open, portable, and verifiable formats.',
      details: [
        'Standard JSON backup: Export complete health records, medication schedules, and prediction logs.',
        'SHA-256 cryptographic checksum: Verifies exported file integrity to prevent corrupted imports.',
        'Pre-import validation & preview: Inspects and validates JSON schema, version compatibility, and data constraints before applying changes.'
      ]
    },
    {
      id: 'adaptive',
      category: 'ai',
      icon: <Clock size={22} className="text-purple" />,
      title: 'Adaptive Prediction-Observation Insights',
      badge: 'Module 25: Observational Analysis',
      badgeColor: 'badge-purple',
      summary: 'Compares model-generated expected health responses with later user-observed symptom outcomes over time.',
      details: [
        'Longitudinal feedback: Allows users to log whether symptoms resolved or persisted following lifestyle adjustments.',
        'Adaptive trend updates: Refines personalized context based on self-reported observation timelines.',
        'Educational correlation tracking: Highlights self-reported symptom triggers for medical discussion.'
      ],
      disclaimer: 'This feature provides observational trend analysis only. It is NOT causal clinical inference, NOT treatment optimization, and NOT a medical recommendation.'
    }
  ];

  const filteredFeatures = activeFilter === 'all'
    ? features
    : features.filter(f => f.category === activeFilter);

  return (
    <section className="about-features-section" id="about">
      <div className="container">

        {/* About MediSense Overview Banner */}
        <div className="about-overview-card">
          <div className="about-badge-row">
            <span className="badge badge-cyan">
              <Smartphone size={14} />
              <span>Android Application</span>
            </span>
            <span className="badge badge-emerald">
              <CheckCircle2 size={14} />
              <span>Google Play: Medical</span>
            </span>
            <span className="badge badge-purple">
              <Cpu size={14} />
              <span>Offline-First Architecture</span>
            </span>
          </div>

          <h2 className="about-title">
            About <span className="gradient-text">MediSense</span>
          </h2>

          <p className="about-lead">
            <strong>MediSense</strong> is an advanced <strong>Personal Healthcare Assistant, Health Management, and Decision-Support Application</strong> engineered for Android. It equips individuals with offline-first health record organization, on-device machine-learning symptom evaluation, medication adherence scheduling, and intelligent conversational assistance.
          </p>

          <div className="app-specs-grid">
            <div className="spec-card">
              <span className="spec-label">Application Name</span>
              <strong className="spec-value">{siteConfig.appName}</strong>
            </div>

            <div className="spec-card">
              <span className="spec-label">Package Identifier</span>
              <strong className="spec-value font-mono">{siteConfig.appPackageName}</strong>
            </div>

            <div className="spec-card">
              <span className="spec-label">Application Type</span>
              <strong className="spec-value">Personal Health Assistant &amp; Decision Support</strong>
            </div>

            <div className="spec-card">
              <span className="spec-label">Platform &amp; Target</span>
              <strong className="spec-value">{siteConfig.minAndroidVersion} (Target: API 36)</strong>
            </div>

            <div className="spec-card">
              <span className="spec-label">Active Release Version</span>
              <strong className="spec-value">v{siteConfig.appVersion}</strong>
            </div>

            <div className="spec-card">
              <span className="spec-label">Google Play Category</span>
              <strong className="spec-value">{siteConfig.playStoreCategory}</strong>
            </div>

            <div className="spec-card">
              <span className="spec-label">Local Data Engine</span>
              <strong className="spec-value">Room SQLite Database (On-Device)</strong>
            </div>

            <div className="spec-card">
              <span className="spec-label">ML Prediction Engine</span>
              <strong className="spec-value">{siteConfig.modelVersion}</strong>
            </div>
          </div>

          <div className="about-mission-box">
            <h3 className="mission-heading">Core System Purpose</h3>
            <p className="mission-desc">
              MediSense is designed to help you organize personal health information, receive transparent and explainable educational machine-learning insights, adhere to prescribed medication schedules, coordinate doctor appointments, and maintain portable ownership of your health records.
            </p>
            <p className="mission-disclaimer-callout">
              <strong>Crucial Notice:</strong> MediSense is built for self-management and education. It does <em>not</em> provide definitive clinical diagnosis, does <em>not</em> prescribe treatments, and is <em>never</em> a substitute for professional medical care.
            </p>
          </div>
        </div>

        {/* Features Header & Category Filter */}
        <div className="features-header-block" id="features">
          <div className="features-header-content">
            <span className="section-eyebrow">Verified Android Implementation</span>
            <h2 className="features-title">Application Features &amp; Capabilities</h2>
            <p className="features-subtitle">
              Every feature documented below corresponds directly to active components implemented within the <code>com.medisense.app</code> codebase.
            </p>
          </div>

          <div className="feature-filters" role="tablist" aria-label="Feature Category Filter">
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Features ({features.length})
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'core' ? 'active' : ''}`}
              onClick={() => setActiveFilter('core')}
            >
              Core &amp; PHR
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ai')}
            >
              AI &amp; ML
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'management' ? 'active' : ''}`}
              onClick={() => setActiveFilter('management')}
            >
              Medications &amp; Alerts
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'portability' ? 'active' : ''}`}
              onClick={() => setActiveFilter('portability')}
            >
              Export &amp; Portability
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="features-grid">
          {filteredFeatures.map((feat) => (
            <article key={feat.id} className="feature-card" id={`feature-${feat.id}`}>
              <div className="feature-card-header">
                <div className="feature-icon-badge">{feat.icon}</div>
                <span className={`badge ${feat.badgeColor}`}>{feat.badge}</span>
              </div>

              <h3 className="feature-card-title">{feat.title}</h3>
              <p className="feature-card-summary">{feat.summary}</p>

              <ul className="feature-details-list">
                {feat.details.map((detail, idx) => (
                  <li key={idx} className="feature-detail-item">
                    <span className="detail-bullet" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {feat.disclaimer && (
                <div className="feature-disclaimer-box">
                  <AlertTriangle size={14} className="feature-disclaimer-icon" />
                  <p className="feature-disclaimer-text">{feat.disclaimer}</p>
                </div>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutAndFeatures;
