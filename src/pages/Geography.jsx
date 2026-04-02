import { Link } from 'react-router-dom'
import './Geography.css'

const offices = [
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    type: 'Office',
    address: 'DMCC Business Centre, Jewellery & Gemplex 3',
    addressLine2: 'Jumeirah Lakes Towers, Dubai, UAE',
    email: 'trade@silkwaycommodities.com',
    features: ['International Trade Hub', 'Maritime Logistics Gateway', 'Free Zone'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
  },
  {
    city: 'Tashkent',
    country: 'Uzbekistan',
    flag: '🇺🇿',
    type: 'Office',
    address: "6-Tor Ko'chasi, 23",
    addressLine2: 'Tashkent, Uzbekistan',
    phone: '+998 50-540-22-35',
    features: ['Central Asia Hub', 'CIS Sourcing Office', 'Regional Coordination'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  },
]

const markets = [
  {
    region: 'CIS Countries',
    countries: 'Russia, Kazakhstan, Uzbekistan, Turkmenistan, Tajikistan',
    role: 'Sourcing & Supply',
  },
  {
    region: 'Middle East',
    countries: 'UAE, Turkey, Iran, Saudi Arabia, Oman',
    role: 'Trading Hub & Distribution',
  },
  {
    region: 'East Africa',
    countries: 'Kenya, Tanzania, Ethiopia, Mozambique',
    role: 'Fertilizer Supply',
  },
  {
    region: 'South Asia',
    countries: 'India, Pakistan, Bangladesh, Sri Lanka',
    role: 'Fertilizer & Agri Supply',
  },
  {
    region: 'Southeast Asia',
    countries: 'Vietnam, Thailand, Indonesia, Philippines',
    role: 'Agricultural Trade',
  },
  {
    region: 'North Africa',
    countries: 'Egypt, Morocco, Tunisia, Algeria',
    role: 'Commodity Supply',
  },
]

const logistics = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Ocean Freight',
    text: 'Bulk, container, and break-bulk shipments across major trade routes via key ports.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'Warehousing',
    text: 'Strategic storage facilities at key transit points for inventory management and order consolidation.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Documentation',
    text: 'Full trade documentation support including LC management, customs clearance, and regulatory compliance.',
  },
]

function Geography() {
  return (
    <div className="geo-page">
      {/* Banner */}
      <section className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Global Presence</h1>
          <p className="page-banner-text">
            Strategically located, globally connected
          </p>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">›</span>
            <span>Geography</span>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Our Offices</span>
            <h2 className="section-title">
              Two Strategic <span>Locations</span>
            </h2>
            <p className="section-subtitle">
              Positioned at the crossroads of key commodity trade routes, our offices
              in Dubai and Tashkent enable efficient operations across multiple markets.
            </p>
          </div>

          <div className="geo__offices-grid">
            {offices.map((office) => (
              <div key={office.city} className="geo__office">
                <div className="geo__office-image">
                  <img src={office.image} alt={office.city} />
                </div>
                <div className="geo__office-header">
                  <span className="geo__office-type">{office.type}</span>
                  <h3 className="geo__office-city">
                    <span className="geo__office-flag">{office.flag}</span>
                    {office.city}
                  </h3>
                  <p className="geo__office-country">{office.country}</p>
                </div>

                <div className="geo__office-body">
                  <div className="geo__office-detail">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                    <div>
                      <div>{office.address}</div>
                      <div>{office.addressLine2}</div>
                    </div>
                  </div>
                  <div className="geo__office-detail">
                    {office.email ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                        </svg>
                        <a href={`mailto:${office.email}`}>{office.email}</a>
                      </>
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                        </svg>
                        <span>{office.phone}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="geo__office-tags">
                  {office.features.map((f) => (
                    <span key={f} className="geo__office-tag">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Markets We Serve</span>
            <h2 className="section-title">
              Reaching Across <span>Continents</span>
            </h2>
            <p className="section-subtitle">
              Our trading operations span across key commodity markets in six major regions.
            </p>
          </div>

          <div className="geo__markets-grid">
            {markets.map((m) => (
              <div key={m.region} className="geo__market card">
                <h4 className="geo__market-region">{m.region}</h4>
                <p className="geo__market-countries">{m.countries}</p>
                <span className="geo__market-role">{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Logistics & Operations</span>
            <h2 className="section-title">
              Seamless Supply <span>Chain</span>
            </h2>
            <p className="section-subtitle">
              We manage the full logistics chain — from origin to destination.
            </p>
          </div>

          <div className="geo__logistics-grid">
            {logistics.map((l) => (
              <div key={l.title} className="geo__logistics-card card">
                <div className="geo__logistics-icon">{l.icon}</div>
                <h4 className="geo__logistics-title">{l.title}</h4>
                <p className="geo__logistics-text">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Geography
