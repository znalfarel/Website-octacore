// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // 1. Ambil 'message' dari request body
    const { name, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'octacoreofc@gmail.com', 
      subject: `Pesan Baru Website: ${name}`,
      // 2. Tampilkan pesan di dalam isi email HTML
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #9333ea;">Pesan Baru dari Website</h2>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>No HP:</strong> ${phone}</p>
            <hr />
            <p><strong>Pesan:</strong></p>
            <p style="background: #f3f4f6; padding: 10px; border-radius: 5px;">
                ${message}
            </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}