import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RACO Child and Rural Care Initiative | Faith-Based Care & Protection Center',
  description: 'A faith-based care and protection center providing free education, nutrition, and welfare support for orphans and vulnerable children in Nigeria.',
  keywords: ['RACO Initiative', 'Orphanage Nigeria', 'Rural Care', 'Free Education', 'Child Protection'],
  authors: [{ name: 'RACO Commission' }],
  alternates: {
    canonical: 'https://racochildinitiative.org/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-950 text-slate-900 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
