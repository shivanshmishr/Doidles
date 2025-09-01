import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, query, source } = await req.json();

    // Create transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your gmail address
        pass: process.env.EMAIL_PASS, // your gmail app password
      },
    });

    // Dynamic subject based on form source
    const subject =
      source === "party"
        ? "New Party Form Submission"
        : "New Contact Form Submission";

    // Send mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVE_EMAIL, // your personal email where you want submissions
      subject,
      text: `Name: ${name}\nPhone: ${phone}\nQuery: ${query}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
