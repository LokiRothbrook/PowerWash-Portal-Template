// lib/data/contact.ts

/**
 * This file contains data specific to the "Contact" section and form.
 * It provides content for the contact section itself and configuration
 * for the contact form, including labels, placeholders, and email templates.
 *
 * === How to Customize ===
 *
 * 1.  **Contact Section Content (`contactSectionContent`):**
 *     -   `sectionTitle`: The small title above the main heading.
 *     -   `title`: The main heading for the contact section.
 *     -   `subtitle`: The descriptive text below the main heading.
 *     -   `contactInfo`: Customize the title for the contact information block
 *         and a placeholder for the map.
 *     -   `form`:
 *         -   `title`: Title for the contact form.
 *         -   `labels`, `placeholders`: Customize text for form fields.
 *         -   `maxLengths`: Set maximum character limits for fields like 'message'.
 *         -   `buttons`: Customize button texts for different form states.
 *         -   `disclaimer`: Important legal or informational text below the form.
 *         -   `successMessage`, `errorMessage`: Messages displayed after form submission.
 *         -   `quoteEmailTemplate`: **CRITICAL** This is the HTML structure
 *             of the email sent when a user submits the quote form.
 *             -   **IMPORTANT:** Update `{{firstName}}`, `{{lastName}}`,
 *                 `{{email}}`, `{{phone}}`, `{{service}}`, and `{{message}}`
 *                 placeholders with your actual form field names if you modify
 *                 the form structure.
 *             -   Customize the content and styling to match your brand.
 */

// ============================================================================
// Contact Section Content
// ============================================================================

/**
 * @const contactSectionContent
 * An object containing the content for the contact section, including the form.
 *
 * === How to Customize ===
 * - `sectionTitle`: The small title above the main heading.
 * - `title`: The main heading for the contact section.
 * - `subtitle`: The descriptive text below the main heading.
 * - `contactInfo`: Title for the contact info block and map placeholder.
 * - `form`: Detailed configuration for the contact form.
 *   - Customize `labels`, `placeholders`, `maxLengths` for fields.
 *   - Customize button texts (`submit`, `submitting`, `submitted`).
 *   - Update `disclaimer`, `successMessage`, `errorMessage`.
 *   - **CRITICAL:** Adjust `quoteEmailTemplate` to customize the email
 *     that is sent upon form submission. Ensure placeholders like
 *     `{{firstName}}` match your form's input names.
 */
export const contactSectionContent = {
  sectionTitle: "Get In Touch",
  title: "Ready for a Cleaner Property?",
  subtitle: "Get your free power washing quote today. Our team is ready to restore your property's beauty with professional cleaning services.",
  contactInfo: {
    title: "Contact Information",
    mapPlaceholder: "Pittsfield Area Service Map"
  },
  form: {
    title: "Get Your Free Quote",
    labels: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      service: "Service Interested In",
      message: "Message",
    },
    placeholders: {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "(555) 123-4567",
      message: "Tell us about your property and what you'd like cleaned...",
    },
    maxLengths: {
      message: 1000, // Maximum characters for the message field
    },
    buttons: {
      submit: "Request Free Quote",
      submitting: "Sending...",
      submitted: "Quote Request Sent!",
    },
    disclaimer: "By submitting this form, you agree to our privacy policy. We'll respond within 24 hours with your free estimate.",
    successMessage: "Quote Request Sent!",
    errorMessage: "Failed to send request. Please try again or call us directly at (555) 123-4567.",
    quoteEmailTemplate: `
      <h2>New Power Washing Quote Request</h2>
      <p>You have received a new quote request from your website.</p>

      <h3>Customer Information</h3>
      <ul>
        <li><strong>Name:</strong> {{firstName}} {{lastName}}</li>
        <li><strong>Email:</b> {{email}}</li>
        <li><strong>Phone:</strong> {{phone}}</li>
      </ul>

      <h3>Service Requested</h3>
      <p>{{service}}</p>

      <h3>Property Details / Message</h3>
      <p>{{message}}</p>

      <hr />
      <p style="color: #666; font-size: 12px;">
        This email was sent from the PowerWash Pro website contact form.
      </p>
    `,
  }
};
