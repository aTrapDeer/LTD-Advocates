import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, email, reason, message } = data

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send email notification about new contact form submission
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONSULTANT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Reason:</strong> ${reason || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
        
        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          This message was sent via the contact form on ltdadvocates.com
        </p>
      `,
    })

    return NextResponse.json({ success: true, message: 'Your message has been sent successfully!' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
} 