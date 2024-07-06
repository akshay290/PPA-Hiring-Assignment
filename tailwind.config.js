/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandprimary: "var(--brandprimary)",
        brandsecondary: "var(--brandsecondary)",
        "default-white": "var(--default-white)",
        neutralblack: "var(--neutralblack)",
        neutraldgrey: "var(--neutraldgrey)",
        neutralgrey: "var(--neutralgrey)",
        neutrallgrey: "var(--neutrallgrey)",
        neutralsilver: "var(--neutralsilver)",
        neutralwhite: "var(--neutralwhite)",
        "shades-2": "var(--shades-2)",
        "shades-5": "var(--shades-5)",
        "text-gray-300": "var(--text-gray-300)",
        "text-gray-900": "var(--text-gray-900)",
        "tintt-4": "var(--tintt-4)",
        "tintt-5": "var(--tintt-5)",
      },
      fontFamily: {
        "body-medium-body-2": "var(--body-medium-body-2-font-family)",
        "body-regular-body-2": "var(--body-regular-body-2-font-family)",
        "body-regular-body-3": "var(--body-regular-body-3-font-family)",
        "heading-headline-1": "var(--heading-headline-1-font-family)",
        "heading-headline-2": "var(--heading-headline-2-font-family)",
        "heading-headline-3": "var(--heading-headline-3-font-family)",
        "heading-headline-4": "var(--heading-headline-4-font-family)",
        "label-medium-label": "var(--label-medium-label-font-family)",
      },
      boxShadow: {
        "shadow-8px": "var(--shadow-8px)",
      },
    },
  },
  plugins: [],
};
