import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  const diagnostic = {
    env: {
      SMTP_HOST: process.env.SMTP_HOST || 'NOT_SET',
      SMTP_PORT: process.env.SMTP_PORT || 'NOT_SET',
      SMTP_USER: process.env.SMTP_USER || 'NOT_SET',
      SMTP_PASS: process.env.SMTP_PASS ? 'SET (Hidden)' : 'NOT_SET',
      EMAIL_FROM: process.env.EMAIL_FROM || 'NOT_SET',
    },
    smtpConfig: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: process.env.SMTP_PORT === '465',
    },
    verificationResult: null as any,
    error: null as any,
  };

  try {
    const transporter = nodemailer.createTransport({
      host: diagnostic.smtpConfig.host,
      port: diagnostic.smtpConfig.port,
      secure: diagnostic.smtpConfig.secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Adding debug logs for nodemailer
      debug: true,
      logger: true
    });

    const verifySuccess = await transporter.verify();
    diagnostic.verificationResult = verifySuccess ? 'SUCCESS' : 'FAILED_UNKNOWN';
  } catch (err: any) {
    diagnostic.error = {
      message: err.message,
      code: err.code,
      command: err.command,
      stack: err.stack,
    };
  }

  return NextResponse.json(diagnostic);
}
