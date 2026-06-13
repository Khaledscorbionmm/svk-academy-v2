'use client';

import { useState, useEffect } from 'react';

interface UserData {
  id: number;
  table: string;
  name: string;
  email: string;
  role: string;
  is_active: boolean;
  last_login?: string;
  created_at: string;
}

export default function AdminAccountManagement() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loginLogs, setLoginLogs] = useState<any[]>([]);
  const [resetLogs, setResetLogs] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/users?search=${encodeURIComponent(search)}`);
      if (res.ok) {
        const json = await res.json();
        setUsers(json.users || []);
        setLoginLogs(json.loginLogs || []);
        setResetLogs(json.resetLogs || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  const toggleActive = async (id: number, table: string, currentStatus: boolean) => {
    if (table === 'admins') return alert('Cannot deactivate an admin');
    
    // Optimistic
    setUsers(prev => prev.map(u => (u.id === id && u.table === table) ? { ...u, is_active: !currentStatus } : u));
    
    await fetch('/api/admin/users', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, table, action: 'toggle_active', value: !currentStatus })
    });
  };

  const resetPassword = async (id: number, table: string, name: string) => {
    const newPassword = prompt(`Enter new password for ${name}:`);
    if (!newPassword || newPassword.length < 8) return alert('Password must be at least 8 characters');

    const res = await fetch('/api/admin/users', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, table, action: 'reset_password', value: newPassword })
    });

    if (res.ok) alert(`Password updated for ${name}`);
    else alert('Failed to update password');
  };

  const resendResetEmail = async (email: string) => {
    if (!confirm(`Send password reset email to ${email}?`)) return;
    
    const res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    if (res.ok) alert('Verification code sent successfully');
    else alert('Failed to send verification code. Check rate limit or email status.');
  };

  return (
    <div style={{ padding: '2rem', direction: 'rtl', background: '#05050A', minHeight: '100vh', color: '#fff' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#3b82f6', margin: 0 }}>نظام إدارة حسابات المستخدمين (Authentication Audit)</h1>
          <p style={{ color: '#94a3b8', marginTop: '0.5rem' }}>صلاحيات متقدمة لإدارة الجلسات، وسجلات الدخول، وإعادة تعيين كلمات المرور</p>
        </div>
      </header>

      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
        <input 
          type="text" 
          placeholder="ابحث بالبريد الإلكتروني أو الاسم..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: '10px 15px', borderRadius: '8px', background: '#1e1e2d', border: '1px solid #3b82f6', color: '#fff', fontSize: '1rem' }}
        />
        <button type="submit" style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>بحـــث 🔍</button>
      </form>

      {loading ? <p>جاري التحميل...</p> : (
        <div style={{ background: 'rgba(5,5,10,0.6)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '12px', overflowX: 'auto', backdropFilter: 'blur(10px)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
            <thead>
              <tr style={{ background: 'rgba(59,130,246,0.1)' }}>
                <th style={{ padding: '1rem', color: '#3b82f6' }}>الاسم / البريد</th>
                <th style={{ padding: '1rem', color: '#3b82f6' }}>الجدول (نوع الحساب)</th>
                <th style={{ padding: '1rem', color: '#3b82f6' }}>حالة الحساب</th>
                <th style={{ padding: '1rem', color: '#3b82f6' }}>آخر تسجيل دخول</th>
                <th style={{ padding: '1rem', color: '#3b82f6' }}>التحكم وإعادة التعيين</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={`${u.table}-${u.id}`} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ fontWeight: 'bold' }}>{u.name}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{u.email}</div>
                  </td>
                  <td style={{ padding: '1rem', color: '#f59e0b', fontWeight: 'bold' }}>{u.table.toUpperCase()}</td>
                  <td style={{ padding: '1rem' }}>
                    <button 
                      onClick={() => toggleActive(u.id, u.table, u.is_active)}
                      style={{ background: u.is_active ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', color: u.is_active ? '#10b981' : '#ef4444', border: '1px solid currentColor', padding: '4px 8px', borderRadius: '4px', cursor: u.table === 'admins' ? 'not-allowed' : 'pointer' }}
                    >
                      {u.is_active ? '✅ مفعل' : '❌ محظور'}
                    </button>
                  </td>
                  <td style={{ padding: '1rem', color: '#cbd5e1' }}>
                    {u.last_login ? new Date(u.last_login).toLocaleString('ar-EG') : 'لم يسجل الدخول أبداً'}
                  </td>
                  <td style={{ padding: '1rem', display: 'flex', gap: '8px' }}>
                    <button onClick={() => resetPassword(u.id, u.table, u.name)} style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>تغيير باسورد مباشر 🔐</button>
                    <button onClick={() => resendResetEmail(u.email)} style={{ background: '#10b981', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>إرسال كود الإيميل 📧</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '2rem' }}>
        <div style={{ background: '#111', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
          <h2 style={{ color: '#3b82f6', margin: '0 0 1rem 0' }}>سجل محاولات الدخول (Login Audit)</h2>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {loginLogs.map(log => (
              <div key={log.id} style={{ padding: '10px', borderBottom: '1px solid #222', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ color: log.status.includes('SUCCESS') ? '#10b981' : '#ef4444' }}>{log.status}</strong>
                  <span style={{ color: '#94a3b8' }}>{new Date(log.created_at).toLocaleString('ar-EG')}</span>
                </div>
                <div style={{ color: '#cbd5e1', marginTop: '4px' }}>Email: {log.email}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>IP: {log.ip_address}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#111', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
          <h2 style={{ color: '#f59e0b', margin: '0 0 1rem 0' }}>سجل إعادة التعيين (Reset Audit)</h2>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {resetLogs.map(log => (
              <div key={log.id} style={{ padding: '10px', borderBottom: '1px solid #222', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ color: log.status === 'SUCCESS' ? '#10b981' : (log.status === 'REQUESTED' ? '#3b82f6' : '#ef4444') }}>{log.status}</strong>
                  <span style={{ color: '#94a3b8' }}>{new Date(log.created_at).toLocaleString('ar-EG')}</span>
                </div>
                <div style={{ color: '#cbd5e1', marginTop: '4px' }}>Email: {log.email}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>IP: {log.ip_address}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
