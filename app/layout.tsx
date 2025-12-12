import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import Header from '../components/header';
import Footer from '../components/footer';
import StyledComponentsRegistry from './registry';
import 'normalize.css';
import "./globals.css";

const montserrat = Montserrat({
  weight: ['300', '600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Libre Logos',
    template: '%s | Libre Logos'
  },
  description: 'Free and open source logos. For your startup or open source project',
  authors: [{ name: 'Enjeck M.C.' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
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
