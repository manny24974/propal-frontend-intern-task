import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}