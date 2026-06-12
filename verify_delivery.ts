import nodemailer from 'nodemailer';
import 'dotenv/config';

async function verifyDelivery() {
  const email = 'khaledelmasry9700@gmail.com';
  console.log(`[Diagnostic] Verifying SMTP delivery path for: ${email}\n`);

  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  
  // Create transporter with debug and logger enabled to capture SMTP transcript
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    logger: true, // log to console
    debug: true, // include SMTP traffic in the logs
  });

  const mailOptions = {
    from: `"SVK Academy Diagnostic" <${process.env.EMAIL_FROM || process.env.SMTP_USER}>`,
    to: email,
    subject: `SMTP Diagnostic Test - ${new Date().toISOString()}`,
    text: `This is a diagnostic email sent at ${new Date().toISOString()} to verify the SMTP delivery path.`,
  };

  try {
    console.log(`[Timestamp] ${new Date().toISOString()}: Initiating sendMail...`);
    const info = await transporter.sendMail(mailOptions);
    
    console.log('\n--- DIAGNOSTIC RESULTS ---');
    console.log('1. Handed off to SMTP? YES');
    console.log('2. SMTP Response:', info.response);
    console.log('3. Message-ID:', info.messageId);
    console.log('4. Timestamp:', new Date().toISOString());
    console.log('5. Errors:', 'None. Server accepted the message.');
    console.log('--------------------------\n');
    console.log('If the SMTP Response is "250 2.0.0 OK", it means Gmail explicitly accepted the email and took responsibility for delivering it to the recipient inbox.');
  } catch (error) {
    console.error('\n--- DIAGNOSTIC FAILED ---');
    console.error('1. Handed off to SMTP? NO / FAILED');
    console.error('5. Errors:', error);
    console.log('--------------------------\n');
  }
}

verifyDelivery().catch(console.error);
