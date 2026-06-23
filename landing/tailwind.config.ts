import type { Config } from "tailwindcss";

// Tailwind 4 auto-detects content via @import "tailwindcss" in globals.css;
// theme tokens (paper/ink/accent + the verde/amarillo/rojo tier colors) live
// in the @theme block of globals.css, not here.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
