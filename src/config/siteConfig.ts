/**
 * Centralized Site Configuration for MediSense Privacy Policy & Compliance Portal.
 *
 * All values verified against the active Android codebase (com.medisense.app):
 * - versionCode: 4
 * - versionName: 1.1.0
 * - minSdk: 30 (Android 11)
 * - targetSdk: 36
 * - Models: LiteRT / TensorFlow Lite (Offline On-Device)
 * - AI Assistant: Groq API (Primary) / Google Gemini API (Fallback)
 * - Cloud & Auth: Supabase Auth (UUID isolation) & PostgreSQL
 */

export interface SiteConfig {
  appName: string;
  appPackageName: string;
  tagline: string;
  developerName: string;
  supportEmail: string;
  websiteUrl: string;
  privacyPolicyUrl: string;
  termsUrl: string;
  deletionUrl: string;
  complianceUrl: string;
  effectiveDate: string;
  lastUpdated: string;
  appVersion: string;
  versionCode: number;
  minAndroidVersion: string;
  targetAndroidVersion: string;
  playStoreCategory: string;
  applicationType: string;
  modelVersion: string;
  googlePlayConsoleUrlPlaceholder: string;
}

export const siteConfig: SiteConfig = {
  appName: "MediSense",
  appPackageName: "com.medisense.app",
  tagline: "AI-Powered Personal Healthcare Assistant & Decision Support",

  // Developer, contact, and production URLs
  developerName: "The Medisense Team",
  supportEmail: "support4medisense@gmail.com",
  websiteUrl: "https://medisense-policy-website.vercel.app/",
  privacyPolicyUrl: "https://medisense-policy-website.vercel.app/privacy-policy",
  termsUrl: "https://medisense-policy-website.vercel.app/terms",
  deletionUrl: "https://medisense-policy-website.vercel.app/data-deletion",
  complianceUrl: "https://medisense-policy-website.vercel.app/compliance",

  // Policy release & revision date
  effectiveDate: "October 6, 2026",
  lastUpdated: "October 6, 2026",

  // Technical metadata verified from Android build
  appVersion: "1.1.0 (Build 4)",
  versionCode: 4,
  minAndroidVersion: "Android 11 (API 30+)",
  targetAndroidVersion: "Android 14+ (API 36)",
  playStoreCategory: "Medical / Health Management",
  applicationType: "Personal Healthcare Assistant / Health Management and Decision-Support Application",
  modelVersion: "1.0 (LiteRT / TensorFlow Lite On-Device)",

  googlePlayConsoleUrlPlaceholder: "https://medisense-policy-website.vercel.app/privacy-policy"
};

export default siteConfig;
