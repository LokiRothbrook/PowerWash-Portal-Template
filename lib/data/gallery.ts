// lib/data/gallery.ts

/**
 * This file contains data specific to the "Gallery" section and page,
 * also used for the "Showcase" section on the homepage.
 * It defines the structure for gallery items and provides an array of
 * project examples, along with content for both sections.
 *
 * === How to Customize ===
 *
 * 1.  **Gallery Item Interface (`GalleryItem`):**
 *     -   Defines the properties for each gallery item (id, title, category, etc.).
 *
 * 2.  **Gallery Items Array (`galleryItems`):**
 *     -   Add, remove, or modify objects in this array to showcase your work.
 *     -   Ensure `image` paths correspond to images in the `public/gallery` directory.
 *
 * 3.  **Gallery Page Content (`galleryPageContent`):**
 *     -   Customize the `title` and `description` (for SEO) for the main
 *         gallery page.
 *
 * 4.  **Showcase Section Content (`showcaseSectionContent`):**
 *     -   Customize the `sectionTitle`, main `title`, `subtitle`, and the
 *         text/href for the "View Full Gallery" button, typically for a
 *         homepage showcase section.
 */

// ============================================================================
// Gallery Item Interface and Data
// ============================================================================

/**
 * @const showcaseSectionContent
 * An object containing the content for the showcase section, typically displayed
 * on the homepage to highlight featured projects.
 *
 * === How to Customize ===
 * - `sectionTitle`: The small title above the main heading.
 * - `title`: The main heading for the showcase section.
 * - `subtitle`: The descriptive text below the main heading.
 * - `button`: Customize the text and link for the call-to-action button
 *   at the bottom of the section.
 */
export const showcaseSectionContent = {
  sectionTitle: "Our Work",
  title: "Before & After Results",
  subtitle: "See the dramatic transformations we achieve for our customers. Our power washing services restore properties to their original beauty.",
  button: {
    text: "View Full Gallery",
    href: "/gallery"
  }
};

/**
 * @interface GalleryItem
 * Defines the structure for a gallery or portfolio item.
 *
 * @property {number} id - A unique identifier for the gallery item.
 * @property {string} title - The title of the project or work sample.
 * @property {string} category - The category of the work (e.g., "Category One").
 * @property {string} image - The path to the item's image (e.g., "/gallery/project-1.jpg").
 * @property {string} description - A brief description of the project.
 */
export interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  description: string
}

/**
 * @const galleryItems
 * An array of gallery item objects to showcase your work.
 * This data is used to populate the gallery or portfolio section.
 *
 * === How to Customize ===
 * - Add your project details to this array.
 * - Ensure the `image` path corresponds to an image in `public/gallery`.
 *   You can use different categories to allow for filtering in the gallery page.
 */
export const galleryItems: GalleryItem[] = [
  { id: 1, title: "Colonial Home Restoration", category: "House Washing", image: "/gallery/project-1.svg", description: "Complete exterior cleaning of a two-story colonial home, removing years of algae and grime" },
  { id: 2, title: "Driveway Transformation", category: "Concrete Cleaning", image: "/gallery/project-2.svg", description: "Oil stain and tire mark removal from a concrete driveway, restoring original appearance" },
  { id: 3, title: "Ranch Style Home", category: "House Washing", image: "/gallery/project-3.svg", description: "Soft wash cleaning of vinyl siding with mold and mildew removal" },
  { id: 4, title: "Cedar Deck Revival", category: "Deck Cleaning", image: "/gallery/project-4.svg", description: "Weathered cedar deck restored to natural wood color, ready for sealing" },
  { id: 5, title: "Patio Stone Cleaning", category: "Concrete Cleaning", image: "/gallery/project-5.svg", description: "Flagstone patio deep cleaned, removing embedded dirt and moss" },
  { id: 6, title: "Victorian Home Exterior", category: "House Washing", image: "/gallery/project-6.svg", description: "Gentle cleaning of historic Victorian home with detailed trim work" },
  { id: 7, title: "Composite Deck Cleaning", category: "Deck Cleaning", image: "/gallery/project-7.svg", description: "Trex composite deck cleaned and restored to like-new condition" },
  { id: 8, title: "Sidewalk & Walkway", category: "Concrete Cleaning", image: "/gallery/project-8.svg", description: "Residential sidewalk and walkway cleaning with edge detail work" },
  { id: 9, title: "Cape Cod Home", category: "House Washing", image: "/gallery/project-9.svg", description: "Full exterior wash including soffits and gutters on a Cape Cod style home" },
  { id: 10, title: "Pool Deck Restoration", category: "Deck Cleaning", image: "/gallery/project-10.svg", description: "Concrete pool deck cleaned and treated for algae prevention" },
  { id: 11, title: "Commercial Storefront", category: "Commercial", image: "/gallery/project-11.svg", description: "Retail storefront and sidewalk cleaning for a local business" },
  { id: 12, title: "Parking Lot Cleaning", category: "Commercial", image: "/gallery/project-12.svg", description: "Commercial parking lot deep cleaning with oil stain treatment" }
]

// ============================================================================
// Gallery Page Content
// ============================================================================

/**
 * @const galleryPageContent
 * An object containing content specific to the Gallery page.
 * This includes metadata for SEO (title and description).
 *
 * === How to Customize ===
 * - `title`: The main title displayed on the gallery page (important for SEO).
 * - `description`: A brief summary of the gallery page content (important for SEO).
 */
export const galleryPageContent = {
  title: "Project Gallery",
  description: "Browse our gallery of power washing transformations. See the dramatic before and after results we achieve for homes and businesses throughout the Pittsfield area.",
};
