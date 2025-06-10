'use client';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex justify-center items-center h-screen">
      <button
        onClick={() => router.push('/signup')}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Sign Up
      </button>
    </main>
  );
}