import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  { value: '15+', label: 'Countries Served' },
  { value: '50+', label: 'Products Traded' },
  { value: '6', label: 'Markets Covered' },
  { value: '24/7', label: 'Operations' },
]

const categories = [
  {
    title: 'Fertilizers',
    description: 'Urea, DAP, MAP, AN, CAN, NPK, MOP, SOP, Ammonium Sulphate — nitrogen, phosphate, potash, and complex fertilizers from leading producers.',
    icon: '🌱',
  },
  {
    title: 'Agricultural Products',
    description: 'Wheat, corn, barley, sunflower oil, lentils, cotton — premium grains, oilseeds, and agri-commodities from CIS regions.',
    icon: '🌾',
  },
  {
    title: 'Petrochemicals',
    description: 'Sulphur, bitumen, base oil, fuel oil, methanol, caustic soda — industrial-grade products for manufacturing and construction.',
    icon: '⚡',
  },
]

const advantages = [
  {
    title: 'Direct Sourcing',
    text: 'We work directly with producers and manufacturers, eliminating unnecessary intermediaries.',
  },
  {
    title: 'Competitive Pricing',
    text: 'Established supplier networks and volume capabilities enable us to offer the best market rates.',
  },
  {
    title: 'Reliable Logistics',
    text: 'End-to-end supply chain management with ocean freight, inland transport, and port operations.',
  },
  {
    title: 'Quality Assurance',
    text: 'Every shipment undergoes inspection with independent agencies to verify compliance with specifications.',
  },
]

function Home() {
  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__glow" />

        <div className="hero__content container">
          <div className="hero__tag">
            <span className="hero__tag-dot" />
            Tashkent
          </div>

          <h1 className="hero__title">
            Connecting Global<br />
            <span>Commodity Markets</span>
          </h1>

          <p className="hero__subtitle">
            International trading company specializing in fertilizers, agricultural
            products, and petrochemicals. Bridging supply chains across Central Asia,
            the Middle East, and beyond.
          </p>

          <div className="hero__actions">
            <Link to="/products" className="btn btn-primary btn-lg">
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Request a Quote
            </Link>
          </div>

          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <div className="hero__stat-value">{s.value}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="section intro">
        <div className="container">
          <div className="intro__grid">
            <div className="intro__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=80"
                alt="Golden desert dunes — the Silk Road"
                className="intro__image"
              />
            </div>

            <div className="intro__content">
              <span className="section-label">About Us</span>
              <h2 className="section-title">
                Strategically Positioned at the <span>Crossroads of Trade</span>
              </h2>
              <p className="section-subtitle">
                Silkway Commodities is an international trading company
                based in Tashkent, Uzbekistan.
                We specialize in sourcing and supplying fertilizers, agricultural
                products, and petrochemicals to markets across the globe.
              </p>
              <p className="intro__text">
                Our strategic presence in key trading hubs allows us to efficiently
                connect producers and buyers across diverse geographies, ensuring
                competitive pricing and reliable supply chains.
              </p>
              <Link to="/about" className="btn btn-secondary">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMAGE DIVIDER ===== */}
      <div className="home__divider">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80"
          alt="Agricultural fields"
        />
      </div>

      {/* ===== PRODUCTS PREVIEW ===== */}
      <section className="section products-preview" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Our Products</span>
            <h2 className="section-title">
              Comprehensive Product <span>Portfolio</span>
            </h2>
            <p className="section-subtitle">
              We supply a diverse range of commodities, maintaining the highest
              quality standards and ensuring compliance with international specifications.
            </p>
          </div>

          <div className="pp__grid">
            {categories.map((cat) => (
              <div key={cat.title} className="pp__card card">
                <div className="pp__card-icon">{cat.icon}</div>
                <h3 className="pp__card-title">{cat.title}</h3>
                <p className="pp__card-text">{cat.text || cat.description}</p>
                <Link to="/products" className="pp__card-link">
                  View Products
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section className="section advantages">
        <div className="container">
          <div className="advantages__grid">
            <div className="advantages__left">
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">
                Built on Trust,<br /><span>Driven by Results</span>
              </h2>
              <p className="section-subtitle">
                We bring deep market knowledge, established supplier networks,
                and a commitment to transparent, reliable partnership.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>
                Start a Conversation
              </Link>
            </div>

            <div className="advantages__right">
              {advantages.map((adv, i) => (
                <div key={adv.title} className="advantages__item">
                  <div className="advantages__num">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h4 className="advantages__item-title">{adv.title}</h4>
                    <p className="advantages__item-text">{adv.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="container cta-banner__inner">
          <h2 className="cta-banner__title">
            Ready to Source Your Commodities?
          </h2>
          <p className="cta-banner__text">
            Whether you need fertilizers, grains, or petrochemicals — contact us
            for a competitive quotation tailored to your requirements.
          </p>
          <div className="cta-banner__actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Request a Quote
            </Link>
            <Link to="/products" className="btn btn-outline btn-lg">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
