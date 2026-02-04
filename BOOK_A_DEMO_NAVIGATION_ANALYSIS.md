# Book a Demo Page - Navigation Analysis

## Overview
This document analyzes all user navigation paths to the `/book-a-demo` page across the defguard website.

## Page URL
- **Path**: `/book-a-demo`
- **Full URL**: `https://defguard.net/book-a-demo/`
- **Page File**: `src/pages/book-a-demo.astro`

---

## Navigation Entry Points

### 1. **Global Navigation (Header)**
**Location**: Present on ALL pages via `Navigation.astro` component

#### Desktop Navigation
- **Location**: Top-right corner of header
- **Button Text**: "Book a Demo"
- **Link**: `/book-a-demo`
- **Style**: Primary CTA button (nav-cta-primary)
- **Visibility**: Always visible on desktop (lg breakpoint and above)

#### Mobile Navigation
- **Location**: Mobile menu (hamburger menu)
- **Button Text**: "Book a Demo"
- **Link**: `/book-a-demo`
- **Style**: Primary CTA button
- **Visibility**: Visible when mobile menu is opened

**Files**:
- `src/components/base/Navigation.astro` (lines 103, 242)

---

### 2. **Homepage (Landing Page)**
**File**: `src/pages/index.astro`

#### Entry Point 1: Hero Section
- **Location**: HomeHeader component
- **Button Text**: "Book a Demo"
- **Link**: `/book-a-demo?utm_source=landing`
- **Position**: Primary button in hero section
- **Context**: Above the fold, first CTA users see

#### Entry Point 2: First CTA Section
- **Location**: Mid-page CTA section
- **Title**: "Ready to Experience the Most Secure, and Compliant VPN?"
- **Button Text**: "Book a Demo"
- **Link**: `/book-a-demo?utm_source=landingpage`
- **Variant**: Gray background section

#### Entry Point 3: Final CTA Section
- **Location**: After testimonials section
- **Title**: "Try Defguard Today – Secure Access Without the Complexity"
- **Button Text**: "Book a Demo"
- **Link**: `/book-a-demo?utm_source=landing`
- **Variant**: White background section
- **Note**: Also includes secondary button "Get Evaluation License"

**Files**:
- `src/pages/index.astro` (lines 86, 125, 435-436, 486-487)

---

### 3. **Footer Navigation**
**File**: `src/data/footer.json`

- **Location**: Footer section (present on all pages)
- **Section**: "Company" → "Contact Us"
- **Link**: `/book-a-demo/`
- **Text**: "Contact Us"
- **Visibility**: Always visible in footer

**Files**:
- `src/data/footer.json` (line 38)

---

### 4. **Product Pages**

#### Server Page (`/server`)
**File**: `src/pages/server.astro`

- **Location**: Hero section buttons array (commented out in code)
- **Location**: CTA section
- **Button Text**: "Book a Demo"
- **Link**: `/book-a-demo?utm_source=server`
- **Context**: Product-specific landing page

#### Client Page (`/client`)
**File**: `src/pages/client.astro`

- **Location**: CTA section
- **Button Text**: "Book a Demo"
- **Link**: `/book-a-demo?utm_source=server`
- **Context**: WireGuard client product page

#### VPN MFA Page (`/vpn_mfa`)
**File**: `src/pages/vpn_mfa.astro`

- **Location**: Hero section buttons array
- **Location**: CTA section (button2)
- **Button Text**: "Book a Demo"
- **Link**: `/book-a-demo?utm_source=mfa`
- **Context**: True VPN MFA feature page

#### IoT Page (`/iot`)
**File**: `src/pages/iot.astro`

- **Location**: Hero section buttons array
- **Location**: CTA section
- **Button Text**: "Book a Demo"
- **Link**: `/book-a-demo?utm_source=iot-up` and `/book-a-demo?utm_source=iot-down`
- **Context**: IoT use case page

---

### 5. **Solution Pages**

#### OpenVPN Migration Page (`/openvpn`)
**File**: `src/pages/openvpn.astro`

- **Location**: CTA section
- **Button Text**: "Book a Demo"
- **Link**: `/book-a-demo/?utm_source=openvpn-migration`
- **Style**: Secondary button
- **Context**: Migration guide page

#### Fortinet Comparison Page (`/defguard-vs-fortinet`)
**File**: `src/pages/defguard-vs-fortinet.astro`

- **Location**: CTA section
- **Button Text**: "Contact Sales"
- **Link**: `/book-a-demo/?utm_source=fortinet-comparison`
- **Style**: Secondary button
- **Context**: Competitive comparison page

---

### 6. **Pricing Page (`/pricing`)**
**File**: `src/pages/pricing.astro`

- **Location**: Non-profit section
- **Button Text**: "Contact Sales"
- **Link**: `/book-a-demo/` (via onclick redirect)
- **Context**: Non-profit license request section
- **Note**: Uses JavaScript onclick handler instead of direct link

---

### 7. **Blog Pages**

#### Blog Post Pages (`/blog/[slug]`)
**File**: `src/pages/blog/[slug].astro`

- **Location**: Post footer CTA section
- **Button Text**: "Book a Demo"
- **Link**: `/book-a-demo?utm_source=blog&utm_medium=post&utm_campaign={slug}`
- **Context**: After blog post content
- **Note**: Dynamic UTM campaign parameter based on post slug
- **Also includes**: "Get Evaluation License" button

#### Blog Content Links
Several blog posts contain inline links to book-a-demo:
- `src/content/blog/fortitoken-alternative-vpn-mfa.mdx` - Inline link
- `src/content/blog/ssl-vpn-performance-protocol-problem.mdx` - Inline link
- `src/content/blog/defguard-1.6-release-notes.mdx` - Multiple inline links

---

### 8. **FAQ Page (`/faq`)**
**File**: `src/pages/faq.astro`

- **Location**: Help section
- **Link Text**: "Contact Us" (styled as help-link)
- **Link**: `/book-a-demo/`
- **Context**: Additional help/contact option

---

### 9. **Get a Quote Page (`/get-a-quote`)**
**File**: `src/pages/get-a-quote.astro`

- **Note**: This page uses the same `BookDemoForm` component
- **Context**: Alternative entry point for sales inquiries
- **Form Submit Text**: "Contact Sales"

---

### 10. **Download Confirmation Page**
**File**: `src/pages/download-confirm.astro`

- **Note**: Page metadata references book-a-demo but no visible link found
- **Context**: Post-download page

---

## UTM Parameter Tracking

The following UTM parameters are used to track traffic sources:

| Source | UTM Parameter |
|--------|--------------|
| Landing page (hero) | `utm_source=landing` |
| Landing page (CTA) | `utm_source=landingpage` |
| Server page | `utm_source=server` |
| VPN MFA page | `utm_source=mfa` |
| IoT page (top) | `utm_source=iot-up` |
| IoT page (bottom) | `utm_source=iot-down` |
| OpenVPN migration | `utm_source=openvpn-migration` |
| Fortinet comparison | `utm_source=fortinet-comparison` |
| Blog posts | `utm_source=blog&utm_medium=post&utm_campaign={slug}` |

---

## Summary Statistics

### Total Entry Points: **20+**

**By Category**:
- **Global Navigation**: 2 (desktop + mobile)
- **Homepage**: 3 CTAs
- **Footer**: 1
- **Product Pages**: 4 pages
- **Solution Pages**: 2 pages
- **Pricing Page**: 1
- **Blog**: Multiple (per post + inline links)
- **FAQ**: 1
- **Other**: 1 (get-a-quote)

### Visibility Levels:
- **Always Visible**: 
  - Header navigation (desktop + mobile)
  - Footer link
  
- **Page-Specific**:
  - Homepage CTAs (3)
  - Product page CTAs (4)
  - Solution page CTAs (2)
  - Blog post CTAs (multiple)
  - FAQ help link (1)
  - Pricing non-profit section (1)

---

## Recommendations

### Strengths:
1. ✅ **Excellent global visibility** - Available in header on every page
2. ✅ **Multiple touchpoints** on homepage for different user intents
3. ✅ **Good UTM tracking** for analytics
4. ✅ **Contextual placement** on relevant product/solution pages

### Potential Improvements:
1. ⚠️ **Pricing page** uses JavaScript onclick instead of direct link (less SEO-friendly)
2. ⚠️ **Some pages** (like download-confirm) reference book-a-demo in metadata but don't have visible links
3. 💡 Consider adding book-a-demo link to:
   - Compliance page (`/compliance`)
   - Security page (`/security`)
   - About page (`/about`)
   - Press page (`/press`)

### Missing Entry Points:
- Compliance page (`/compliance`)
- Security page (`/security`)
- ISO 27001 page (`/iso-27001`)
- Pentesting page (`/pentesting`)

---

## Technical Notes

- All links use relative paths (`/book-a-demo`) except blog content which may use full URLs
- Most CTAs use the `CTASection` component for consistency
- Form component: `BookDemoForm` is used on the book-a-demo page itself
- Alternative form: `BookEvaluationLicenseForm` exists but is separate

---

*Analysis Date: February 3, 2026*
*Last Updated: Based on current codebase state*
