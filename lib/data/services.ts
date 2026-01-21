// lib/data/services.ts

/**
 * This file contains data specific to the "Services" section and pages.
 * It defines the structure of a service and provides an array of services
 * offered by the business, along with content for the services section itself.
 *
 * === How to Customize ===
 *
 * 1.  **Service Interface (`Service`):**
 *     -   Defines the properties for each service (id, title, description, etc.).
 *     -   `iconName`: Use the exact name of an icon from `lucide-react`
 *         (e.g., "Briefcase", "Users"). These are mapped to actual components
 *         in the `ServicesSection` component.
 *
 * 2.  **Services Array (`services`):**
 *     -   This is the core list of services your business offers.
 *     -   Add, remove, or modify service objects in this array.
 *     -   Update `title`, `shortDescription`, `description`, `iconName`,
 *         `features`, `image` path, and `price`.
 *     -   Ensure `image` paths correspond to images in the `public/images` directory.
 *
 * 3.  **Services Section Content (`servicesSectionContent`):**
 *     -   Customize the `sectionTitle`, main `title`, `subtitle`, and the
 *         text/href for the "View All Services" button.
 */

// ============================================================================
// Service Interface and Data
// ============================================================================

/**
 * @interface Service
 * Defines the structure for a service object.
 *
 * @property {string} id - A unique identifier for the service.
 * @property {string} title - The title of the service.
 * @property {string} shortDescription - A brief summary of the service.
 * @property {string} description - A detailed explanation of the service.
 * @property {string} iconName - The name of the Lucide icon to use (e.g., "Briefcase").
 * @property {string[]} features - A list of key features or benefits.
 * @property {string} image - The path to the service's image (e.g., "/images/service-1.jpg").
 * @property {string} price - The starting price or pricing model (e.g., "From $XXX").
 */
export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  iconName: string // Changed from LucideIcon
  features: string[]
  image: string
  price: string
}

/**
 * @const services
 * An array of service objects that represent the services your business offers.
 * This data is used to populate the services section and individual service pages.
 *
 * === How to Customize ===
 * - Add, remove, or reorder objects in this array.
 * - Replace placeholder text with your actual service details.
 * - Change the `iconName` to any valid name from the `lucide-react` library.
 * - Update the `image` path to point to your own service images in `public/images`.
 */
export const services: Service[] = [
  {
    id: "house-washing",
    title: "House Washing",
    shortDescription: "Complete exterior cleaning for your home",
    description: "Restore your home's curb appeal with our professional house washing service. We use a safe soft wash technique that effectively removes dirt, mold, mildew, algae, and grime from all types of siding including vinyl, brick, stucco, and wood without causing any damage.",
    iconName: "Home",
    features: [
      "Safe soft wash technique for all siding types",
      "Removes mold, mildew, algae & grime",
      "Protects paint and surfaces",
      "Improves curb appeal instantly",
      "Eco-friendly cleaning solutions"
    ],
    image: "/services/service-1.svg",
    price: "From $199"
  },
  {
    id: "driveway-concrete",
    title: "Driveway & Concrete",
    shortDescription: "Restore your concrete surfaces to like-new condition",
    description: "Our high-pressure concrete cleaning service removes years of built-up oil stains, tire marks, dirt, and grime from driveways, sidewalks, patios, and garage floors. We restore your concrete surfaces to their original clean appearance.",
    iconName: "Car",
    features: [
      "Removes oil stains & tire marks",
      "High-pressure deep cleaning",
      "Sidewalks & walkways included",
      "Garage floor cleaning available",
      "Sealing services optional"
    ],
    image: "/services/service-2.svg",
    price: "From $149"
  },
  {
    id: "deck-patio",
    title: "Deck & Patio Cleaning",
    shortDescription: "Revitalize your outdoor living spaces",
    description: "Bring your deck or patio back to life with our specialized cleaning service. We safely remove dirt, algae, mold, and weathered gray discoloration from wood, composite, and stone surfaces, preparing them for staining or sealing if desired.",
    iconName: "Trees",
    features: [
      "Safe for wood, composite & stone",
      "Removes algae & mold buildup",
      "Restores natural wood color",
      "Prep for staining or sealing",
      "Extends deck lifespan"
    ],
    image: "/services/service-3.svg",
    price: "From $175"
  },
  {
    id: "roof-cleaning",
    title: "Roof Cleaning",
    shortDescription: "Protect and extend the life of your roof",
    description: "Our gentle soft wash roof cleaning removes ugly black streaks, moss, lichen, and algae that can damage your shingles and reduce your home's value. We use low-pressure techniques that are safe for all roofing materials.",
    iconName: "CloudRain",
    features: [
      "Removes black streaks & algae",
      "Safe soft wash technique",
      "Extends roof lifespan",
      "Improves energy efficiency",
      "All roofing materials welcome"
    ],
    image: "/services/service-4.svg",
    price: "From $299"
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    shortDescription: "Keep your gutters flowing freely",
    description: "Prevent water damage and foundation issues with our thorough gutter cleaning service. We remove all debris, flush downspouts, and clean the exterior of your gutters to keep them functioning properly and looking great.",
    iconName: "Droplets",
    features: [
      "Complete debris removal",
      "Downspout flushing included",
      "Exterior gutter cleaning",
      "Prevents water damage",
      "Inspect for repairs needed"
    ],
    image: "/services/service-5.svg",
    price: "From $125"
  },
  {
    id: "commercial",
    title: "Commercial Power Washing",
    shortDescription: "Professional cleaning for businesses",
    description: "Make a great first impression with our commercial power washing services. We clean storefronts, sidewalks, parking lots, dumpster areas, and building exteriors to keep your business looking professional and inviting to customers.",
    iconName: "Building2",
    features: [
      "Storefronts & entryways",
      "Parking lots & garages",
      "Dumpster pad cleaning",
      "Graffiti removal available",
      "Flexible scheduling options"
    ],
    image: "/services/service-6.svg",
    price: "Custom Quote"
  }
];

/**
 * @const servicesSectionContent
 * An object containing the content for the services section, typically displayed
 * on the homepage or a dedicated services overview page.
 *
 * === How to Customize ===
 * - `sectionTitle`: The small title above the main heading.
 * - `title`: The main heading for the services section.
 * - `subtitle`: The descriptive text below the main heading.
 * - `button`: Customize the text and link for the call-to-action button
 *   at the bottom of the section.
 */
export const servicesSectionContent = {
  sectionTitle: "Our Services",
  title: "Power Washing Solutions",
  subtitle: "From residential homes to commercial properties, we offer comprehensive power washing services tailored to restore and protect your property.",
  button: {
    text: "View All Services",
    href: "/services"
  }
};
