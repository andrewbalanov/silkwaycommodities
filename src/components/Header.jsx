import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Geography', path: '/geography' },
  { label: 'Contact', path: '/contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const headerClass = `header ${scrolled ? 'header--scrolled' : ''} ${!isHome ? 'header--inner' : ''}`

  return (
    <>
      <header className={headerClass}>
        <div className="header__inner container">
          {/* Logo */}
          <Link
            to="/"
            className="header__logo"
            onClick={() => {
              if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <div className="header__logo-icon">S</div>
            <div className="header__logo-text">
              <span className="header__logo-name">SILKWAY</span>
              <span className="header__logo-sub">COMMODITIES</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="header__nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="header__cta btn btn-primary">
            Get a Quote
          </Link>

          {/* Mobile CTA + Burger */}
          <div className="header__mobile-actions">
            <Link to="/contact" className="header__mobile-cta btn btn-primary">
              Get a Quote
            </Link>

          {/* Mobile Burger */}
          <button
            className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — outside header to avoid backdrop-filter containing block */}
      <div className={`header__mobile ${menuOpen ? 'header__mobile--open' : ''}`}>
        <nav className="header__mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`header__mobile-link ${location.pathname === link.path ? 'header__mobile-link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary btn-lg"
            style={{ marginTop: 16, width: '100%' }}
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Header
