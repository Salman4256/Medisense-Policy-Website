import siteConfig from '../config/siteConfig';

export interface ThirdPartyService {
  name: string;
  provider: string;
  purpose: string;
  dataProcessed: string;
  privacyPolicyUrl: string;
}

export interface PermissionDetail {
  permission: string;
  androidName: string;
  purpose: string;
  whenUsed: string;
  optional: boolean;
}

export interface SectionContent {
  id: string;
  title: string;
  shortTitle?: string;
  content: string[];
  subsections?: {
    subtitle: string;
    points: string[];
  }[];
  callout?: {
    type: 'info' | 'warning' | 'security' | 'medical';
    title: string;
    message: string;
  };
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export const thirdPartyServices: ThirdPartyService[] = [
  {
    name: "Supabase Auth & Database",
    provider: "Supabase, Inc.",
    purpose: "User authentication, encrypted session management, and optional cloud database synchronization for health records.",
    dataProcessed: "User email, Supabase Auth UUID, and user-initiated synced health records (profile, medications, appointments, prediction history).",
    privacyPolicyUrl: "https://supabase.com/privacy"
  },
  {
    name: "Groq AI Inference API",
    provider: "Groq, Inc.",
    purpose: "Primary language model inference provider powering conversational interactions in the interactive Health Assistant.",
    dataProcessed: "Active user-submitted chat prompts, optional image attachments (base64), and conversational message context transmitted securely via HTTPS.",
    privacyPolicyUrl: "https://groq.com/privacy-policy/"
  },
  {
    name: "Google Gemini API",
    provider: "Google LLC",
    purpose: "Secondary fallback language model provider for conversational Health Assistant interactions when primary AI routing is unavailable.",
    dataProcessed: "Active user-submitted chat prompts and conversational context transmitted securely via encrypted Google Cloud endpoints.",
    privacyPolicyUrl: "https://policies.google.com/privacy"
  },
  {
    name: "Google Play Services",
    provider: "Google LLC",
    purpose: "Android platform infrastructure, secure application distribution, and runtime permission management.",
    dataProcessed: "Standard platform-level telemetry, application integrity tokens, and device compatibility parameters.",
    privacyPolicyUrl: "https://policies.google.com/privacy"
  }
];

export const permissionsList: PermissionDetail[] = [
  {
    permission: "Camera",
    androidName: "android.permission.CAMERA",
    purpose: "Allows capturing photos of medication packaging, prescription labels, or observable physical conditions to attach to Health Assistant queries.",
    whenUsed: "Requested strictly at runtime when user taps the camera icon in Health Assistant. Never accessed continuously or in the background.",
    optional: true
  },
  {
    permission: "Microphone / Audio",
    androidName: "android.permission.RECORD_AUDIO",
    purpose: "Enables speech-to-text voice recognition for dictating symptom queries and messages in the Health Assistant.",
    whenUsed: "Activated only when user explicitly invokes voice input; transcribed via Android RecognizerIntent. Never recorded in the background.",
    optional: true
  },
  {
    permission: "Post Notifications",
    androidName: "android.permission.POST_NOTIFICATIONS",
    purpose: "Delivers critical medication intake alerts, dose reminders, and upcoming doctor appointment notifications on Android 13+.",
    whenUsed: "Triggered at scheduled medication times or appointment reminder intervals configured by the user.",
    optional: false
  },
  {
    permission: "Schedule Exact Alarms",
    androidName: "android.permission.SCHEDULE_EXACT_ALARM / USE_EXACT_ALARM",
    purpose: "Ensures medication alarms ring at the precise minute scheduled, even during device Doze mode.",
    whenUsed: "Active when the user creates or enables timed medication schedules and appointment alerts.",
    optional: false
  },
  {
    permission: "Run at Startup / Boot",
    androidName: "android.permission.RECEIVE_BOOT_COMPLETED",
    purpose: "Automatically restores and reschedules active medication alarms and appointment reminders when your device is restarted.",
    whenUsed: "Executes once upon device boot completion to re-register pending alarms in Android AlarmManager.",
    optional: false
  },
  {
    permission: "Wake Lock & Full Screen Intent",
    androidName: "android.permission.WAKE_LOCK / USE_FULL_SCREEN_INTENT",
    purpose: "Wakes the screen and displays the high-priority medication ringing screen over the lock screen when a dose is due.",
    whenUsed: "Used solely at the exact instant a scheduled medication dose alarm triggers.",
    optional: false
  }
];

export const privacySections: SectionContent[] = [
  {
    id: "medical-disclaimer",
    title: "1. Medical & Clinical Decision-Support Disclaimer",
    shortTitle: "Medical Disclaimer",
    content: [
      `${siteConfig.appName} is an AI-powered personal health-management and educational decision-support application. It is engineered to help individuals organize personal health information, receive timely medication reminders, explore potential disease patterns, and prepare for medical consultations.`,
      `CRITICAL NOTICE: ${siteConfig.appName} DOES NOT provide medical diagnoses, clinical treatments, prescriptions, or emergency healthcare services. All predictions, feature importance explanations, counterfactual 'what-if' analyses, longitudinal health trends, contextual risk assessments, and personalized guidance generated by the application are strictly informational and intended to support—not replace—the clinical judgment of qualified medical professionals.`
    ],
    callout: {
      type: "medical",
      title: "Prominent Medical Notice & Disclaimer",
      message: `${siteConfig.appName} is intended for health-management support, education, and decision support. Information, predictions, explanations, risk indicators, personalized guidance, and AI-generated responses provided by MediSense are not medical diagnoses and should not be considered a substitute for professional medical advice. Do not use MediSense to make emergency medical decisions. For diagnosis, treatment decisions, medication changes, or urgent medical concerns, consult an appropriately qualified healthcare professional or emergency service immediately.`
    }
  },
  {
    id: "regulatory-positioning",
    title: "2. Medical Device & Regulatory Positioning",
    shortTitle: "Regulatory Positioning",
    content: [
      `To ensure clear expectations and compliance with international health regulations:`,
      `• Non-Medical Device Declaration: ${siteConfig.appName} is an Android health-management and decision-support application. It is NOT an approved medical device, NOT a diagnostic medical software, NOT FDA-cleared, NOT CE-marked under EU MDR, and NOT certified by any national medical regulatory authority.`,
      `• Decision-Support Scope: All machine-learning predictions and AI assistant outputs represent probabilistic correlations based on computational algorithms and statistical associations. They do not constitute certified clinical laboratory findings or anatomical pathology.`,
      `• Patient Responsibility: You and your healthcare provider remain solely responsible for any healthcare decisions, prescription adherence, and clinical treatments.`
    ]
  },
  {
    id: "introduction",
    title: "3. Introduction & Privacy Commitment",
    shortTitle: "Introduction",
    content: [
      `This Privacy Policy explains how ${siteConfig.appName} ("we", "our", or "the Application"), identified under package name \`${siteConfig.appPackageName}\`, collects, processes, stores, and safeguards your information when you use our Android application.`,
      `We believe that personal health data is among the most sensitive categories of personal information. Accordingly, ${siteConfig.appName} is architected around foundational privacy-by-design principles:`,
      `• Offline-First Computation: Core intelligence—including disease prediction, explainable AI, medication scheduling, and health trend analytics—runs entirely on your physical device without sending your health records to remote servers.`,
      `• Data Minimization: We only process health and identity attributes strictly required to deliver active application features.`,
      `• User Sovereignty: You maintain granular control over your data, including one-tap local data clearing, full JSON data export, PDF generation, and selective data sharing.`,
      `• No Commercial Monetization: We never sell, rent, monetize, or broker your personal health information to third-party data brokers, insurers, or advertising networks.`
    ]
  },
  {
    id: "information-we-collect",
    title: "4. Information We Collect",
    shortTitle: "Information We Collect",
    content: [
      `To provide comprehensive healthcare assistance and adherence management, ${siteConfig.appName} processes both information provided directly by you and derived intelligence generated by the application engines.`
    ],
    subsections: [
      {
        subtitle: "A. User-Provided Data",
        points: [
          "Health Profile Demographics: Full name, date of birth, biological gender, blood group, height, and body weight (all profile fields are optional; none are mandatory).",
          "Clinical History & Observations: Known allergies, existing chronic diseases, current active medications, family medical history, and user-entered clinical notes.",
          "Emergency Contact Details: Emergency contact person name and telephone number.",
          "Symptom Selections: User-selected symptoms chosen from the symptom catalog for on-device disease prediction.",
          "Medication Schedules: Medicine names, dosages, measurement units (e.g. mg, ml), frequency (e.g., ONCE_DAILY, TWICE_DAILY), scheduled intake times, start/end dates, and special instructions.",
          "Medication Adherence Logs: Actual intake timestamps and adherence statuses (TAKEN, MISSED, SKIPPED, SNOOZED).",
          "Doctor & Clinic Appointments: Doctor names, clinic/hospital locations, appointment categories, scheduled dates/times, reminder lead times, and preparation notes.",
          "Health Assistant Interactions: Text messages, user-captured photos, or voice transcripts voluntarily submitted to the conversational assistant.",
          "Account Credentials: User email address and authentication session token when registering for an authenticated account via Supabase Auth."
        ]
      },
      {
        subtitle: "B. Application-Generated Data",
        points: [
          "Disease Prediction Outputs: Probabilistic prediction scores and ranked condition classifications computed locally on-device via TensorFlow Lite.",
          "Model Confidence Indicators: Confidence level classifications (High, Moderate, Low) reflecting symptom-pattern alignment.",
          "Explainable AI (XAI) Attributions: Feature contribution weights explaining why specific symptoms influenced the prediction.",
          "Longitudinal Health Patterns: Temporal trends, recurring symptom frequency patterns, and medication adherence percentages over 7, 30, and 90-day intervals.",
          "Personalized Guidance Checklists: Deterministic health action items and safety reminders synthesized from your active health context.",
          "Local Security Audit Telemetry: Timestamps and event classifications (e.g. DATA_EXPORTED, LOCAL_DATA_CLEARED) logged strictly on-device."
        ]
      },
      {
        subtitle: "C. Technical & Device Data We DO NOT Collect",
        points: [
          "NO Advertising Identifiers (GAID) collected or accessed.",
          "NO Precise or Coarse Location tracking (GPS/cell tower).",
          "NO Contact Book, Phone Number, or SMS scraping.",
          "NO Third-party analytics SDKs or behavioral ad trackers.",
          "NO Background device fingerprinting."
        ]
      }
    ]
  },
  {
    id: "account-auth",
    title: "5. Account & Authentication Information",
    shortTitle: "Account & Authentication",
    content: [
      `${siteConfig.appName} provides both offline guest functionality and optional cloud-synchronized accounts powered by Supabase Auth.`,
      `When you register for an authenticated account:`,
      `• We store your email address and an authenticated unique user identifier (UUID) assigned by Supabase Auth.`,
      `• Passwords are encrypted and verified through standard secure hashing protocols on Supabase authentication infrastructure; plain-text passwords are never accessible to our application.`,
      `• Local authentication tokens are stored securely in Android application-scoped storage and are cleared immediately upon user sign-out.`
    ]
  },
  {
    id: "local-storage",
    title: "6. Local Device Storage & Offline-First Architecture",
    shortTitle: "Local Device Storage",
    content: [
      `${siteConfig.appName} is engineered as an offline-first mobile application. All health profiles, medication regimens, appointment schedules, symptom prediction logs, and conversational records are stored directly on your physical Android device in an internal Room (SQLite) database (\`AppDatabase\`).`,
      `Key aspects of our local storage model:`,
      `• Offline Independence: The application does not require internet access for disease prediction, medication ringing alarms, appointment reminders, emergency health card display, or health timeline analysis.`,
      `• App-Private Sandbox: Local databases are stored in your device's protected internal storage sandbox (\`/data/data/${siteConfig.appPackageName}/\`), inaccessible to other third-party Android applications.`,
      `• Selective Sync: Storing information locally does NOT automatically transmit it to the internet unless you have signed into an authenticated account and cloud synchronization is active.`
    ]
  },
  {
    id: "cloud-sync",
    title: "7. Cloud Storage & Synchronization (Supabase PostgreSQL)",
    shortTitle: "Cloud Storage & Sync",
    content: [
      `For authenticated users, ${siteConfig.appName} provides optional encrypted cloud synchronization powered by Supabase PostgreSQL database infrastructure.`,
      `Synchronized data entities include:`,
      `• \`health_profiles\`: User demographics, clinical background, and emergency contact details.`,
      `• \`medications\` & \`medication_history\`: Active medication regimens and dosage adherence records.`,
      `• \`appointments\`: Scheduled doctor consultations and clinical follow-up times.`,
      `• \`prediction_history\`: On-device prediction timestamps, disease labels, confidence values, and symptom vectors.`,
      `Security architecture:`,
      `• Row-Level Security (RLS): All PostgreSQL tables enforce strict user-UUID isolation. Users can only read, insert, update, or delete records matching their authenticated Supabase Auth UUID.`,
      `• Encrypted In Transit: All network synchronization occurs exclusively over secure HTTPS / TLS 1.3 connections.`,
      `• No Embedded Master Keys: The mobile client uses non-privileged public client credentials; administrative service-role keys are never embedded in the application.`
    ]
  },
  {
    id: "disease-prediction-ml",
    title: "8. On-Device Disease Prediction & Explainable AI (TensorFlow Lite)",
    shortTitle: "Disease Prediction & ML",
    content: [
      `A core innovation in ${siteConfig.appName} is our privacy-preserving machine learning architecture:`,
      `• 100% On-Device Inference: Disease prediction is powered by a pre-trained TensorFlow Lite / LiteRT model (\`DiseasePredictionModel.tflite\`) bundled locally inside the Android APK.`,
      `• Zero Cloud Upload for Predictions: When you select symptoms and run a prediction, the symptom vector is processed entirely within your device's CPU/GPU memory. Your symptoms and prediction outcomes are never transmitted to external AI servers for model execution.`,
      `• Explainable AI (XAI): Our explanation engine analyzes feature importances locally using deterministic contribution matrices, showing you transparently which symptoms contributed positively or neutrally to candidate outputs.`,
      `• Confidence Distinction: Model confidence reflects algorithmic pattern correlation in training datasets and is NOT the same as medical certainty.`,
      `• Non-Diagnostic Nature: Prediction outputs represent statistical pattern correlations based on training data. They are not clinical diagnoses and must not be used as the sole basis for medical decisions.`
    ],
    callout: {
      type: "info",
      title: "Privacy Advantage: Local Machine Learning",
      message: "Unlike cloud-dependent medical tools, MediSense executes its machine learning model locally on your phone hardware. Your symptom inputs stay on your device and are never sent over the internet for prediction."
    }
  },
  {
    id: "ai-health-assistant",
    title: "9. AI Health Assistant & External LLM Providers",
    shortTitle: "AI Health Assistant",
    content: [
      `${siteConfig.appName} includes an interactive conversational Health Assistant designed to answer general health questions, clarify medication instructions, and provide educational context.`,
      `How conversational AI operates:`,
      `• User-Initiated Queries: AI processing occurs only when you voluntarily submit a text message, attach an image, or speak a voice query in the Health Assistant screen.`,
      `• Scoped Transmission: When a query is submitted, only the active message text, recent chat turn history, and optional user-selected image are transmitted over encrypted HTTPS to our configured AI provider (Groq API as primary, Google Gemini API as fallback).`,
      `• No Entire Database Transmissions: MediSense DOES NOT dump or transmit your entire medical profile, historical medication database, or complete prediction archive to the AI API.`,
      `• No Model Training: User queries are processed in real-time to generate responses. Neither MediSense nor our third-party AI inference providers utilize user chat content to train public AI models.`
    ]
  },
  {
    id: "camera-access",
    title: "10. Camera Access & Image Handling Disclosure",
    shortTitle: "Camera Access",
    content: [
      `${siteConfig.appName} declares the \`android.permission.CAMERA\` runtime permission to support optional visual input in the AI Health Assistant:`,
      `• Strictly User-Initiated: Camera hardware is activated ONLY when you tap the camera button in the AI Health Assistant to take a picture of a medication label, symptom, or packaging.`,
      `• No Background Capture: The application NEVER activates the camera in the background or captures photos without your explicit tap.`,
      `• Secure File Handling: Photos captured via camera are written temporarily to application-private cache using Android's secure \`FileProvider\` without exposing device storage.`,
      `• AI Vision Transmission: When you choose to submit an image query, the image is encoded (Base64) and transmitted via TLS 1.3 to the configured AI API provider (Groq/Gemini multimodal endpoints) solely to answer your question. Images are not retained on remote servers for model training.`,
      `• Fully Optional: You can decline or revoke Camera permission at any time in Android settings and continue using all other features (text chat, medication alarms, disease prediction) without restriction.`
    ]
  },
  {
    id: "microphone-access",
    title: "11. Microphone Access & Voice Input Disclosure",
    shortTitle: "Microphone Access",
    content: [
      `${siteConfig.appName} declares the \`android.permission.RECORD_AUDIO\` runtime permission for hands-free voice dictation:`,
      `• Strictly User-Initiated: Audio recording begins ONLY when you tap the microphone button on the assistant screen.`,
      `• Android Speech Engine: Audio is transcribed into text using Android's native \`RecognizerIntent\` / system speech recognition engine.`,
      `• No Audio Storage: Raw audio recordings are NOT saved or archived as audio files on your device or our servers. Only the transcribed text string is inserted into the chat input.`,
      `• No Background Listening: MediSense has zero continuous background audio recording capabilities. Microphone hardware is released immediately when dictation completes or is cancelled.`,
      `• Fully Optional: You can decline Microphone permission and continue using text-based input seamlessly.`
    ]
  },
  {
    id: "medications-alarms",
    title: "12. Medication Reminders & Exact Alarm Systems",
    shortTitle: "Medication & Alarms",
    content: [
      `To support medication adherence and timely doctor appointments, ${siteConfig.appName} utilizes Android's native system alarm services:`,
      `• Exact Alarm Scheduling: We use Android's \`AlarmManager\` with \`SCHEDULE_EXACT_ALARM\` / \`USE_EXACT_ALARM\` permissions to register high-precision alarms for your configured dosage times.`,
      `• Full-Screen Alarm Screen: When an alarm rings, the app displays a full-screen notification (\`AlarmActivity\`) presenting the medicine name, dosage, and quick-action buttons (Take, Skip, Snooze).`,
      `• Boot Recovery: A background broadcast receiver (\`BootCompletedReceiver\`) ensures all scheduled alarms are automatically restored if your device reboots.`,
      `• Local Processing: Alarm triggering is managed entirely by Android system hardware timers. No scheduling data or alarm triggers are routed through third-party notification vendors or advertising trackers.`
    ]
  },
  {
    id: "health-insights-reports",
    title: "13. Health Trends, Consultation Preparation & PDF Reports",
    shortTitle: "Reports & Insights",
    content: [
      `${siteConfig.appName} provides comprehensive health tracking and clinical preparation tools:`,
      `• Temporal Pattern Analysis: Analyzes historical symptom occurrences and adherence streaks locally using MPAndroidChart to identify longitudinal health trends.`,
      `• Consultation Preparation Engine: Compiles recent symptoms, active medications, and suggested doctor questions into a concise consultation guide.`,
      `• On-Device PDF Generation: All downloadable health summaries, consultation preparation guides, and Emergency Health Cards are rendered into PDF files locally on your device using Android's native \`PdfDocument\` API.`,
      `• Secure Temporary Storage: Generated PDFs are saved in private application cache storage and shared solely when you explicitly initiate an Android share action.`
    ]
  },
  {
    id: "emergency-health-card",
    title: "14. Emergency Health Information & Critical Card",
    shortTitle: "Emergency Health Card",
    content: [
      `${siteConfig.appName} allows users to curate an Emergency Health Card containing vital information: blood group, critical allergies, chronic conditions, current medications, and emergency contact details.`,
      `• Fast Access: Designed for rapid offline retrieval during critical situations.`,
      `• No Emergency Detection: MediSense DOES NOT automatically detect medical emergencies, falls, or cardiac events, and does NOT auto-dial emergency dispatchers.`,
      `• User-Controlled Sharing: You can export or share this card as a high-visibility PDF. The information is not publicly broadcast and remains restricted to your local device and authenticated profile.`
    ]
  },
  {
    id: "data-portability-import",
    title: "15. Data Portability, Export & Import",
    shortTitle: "Portability & Export",
    content: [
      `We support complete data portability and transparency regarding your stored health records:`,
      `• Structured JSON Export: You can export your entire health history—or select targeted subsets (Full, Clinical, Emergency, or AI Insights)—into a machine-readable JSON format at any time.`,
      `• Cryptographic Integrity: Export packages include a SHA-256 integrity checksum to verify that the file has not been altered or corrupted.`,
      `• Import Validation: When importing a previously exported backup, MediSense validates JSON schema integrity, version compatibility, and data quality constraints before restoring or merging entries into your local database.`
    ]
  },
  {
    id: "device-permissions",
    title: "16. Android Device Permissions & Usage Justifications",
    shortTitle: "Device Permissions",
    content: [
      `${siteConfig.appName} requests only the Android permissions necessary to support functional features. We never request permissions for advertising, background location tracking, or device fingerprinting.`
    ],
    tableData: {
      headers: ["Permission", "Android Manifest Identifier", "Purpose & Operational Scope", "Optional"],
      rows: permissionsList.map(p => [p.permission, p.androidName, `${p.purpose} ${p.whenUsed}`, p.optional ? "Yes (Optional)" : "Required for Core Feature"])
    }
  },
  {
    id: "how-we-use-info",
    title: "17. How We Use Information",
    shortTitle: "How We Use Information",
    content: [
      `We process personal and health information solely for the following legitimate purposes:`,
      `• Delivering core application functionality (health profile records, medication tracking, appointment alerts).`,
      `• Executing on-device disease predictions and generating explainable AI feature contribution graphs.`,
      `• Responding to user inquiries submitted to the interactive AI Health Assistant.`,
      `• Calculating longitudinal health adherence trends, contextual risk scores, and personalized guidance checklists.`,
      `• Generating exportable consultation reports and emergency health documents.`,
      `• Synchronizing records across devices for authenticated users via Supabase PostgreSQL cloud storage.`,
      `• Maintaining a local security audit log on your device to ensure transparency regarding data access and export events.`,
      `What we NEVER do with your information:`,
      `• We do NOT sell, license, or rent personal or health information to third parties.`,
      `• We do NOT engage in cross-app tracking or share data with ad-tech networks.`,
      `• We do NOT use user health records to train public artificial intelligence models.`
    ]
  },
  {
    id: "data-sharing",
    title: "18. Data Sharing & Third-Party Disclosure",
    shortTitle: "Data Sharing",
    content: [
      `${siteConfig.appName} DOES NOT automatically transmit or disclose your personal health information to other individuals or external organizations.`,
      `User-Initiated Sharing:`,
      `• You can choose to share your health reports, consultation summaries, or emergency cards with doctors, caregivers, or family members.`,
      `• Sharing is executed exclusively through Android's native system share sheet using Android's secure \`FileProvider\` mechanism.`,
      `• Consent Logging: Each time you generate a sharing package, MediSense records a consent record in your local database detailing the selected categories, recipient label, and timestamp.`,
      `• Third-Party AI Endpoints: User queries voluntarily submitted to the Health Assistant are transmitted over TLS 1.3 to Groq and Gemini solely to generate the immediate conversational response.`
    ]
  },
  {
    id: "third-party-services",
    title: "19. Third-Party Service Providers",
    shortTitle: "Third-Party Services",
    content: [
      `To provide specific cloud and conversational features, ${siteConfig.appName} interacts with verified third-party infrastructure providers. The table below details these providers, their roles, and links to their official privacy policies.`
    ],
    tableData: {
      headers: ["Service / Provider", "Purpose in MediSense", "Data Handled", "Privacy Policy"],
      rows: thirdPartyServices.map(s => [
        `${s.name} (${s.provider})`,
        s.purpose,
        s.dataProcessed,
        s.privacyPolicyUrl
      ])
    }
  },
  {
    id: "data-security",
    title: "20. Data Security & Storage Architecture",
    shortTitle: "Data Security",
    content: [
      `We implement robust, defense-in-depth technical safeguards to protect your personal and health records:`,
      `• Transport Layer Security: All remote communication (Supabase synchronization, AI assistant queries) is enforced exclusively over encrypted HTTPS using TLS 1.3.`,
      `• Database Row-Level Security: Cloud PostgreSQL tables enforce strict Row-Level Security (RLS) rules, ensuring authenticated users can only query their own data partition.`,
      `• Android Sandbox Protection: Local SQLite / Room databases reside in Android's application-private internal filesystem, inaccessible to other apps on non-rooted devices.`,
      `• Secure File Sharing: All exported documents and photos are shared via Android \`FileProvider\` using temporary, content-URI-scoped permissions that expire after use.`,
      `• Local Audit Logging: Sensitive data management actions (clearing data, exporting records) are logged in a local security audit table (\`security_audit_events\`) on your device.`,
      `• Realistic Security Notice: While we employ industry-standard engineering practices to protect your data, no method of digital transmission or electronic storage is completely impenetrable. We encourage users to maintain secure screen locks on their mobile devices.`
    ],
    callout: {
      type: "security",
      title: "Security & Credential Safety",
      message: "MediSense does not store administrative master keys or database root credentials in the Android client application. All cloud operations operate strictly under least-privilege authenticated user scopes."
    }
  },
  {
    id: "data-retention",
    title: "21. Data Retention Policies",
    shortTitle: "Data Retention",
    content: [
      `Our data retention practices directly reflect the application's actual operational lifecycle:`,
      `• Local Device Data: Health records, medication schedules, appointment alerts, and chat logs remain in your device's local Room database until you update them, clear local data via app settings, or uninstall the application.`,
      `• Cloud Synchronized Records: For authenticated users, cloud-synced records in Supabase PostgreSQL are retained for the duration of your active account lifecycle to enable multi-device synchronization and backup restoration.`,
      `• Conversational AI Queries: AI assistant text and image inputs are processed transiently by third-party AI endpoints to produce immediate responses; MediSense does not maintain permanent server-side chat logs outside of your local device history.`,
      `• Local Audit Logs: Telemetry audit events are retained locally on your device to support user transparency and can be cleared at any time via the Privacy & Security management screen.`
    ]
  },
  {
    id: "data-deletion",
    title: "22. Data Deletion & Account Erasure",
    shortTitle: "Data Deletion",
    content: [
      `You have complete autonomy to delete your personal health records and account data:`,
      `• Instant Local Data Clearing: Inside the app at Settings > Privacy & Security, tapping 'Clear Local Data' executes \`PrivacyDataManager.clearLocalUserData()\`. This immediately cancels all active medication and appointment alarms and permanently purges your health profile, prediction history, medication regimens, appointment logs, and chat messages from your physical device.`,
      `• Prediction History Deletion: You can delete individual prediction records or purge your entire prediction history at any time from the Prediction History screen.`,
      `• Cloud Account & Data Erasure: Authenticated users who wish to permanently delete their cloud account and all synchronized records from Supabase PostgreSQL may submit an account deletion request to our support email at ${siteConfig.supportEmail} or follow the account deletion workflow. Upon receiving your request, all cloud records linked to your user UUID will be permanently deleted from our database within 30 calendar days.`
    ],
    callout: {
      type: "warning",
      title: "Local vs. Cloud Deletion Distinction",
      message: "Clearing local data removes records from your current Android device immediately and cancels scheduled alarms. If you have cloud sync enabled, submitting an account deletion request ensures permanent erasure of cloud-synchronized records as well."
    }
  },
  {
    id: "user-rights",
    title: "23. User Controls & Choices",
    shortTitle: "User Controls",
    content: [
      `${siteConfig.appName} provides intuitive, self-service controls throughout the application:`,
      `• Access & Review: Review all stored health attributes, predictions, and medication logs at any time across dedicated dashboard screens.`,
      `• Correction & Editing: Update your health profile, dosage schedules, or appointment times whenever your circumstances change.`,
      `• Export & Portability: Download your complete health records in standard JSON format or generate branded PDF summaries on demand.`,
      `• Permission Management: Revoke camera, microphone, or notification permissions at any time via Android System Settings > Apps > MediSense.`,
      `• Consent Revocation: Review and revoke active sharing consent packages via the Health Sharing screen.`,
      `• Offline Operation: You can use MediSense entirely as an offline guest without creating a cloud account or synchronizing data.`
    ]
  },
  {
    id: "children-privacy",
    title: "24. Children's Privacy",
    shortTitle: "Children's Privacy",
    content: [
      `${siteConfig.appName} is designed for general adult health management and is not directed to children under 13 years of age (or the applicable minimum age in your jurisdiction).`,
      `We do not knowingly collect, synchronize, or solicit personal health information from children under 13. If a parent or guardian discovers that a child has provided personal information without parental consent, please contact us at ${siteConfig.supportEmail}, and we will promptly delete such data from our local and cloud systems.`
    ]
  },
  {
    id: "play-compliance",
    title: "25. Google Play Health App & Data Safety Compliance",
    shortTitle: "Play Compliance",
    content: [
      `${siteConfig.appName} is engineered in strict accordance with Google Play Developer Program Policies, specifically the Health Apps Policy and User Data Policy:`,
      `• Publicly Accessible Policy: This privacy policy is hosted publicly without paywalls, login barriers, or PDF download requirements.`,
      `• Clear Application Identity: Directly identifies the application package \`${siteConfig.appPackageName}\` and developer entity \`${siteConfig.developerName}\`.`,
      `• Data Safety Declaration Mappings:`,
      `  - Personal Info (Email address): Collected for account registration and user authentication. Encrypted in transit; deletable upon request.`,
      `  - Health & Fitness (Health info): Processed locally in Room SQLite database. Optional cloud synchronization with user-UUID Row-Level Security. Never sold, never shared with third-party ad networks.`,
      `  - Photos & Videos: Optional user-captured images sent transiently via TLS 1.3 to Groq/Gemini multimodal endpoints for user query evaluation. Never stored permanently on remote servers.`,
      `  - Audio Files: User voice converted to text on-device via Android speech recognizer; raw audio is not stored.`,
      `• Account Deletion SLA: Public deletion request portal available at ${siteConfig.deletionUrl} providing both instant local wipe instructions and cloud account purge processing within 30 calendar days.`
    ]
  },
  {
    id: "contact-us",
    title: "26. Contact Information & Privacy Inquiries",
    shortTitle: "Contact Us",
    content: [
      `If you have questions, feedback, or requests regarding this Privacy Policy, your personal health records, data deletion, or our security practices, please contact us:`
    ],
    subsections: [
      {
        subtitle: "Contact Details",
        points: [
          `Application Name: ${siteConfig.appName}`,
          `Android Package: ${siteConfig.appPackageName}`,
          `Developer / Entity: ${siteConfig.developerName}`,
          `Support & Privacy Inquiries: ${siteConfig.supportEmail}`,
          `Official Website: ${siteConfig.websiteUrl}`,
          `Public Privacy Policy URL: ${siteConfig.privacyPolicyUrl}`,
          `Account Deletion Portal: ${siteConfig.deletionUrl}`
        ]
      }
    ]
  }
];

export default privacySections;
