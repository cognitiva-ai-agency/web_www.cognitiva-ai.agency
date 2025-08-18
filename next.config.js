﻿/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimizaciones de producción
    reactStrictMode: true,
    swcMinify: true,
    
    // Compresión de imágenes
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
  
    // Headers de seguridad
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on'
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block'
            },
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN'
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin'
            }
          ]
        }
      ]
    },
  
    // Optimización de fuentes
    optimizeFonts: true,
  
    // Configuración de compilación
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
  
    // Variables de entorno disponibles en el cliente
    env: {
      NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56932417147',
      NEXT_PUBLIC_CALENDAR_LINK: process.env.NEXT_PUBLIC_CALENDAR_LINK || 'https://cal.com/www.cognitiva-ai.agency',
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://cognitiva-ai.agency',
    },
  
    // Webpack config para optimizaciones adicionales
    webpack: (config, { isServer }) => {
      // Optimizaciones de bundle
      if (!isServer) {
        config.optimization.splitChunks = {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        }
      }
  
      return config
    },
  }
  
  module.exports = nextConfig