import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        'light-periwinkle': '#CAD0D9',
      },
      backgroundColor: {
        'charleston-green': '#222934',
        charcoal: '#333D4C',
      },
    },
  },
  plugins: [],
}
export default config
