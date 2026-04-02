import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static(join(__dirname, 'dist')))

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, subject, products, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Silkway Commodities Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'trade@silkwaycommodities.com',
      replyTo: email,
      subject: `${subject} — ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

        <!-- Header -->
        <tr><td style="background:#0F1B2D;padding:32px 40px;text-align:center;">
          <h1 style="margin:0;color:#C8952E;font-size:20px;font-weight:700;letter-spacing:2px;">SILKWAY COMMODITIES</h1>
          <p style="margin:8px 0 0;color:rgba(255,255,255,0.5);font-size:12px;letter-spacing:1px;">NEW INQUIRY FROM WEBSITE</p>
        </td></tr>

        <!-- Subject Banner -->
        <tr><td style="background:linear-gradient(135deg,#C8952E,#DFB03A);padding:20px 40px;">
          <p style="margin:0;color:rgba(255,255,255,0.8);font-size:11px;text-transform:uppercase;letter-spacing:1px;">Subject</p>
          <p style="margin:4px 0 0;color:#ffffff;font-size:18px;font-weight:600;">${subject}</p>
        </td></tr>

        <!-- Contact Details -->
        <tr><td style="padding:32px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:16px 20px;background:#f8f9fb;border-radius:8px;width:50%;vertical-align:top;">
                <p style="margin:0;color:#8B95A8;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">From</p>
                <p style="margin:4px 0 0;color:#1A1A2E;font-size:15px;font-weight:600;">${name}</p>
                <a href="mailto:${email}" style="color:#C8952E;font-size:13px;text-decoration:none;">${email}</a>
                ${phone ? `<p style="margin:4px 0 0;color:#5A6377;font-size:13px;">${phone}</p>` : ''}
              </td>
              <td style="width:16px;"></td>
              <td style="padding:16px 20px;background:#f8f9fb;border-radius:8px;width:50%;vertical-align:top;">
                <p style="margin:0;color:#8B95A8;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Company</p>
                <p style="margin:4px 0 0;color:#1A1A2E;font-size:15px;font-weight:600;">${company || '—'}</p>
              </td>
            </tr>
          </table>
        </td></tr>

        ${products && products.length > 0 ? `
        <!-- Products -->
        <tr><td style="padding:24px 40px 0;">
          <p style="margin:0 0 12px;color:#8B95A8;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Products of Interest</p>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${products.map(p => `<span style="display:inline-block;padding:6px 14px;background:#f8f9fb;border:1px solid #e4e7ec;border-radius:20px;font-size:13px;color:#1A1A2E;font-weight:500;">${p}</span>`).join('')}
          </div>
        </td></tr>
        ` : ''}

        <!-- Message -->
        <tr><td style="padding:24px 40px 32px;">
          <p style="margin:0 0 12px;color:#8B95A8;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
          <div style="padding:20px 24px;background:#f8f9fb;border-radius:8px;border-left:3px solid #C8952E;">
            <p style="margin:0;color:#1A1A2E;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message}</p>
          </div>
        </td></tr>

        <!-- Action -->
        <tr><td style="padding:0 40px 32px;text-align:center;">
          <a href="mailto:${email}?subject=Re: ${subject}" style="display:inline-block;padding:12px 32px;background:#0F1B2D;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:8px;">Reply to ${name}</a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f8f9fb;padding:20px 40px;text-align:center;border-top:1px solid #e4e7ec;">
          <p style="margin:0;color:#8B95A8;font-size:11px;">This message was sent from the contact form at <a href="https://silkwaycommodities.com" style="color:#C8952E;text-decoration:none;">silkwaycommodities.com</a></p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    })

    res.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Silkway Commodities server running on port ${PORT}`)
})
