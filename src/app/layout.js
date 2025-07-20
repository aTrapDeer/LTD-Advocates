import localFont from "next/font/local";
import './globals.css'
import ClientLayout from './components/layout/ClientLayout';
import GoogleAnalytics from './components/analytics/GoogleAnalytics';
import { Analytics } from "@vercel/analytics/next"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL('https://www.ltdadvocates.com'),
  title: {
    default: "Disability Claims Consulting | Expert SSDI & LTD Claims Assistance",
    template: "%s | Disability Claims Consulting"
  },
  description: "Expert guidance for disability claims. We help with SSDI, LTD claims, appeals, and provide personalized consulting to maximize your benefits.",
  keywords: ["disability claims", "SSDI consulting", "LTD claims", "disability benefits", "claims assistance", "disability advocacy"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-site-verification-here',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ltdadvocates.com',
    siteName: 'Disability Claims Consulting',
    title: 'Expert Disability Claims Consulting Services',
    description: 'Professional guidance for SSDI and LTD claims. Get the benefits you deserve with our expert consulting services.',
    images: [
      {
        url: '/Images/logo/svg.svg',
        width: 1200,
        height: 630,
        alt: 'Disability Claims Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Disability Claims Consulting Services',
    description: 'Professional guidance for SSDI and LTD claims. Get the benefits you deserve with our expert consulting services.',
    images: ['/Images/logo/svg.svg'],
  },
  icons: {
    icon: [
      {
        url: '/Images/logo/svg-cropped.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/Images/logo/svg-cropped.svg',
    apple: '/Images/logo/svg-cropped.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${geistSans.variable} antialiased bg-background`}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
