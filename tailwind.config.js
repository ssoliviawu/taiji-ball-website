/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 新中式配色方案
        primary: {
          DEFAULT: '#2C3E50', // 墨灰色
          dark: '#1a252f',
          light: '#3d566e',
        },
        secondary: {
          DEFAULT: '#1B3A4B', // 深藏蓝
          dark: '#0f232e',
          light: '#2a5570',
        },
        accent: {
          DEFAULT: '#D4A84B', // 琥珀金
          light: '#E8C878',
          dark: '#B8923A',
        },
        muted: {
          DEFAULT: '#6B7B8A', // 青灰色
          light: '#8B9BAA',
          dark: '#4B5B6A',
        },
        background: {
          DEFAULT: '#FAF7F2', // 浅米色
          paper: '#F5F0E8', // 宣纸色
          warm: '#FFFEF9',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-noto-serif)', 'Georgia', 'serif'],
        display: ['var(--font-zcool-xiaowei)', 'var(--font-noto-serif)', 'serif'],
      },
      backgroundImage: {
        'paper-texture': "url('/textures/paper-texture.png')",
        'ink-wash': "url('/textures/ink-wash.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'ripple': 'ripple 1s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}