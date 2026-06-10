const resendApiKey = 're_EmvaUXnn_BGhr4AH8d8X84MahoBeid2QL';

async function test() {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'SVK Academy <onboarding@resend.dev>',
        to: 'sandmand097@gmail.com',
        subject: 'Test Resend API',
        html: '<p>Testing Resend API key permissions</p>'
      })
    });
    const status = res.status;
    const data = await res.json().catch(() => ({}));
    console.log('Status:', status);
    console.log('Data:', data);
  } catch (e) {
    console.error(e);
  }
}

test();
