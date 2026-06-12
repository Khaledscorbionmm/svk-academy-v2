import nodemailer from 'nodemailer';

async function testEmail() {
  console.log('Testing SMTP connection and sending an email...');
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'smartvenomk@gmail.com',
      pass: 'rfrlywsayzgurjez',
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"SVK Academy System Test" <smartvenomk@gmail.com>',
      to: 'smartvenomk@gmail.com',
      subject: 'Professional System Diagnostic - Email Test',
      html: '<h1>Success!</h1><p>The SVK Academy email server is working perfectly.</p>',
    });
    console.log('Email sent successfully! Message ID:', info.messageId);
  } catch (error) {
    console.error('Failed to send email. Error details:', error);
  }
}

testEmail();
