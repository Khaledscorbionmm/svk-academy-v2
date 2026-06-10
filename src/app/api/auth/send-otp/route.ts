import { NextRequest, NextResponse } from 'next/server';
import { query, initDb } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.trim()) {
      return NextResponse.json({ error: 'يرجى إدخال البريد الإلكتروني' }, { status: 400 });
    }

    const emailTrimmed = email.trim().toLowerCase();

    await initDb();

    // 1. Check if email is already registered
    const emailCheck = await query('SELECT id FROM students WHERE email = $1', [emailTrimmed]);
    if (emailCheck.length > 0) {
      return NextResponse.json({ error: 'البريد الإلكتروني مسجل مسبقاً' }, { status: 400 });
    }

    // 2. Generate a 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // 3. Set expiration (15 minutes from now)
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    // 4. Save to email_verifications table
    await query(
      'INSERT INTO email_verifications (email, code, expires_at) VALUES ($1, $2, $3)',
      [emailTrimmed, code, expiresAt]
    );

    // 5. Send Email via Resend REST API
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'SVK Academy <onboarding@resend.dev>',
            to: emailTrimmed,
            subject: 'كود تفعيل حسابك - أكاديمية SVK للبرمجة',
            html: `
              <div style="direction: rtl; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 16px; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <div style="text-align: center; margin-bottom: 24px;">
                  <span style="font-size: 40px;">🎓</span>
                  <h2 style="color: #6366f1; margin: 8px 0 0 0; font-size: 24px; font-weight: 800;">أكاديمية SVK للبرمجة</h2>
                  <p style="color: #71717a; font-size: 14px; margin: 4px 0 0 0;">التعليم التفاعلي الأول للشباب والأطفال</p>
                </div>
                <hr style="border: 0; border-top: 1px solid #f4f4f5; margin: 24px 0;" />
                <p style="font-size: 16px; color: #18181b; line-height: 1.6; margin: 0 0 16px 0;">مرحباً بك في أكاديمية SVK.</p>
                <p style="font-size: 16px; color: #3f3f46; line-height: 1.6; margin: 0 0 24px 0;">رمز التحقق الخاص بك لتأكيد بريدك الإلكتروني وإتمام إنشاء حساب الطالب الخاص بك هو:</p>
                <div style="text-align: center; margin: 30px 0;">
                  <span style="font-size: 36px; font-weight: 800; color: #6366f1; letter-spacing: 6px; background-color: #f4f4f5; padding: 12px 36px; border-radius: 12px; border: 1px solid #e4e4e7; display: inline-block;">${code}</span>
                </div>
                <p style="font-size: 13px; color: #71717a; text-align: center; margin: 0 0 24px 0;">هذا الكود صالح للاستخدام لمدة 15 دقيقة فقط.</p>
                <hr style="border: 0; border-top: 1px solid #f4f4f5; margin: 24px 0;" />
                <p style="font-size: 11px; color: #a1a1aa; text-align: center; margin: 0; line-height: 1.5;">إذا لم تطلب هذا الكود، يرجى تجاهل هذا البريد الإلكتروني بأمان.<br />أكاديمية SVK © 2026</p>
              </div>
            `,
          }),
        });

        if (!resendResponse.ok) {
          const errorData = await resendResponse.json().catch(() => ({}));
          console.error('[Resend Email Error Status]', resendResponse.status, errorData);
        }
      } catch (emailErr) {
        console.error('[Resend API Exception]', emailErr);
      }
    } else {
      // In development mode without API key, we print the code in server console
      console.log('\n=============================================');
      console.log('⚡ SVK ACADEMY - DEVELOPMENT OTP VERIFICATION');
      console.log(`✉️ Email: ${emailTrimmed}`);
      console.log(`🔑 Verification Code (OTP): ${code}`);
      console.log('=============================================\n');
    }

    return NextResponse.json({ success: true, message: 'تم إرسال كود التحقق بنجاح' });
  } catch (error) {
    console.error('[Send OTP API Error]', error);
    return NextResponse.json({ error: 'حدث خطأ أثناء إرسال كود التفعيل' }, { status: 500 });
  }
}
