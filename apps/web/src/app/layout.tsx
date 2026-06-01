import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'ExamNexx',
  description: 'AI-powered exam revision platform built around learning from mistakes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
