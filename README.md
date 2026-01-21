# Business-Portal-Template

[![Built by LokiSoft](https://img.shields.io/badge/built%20by-LokiSoft-blue.svg)](https://www.lokisoft.xyz)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> "Commit to the Lord whatever you do, and he will establish your plans." - Proverbs 16:3

Welcome to the Business Portal Template by [LokiSoft](https://www.lokisoft.xyz)! We are an open-source loving company built on Christian values. We believe in free knowledge, community, and the love of God. This template is our gift to you, a tool to help you build your own corner of the internet.

This is a modern, responsive, and customizable webpage template for service-based businesses, built with Next.js and Tailwind CSS.

## Features

-   **Modern Design:** Clean and professional design, optimized for user experience.
-   **Responsive:** Fully responsive and mobile-first, ensuring a great look on any device.
-   **Modular Sections:** Easily configurable sections for Hero, About, Services, Gallery, Testimonials, and Contact.
-   **Dedicated Pages:** Includes ready-to-use pages for Services, Gallery, Pricing, FAQ, Privacy Policy, and Terms of Service.
-   **Contact Form:** Integrated API route for sending quotes/messages via Resend.
-   **SEO Optimized:** Built with Next.js App Router for optimal search engine performance and easy metadata management.
-   **Highly Customizable:** Effortlessly change theme, content, and functionality to match your brand.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) - A React framework for production.
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/) - Reusable UI components built with Radix UI and Tailwind CSS.
-   **Animations:** [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
-   **Email:** [Resend](https://resend.com/) - For reliable transactional email sending.
-   **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react) - Beautiful, customizable icons.
-   **Analytics:** [Vercel Analytics](https://vercel.com/analytics) - Optional, for performance monitoring and insights.
-   **Language:** [TypeScript](https://www.typescriptlang.org/) - For type-safe code and improved developer experience.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v20 or later)
-   pnpm (recommended), npm, or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your_username/your_repository.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your_repository
    ```
3.  **Install dependencies:**
    ```sh
    pnpm install
    ```
4.  **Set up your environment variables:**
    -   Rename the `env.template` file to `.env.local`.
    -   Follow the instructions within `.env.local` to add your [Resend API Key](https://resend.com/docs/api-keys/create-api-key) and other necessary variables.
    -   **Important for deployment (e.g., Vercel):** You will need to set these environment variables in your hosting provider's settings panel. For Vercel, this is done in Project Settings -> Environment Variables.

5.  **Run the development server:**
    ```sh
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration & Customization (Make It Yours!)

This template is designed for easy customization. Here's where to find and change key elements:

### 1. Data Management (`lib/data` directory)

All content for your website, from company details to service descriptions and testimonials, is managed in the `lib/data` directory. We've adopted a modular approach for better organization:

*   **`lib/data/index.ts`**: This file acts as the central hub, re-exporting all data from the individual files below. Components import from `@/lib/data`, which automatically pulls from here. You generally won't need to edit this file directly.
*   **`lib/data/global.ts`**: Contains site-wide configurations like `companyInfo` (name, address, social links), `siteConfig` (to enable/disable pages and sections), `headerContent`, `footerContent`, `callToActionSectionContent`, and `heroSectionContent`.
    *   **Tip**: Start here to quickly update your business's core information and control global visibility of sections.
*   **`lib/data/about.ts`**: Content for your "About Us" section and page (`aboutSectionContent`). Includes customizable image settings (`image.src`, `image.year`, `image.line1`, `image.line2`) for the visual display.
*   **`lib/data/services.ts`**: Defines your `Service` interface, the `services` array (details of each service), and `servicesSectionContent`.
*   **`lib/data/testimonials.ts`**: Defines the `Testimonial` interface, the `testimonials` array, and `testimonialsSectionContent`.
*   **`lib/data/pricing.ts`**: Defines the `PricingPlan` interface, `pricingPlans` array, `pricingPageContent`, and `individualServicesPricingContent`.
*   **`lib/data/gallery.ts`**: Defines the `GalleryItem` interface, `galleryItems` array (your project portfolio), `galleryPageContent`, and `showcaseSectionContent`.
*   **`lib/data/faq.ts`**: Defines the `FAQItem` interface, `faqData` array, and `faqPageContent`.
*   **`lib/data/contact.ts`**: Contains `contactSectionContent`, including form labels, placeholders, and the **critical `quoteEmailTemplate`**.

**How to Edit Data:**
Open the relevant `.ts` file in `lib/data`. Each file is heavily commented, guiding you on what each variable represents and how to modify it. Simply change the values of the exported constants to update your website's content.

### 2. Styling & Rebranding (`globals.css` and Tailwind CSS)

To rebrand your website, focus on `app/globals.css`:

*   **Color Palette:** The primary colors are defined as CSS variables at the top of `app/globals.css`. Look for variables like `--primary`, `--secondary`, `--accent`, etc. Adjust their HSL values to change the overall color scheme of your site. Tailwind CSS classes (e.g., `text-primary`, `bg-accent`) will automatically pick up these changes.
*   **Fonts:** You can easily change the fonts by updating the `font-sans` and `font-heading` variables, which use Google Fonts by default.
*   **Tailwind CSS:** For more granular styling, use [Tailwind CSS utility classes](https://tailwindcss.com/docs/utility-first) directly in your components. This allows for rapid and consistent styling without writing custom CSS.

### 3. SEO Optimization (`app/layout.tsx` and Metadata)

Next.js App Router provides powerful built-in SEO features.
Edit `app/layout.tsx` to customize your site's metadata:

*   **`metadata` object**: This is where you define your site's `title`, `description`, `keywords`, and `authors`.
*   **Open Graph Image (`og:image`)**: Essential for social media sharing. Update the `url` property within `metadata.openGraph.images` to point to your branding image.
    *   **Recommended Dimensions**: For optimal display across platforms, your Open Graph image should be a landscape image with an aspect ratio of 1.91:1 (e.g., `1200x630` pixels).
*   **Favicon**: Replace `app/favicon.ico` with your company's favicon. Ensure it's a `.ico` file for broad browser compatibility.
*   **Robots.txt & Sitemap**: Ensure `app/robots.txt` and `app/sitemap.ts` are configured correctly to guide search engine crawlers.

### 4. Images & Media (`public` directory)

All static images are stored in the `public` directory. Replace the placeholder files with your own branded assets.

#### Site-Wide Images

The template includes SVG placeholder images. Replace these with your own branded assets (PNG, JPG, or WebP recommended for photos).

| Placeholder | Replace With | Recommended Size | Description |
|-------------|--------------|------------------|-------------|
| `app/favicon.ico` | Your favicon | 32x32 or 48x48 | Browser tab icon. Use `.ico` format for compatibility. |
| `public/og-image.svg` | `og-image.png` | 1200x630 | Social media preview image (Facebook, LinkedIn, Twitter). |
| `public/about-image.svg` | `about-image.png` | 800x800 (1:1) | About section image. Set path in `lib/data/about.ts` (`image.src`). Set to `null` for animated visual. |
| `public/map-preview.svg` | `map-preview.png` | 640x360 (16:9) | Header location dropdown - Google Maps screenshot of your business location. |
| `public/service-area.svg` | `service-area.png` | 640x360 (16:9) | Contact section - Google Maps screenshot of your service coverage area. |

**Note:** After replacing SVG placeholders with PNG/JPG files, update the file references in:
-   `lib/data/about.ts` (about-image via `image.src`)
-   `components/header.tsx` (map-preview)
-   `components/sections/contact.tsx` (service-area)

#### Gallery Images

Gallery images are stored in `public/gallery/` and referenced in `lib/data/gallery.ts`. The template includes 12 SVG placeholder images (`project-1.svg` through `project-12.svg`).

| Placeholder Pattern | Replace With | Recommended Size | Aspect Ratio | Description |
|---------------------|--------------|------------------|--------------|-------------|
| `project-1.svg` through `project-12.svg` | `project-1.jpg` etc. | 800x600 or larger | 4:3 | Project/portfolio images for gallery and showcase. |

**To add gallery images:**
1.  Place your images in the `public/gallery/` directory (PNG, JPG, or WebP)
2.  Update the `galleryItems` array in `lib/data/gallery.ts` with:
    -   `image`: Path to the image (e.g., `"/gallery/my-project.jpg"`)
    -   `title`: Project title
    -   `category`: Category for filtering (e.g., `"Residential"`, `"Commercial"`)
    -   `description`: Brief description

**Example:**
```typescript
// lib/data/gallery.ts
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Kitchen Renovation",
    category: "Residential",
    image: "/gallery/kitchen-renovation.jpg",
    description: "Complete kitchen remodel with modern fixtures"
  },
  // ... more items
]
```

#### How to Create Map Images

1.  Go to [Google Maps](https://www.google.com/maps)
2.  Search for your business address (for `map-preview.png`) or zoom out to show your service area (for `service-area.png`)
3.  Take a screenshot at the recommended aspect ratio (16:9)
4.  Save as PNG in the `public` directory

#### Image Optimization

All images in `public` are automatically optimized by Next.js when using the `next/image` component. For best performance:
-   Use JPG for photos, PNG for graphics with transparency, or WebP for best compression
-   Keep file sizes under 500KB where possible
-   Gallery images: 800x600 minimum, larger images will be automatically resized
-   Ensure images match the recommended aspect ratios

### 5. Icons (`lucide-react` via `lib/icon-map.ts`)

We use [Lucide React](https://lucide.dev/) for customizable SVG icons. Due to Next.js tree-shaking, icons are managed through a centralized icon map.

*   **Using Icons:** In data files (e.g., `lib/data/services.ts`), set the `iconName` property to match an icon name in the icon map (e.g., `"Briefcase"`, `"Users"`, `"Lightbulb"`).
*   **Finding More Icons:** Browse the full library on the [Lucide website](https://lucide.dev/icons/).
*   **Adding New Icons:** To use an icon not already in the map:
    1.  Open `lib/icon-map.ts`
    2.  Find the icon in the commented list (organized by category) or add a new import
    3.  Uncomment the icon in BOTH the `import` statement AND the `iconMap` object
    4.  Use the icon name in your data files

**Example:** To add the `Coffee` icon:
```typescript
// In lib/icon-map.ts

import {
  // ... existing imports ...
  Coffee,  // Uncomment this
  // ...
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  // ... existing icons ...
  Coffee,  // Uncomment this
  // ...
}
```

Then use it in your data:
```typescript
// In lib/data/services.ts
{
  iconName: "Coffee",  // Now available
  // ...
}
```

**Performance Note:** Only uncomment icons you actually use. Each icon adds ~1-2KB to the bundle.

### 6. Contact Form & Email Template

The contact form uses the [Resend API](https://resend.com/) to send emails.

*   **API Key**: Ensure your `RESEND_API_KEY` is correctly set in your `.env.local` file (and on your hosting provider).
*   **Email Template**: The HTML structure of the email sent upon form submission is defined in `lib/data/contact.ts` within the `quoteEmailTemplate` string. Customize this to match your branding and include all necessary information.
    *   **Important**: Placeholders like `{{firstName}}`, `{{email}}`, etc., are used to dynamically insert form data. If you change your form fields, ensure these placeholders are updated accordingly in the template.

## Extending Functionality

### Add New UI Components with `shadcn/ui`

`shadcn/ui` makes it incredibly easy to add new, accessible, and customizable UI components.

1.  **Browse Components:** Visit the [shadcn/ui documentation](https://ui.shadcn.com/docs/components) to explore available components (e.g., `Accordion`, `Carousel`, `Data Table`, `Calendar`).
2.  **Install a Component:** To add a new component, for example, a `Calendar`, run:
    ```bash
    pnpm shadcn-ui add calendar
    ```
    This command will add the component's code to your `components/ui` directory, allowing you to fully customize it.
3.  **Integrate:** Import the component into your desired React component and use it as needed. This approach provides maximum flexibility and ownership over your UI.

## Next Steps for Your Business (Post-Deployment Checklist)

Once your website is live, consider these crucial steps:

1.  **Verify SEO Setup**: Use Google Search Console to submit your sitemap (`/sitemap.xml`) and monitor your site's performance in search results. Address any crawling or indexing issues.
2.  **Google Business Profile**: Register and verify your business with [Google Business Profile](https://www.google.com/business/). This is essential for local SEO and appearing in Google Maps.
3.  **Google Analytics**: Implement Google Analytics (or another analytics tool) to track website traffic, user behavior, and conversion rates.
4.  **Social Media Integration**: Ensure all social media links in your `lib/data/global.ts` are active and point to your official profiles.
5.  **Legal Pages**: Double-check your Privacy Policy and Terms of Service (`app/privacy-policy/page.tsx`, `app/terms-of-service/page.tsx`) to ensure they comply with relevant regulations (e.g., GDPR, CCPA).
6.  **Regular Content Updates**: Keep your website content fresh and relevant. Regularly update service descriptions, gallery items, testimonials, and FAQ answers in the `lib/data` directory.
7.  **Performance Monitoring**: Continuously monitor your website's performance using tools like Google PageSpeed Insights or Vercel Analytics to ensure a fast and smooth user experience.

## About LokiSoft

LokiSoft is a software company dedicated to providing high-quality, open-source tools for developers and businesses. Our work is guided by our Christian faith, and we strive to create products that are not only functional but also built with integrity and a spirit of generosity. We believe in the power of technology to connect people and create opportunities, and we are excited to be a part of your journey.

## A Prayer for Your Success

*May the Lord bless you and keep you in all your endeavors. May He grant you wisdom in your decisions, strength in your challenges, and success in your work. May your business be a source of blessing to you and to others, and may you always walk in His grace. Amen.*

## License

Distributed under the MIT License. See `LICENSE` for more information.