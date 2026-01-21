// lib/data/faq.ts

/**
 * This file contains data specific to the "Frequently Asked Questions" (FAQ) section and page.
 * It defines the structure for individual FAQ items and provides an array of
 * common questions and answers, along with content for the FAQ page itself.
 *
 * === How to Customize ===
 *
 * 1.  **FAQ Item Interface (`FAQItem`):**
 *     -   Defines the properties for each FAQ entry (question, answer).
 *
 * 2.  **FAQ Data Array (`faqData`):**
 *     -   Add, remove, or modify objects in this array to update your FAQs.
 *     -   Replace placeholder text with your actual questions and answers.
 *
 * 3.  **FAQ Page Content (`faqPageContent`):**
 *     -   Customize the `title` and `description` (for SEO) for the main
 *         FAQ page.
 */

// ============================================================================
// FAQ Item Interface and Data
// ============================================================================

/**
 * @interface FAQItem
 * Defines the structure for a single FAQ item.
 *
 * @property {string} question - The question asked in the FAQ.
 * @property {string} answer - The answer to the FAQ question.
 */
export interface FAQItem {
  question: string
  answer: string
}

/**
 * @const faqData
 * An array of frequently asked questions and their answers.
 * This data populates the FAQ section and can be reused where needed.
 *
 * === How to Customize ===
 * - Add, remove, or modify objects in this array to update your FAQs.
 * - Replace placeholder text with your actual questions and answers.
 */
export const faqData: FAQItem[] = [
  {
    question: "What is power washing and how is it different from pressure washing?",
    answer:
      "Power washing uses heated water under high pressure, while pressure washing uses unheated water. We use both techniques depending on the surface and type of dirt or stain being removed. Our experts will recommend the best approach for your specific needs.",
  },
  {
    question: "How do I get a free quote?",
    answer:
      "Getting a quote is easy! Simply fill out our contact form or give us a call at (555) 123-4567. We'll schedule a time to assess your property and provide a detailed, no-obligation estimate.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve the entire Pittsfield area and surrounding communities. If you're unsure whether we cover your location, please contact us and we'll let you know.",
  },
  {
    question: "Will power washing damage my property?",
    answer:
      "Not when done by professionals! We adjust our pressure settings and techniques based on the surface material. We use soft wash methods for delicate surfaces like roofs and siding, and higher pressure for durable surfaces like concrete.",
  },
  {
    question: "How often should I have my house washed?",
    answer:
      "We recommend having your home's exterior washed every 1-2 years, depending on your environment. Homes in shaded or humid areas may need more frequent cleaning due to faster algae and mold growth.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured. We carry comprehensive liability insurance to protect both our team and your property, giving you complete peace of mind.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all our power washing services. Contact us to schedule your assessment."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, checks, and cash. Payment is due upon completion of the job."
  },
  {
    question: "How long does a typical power washing job take?",
    answer: "Most residential jobs are completed in 2-4 hours. Larger properties or multiple services may take longer. We'll provide a time estimate with your quote."
  },
  {
    question: "Do you work with commercial properties?",
    answer: "Absolutely! We offer commercial power washing for storefronts, parking lots, dumpster areas, and more. Contact us for a custom commercial quote."
  },
  {
    question: "Is your cleaning solution safe for plants and pets?",
    answer: "Yes! We use eco-friendly, biodegradable cleaning solutions that are safe for your landscaping, pets, and family. We take care to protect your plants during the cleaning process."
  },
];

// ============================================================================
// FAQ Page Content
// ============================================================================

/**
 * @const faqPageContent
 * An object containing content specific to the FAQ page.
 * This includes metadata for SEO (title and description).
 *
 * === How to Customize ===
 * - `title`: The main title displayed on the FAQ page (important for SEO).
 * - `description`: A brief summary of the FAQ page content (important for SEO).
 */
export const faqPageContent = {
  title: "Frequently Asked Questions",
  description: "Have questions about power washing? Find answers to common questions about our services, process, pricing, and what to expect when you hire PowerWash Pro.",
};
