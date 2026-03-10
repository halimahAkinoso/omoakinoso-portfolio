/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
      },
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
      },
      cyan: {
        500: '#06b6d4',
      },
      indigo: {
        50: '#eef2ff',
        100: '#e0e7ff',
      },
      green: {
        500: '#10b981',
      },
      emerald: {
        500: '#10b981',
      },
      amber: {
        500: '#f59e0b',
      },
      orange: {
        500: '#f97316',
        600: '#ea580c',
      },
      yellow: {
        500: '#eab308',
      },
      pink: {
        500: '#ec4899',
      },
      purple: {
        500: '#a855f7',
      },
      primary: '#3b82f6',
      bgLight: '#ffffff',
      textDark: '#1f2937',
    },
    extend: {
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
}
