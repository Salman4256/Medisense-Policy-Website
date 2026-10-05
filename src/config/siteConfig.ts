/**
 * Centralized Site Configuration for MediSense Privacy Policy Website.
 *
 * NOTE: Replace the bracketed placeholders below with your official
 * developer, contact, and domain details before releasing to Google Play Console.
 */

export interface SiteConfig {
  appName: string;
  appPackageName: string;
  tagline: string;
  developerName: string;
  supportEmail: string;
  websiteUrl: string;
  privacyPolicyUrl: string;
  effectiveDate: string;
  lastUpdated: string;
  appVersion: string;
  modelVersion: string;
  googlePlayConsoleUrlPlaceholder: string;
}

export const siteConfig: SiteConfig = {
  appName: "MediSense",
  appPackageName: "com.medisense.app",
  tagline: "AI-Powered Personal Healthcare Assistant",

  // Centralized placeholders for developer, contact, and production URLs
  developerName: "[YOUR DEVELOPER / COMPANY NAME]",
  supportEmail: "[YOUR SUPPORT EMAIL]",
  websiteUrl: "[YOUR FINAL WEBSITE URL]",
  privacyPolicyUrl: "[YOUR FINAL WEBSITE URL]/privacy-policy",

  // Policy release and revision dates
  effectiveDate: "October 5, 2026",
  lastUpdated: "October 5, 2026",

  // Technical metadata verified from Android build
  appVersion: "1.0.0",
  modelVersion: "1.0 (LiteRT / TensorFlow Lite)",

  googlePlayConsoleUrlPlaceholder: "[YOUR FINAL GOOGLE PLAY PRIVACY POLICY URL]"
};

export default siteConfig;
