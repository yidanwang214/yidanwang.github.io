"use server"
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      // from: "Yidan <yidan@yidanwang214.com>",
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,　
      react: (
        <>
        <h1>{subject}</h1>
        <p>Thank you for contacting me!</p>
        <p>I will get back to you as soon as possible ^-^</p>
        <p>New message submitted:</p>
        <p>{message}</p>
        </>
      )
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({error});
  }
}
