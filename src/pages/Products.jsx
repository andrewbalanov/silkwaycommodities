import { Link } from 'react-router-dom'
import './Products.css'

const categories = [
  {
    id: 'nitrogen',
    title: 'Nitrogen Fertilizers',
    subtitle: 'A full range of nitrogen-based fertilizers sourced from major CIS and Middle Eastern producers.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
    products: [
      {
        name: 'Urea',
        tag: 'Granular · Prilled',
        desc: 'The most widely traded solid nitrogen fertilizer. Available in granular and prilled forms, in bulk, big bags, and 50 kg bags.',
      },
      {
        name: 'Ammonium Nitrate (AN)',
        tag: 'Porous · Technical',
        desc: 'High-nitrogen fertilizer for direct application and as a component in compound blends. Various grades available.',
      },
      {
        name: 'Calcium Ammonium Nitrate (CAN)',
        tag: 'Granular',
        desc: 'Nitrogen fertilizer with added calcium, suitable for acidic soils. Widely used across European and African markets.',
      },
      {
        name: 'UAN Solution',
        tag: 'Liquid',
        desc: 'Liquid nitrogen solution for foliar and soil application. Available in standard concentrations for agricultural use.',
      },
      {
        name: 'Ammonium Sulphate (AS)',
        tag: 'Granular · Crystalline',
        desc: 'Dual-nutrient fertilizer providing nitrogen and sulphur. Effective for sulphur-deficient soils and high-demand crops.',
      },
      {
        name: 'Ammonia',
        tag: 'Anhydrous',
        desc: 'Primary feedstock for fertilizer manufacturing. Supplied to industrial consumers and downstream processors.',
      },
    ],
  },
  {
    id: 'phosphate',
    title: 'Phosphate Fertilizers',
    subtitle: 'Phosphorus-based products from established producers for agricultural and industrial applications.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    products: [
      {
        name: 'DAP',
        tag: 'Granular',
        desc: 'Diammonium phosphate — the world\'s most widely used phosphorus fertilizer. Standard and dark grades for various soil conditions.',
      },
      {
        name: 'MAP',
        tag: 'Granular',
        desc: 'Monoammonium phosphate with high phosphorus content. Water-soluble, suitable for a wide range of crops and soil types.',
      },
      {
        name: 'TSP',
        tag: 'Granular',
        desc: 'Triple superphosphate — concentrated phosphorus source without nitrogen. Commonly used in phosphorus-deficient soils.',
      },
      {
        name: 'SSP',
        tag: 'Granular · Powder',
        desc: 'Single superphosphate providing phosphorus, sulphur, and calcium. Cost-effective option for multi-nutrient soil enrichment.',
      },
      {
        name: 'Phosphate Rock',
        tag: 'Various grades',
        desc: 'Raw material for phosphoric acid and fertilizer production. Sourced from major deposits with consistent quality parameters.',
      },
    ],
  },
  {
    id: 'potash',
    title: 'Potash & Complex Fertilizers',
    subtitle: 'Potassium-based and compound NPK products for balanced crop nutrition programs.',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80',
    products: [
      {
        name: 'MOP (Potassium Chloride)',
        tag: 'Granular · Standard',
        desc: 'Muriate of potash — the primary source of potassium for agriculture. Essential for crop quality and yield improvement.',
      },
      {
        name: 'SOP (Potassium Sulphate)',
        tag: 'Granular · Powder',
        desc: 'Chloride-free potassium source preferred for sensitive crops including fruits, vegetables, and tobacco.',
      },
      {
        name: 'NPK Compound',
        tag: 'Multiple grades',
        desc: 'Complex compound fertilizers in various formulations. Available grades include 15-15-15, 16-16-16, 10-26-26, 20-20-0, and other custom ratios.',
      },
      {
        name: 'NPS / NPKS Blends',
        tag: 'Custom formulations',
        desc: 'Specialty blends with added sulphur and micronutrients. Tailored formulations to meet specific regional and crop requirements.',
      },
    ],
  },
  {
    id: 'agricultural',
    title: 'Agricultural Products',
    subtitle: 'Premium grains, oilseeds, and agri-commodities from the fertile regions of Central Asia and the CIS.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    products: [
      {
        name: 'Wheat',
        tag: 'Milling · Feed',
        desc: 'High-quality wheat from Kazakhstan, Russia, and Uzbekistan. Various protein content grades for milling and feed industries.',
      },
      {
        name: 'Corn (Maize)',
        tag: 'Yellow · White',
        desc: 'Feed and food-grade corn from established agricultural regions. Consistent quality meeting international standards.',
      },
      {
        name: 'Barley',
        tag: 'Feed · Malting',
        desc: 'Premium barley for animal feed and malting industries. Sourced from regions with optimal continental growing conditions.',
      },
      {
        name: 'Sunflower Oil',
        tag: 'Crude · Refined',
        desc: 'Crude and refined sunflower oil from major CIS production regions. Meeting international food and industrial standards.',
      },
      {
        name: 'Lentils & Pulses',
        tag: 'Various types',
        desc: 'Red and green lentils, chickpeas, and other pulses from Central Asian origins for food industry and export markets.',
      },
      {
        name: 'Cotton Fiber',
        tag: 'Various staple lengths',
        desc: 'Uzbek cotton fiber in multiple grades and staple lengths for textile manufacturing markets worldwide.',
      },
    ],
  },
  {
    id: 'petrochemical',
    title: 'Petrochemicals & Industrial',
    subtitle: 'Industrial-grade raw materials for construction, manufacturing, and chemical processing sectors.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    products: [
      {
        name: 'Sulphur',
        tag: 'Granular · Lump',
        desc: 'Industrial sulphur for fertilizer production, chemical manufacturing, and vulcanization. Bulk and containerized supply.',
      },
      {
        name: 'Bitumen',
        tag: 'Various pen. grades',
        desc: 'Road-grade and industrial bitumen in penetration grades 60/70, 80/100, and 85/100. Bulk and drummed packaging.',
      },
      {
        name: 'Base Oil',
        tag: 'Group I · Group II',
        desc: 'Base oils for lubricant manufacturing in various viscosity grades. Consistent purity meeting international specifications.',
      },
      {
        name: 'Fuel Oil',
        tag: 'CST 180 · CST 380',
        desc: 'Heavy fuel oil for marine bunkering, power generation, and industrial heating applications.',
      },
      {
        name: 'Methanol',
        tag: 'Technical grade',
        desc: 'Chemical-grade methanol for industrial solvent use, formaldehyde production, and fuel blending applications.',
      },
      {
        name: 'Caustic Soda',
        tag: 'Flakes · Liquid',
        desc: 'Sodium hydroxide for chemical processing, water treatment, and industrial cleaning applications.',
      },
    ],
  },
]

function Products() {
  return (
    <div className="products-page">
      {/* Banner */}
      <section className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Our Products</h1>
          <p className="page-banner-text">
            Comprehensive portfolio of commodities for global markets
          </p>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">›</span>
            <span>Products</span>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="prod__nav-wrap">
        <div className="container">
          <nav className="prod__nav">
            {categories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="prod__nav-link">
                {cat.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Categories */}
      {categories.map((cat, catIndex) => (
        <section
          key={cat.id}
          id={cat.id}
          className="section"
          style={{ background: catIndex % 2 === 0 ? 'var(--bg-white)' : 'var(--bg-light)' }}
        >
          <div className="container">
            <div className="prod__cat-header">
              <div className="prod__cat-image">
                <img src={cat.image} alt={cat.title} />
              </div>
              <div className="prod__cat-info">
                <span className="section-label">{cat.title}</span>
                <h2 className="section-title">{cat.title}</h2>
                <p className="section-subtitle">{cat.subtitle}</p>
              </div>
            </div>

            <div className="prod__grid">
              {cat.products.map((product) => (
                <div key={product.name} className="prod__card card">
                  <div className="prod__card-header">
                    <h3 className="prod__card-name">{product.name}</h3>
                    <span className="prod__card-tag">{product.tag}</span>
                  </div>
                  <p className="prod__card-desc">{product.desc}</p>
                  <Link to="/contact" className="prod__card-cta">
                    Request Quote
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="prod__cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ color: 'white' }}>
            Looking for a Specific Product?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 18, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.6 }}>
            Contact us with your requirements — product type, quantity, destination port, and preferred delivery terms.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact Our Trading Desk
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
