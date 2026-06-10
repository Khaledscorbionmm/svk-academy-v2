'use client';

export default function AdminSettings() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: '#fff' }}>⚙️ الإعدادات العامة</h1>
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '2rem', maxWidth: '600px' }}>
        <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
          هذه الصفحة قيد التطوير حالياً. سيتم إضافة إعدادات التحكم بالموقع (مثل تغيير الشعار، وسائل التواصل، والصلاحيات) قريباً في التحديث القادم.
        </p>
        <button style={{ marginTop: '1.5rem', background: '#10b981', color: '#fff', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
          حفظ التغييرات
        </button>
      </div>
    </div>
  );
}
