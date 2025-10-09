# Google Tag Manager Setup Instructions

## Overview
This project has been migrated from direct Google Analytics 4 implementation to Google Tag Manager (GTM) for better tracking flexibility and easier management of marketing tools.

## Setup Steps

### 1. Create GTM Container
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new account/container for your website
3. Note your GTM Container ID (format: GTM-XXXXXXX)

### 2. Configure Environment Variable

#### **For GitHub Pages Deployment (Recommended):**
1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `PUBLIC_GTM_ID`
5. Value: `GTM-XXXXXXX` (your actual GTM container ID)

The GitHub Actions workflow has been updated to use this secret during build.

#### **For local development (.env.local):**
```
PUBLIC_GTM_ID=GTM-XXXXXXX
```

#### **Alternative: Hardcode GTM ID**
If you prefer simplicity, replace `GTM-XXXXXXX` directly in the GTM components with your actual GTM ID.

### 3. Configure GA4 in GTM
1. In your GTM container, create a new **Google Analytics: GA4 Configuration** tag
2. Use your existing Measurement ID: `G-Z2X2PB0P4E`
3. Set the trigger to **All Pages**
4. Publish the container

### 4. Optional: Add Additional Tracking
With GTM, you can now easily add:
- Facebook Pixel
- LinkedIn Insight Tag
- Conversion tracking
- Custom events
- And more...

## Files Modified
- `src/components/analytics/GTM.astro` - GTM head script
- `src/components/analytics/GTMBody.astro` - GTM body script (noscript fallback)
- `src/layouts/BaseLayout.astro` - Updated to use GTM instead of direct GA4

## Files to Remove (Optional)
After confirming GTM works correctly:
- `src/components/analytics/Google.astro`
- `src/components/analytics/google.js`

## Testing
1. Install GTM container ID
2. Use [Google Tag Assistant](https://tagassistant.google.com/) to verify GTM is firing
3. Check GA4 real-time reports to confirm data is flowing

## Benefits of GTM
- **Centralized Management**: All tracking codes in one place
- **No Code Deployments**: Add new tracking without code changes
- **Advanced Tracking**: Easy setup of conversion tracking, custom events
- **Team Collaboration**: Marketing team can manage tags independently
- **Version Control**: GTM has built-in version control and rollback
- **Testing**: Preview and debug mode before publishing changes
