const JWT_SECRET = process.env.JWT_SECRET || 'svk-academy-super-secret-jwt-key-2025-change-in-production';
const COOKIE_NAME = 'svk_admin_token';

export interface AdminPayload {
  id: number;
  email: string;
  name: string;
  role: string;
}

function base64UrlDecode(str: string): Uint8Array {
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

export async function verifyTokenEdge(token: string): Promise<AdminPayload | null> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [headerB64, payloadB64, signatureB64] = parts;

    // 1. Decode and check expiration
    const payloadBytes = base64UrlDecode(payloadB64);
    const payloadStr = new TextDecoder().decode(payloadBytes);
    const payload = JSON.parse(payloadStr);
    
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      return null; // Expired
    }

    // 2. Verify signature
    const encoder = new TextEncoder();
    const data = encoder.encode(`${headerB64}.${payloadB64}`);
    const keyData = encoder.encode(JWT_SECRET);

    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const sigBytes = base64UrlDecode(signatureB64);

    const isValid = await crypto.subtle.verify(
      'HMAC',
      key,
      sigBytes as BufferSource,
      data as BufferSource
    );

    if (isValid) {
      return payload as AdminPayload;
    }
    return null;
  } catch (err) {
    console.error('JWT Edge verification failed:', err);
    return null;
  }
}

export { COOKIE_NAME };
