import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Validate required fields
    if (!firstName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter with Zoho SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // hello@unbuilt.studio
        pass: process.env.EMAIL_PASSWORD, // your Zoho password
      },
    });

    // Email HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #dd2d4a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9fafb; padding: 20px; }
            .info-box { background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .info-row { margin: 10px 0; }
            .label { font-weight: bold; color: #374151; }
            .message-box { background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 20px; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="info-box">
                <h2 style="color: #1f2937; margin-top: 0;">${subject}</h2>
                <div class="info-row">
                  <span class="label">From:</span> ${firstName} ${lastName || ""}
                </div>
                <div class="info-row">
                  <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
                </div>
                ${phone ? `<div class="info-row"><span class="label">Phone:</span> ${phone}</div>` : ""}
                <div class="message-box">
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Nora contact form at unbuilt.studio</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Nora - Unbuilt Studio" <${process.env.EMAIL_USER}>`, // hello@unbuilt.studio
      to: process.env.EMAIL_TO, // chidiobinna0001@gmail.com
      replyTo: email, // User's email so you can reply directly
      subject: `New Contact Form: ${subject}`,
      html: htmlContent,
      text: `
        New Contact Form Submission

        From: ${firstName} ${lastName || ""}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Subject: ${subject}

        Message:
        ${message}
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
