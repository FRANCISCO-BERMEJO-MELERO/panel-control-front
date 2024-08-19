/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        856: "856px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }), // Agrega el plugin
  ],
};
