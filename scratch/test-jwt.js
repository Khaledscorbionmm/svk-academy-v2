const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const JWT_SECRET = 'svk-academy-super-secret-jwt-key-2025-change-in-production';
const payload = { id: 1, email: 'admin@smartvenom.com', name: 'مشرف النظام - خالد', role: 'admin' };

// 1. Generate token using jsonwebtoken
const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
console.log('Generated Token:', token);

// 2. Decode signature using native JS Web Crypto equivalent
function base64UrlDecode(str) {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function verifyTokenEdge(token, secret) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return { error: 'Not 3 parts' };
    const [headerB64, payloadB64, signatureB64] = parts;

    // 1. Decode and check expiration
    const payloadBytes = base64UrlDecode(payloadB64);
    const payloadStr = new TextDecoder().decode(payloadBytes);
    const parsedPayload = JSON.parse(payloadStr);
    
    if (parsedPayload.exp && Date.now() >= parsedPayload.exp * 1000) {
      return { error: 'Expired' };
    }

    // 2. Verify signature
    const encoder = new TextEncoder();
    const data = encoder.encode(`${headerB64}.${payloadB64}`);
    const keyData = encoder.encode(secret);

    // Node.js crypto.subtle behaves exactly like Web Crypto
    const key = await crypto.webcrypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const sigBytes = base64UrlDecode(signatureB64);

    const isValid = await crypto.webcrypto.subtle.verify(
      'HMAC',
      key,
      sigBytes,
      data
    );

    return { isValid, payload: parsedPayload };
  } catch (err) {
    return { error: err.message };
  }
}

verifyTokenEdge(token, JWT_SECRET).then(result => {
  console.log('Verification Result:');
  console.log('isValid:', result.isValid);
  console.log('payload:', result.payload);
});
