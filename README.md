# MediSense Privacy Policy Website

> **Website Module 1**: Public Privacy Policy for the MediSense Android Application (`com.medisense.app`).  
> **Tagline**: AI-Powered Personal Healthcare Assistant  
> **Deployment Target**: Vercel (Static Frontend)

---

## 1. Overview

This repository contains the standalone, static Privacy Policy website for **MediSense**. It is specifically structured and built for zero-maintenance, high-performance static hosting on **Vercel** to satisfy Google Play Store publication requirements for medical/health-category mobile applications.

### Key Architectural Highlights
- **Framework**: React 19 + TypeScript + Vite 6
- **Styling**: Modern Vanilla CSS with customized design tokens and responsive breakpoints
- **Zero Backend**: Fully static single-page application (SPA) with no database, analytics trackers, or server-side dependencies
- **Source of Truth**: 100% aligned with the current MediSense Android Kotlin implementation (Room DB, on-device TensorFlow Lite engine, Supabase Auth/PostgreSQL sync, Groq/Gemini conversational AI)
- **Compliance & Safety**: Prominent medical decision-support disclaimers, permission usage justifications, and clear local vs. cloud data lifecycle definitions

---

## 2. Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (bundled with Node)

### Installation
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) or the port indicated in your terminal.

---

## 3. Production Build & Validation

To generate an optimized static production bundle:
```bash
npm run build
```

This compiles TypeScript definitions via `tsc` and bundles static assets with `vite build` into the `dist/` folder.

To preview the built production site locally:
```bash
npm run preview
```

---

## 4. Vercel Deployment Guide

Deploying to Vercel is instantaneous with zero server configuration:

### Method A: Git-Integrated Deployment (Recommended)
1. Commit and push this project directory to a GitHub/GitLab repository.
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New..."** > **"Project"** and select your repository.
4. Vercel automatically detects the **Vite** preset:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**.
6. Once deployment completes, note your assigned HTTPS production URL (e.g., `https://medisense-privacy.vercel.app`).
7. Verify that both `https://<YOUR_DOMAIN>/` and `https://<YOUR_DOMAIN>/privacy-policy` load correctly without 404 errors (handled automatically via `vercel.json` SPA rewrite rules).
8. Copy the final public `/privacy-policy` URL into your **Google Play Console** under *Policy and programs > App content > Privacy policy*.

### Method B: Vercel CLI Deployment
```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy directly from terminal
vercel --prod
```

---

## 5. Custom Domain Configuration (Optional)

When you are ready to link a custom domain (such as `https://medisense.app` or `https://privacy.medisense.app`):
1. In your Vercel Project Dashboard, navigate to **Settings** > **Domains**.
2. Click **Add Domain** and enter your desired custom domain.
3. Configure your DNS provider with the `CNAME` or `A` records provided by Vercel.
4. Update `src/config/siteConfig.ts` with your custom domain URL.
5. Re-deploy or push changes.

---

## 6. Centralized Configuration & Placeholders

All contact information, developer identity, and metadata are centralized in [`src/config/siteConfig.ts`](file:///e:/MediSense-Privacy%20policy%20website/src/config/siteConfig.ts).

Before final submission to Google Play Console, update the following bracketed placeholders:

| Config Key | Current Placeholder Value | Description |
| :--- | :--- | :--- |
| `developerName` | `[YOUR DEVELOPER / COMPANY NAME]` | Your official developer, entity, or studio name |
| `supportEmail` | `[YOUR SUPPORT EMAIL]` | The support email address for user privacy inquiries |
| `websiteUrl` | `[YOUR FINAL WEBSITE URL]` | The root domain of your production deployment |
| `privacyPolicyUrl` | `[YOUR FINAL WEBSITE URL]/privacy-policy` | The direct canonical link to the privacy policy |
| `effectiveDate` | `October 5, 2026` | Effective launch date of this policy |
| `lastUpdated` | `October 5, 2026` | Date of most recent policy revision |

---

## 7. Project File Structure

```text
e:/MediSense-Privacy policy website/
├── public/
│   ├── assets/
│   │   └── logo.png
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.tsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.tsx
│   │   ├── NoticeCard/
│   │   │   ├── NoticeCard.css
│   │   │   └── NoticeCard.tsx
│   │   ├── PrivacySection/
│   │   │   ├── PrivacySection.css
│   │   │   └── PrivacySection.tsx
│   │   └── TableOfContents/
│   │       ├── TableOfContents.css
│   │       └── TableOfContents.tsx
│   ├── config/
│   │   └── siteConfig.ts
│   ├── data/
│   │   └── privacyPolicyContent.ts
│   ├── pages/
│   │   ├── PrivacyPolicy/
│   │   │   ├── PrivacyPolicy.css
│   │   │   └── PrivacyPolicy.tsx
│   ├── styles/
│   │   ├── index.css
│   │   └── variables.css
│   ├── App.tsx
│   └── main.tsx
├── dist/                      # Production build output
├── index.html                 # Semantic HTML5 template with SEO & OG tags
├── package.json               # React 19, TypeScript, Vite dependencies
├── tsconfig.json              # TypeScript application configuration
├── tsconfig.node.json         # TypeScript node/vite configuration
├── vercel.json                # Vercel SPA routing & security headers
├── vite.config.ts             # Vite bundler configuration
└── README.md                  # Development and deployment guide
```

---

## 8. Verified Android Implementation Scope

This Privacy Policy strictly reflects the active Android implementation in `com.medisense.app`:
- **Local Database**: Android Room SQLite database (`AppDatabase`) storing profiles, medications, alarms, appointment alerts, and chat messages.
- **On-Device ML**: TensorFlow Lite model (`DiseasePredictionModel.tflite`) running 100% offline on hardware CPU/GPU. No symptoms uploaded for prediction.
- **Explainability (XAI)**: Deterministic feature attribution and single-symptom counterfactual ("What-If") ablation simulation computed locally.
- **Cloud Backend**: Supabase Auth (authenticated user UUID isolation) and Supabase PostgreSQL with Row-Level Security (RLS) over HTTPS.
- **Conversational AI**: Groq API (primary open-access inference) with Google Gemini API (fallback) processing only active user prompts; no full database dumps.
- **Hardware Permissions**: Camera (optional user image capture), Microphone (optional voice transcription), Exact Alarms (precision medication timing), Post Notifications (intake reminders), Boot Completed (alarm rescheduling).
- **Data Deletion**: `PrivacyDataManager.clearLocalUserData()` allows one-tap local purging of all health records and alarm cancellations.
- **PDF Generation**: Native Android `PdfDocument` engine creates consultation summaries, emergency cards, and health reports on-device; shared only via secure `FileProvider`.

---

## 9. Legal & Medical Notice

This policy is designed to accurately reflect technical data processing for app store compliance. It does not constitute formal legal counsel. Prior to commercial distribution, please consult legal counsel to ensure compliance with regional healthcare and data protection regulations applicable to your jurisdiction.
