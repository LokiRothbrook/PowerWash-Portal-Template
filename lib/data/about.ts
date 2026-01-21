// lib/data/about.ts

import { Users, Trophy, Sparkles, ThumbsUp } from "lucide-react";

/**
 * This file contains data specific to the "About Us" section and page.
 * It includes content for the About section on the homepage and potentially
 * a dedicated About page.
 *
 * === How to Customize ===
 *
 * 1.  **About Section Content (`aboutSectionContent`):**
 *     -   `sectionTitle`: The small title above the main heading.
 *     -   `title`: The main heading, split into two lines for styling.
 *     -   `paragraphs`: Update these with your company's story, mission,
 *         and values. Each string in the array is a separate paragraph.
 *     -   `image`: Customize the year of experience and descriptive lines.
 *     -   `statsCard`: A featured statistic with a value and label.
 *     -   `stats`: An array of smaller statistics with icons (`lucide-react`),
 *         values, and labels.
 *     -   `values`: Highlight your core company values with titles and descriptions.
 *         The `icon` property uses icons from `lucide-react`.
 */

// ============================================================================
// About Section Content
// ============================================================================

export const aboutSectionContent = {
  sectionTitle: "About Us",
  title: {
    line1: "Your Trusted",
    line2: "Power Washing Experts"
  },
  paragraphs: [
    "Since 2015, PowerWash Pro has been restoring properties to their original beauty throughout the Pittsfield area. What started as a one-truck operation has grown into the region's most trusted power washing company.",
    "Our team of trained professionals uses state-of-the-art equipment and eco-friendly cleaning solutions to deliver results that exceed expectations. We treat every property like our own, because your satisfaction is our success."
  ],
  image: {
    /** Path to the about section image. Set to null to use the animated visual instead. */
    src: "/about-image.svg",
    /** The main number/stat displayed prominently (e.g., "10+" for years) */
    year: "10+",
    /** First line of text below the year (e.g., "Years of Excellence") */
    line1: "Years of Excellence",
    /** Second line of text (e.g., "Serving Clients Since 2015") */
    line2: "Serving the Pittsfield Area Since 2015",
  },
  statsCard: {
    value: "99%",
    label: "Satisfaction"
  },
  stats: [
    { icon: Users, value: "500+", label: "Happy Customers" },
    { icon: Trophy, value: "10+", label: "Years Experience" },
    { icon: Sparkles, value: "5K+", label: "Properties Cleaned" },
    { icon: ThumbsUp, value: "99%", label: "Satisfaction Rate" },
  ],
  values: [
    {
      title: "Quality Results",
      description: "We use professional-grade equipment and proven techniques for spotless results every time.",
    },
    {
      title: "Property Protection",
      description: "Safe, damage-free cleaning methods tailored to your specific surfaces and materials.",
    },
    {
      title: "Reliable Service",
      description: "We show up on time, every time. Same week scheduling available for most jobs.",
    },
    {
      title: "Honest Pricing",
      description: "Transparent quotes with no hidden fees. You know exactly what you're paying for.",
    },
  ]
};
