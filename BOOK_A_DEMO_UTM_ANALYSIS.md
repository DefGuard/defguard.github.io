# Book a Demo Page - UTM Parameter Analysis

## Overview
This document lists all links to `/book-a-demo` and indicates which ones have UTM parameters for tracking.

---

## Links WITH UTM Parameters ✅

### 1. **Homepage - Hero Section**
- **File**: `src/pages/index.astro` (line 86)
- **Link**: `/book-a-demo?utm_source=landing`
- **Location**: HomeHeader component - primary button
- **UTM**: `utm_source=landing`

### 2. **Homepage - Feature Link**
- **File**: `src/pages/index.astro` (line 125)
- **Link**: `/book-a-demo?utm_source=landing`
- **Location**: FeatureCapsules - "Talk to our experts" link
- **UTM**: `utm_source=landing`

### 3. **Homepage - First CTA Section**
- **File**: `src/pages/index.astro` (line 436)
- **Link**: `/book-a-demo?utm_source=landingpage`
- **Location**: Mid-page CTA section
- **UTM**: `utm_source=landingpage`

### 4. **Homepage - Final CTA Section**
- **File**: `src/pages/index.astro` (line 487)
- **Link**: `/book-a-demo?utm_source=landing`
- **Location**: After testimonials section
- **UTM**: `utm_source=landing`

### 5. **Server Page - CTA Section**
- **File**: `src/pages/server.astro` (line 414)
- **Link**: `/book-a-demo?utm_source=server`
- **Location**: CTA section
- **UTM**: `utm_source=server`

### 6. **Client Page - CTA Section**
- **File**: `src/pages/client.astro` (line 307)
- **Link**: `/book-a-demo?utm_source=server`
- **Location**: CTA section
- **UTM**: `utm_source=server`
- **Note**: Uses "server" UTM even though it's the client page

### 7. **VPN MFA Page - Hero Section**
- **File**: `src/pages/vpn_mfa.astro` (line 58)
- **Link**: `/book-a-demo?utm_source=mfa`
- **Location**: Hero section buttons
- **UTM**: `utm_source=mfa`

### 8. **VPN MFA Page - CTA Section**
- **File**: `src/pages/vpn_mfa.astro` (line 554)
- **Link**: `/book-a-demo?utm_source=mfa`
- **Location**: CTA section (button2)
- **UTM**: `utm_source=mfa`

### 9. **IoT Page - Hero Section**
- **File**: `src/pages/iot.astro` (line 99)
- **Link**: `/book-a-demo?utm_source=iot-up`
- **Location**: Hero section buttons
- **UTM**: `utm_source=iot-up`

### 10. **IoT Page - CTA Section**
- **File**: `src/pages/iot.astro` (line 205)
- **Link**: `/book-a-demo?utm_source=iot-down`
- **Location**: CTA section
- **UTM**: `utm_source=iot-down`

### 11. **OpenVPN Migration Page**
- **File**: `src/pages/openvpn.astro` (line 454)
- **Link**: `/book-a-demo/?utm_source=openvpn-migration`
- **Location**: CTA section
- **UTM**: `utm_source=openvpn-migration`

### 12. **Fortinet Comparison Page**
- **File**: `src/pages/defguard-vs-fortinet.astro` (line 631)
- **Link**: `/book-a-demo/?utm_source=fortinet-comparison`
- **Location**: CTA section
- **UTM**: `utm_source=fortinet-comparison`

### 13. **Blog Posts - CTA Button**
- **File**: `src/pages/blog/[slug].astro` (line 181)
- **Link**: `/book-a-demo?utm_source=blog&utm_medium=post&utm_campaign={slug}`
- **Location**: Post footer CTA section
- **UTM**: `utm_source=blog&utm_medium=post&utm_campaign={slug}`
- **Note**: Most comprehensive UTM tracking with dynamic campaign parameter

---

## Links WITHOUT UTM Parameters ❌

### 1. **Global Navigation - Desktop**
- **File**: `src/components/base/Navigation.astro` (line 103)
- **Link**: `/book-a-demo`
- **Location**: Desktop header - top-right CTA button
- **Status**: ❌ NO UTM
- **Impact**: HIGH - Visible on every page

### 2. **Global Navigation - Mobile**
- **File**: `src/components/base/Navigation.astro` (line 242)
- **Link**: `/book-a-demo`
- **Location**: Mobile menu CTA button
- **Status**: ❌ NO UTM
- **Impact**: HIGH - Visible on every page

### 3. **Footer - Contact Us**
- **File**: `src/data/footer.json` (line 38)
- **Link**: `/book-a-demo/`
- **Location**: Footer "Company" section
- **Status**: ❌ NO UTM
- **Impact**: MEDIUM - Visible on every page

### 4. **Server Page - Hero Section**
- **File**: `src/pages/server.astro` (line 95)
- **Link**: `/book-a-demo/`
- **Location**: Hero section buttons array
- **Status**: ❌ NO UTM
- **Impact**: MEDIUM - Above the fold

### 5. **Pricing Page - Non-Profit Section**
- **File**: `src/pages/pricing.astro` (line 465)
- **Link**: `/book-a-demo/` (via onclick)
- **Location**: Non-profit license request section
- **Status**: ❌ NO UTM
- **Impact**: LOW - Specific use case

### 6. **FAQ Page**
- **File**: `src/pages/faq.astro` (line 113)
- **Link**: `/book-a-demo/`
- **Location**: Help section
- **Status**: ❌ NO UTM
- **Impact**: LOW - Secondary CTA

### 7. **Blog Content - Inline Links**
- **File**: `src/content/blog/fortitoken-alternative-vpn-mfa.mdx` (line 111)
- **Link**: `/book-a-demo/`
- **Location**: Inline text link
- **Status**: ❌ NO UTM
- **Impact**: LOW - Inline content link

### 8. **Blog Content - Inline Links**
- **File**: `src/content/blog/ssl-vpn-performance-protocol-problem.mdx` (line 198)
- **Link**: `https://defguard.net/book-a-demo/`
- **Location**: Inline text link
- **Status**: ❌ NO UTM
- **Impact**: LOW - Inline content link

### 9. **Blog Content - Inline Links**
- **File**: `src/content/blog/defguard-1.6-release-notes.mdx` (line 153)
- **Link**: `/book-a-demo`
- **Location**: Inline text link (list item)
- **Status**: ❌ NO UTM
- **Impact**: LOW - Inline content link

### 10. **Blog Content - Inline Links**
- **File**: `src/content/blog/defguard-1.6-release-notes.mdx` (line 186)
- **Link**: `/book-a-demo`
- **Location**: Inline text link
- **Status**: ❌ NO UTM
- **Impact**: LOW - Inline content link

### 11. **Public HTML File**
- **File**: `public/fortigate_vpn_alternative.html` (line 364)
- **Link**: `/book-a-demo/`
- **Location**: CTA button
- **Status**: ❌ NO UTM
- **Impact**: UNKNOWN - May be legacy/unused file

---

## Summary Statistics

### Total Links Found: **23**

| Category | Count | With UTM | Without UTM |
|----------|-------|----------|-------------|
| **Global Navigation** | 2 | 0 | 2 ❌ |
| **Homepage** | 4 | 4 ✅ | 0 |
| **Product Pages** | 4 | 4 ✅ | 0 |
| **Solution Pages** | 2 | 2 ✅ | 0 |
| **Footer** | 1 | 0 | 1 ❌ |
| **Pricing** | 1 | 0 | 1 ❌ |
| **FAQ** | 1 | 0 | 1 ❌ |
| **Blog CTAs** | 1 | 1 ✅ | 0 |
| **Blog Inline Links** | 4 | 0 | 4 ❌ |
| **Other** | 1 | 0 | 1 ❌ |
| **TOTAL** | **23** | **13** ✅ | **10** ❌ |

### Coverage Rate: **56.5%** (13/23 links have UTM)

---

## Priority Recommendations

### 🔴 HIGH PRIORITY - Missing UTM on High-Traffic Links

1. **Global Navigation (Desktop & Mobile)**
   - **Impact**: HIGHEST - Visible on every single page
   - **Recommendation**: Add `?utm_source=navigation` or `?utm_source=header`
   - **Files**: `src/components/base/Navigation.astro` (lines 103, 242)

2. **Footer Contact Us Link**
   - **Impact**: HIGH - Visible on every page
   - **Recommendation**: Add `?utm_source=footer`
   - **File**: `src/data/footer.json` (line 38)

3. **Server Page Hero Section**
   - **Impact**: MEDIUM - Above the fold on important product page
   - **Recommendation**: Add `?utm_source=server-hero` (differentiate from CTA)
   - **File**: `src/pages/server.astro` (line 95)

### 🟡 MEDIUM PRIORITY

4. **Pricing Page Non-Profit Section**
   - **Recommendation**: Add `?utm_source=pricing-nonprofit`
   - **File**: `src/pages/pricing.astro` (line 465)

5. **FAQ Page**
   - **Recommendation**: Add `?utm_source=faq`
   - **File**: `src/pages/faq.astro` (line 113)

### 🟢 LOW PRIORITY - Blog Content Links

6. **Blog Inline Links** (4 links)
   - **Recommendation**: Add `?utm_source=blog-content&utm_medium=inline-link`
   - **Files**: 
     - `src/content/blog/fortitoken-alternative-vpn-mfa.mdx`
     - `src/content/blog/ssl-vpn-performance-protocol-problem.mdx`
     - `src/content/blog/defguard-1.6-release-notes.mdx` (2 links)

---

## UTM Parameter Patterns Currently Used

| UTM Source | Usage Count | Pages |
|------------|-------------|-------|
| `landing` | 3 | Homepage (hero, feature link, final CTA) |
| `landingpage` | 1 | Homepage (mid-page CTA) |
| `server` | 2 | Server page, Client page |
| `mfa` | 2 | VPN MFA page (hero + CTA) |
| `iot-up` | 1 | IoT page (hero) |
| `iot-down` | 1 | IoT page (CTA) |
| `openvpn-migration` | 1 | OpenVPN migration page |
| `fortinet-comparison` | 1 | Fortinet comparison page |
| `blog` (with medium & campaign) | 1 | Blog post CTAs |

---

## Issues Found

### 1. **Inconsistent UTM Naming**
- Homepage uses both `landing` and `landingpage` - should be consistent
- Client page uses `utm_source=server` - should probably be `utm_source=client`

### 2. **Missing UTM on High-Impact Links**
- Global navigation (most visible links) have no tracking
- Footer link has no tracking

### 3. **Blog Content Links**
- Blog post CTA buttons have comprehensive UTM tracking ✅
- But inline blog content links have no UTM ❌
- Should add UTM to maintain consistency

### 4. **Legacy/Unused Files**
- `public/fortigate_vpn_alternative.html` - May be unused, should verify

---

## Recommended UTM Parameters for Missing Links

```javascript
// Global Navigation
"/book-a-demo?utm_source=navigation"

// Footer
"/book-a-demo?utm_source=footer"

// Server Hero
"/book-a-demo?utm_source=server-hero"

// Pricing Non-Profit
"/book-a-demo?utm_source=pricing-nonprofit"

// FAQ
"/book-a-demo?utm_source=faq"

// Blog Inline Links
"/book-a-demo?utm_source=blog-content&utm_medium=inline-link"
```

---

*Analysis Date: February 3, 2026*
*Total Links Analyzed: 23*
*UTM Coverage: 56.5%*
