import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: 'Cognitiva AI - Agentes de IA que Multiplican tus Ventas 24/7',
  description: 'Transforma tu negocio con IA conversacional. Automatización inteligente, chatbots multicanal, integraciones empresariales. ROI garantizado desde el día 1.',
  keywords: 'inteligencia artificial, chatbots, automatización, CRM, ventas, WhatsApp Business, agentes IA',
  authors: [{ name: 'Cognitiva AI' }],
  creator: 'Cognitiva AI',
  publisher: 'Cognitiva AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Cognitiva AI - Multiplica tus Ventas con IA',
    description: 'Agentes de IA que venden, atienden y escalan tu negocio 24/7. Implementación en 7 días.',
    url: 'https://cognitiva-ai.agency',
    siteName: 'Cognitiva AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cognitiva AI - Inteligencia Artificial para Negocios',
      }
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognitiva AI - Agentes de IA para Empresas',
    description: 'Automatización inteligente que multiplica tus resultados',
    images: ['/twitter-image.jpg'],
    creator: '@cognitiva',
  },
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
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}