// lib/data/global.ts

/**
 * This file contains global application-wide data, configurations, and content
 * that are used across multiple sections or pages of the website.
 *
 * === How to Customize ===
 *
 * 1.  **Company Information (`companyInfo`):**
 *     -   Update the `name`, `tagline`, `phone`, `email`, `address`, `hours`,
 *         and `social` media links to reflect your business details. This
 *         information is used across the site, including in the header, footer,
 *         and contact sections.
 *
 * 2.  **Site Configuration (`siteConfig`):**
 *     -   Use this object to enable or disable entire pages or specific
 *         homepage sections.
 *     -   Set `enabled: true` to show a page/section, or `false` to hide it.
 *     -   `showIndividualServicesPricing`: Toggle the display of the individual
 *         services pricing section on the pricing page.
 *
 * 3.  **Header Content (`headerContent`):**
 *     -   Customize navigation links (`navItems`), dropdowns (`servicesDropdown`,
 *         `locationDropdown`), and Call-to-Action (CTA) button texts for both
 *         desktop and mobile views.
 *
 * 4.  **Footer Content (`footerContent`):**
 *     -   Adjust the tagline suffix, column titles, quick links, contact info,
 *         copyright, and bottom bar links.
 *
 * 5.  **Call To Action Section Content (`callToActionSectionContent`):**
 *     -   This is a reusable content block for general CTA sections across the site.
 *         Modify the title, subtitle, and button texts/links here.
 */

import { Shield, Award, Clock, Sparkles } from "lucide-react"; // Only for hero trust badges

// ============================================================================
// Company Information
// ============================================================================

/**
 * @const companyInfo
 * An object containing your company's core information.
 * This data is used in various places like the footer, contact page, and header.
 *
 * === How to Customize ===
 * - Replace all placeholder strings with your actual business information.
 */
export const companyInfo = {
  name: "PowerWash Pro",
  tagline: "The Pittsfield Area's premier power washing company. Professional pressure washing for homes, driveways, decks, roofs & commercial properties. Get your free quote today!",
  phone: "(555) 123-4567",
  email: "contact@powerwashpro.com",
  address: "123 Main Street, Pittsfield, MA 01201",
  hours: "Mon-Fri: 7AM-6PM | Sat: 8AM-4PM",
  social: {
    facebook: "https://facebook.com/powerwashpro",
    instagram: "https://instagram.com/powerwashpro",
    x: "https://x.com/powerwashpro",
    youtube: "https://youtube.com/@powerwashpro"
  }
};

// ============================================================================
// Site Configuration
// ============================================================================

/**
 * @const siteConfig
 * An object containing the configuration for the site.
 * This is where you can enable or disable pages and sections of the site.
 *
 * === How to Customize ===
 * - Set `enabled: true` to show a page or section, or `false` to hide it.
 * - `showIndividualServicesPricing`: Toggle the display of the individual
 *   services pricing section on the pricing page.
 */
export const siteConfig = {
  pages: {
    about: {
      enabled: true,
    },
    gallery: {
      enabled: true,
    },
    pricing: {
      enabled: false,
      showIndividualServicesPricing: false,
    },
    faq: {
      enabled: true,
    },
  },
  homepageSections: {
    hero: {
      enabled: true,
    },
    services: {
      enabled: true,
    },
    about: {
      enabled: true,
    },
    showcase: {
      enabled: true,
    },
    testimonials: {
      enabled: true,
    },
    contact: {
      enabled: true,
    },
  },
};

// ============================================================================
// Header Content
// ============================================================================

/**
 * @const headerContent
 * An object containing the content and navigation items for the website's header.
 *
 * === How to Customize ===
 * - `navItems`: Modify, add, or remove navigation links. Set `hasDropdown: true`
 *   for items that should trigger a dropdown menu (e.g., Services).
 * - `servicesDropdown`: Customize the title and the "View All Services" link within
 *   the services dropdown.
 * - `locationDropdown`: Adjust the title and button text for the location dropdown.
 * - `ctaButton`: Change the text for the Call-to-Action button in desktop and mobile.
 * - `mobileMenu`: Customize specific texts for the mobile navigation menu.
 */
export const headerContent = {
  navItems: [
    { label: "Home", href: "/#" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
  ],
  servicesDropdown: {
    title: "Our Services",
    viewAll: "View All Services →"
  },
  locationDropdown: {
    title: "Our Location",
    buttonText: "Get Directions"
  },
  ctaButton: {
    desktop: "Get Free Quote",
    mobile: "Quote"
  },
  mobileMenu: {
    services: "Services",
    getDirections: "Get Directions",
    getQuote: "Get Free Quote",
  }
};

// ============================================================================
// Footer Content
// ============================================================================

/**
 * @const footerContent
 * An object containing the content and navigation items for the website's footer.
 *
 * === How to Customize ===
 * - `taglineSuffix`: A short phrase displayed after the company tagline in the footer.
 * - `columns`: Define the content for each footer column, including titles and links.
 * - `bottomBar`: Customize the copyright text and the links displayed in the
 *   very bottom bar of the footer (e.g., Privacy Policy, Terms of Service).
 */
export const footerContent = {
  taglineSuffix: "The Pittsfield Area's premier power washing company. Professional pressure washing for homes, driveways, decks, roofs & commercial properties. Get your free quote today!",
  columns: {
    services: {
      title: "Our Services",
      viewAll: "View All Services →"
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/#" },
        { label: "About Us", href: "/#about" },
        { label: "Gallery", href: "/gallery" },
        { label: "Testimonials", href: "/#testimonials" },
        { label: "Contact", href: "/#contact" }
      ]
    },
    contact: {
      title: "Contact Us",
      businessHours: "Business Hours"
    }
  },
  bottomBar: {
    copyright: "All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" }
    ]
  }
};

// ============================================================================
// Call To Action Section Content
// ============================================================================

/**
 * @const callToActionSectionContent
 * An object containing the content for a reusable Call To Action (CTA) section.
 * This data can be used to populate CTA sections on various pages, ensuring
 * consistent messaging and easy content updates.
 *
 * === How to Customize ===
 * - Update the `title` and `subtitle` to reflect your desired call-to-action message.
 * - Modify the `primaryButton` and `secondaryButton` texts and their respective `href` (links).
 */
export const callToActionSectionContent = {
  title: "Ready for a Spotless Property?",
  subtitle: "Get your free quote today. Our team is ready to restore your property to its original beauty with professional power washing services in the Pittsfield area.",
  primaryButton: {
    text: "Get Free Quote",
    href: "/#contact"
  },
  secondaryButton: {
    text: "View Services",
    href: "/services"
  }
};

// ============================================================================
// Hero Section Content
// Note: This is part of global as it contains trust badges that often appear
// globally or near global elements.
// ============================================================================

/**
 * @const heroSectionContent
 * An object containing the content for the main hero section of the homepage.
 *
 * === How to Customize ===
 * - `title` and `subtitle`: Update the main heading and supporting text.
 * - `buttons`: Customize the text and links for the primary and secondary CTA buttons.
 * - `trustBadges`: Add or modify trust indicators (e.g., certifications, insurance).
 *   The `icon` property uses icons from `lucide-react`.
 * - `heroCards`: Define the content for the small feature cards often displayed
 *   within or near the hero section.
 */
export const heroSectionContent = {
  title: {
    line1: "Professional",
    line2: "Power Washing"
  },
  subtitle: "Restore your property's beauty with the Pittsfield Area's premier power washing service. From homes to businesses, we deliver spotless results every time.",
  buttons: {
    primary: {
      text: "Get Free Estimate",
      href: "/#contact"
    },
    secondary: {
      text: "Explore Services",
      href: "/services"
    }
  },
  trustBadges: [
    {
      icon: Shield,
      text: "Fully Insured"
    },
    {
      icon: Award,
      text: "Licensed Pros"
    },
    {
      icon: Clock,
      text: "Same Week Service"
    }
  ],
  heroCards: [
    {
      id: 1,
      title: "Residential Cleaning",
      subtitle: "Home Exteriors",
      description: "Transform your home's appearance with our professional house washing, driveway cleaning, and deck restoration services.",
      cardClass: "hero-card-1",
      icon: Sparkles,
      stats: "500+ Homes Cleaned",
      delay: 0,
    },
    {
      id: 2,
      title: "Commercial Services",
      subtitle: "Business Properties",
      description: "Keep your business looking professional with our commercial power washing for storefronts, parking lots, and facilities.",
      cardClass: "hero-card-2",
      icon: Award,
      stats: "100+ Businesses Served",
      delay: 0.1,
    },
    {
      id: 3,
      title: "Year-Round Service",
      subtitle: "All Seasons",
      description: "From spring cleaning to fall maintenance, we keep your property looking pristine throughout the entire year.",
      cardClass: "hero-card-3",
      icon: Clock,
      stats: "365 Days Available",
      delay: 0.2,
    },
  ]
};