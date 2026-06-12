import nodemailer from 'nodemailer';

const port = parseInt(process.env.SMTP_PORT || '465', 10);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: port,
  secure: port === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendVerificationEmail(email: string, code: string) {
  const mailOptions = {
    from: `"SVK Academy Support" <${process.env.EMAIL_FROM || process.env.SMTP_USER}>`,
    to: email,
    subject: 'SVK Academy - Password Reset Verification Code',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 8px;">
        <h2 style="color: #3b82f6; text-align: center;">SVK Academy</h2>
        <h3 style="color: #333;">Password Reset Request</h3>
        <p style="color: #555; line-height: 1.6;">
          We received a request to reset your SVK Academy password. Please use the following verification code to complete the process.
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; font-size: 32px; font-weight: bold; letter-spacing: 4px; color: #1e3a8a; background-color: #f3f4f6; padding: 10px 20px; border-radius: 6px;">
            ${code}
          </span>
        </div>
        <p style="color: #555; line-height: 1.6;">
          <strong>Security Notice:</strong> This code will expire in 15 minutes. Do not share this code with anyone.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="color: #888; font-size: 12px; text-align: center;">
          If you did not request a password reset, please ignore this email or contact support if you have concerns.
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    
    await import('@/lib/prisma').then(({ prisma }) => {
      prisma.email_delivery_logs.create({
        data: {
          recipient_email: email,
          email_type: 'PASSWORD_RESET',
          status: 'DELIVERED',
          smtp_response: info.response,
          message_id: info.messageId
        }
      }).catch(err => console.error('Failed to log email delivery', err));
    });

  } catch (error: any) {
    console.error('Failed to send email:', error);
    await import('@/lib/prisma').then(({ prisma }) => {
      prisma.email_delivery_logs.create({
        data: {
          recipient_email: email,
          email_type: 'PASSWORD_RESET',
          status: 'FAILED',
          smtp_response: error.message || 'Unknown error',
        }
      }).catch(err => console.error('Failed to log email failure', err));
    });
    throw error;
  }
}
