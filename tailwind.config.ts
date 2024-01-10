import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00bbff",
          "secondary": "#0017ff",
          "accent": "#9cc000",
          "neutral": "#232a2b",
          "base-100": "#F6F5F5",
          "info": "#00eeff",
          "success": "#00bd54",
          "warning": "#ff9400",
          "error": "#ff637e",
          body : {
            "background-color" : "#F7FBFC"
          }
        },
      },
    ],
  },
}
export default config
