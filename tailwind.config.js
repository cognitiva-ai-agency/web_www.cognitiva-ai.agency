/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          // Colores principales del brand
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
          },
          secondary: {
            50: '#ecfeff',
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
            950: '#083344',
          },
          dark: {
            DEFAULT: '#000412',
            100: '#000824',
            200: '#001030',
            300: '#001840',
            400: '#002050',
          },
        },
        fontFamily: {
          sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
          mono: ['var(--font-geist-mono)', 'monospace'],
        },
        animation: {
          'gradient-x': 'gradient-x 6s ease infinite',
          'gradient-xy': 'gradient-xy 15s ease infinite',
          'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
          'float': 'float 20s ease-in-out infinite',
          'float-slow': 'float-slow 30s ease-in-out infinite',
          'rotate-slow': 'rotate-slow 30s linear infinite',
          'scan': 'scan 8s linear infinite',
          'draw-line': 'draw-line 10s linear infinite',
          'slide-left': 'slide-left 0.6s ease-out forwards',
          'slide-right': 'slide-right 0.6s ease-out forwards',
          'scroll-infinite': 'scroll-infinite 30s linear infinite',
          'sparkle': 'sparkle 2s ease-in-out infinite',
          'aurora': 'aurora 20s ease-in-out infinite',
          'matrix-fall': 'matrix-fall 10s linear infinite',
          'bubble-float': 'bubble-float 15s linear infinite',
          'scan-vertical': 'scan-vertical 4s linear infinite',
          'scan-horizontal': 'scan-horizontal 6s linear infinite',
        },
        keyframes: {
          'gradient-x': {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
          'gradient-xy': {
            '0%, 100%': { backgroundPosition: '0% 0%' },
            '25%': { backgroundPosition: '100% 0%' },
            '50%': { backgroundPosition: '100% 100%' },
            '75%': { backgroundPosition: '0% 100%' },
          },
          'pulse-slow': {
            '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
            '50%': { opacity: '1', transform: 'scale(1.05)' },
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          'float-slow': {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '33%': { transform: 'translate(30px, -30px) scale(1.05)' },
            '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          },
          'rotate-slow': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          'scan': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' },
          },
          'draw-line': {
            '0%': { strokeDasharray: '0 1000' },
            '100%': { strokeDasharray: '1000 0' },
          },
          'slide-left': {
            'from': { opacity: '0', transform: 'translateX(20px)' },
            'to': { opacity: '1', transform: 'translateX(0)' },
          },
          'slide-right': {
            'from': { opacity: '0', transform: 'translateX(-20px)' },
            'to': { opacity: '1', transform: 'translateX(0)' },
          },
          'scroll-infinite': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-33.333%)' },
          },
          'sparkle': {
            '0%, 100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
            '50%': { opacity: '0.5', transform: 'scale(0.8) rotate(180deg)' },
          },
          'aurora': {
            '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
            '33%': { transform: 'rotate(120deg) scale(1.1)' },
            '66%': { transform: 'rotate(240deg) scale(0.9)' },
          },
          'matrix-fall': {
            '0%': { transform: 'translateY(-100vh)', opacity: '1' },
            '100%': { transform: 'translateY(100vh)', opacity: '0' },
          },
          'bubble-float': {
            '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
            '10%': { opacity: '0.6' },
            '90%': { opacity: '0.6' },
            '100%': { transform: 'translateY(-100vh) translateX(50px)', opacity: '0' },
          },
          'scan-vertical': {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100vh)' },
          },
          'scan-horizontal': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100vw)' },
          },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    plugins: [],
  }