import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

import { Toaster } from '@/components/ui/toaster';

const montserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description: 'CGM Prescription Upload',
  title: 'CGM',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
