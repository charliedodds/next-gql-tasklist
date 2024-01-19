import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'btn-sm': '0 2px 0 0',
        'btn-md': '0 4px 0 0',
        'btn-lg': '0 6px 0 0',
      },
    },
  },
  plugins: [],
}
export default config
