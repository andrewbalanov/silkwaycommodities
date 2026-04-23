import { Link } from 'react-router-dom'
import './About.css'

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Integrity & Transparency',
    text: 'We build long-term partnerships rooted in honest communication, clear terms, and full accountability at every stage of the transaction.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9.75c0 .746-.092 1.47-.265 2.162M4.582 7.582A8.96 8.96 0 003 9.75c0 .746.092 1.47.265 2.162" />
      </svg>
    ),
    title: 'Global Perspective',
    text: 'Operating across key commodity corridors — CIS, Middle East, Africa, South Asia — we understand the nuances of diverse markets.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Operational Efficiency',
    text: 'Streamlined processes, direct supplier relationships, and digital-first operations allow us to minimize costs and maximize speed.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
      </svg>
    ),
    title: 'Quality First',
    text: 'Every product undergoes rigorous inspection with independent agencies to ensure it meets the highest international standards.',
  },
]

function About() {
  return (
    <div className="about-page">
      {/* Banner */}
      <section className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">About Us</h1>
          <p className="page-banner-text">
            Bridging markets, delivering value across continents
          </p>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">›</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="about__overview">
            <div className="about__overview-content">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">
                An International Trading House at the <span>Heart of the Silk Road</span>
              </h2>
              <p className="section-subtitle">
                Silkway Commodities is an international commodity trading company
                based in Tashkent, Uzbekistan.
              </p>
              <p className="about__text">
                We specialize in sourcing and supplying fertilizers, agricultural
                products, and petrochemicals. Our strategic positioning at the crossroads
                of Central Asia and the Middle East enables us to efficiently connect
                producers and buyers across diverse geographies.
              </p>
              <p className="about__text">
                We work directly with manufacturers and producers to source high-quality
                commodities, ensuring competitive pricing and reliable supply for our
                clients. Our team brings deep market knowledge and established networks
                across the CIS region, Middle East, Africa, and South Asia.
              </p>
            </div>
            <div className="about__overview-image">
              <img
                src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80"
                alt="Container ship at sea"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="about__mv-grid">
            <div className="about__mv-card">
              <div className="about__mv-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="about__mv-title">Our Mission</h3>
              <p className="about__mv-text">
                To provide a reliable, efficient, and transparent bridge between
                commodity producers and global markets. We are committed to delivering
                high-quality products at competitive prices while building long-term,
                trust-based partnerships with our clients and suppliers.
              </p>
            </div>

            <div className="about__mv-card">
              <div className="about__mv-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="about__mv-title">Our Vision</h3>
              <p className="about__mv-text">
                To become a recognized and trusted name in international commodity
                trading, known for reliability, efficiency, and deep market expertise.
                We aim to expand our presence across emerging markets while maintaining
                the highest standards of business ethics and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">
              Principles That <span>Guide Us</span>
            </h2>
          </div>

          <div className="about__values-grid">
            {values.map((v) => (
              <div key={v.title} className="about__value card">
                <div className="about__value-icon">{v.icon}</div>
                <h4 className="about__value-title">{v.title}</h4>
                <p className="about__value-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-light)', paddingBottom: 100 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Interested in Working <span>With Us?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            We're always looking to build new partnerships with producers, buyers, and logistics partners.
          </p>
          <Link to="/contact" className="btn btn-secondary btn-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
