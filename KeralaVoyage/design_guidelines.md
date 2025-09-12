# Design Guidelines: Swagatham Yaathri Malabar Wanderer App

## Design Approach
**Reference-Based Approach** - Drawing inspiration from travel apps like Google Maps, Airbnb, and tourism-focused mobile applications, while incorporating Kerala's cultural aesthetics and the provided logo's visual identity.

## Core Design Elements

### A. Color Palette
**Primary Colors (Dark & Light Mode):**
- Primary Blue: 210 85% 45% (from logo's blue elements)
- Deep Kerala Green: 155 65% 35% (representing Kerala's lush landscapes)
- Warm Gold: 45 75% 55% (inspired by Kerala's heritage and spices)

**Supporting Colors:**
- Background Light: 210 15% 98%
- Background Dark: 210 25% 8%
- Text Primary: 210 15% 15% (light) / 210 15% 90% (dark)
- Success Green: 140 60% 45%
- Warning Amber: 35 85% 55%

### B. Typography
- **Primary Font:** Inter (Google Fonts) - Clean, modern readability
- **Display Font:** Poppins (Google Fonts) - For headers and logo text
- **Regional Font:** Noto Sans Malayalam (for Malayalam text support)

### C. Layout System
**Tailwind Spacing Units:** Consistent use of 2, 4, 6, and 8 units
- Micro spacing: p-2, m-2 (8px)
- Standard spacing: p-4, m-4 (16px)
- Section spacing: p-6, m-6 (24px)
- Large spacing: p-8, m-8 (32px)

### D. Component Library

**Navigation:**
- Bottom tab navigation with 5 primary sections: Home, Trips, Scanner, Analytics, Profile
- Top app bar with logo, location indicator, and settings
- Floating action button for quick trip recording

**Core Components:**
- Trip cards with timeline visualization
- Interactive map components with custom Kerala-themed markers
- Language selection modal (English/Malayalam/Hindi)
- Monument scanner overlay with AR-style frame
- Consent and privacy controls with clear toggle switches
- Analytics charts with Kerala tourism data visualization

**Forms & Inputs:**
- Rounded input fields with Kerala-inspired accent borders
- GPS location selectors with OpenStreetMap integration
- Transport mode selection with icon-based buttons
- Travel companion management interface

**Data Displays:**
- Trip timeline with route visualization
- Analytics dashboards with pattern recognition charts
- Monument information cards with cultural context
- Recommendation chatbot interface with Kerala tourism insights

### E. Visual Treatment

**Kerala Cultural Elements:**
- Subtle backwater patterns in background elements
- Traditional Kerala color accents (coconut palm greens, spice golds)
- Typography hierarchy reflecting both modern usability and cultural warmth

**Mobile-First Design:**
- Touch-friendly 44px minimum touch targets
- Swipe gestures for trip navigation
- Pull-to-refresh functionality
- Offline-first visual indicators

## Images
**Logo Placement:** The provided "Swagatham Yaathri Malabar Wanderer" logo should be prominently displayed in the app header and splash screen, maintaining its original proportions and color scheme.

**Supporting Imagery:**
- Kerala landscape photographs as subtle background elements in onboarding
- Monument thumbnails in scanner results
- Map markers styled with Kerala heritage motifs
- No large hero images needed - focus on functional, data-driven interfaces

## Accessibility & Regional Considerations
- High contrast ratios for outdoor mobile usage
- Consistent dark mode across all components including forms
- Multi-language typography scaling for Malayalam script
- GPS and offline functionality visual indicators
- Clear consent and privacy controls with cultural sensitivity

This design balances modern mobile app conventions with Kerala's rich cultural identity while ensuring optimal functionality for travel data collection and NATPAC research integration.