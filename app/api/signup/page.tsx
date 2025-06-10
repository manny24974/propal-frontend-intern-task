'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [form, setForm] = useState({ username: '', email: '', password: '', phone: '' });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/saveUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push('/login');
    } else {
      alert('Error saving user');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      {['username', 'email', 'password', 'phone'].map((field) => (
        <input
          key={field}
          type={field === 'password' ? 'password' : 'text'}
          placeholder={field}
          value={form[field as keyof typeof form]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      ))}
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Register</button>
    </form>
  );
}