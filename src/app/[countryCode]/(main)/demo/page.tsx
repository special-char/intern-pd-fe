import { Heading } from "@lib/components/ui/heading"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Typography Showcase",
  description: "Comprehensive typography showcase inspired by Rino & Pelle",
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="typography-hero">
        <div className="typography-hero-content">
          <div className="typography-hero-header">
            <h1 className="typography-hero-title">
              Typography <span className="italic font-light">Showcase</span>
            </h1>
            <p className="typography-hero-subtitle">
              A comprehensive demonstration of typography and design
              capabilities inspired by modern fashion websites.
            </p>
            <div className="typography-hero-buttons">
              <button className="typography-primary-btn">Discover Now</button>
              <button className="typography-secondary-btn">Explore More</button>
            </div>
          </div>

          {/* Font Families Section */}
          <div className="typography-section">
            <h2 className="typography-section-title">
              Font <span className="italic font-light">Families</span>
            </h2>

            <div className="typography-font-grid">
              <div className="typography-font-item">
                <h3 className="typography-font-label">Playfair Display</h3>
                <div className="typography-font-sample">
                  <p className="typography-font-letters font-playfair">
                    Aa Bb Cc Dd
                  </p>
                  <p className="typography-font-name font-playfair italic">
                    Elegant Serif
                  </p>
                  <p className="typography-font-description font-playfair">
                    Perfect for headings
                  </p>
                </div>
              </div>

              <div className="typography-font-item">
                <h3 className="typography-font-label">Inter</h3>
                <div className="typography-font-sample">
                  <p className="typography-font-letters font-inter">
                    Aa Bb Cc Dd
                  </p>
                  <p className="typography-font-name font-inter">
                    Clean Sans-Serif
                  </p>
                  <p className="typography-font-description font-inter">
                    Ideal for body text
                  </p>
                </div>
              </div>

              <div className="typography-font-item">
                <h3 className="typography-font-label">Saol Display</h3>
                <div className="typography-font-sample">
                  <p className="typography-font-letters font-saol">
                    Aa Bb Cc Dd
                  </p>
                  <p className="typography-font-name font-saol italic">
                    Custom Display
                  </p>
                  <p className="typography-font-description font-saol">
                    Premium typography
                  </p>
                </div>
              </div>

              <div className="typography-font-item">
                <h3 className="typography-font-label">Akzidenz Grotesk</h3>
                <div className="typography-font-sample">
                  <p className="typography-font-letters font-akzidenz">
                    Aa Bb Cc Dd
                  </p>
                  <p className="typography-font-name font-akzidenz">
                    Industrial Sans
                  </p>
                  <p className="typography-font-description font-akzidenz">
                    Strong and clean
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Typography Hierarchy */}
          <div className="mb-20">
            <h2 className="typography-section-title">
              Typography <span className="italic font-light">Hierarchy</span>
            </h2>

            <div className="typography-hierarchy-grid">
              <div className="typography-hierarchy-section">
                <div className="typography-hierarchy-category">
                  <h3 className="typography-hierarchy-label">
                    Display Headings
                  </h3>
                  <div className="space-y-6">
                    {/* <h1 className="typography-display-heading typography-display-h1">
                      Display H1
                    </h1> */}
                    <Heading variant={"display"}>Display H1</Heading>
                    <Heading variant={"display"} level={"h2"}>
                      Display H2
                    </Heading>
                    <Heading variant={"display"} level={"h3"}>
                      Display H3
                    </Heading>
                    {/* <h2 className="typography-display-heading typography-display-h2">
                      Display H2
                    </h2> */}
                    {/* <h3 className="typography-display-heading typography-display-h3">
                      Display H3
                    </h3> */}
                  </div>
                </div>

                <div className="typography-hierarchy-category">
                  <h3 className="typography-hierarchy-label">Page Headings</h3>
                  <div className="space-y-4">
                    <h1 className="typography-page-heading typography-page-h1">
                      Page H1
                    </h1>
                    <h2 className="typography-page-heading typography-page-h2">
                      Page H2
                    </h2>
                    <h3 className="typography-page-heading typography-page-h3">
                      Page H3
                    </h3>
                    <h4 className="typography-page-heading typography-page-h4">
                      Page H4
                    </h4>
                  </div>
                </div>
              </div>

              <div className="typography-hierarchy-section">
                <div className="typography-hierarchy-category">
                  <h3 className="typography-hierarchy-label">Body Text</h3>
                  <div className="space-y-6">
                    <p className="typography-body-text typography-body-large">
                      This is large body text with elegant typography. The font
                      is light and spacious, creating a modern and sophisticated
                      look that's easy to read and visually appealing.
                    </p>
                    <p className="typography-body-text typography-body-base">
                      This is standard body text with proper line height and
                      letter spacing. It provides excellent readability while
                      maintaining the elegant aesthetic of the design system.
                    </p>
                    <p className="typography-body-text typography-body-small">
                      This is small body text used for secondary information,
                      captions, and supporting content. It maintains consistency
                      with the overall typography hierarchy.
                    </p>
                  </div>
                </div>

                <div className="typography-hierarchy-category">
                  <h3 className="typography-hierarchy-label">
                    Special Elements
                  </h3>
                  <div className="typography-special-elements">
                    <p className="typography-italic-emphasis">
                      Italic emphasis text for special highlights
                    </p>
                    <p className="typography-uppercase-label">
                      UPPERCASE SMALL TEXT FOR LABELS
                    </p>
                    <p className="typography-tiny-text">
                      TINY TEXT FOR FOOTNOTES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="typography-section">
            <h2 className="typography-section-title">
              Interactive <span className="italic font-light">Elements</span>
            </h2>
            <div className="typography-interactive-grid">
              <div className="typography-interactive-section">
                <h3 className="typography-hierarchy-label">
                  Navigation & Links
                </h3>
                <div className="space-y-4">
                  <nav className="typography-nav-links">
                    <a href="#" className="typography-nav-link">
                      Main Navigation Link
                    </a>
                    <a href="#" className="typography-nav-link-uppercase">
                      UPPERCASE NAV LINK
                    </a>
                    <a href="#" className="typography-nav-link-secondary">
                      Secondary navigation
                    </a>
                  </nav>
                </div>
              </div>

              <div className="typography-interactive-section">
                <h3 className="typography-hierarchy-label">Buttons & CTAs</h3>
                <div className="typography-button-group">
                  <button className="typography-btn-primary">
                    Primary Button
                  </button>
                  <button className="typography-btn-secondary">
                    Secondary Button
                  </button>
                  <button className="typography-btn-text">Text Button</button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Typography */}
          <div className="mb-20">
            <h2 className="typography-section-title">
              Product <span className="italic font-light">Typography</span>
            </h2>

            <div className="typography-product-grid">
              <div className="typography-product-card">
                <h3 className="typography-product-name">Product Name</h3>
                <p className="typography-product-category">Product Category</p>
                <p className="typography-product-price">€129.95</p>
                <div className="typography-product-details">
                  <p className="typography-uppercase-label">COLOURS</p>
                  <p className="typography-body-text typography-body-small">
                    Bright pink, Snow white, Birch
                  </p>
                </div>
              </div>

              <div className="typography-product-card">
                <h3 className="typography-product-name">Collection Title</h3>
                <p className="typography-product-category">
                  Seasonal Collection
                </p>
                <p className="typography-product-price">€89.95</p>
                <div className="typography-product-details">
                  <p className="typography-uppercase-label">SIZES</p>
                  <p className="typography-body-text typography-body-small">
                    34, 36, 38, 40, 42, 44, 46, 48
                  </p>
                </div>
              </div>

              <div className="typography-product-card">
                <h3 className="typography-product-name">Limited Edition</h3>
                <p className="typography-product-category">Exclusive Item</p>
                <p className="typography-product-price">€199.95</p>
                <div className="typography-product-details">
                  <p className="typography-uppercase-label">AVAILABILITY</p>
                  <p className="typography-body-text typography-body-small">
                    Only 1 left!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Color & Typography */}
          <div className="mb-20">
            <h2 className="typography-section-title">
              Color & <span className="italic font-light">Typography</span>
            </h2>
            <div className="typography-color-grid">
              <div className="typography-color-card typography-color-card-black">
                <h3 className="typography-color-title typography-color-title-white">
                  Black Background
                </h3>
                <p className="typography-color-description typography-color-description-light">
                  White text on black
                </p>
              </div>

              <div className="typography-color-card typography-color-card-light">
                <h3 className="typography-color-title typography-color-title-dark">
                  Light Background
                </h3>
                <p className="typography-color-description typography-color-description-dark">
                  Dark text on light
                </p>
              </div>

              <div className="typography-color-card typography-color-card-dark">
                <h3 className="typography-color-title typography-color-title-white">
                  Dark Background
                </h3>
                <p className="typography-color-description typography-color-description-light">
                  Light text on dark
                </p>
              </div>

              <div className="typography-color-card typography-color-card-bordered">
                <h3 className="typography-color-title typography-color-title-dark">
                  Bordered
                </h3>
                <p className="typography-color-description typography-color-description-dark">
                  Bordered container
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
