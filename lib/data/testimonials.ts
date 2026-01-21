// lib/data/testimonials.ts

/**
 * This file contains data specific to client testimonials.
 * It defines the structure for a testimonial and provides an array of
 * customer testimonials, along with content for the testimonials section itself.
 *
 * === How to Customize ===
 *
 * 1.  **Testimonial Interface (`Testimonial`):**
 *     -   Defines the properties for each testimonial (id, name, role, content, etc.).
 *
 * 2.  **Testimonials Array (`testimonials`):**
 *     -   Replace the placeholder content with real quotes from your clients.
 *     -   Update the `name`, `role`, `content`, `rating`, `image` path, and
 *         optional `link` for each testimonial.
 *     -   Ensure `image` paths correspond to images in the `public/testimonials`
 *         directory.
 *
 * 3.  **Testimonials Section Content (`testimonialsSectionContent`):**
 *     -   Customize the `sectionTitle`, main `title`, `subtitle`, and the
 *         `trustIndicators` (e.g., number of happy clients, average rating).
 */

// ============================================================================
// Testimonial Interface and Data
// ============================================================================

/**
 * @const testimonialsSectionContent
 * An object containing the content for the testimonials section, typically displayed
 * on the homepage or a dedicated testimonials page.
 *
 * === How to Customize ===
 * - `sectionTitle`: The small title above the main heading.
 * - `title`: The main heading for the testimonials section.
 * - `subtitle`: The descriptive text below the main heading.
 * - `trustIndicators`: Update values and labels for social proof.
 */
export const testimonialsSectionContent = {
  sectionTitle: "Testimonials",
  title: "What Our Customers Say",
  subtitle: "Don't just take our word for it. Here's what homeowners and businesses throughout the Pittsfield area have to say about our power washing services.",
  trustIndicators: [
    {
      value: "500+",
      label: "Happy Customers"
    },
    {
      value: "4.9",
      label: "Average Rating"
    },
    {
      value: "100%",
      label: "Would Recommend"
    }
  ]
};

/**
 * @interface Testimonial
 * Defines the structure for a testimonial object.
 *
 * @property {number} id - A unique identifier for the testimonial.
 * @property {string} name - The name of the client giving the testimonial.
 * @property {string} role - The role or title of the client (e.g., "Business Owner").
 * @property {string} content - The text of the testimonial.
 * @property {number} rating - A rating from 1 to 5.
 * @property {string} image - The path to the client's image (e.g., "/testimonials/client-1.jpg").
 * @property {string} [link] - An optional URL to the actual review or client website.
 */
export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
  link?: string // Optional link to the actual review
}

/**
 * @const testimonials
 * An array of testimonial objects from your clients.
 * This data is used to build social proof and trust.
 *
 * === How to Customize ===
 * - Replace the placeholder objects with real testimonials.
 * - Update the `name`, `role`, `content`, `rating`, and `image` for each entry.
 * - Ensure the `image` path corresponds to an image in `public/testimonials`.
 * - Optionally add a `link` if the testimonial is verifiable online.
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner",
    content: "I couldn't believe the difference! My vinyl siding looked brand new after PowerWash Pro cleaned it. The green algae that had been building up for years was completely gone. Highly recommend!",
    rating: 5,
    image: "/testimonials/client-1.jpg",
    link: "#"
  },
  {
    id: 2,
    name: "Mike Thompson",
    role: "Property Manager",
    content: "We use PowerWash Pro for all 12 of our rental properties. They're reliable, professional, and their pricing is fair. The tenants always comment on how great the buildings look after cleaning.",
    rating: 5,
    image: "/testimonials/client-2.jpg",
    link: "#"
  },
  {
    id: 3,
    name: "Jennifer Davis",
    role: "Homeowner",
    content: "Our driveway had oil stains that we thought would never come out. PowerWash Pro made it look like we just had new concrete poured. Amazing transformation!",
    rating: 5,
    image: "/testimonials/client-3.jpg",
    link: "#"
  },
  {
    id: 4,
    name: "Robert Chen",
    role: "Restaurant Owner",
    content: "They keep our patio dining area spotless for our customers. Professional, on-time, and they work around our business hours. Exactly what we needed.",
    rating: 5,
    image: "/testimonials/client-4.jpg",
    link: "#"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Homeowner",
    content: "The team was so careful around my flower beds and landscaping. They did an incredible job on our deck - it's ready for staining now. Very impressed with their attention to detail.",
    rating: 5,
    image: "/testimonials/client-5.jpg",
    link: "#"
  },
  {
    id: 6,
    name: "David Wilson",
    role: "Homeowner",
    content: "Been using PowerWash Pro for three years now. They come out every spring to clean our house and driveway. Consistent quality every single time. Wouldn't trust anyone else.",
    rating: 5,
    image: "/testimonials/client-6.jpg",
    link: "#"
  },
  {
    id: 7,
    name: "Amanda Foster",
    role: "Homeowner",
    content: "I was worried about my old cedar shake siding, but they used the right pressure and technique. It looks fantastic and they didn't damage anything. True professionals!",
    rating: 5,
    image: "/testimonials/client-7.jpg",
    link: "#"
  },
  {
    id: 8,
    name: "James Martinez",
    role: "Business Owner",
    content: "Our storefront and sidewalk needed serious help. PowerWash Pro transformed our curb appeal completely. We've had customers comment on how clean everything looks now.",
    rating: 5,
    image: "/testimonials/client-8.jpg",
    link: "#"
  },
  {
    id: 9,
    name: "Karen Brown",
    role: "Homeowner",
    content: "The black streaks on our roof were an eyesore for years. Their soft wash roof cleaning made such a difference. Our house looks 10 years younger!",
    rating: 5,
    image: "/testimonials/client-9.jpg",
    link: "#"
  },
  {
    id: 10,
    name: "Tom Patterson",
    role: "Homeowner",
    content: "Got a quote the same day I called, and they fit us in that week. Fast, efficient, and the results speak for themselves. Already recommended them to three neighbors.",
    rating: 5,
    image: "/testimonials/client-10.jpg",
    link: "#"
  }
];
