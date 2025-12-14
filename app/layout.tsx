import type { Metadata } from "next";
import { Inter, Montserrat } from 'next/font/google';
import Header from '../components/header';
import Footer from '../components/footer';
import StyledComponentsRegistry from './registry';
import 'normalize.css';
import "./globals.css";

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  weight: ['300', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    default: 'Libre Logos - Professional Logos for Open Source Projects',
    template: '%s | Libre Logos'
  },
  description: 'Claim exclusive, trademark-ready logos for your open source project or NGO. Completely free, original vector art with full copyright transfer.',
  authors: [{ name: 'Enjeck M.C.' }],
  icons: { icon: '/favicon.ico' },
  keywords: ['free logos', 'open source logos', 'NGO branding', 'free branding', 'trademark logos'],
  openGraph: {
    title: 'Libre Logos - Professional Logos for Open Source Projects',
    description: 'Claim exclusive, trademark-ready logos for your open source project or NGO. Completely free.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <StyledComponentsRegistry>
          <Header siteTitle="Libre Logos" />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
