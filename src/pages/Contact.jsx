import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      {/* Banner */}
      <section className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Contact Us</h1>
          <p className="page-banner-text">
            Get in touch with our trading desk
          </p>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">›</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="contact__grid">
            {/* Left — Info */}
            <div className="contact__info">
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title" style={{ fontSize: 32 }}>
                Let's Discuss Your <span>Requirements</span>
              </h2>
              <p className="contact__desc">
                Whether you need a quotation for specific products, want to discuss
                delivery terms, or explore partnership opportunities — our team is
                ready to assist.
              </p>

              {/* Info Cards */}
              <div className="contact__cards">
                <div className="contact__card">
                  <div className="contact__card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6-9.75-6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact__card-label">Email</div>
                    <a href="mailto:trade@silkwaycommodities.com" className="contact__card-value">
                      trade@silkwaycommodities.com
                    </a>
                  </div>
                </div>

                <div className="contact__card">
                  <div className="contact__card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact__card-label">Phone</div>
                    <a href="tel:+998505402235" className="contact__card-value">
                      +998 50-540-22-35
                    </a>
                  </div>
                </div>

                <div className="contact__card">
                  <div className="contact__card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact__card-label">Dubai Office</div>
                    <span className="contact__card-value">
                      DMCC Business Centre, Jewellery & Gemplex 3, JLT, Dubai
                    </span>
                  </div>
                </div>

                <div className="contact__card">
                  <div className="contact__card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact__card-label">Tashkent Office</div>
                    <span className="contact__card-value">
                      6-Tor Ko'chasi, 23, Tashkent, Uzbekistan
                    </span>
                  </div>
                </div>

                <div className="contact__card">
                  <div className="contact__card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact__card-label">Working Hours</div>
                    <span className="contact__card-value">
                      Sun–Thu: 09:00–18:00 (GST) · Mon–Fri: 09:00–18:00 (UZT)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact__form-wrap">
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Send us a message</h3>

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="contact__form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />
                  </div>
                  <div className="contact__form-group">
                    <label>Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Request for Quotation">Request for Quotation</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="Logistics">Logistics & Shipping</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="contact__form-group contact__form-group--full">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Please describe your requirements — product type, quantity, destination port, preferred delivery terms..."
                  />
                </div>

                <button type="submit" className="btn btn-secondary btn-lg contact__submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                    </svg>
                  )}
                </button>

                {status === 'success' && (
                  <div className="contact__alert contact__alert--success">
                    Thank you! Your message has been sent. We will respond within 24 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="contact__alert contact__alert--error">
                    Something went wrong. Please try again or email us directly at trade@silkwaycommodities.com
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
