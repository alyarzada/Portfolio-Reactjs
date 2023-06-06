// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  theme: {
    colors: {
      primary: "#00040f",
      secondary: "#00f6ff",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
      customDark: "#00040f",
    },
    fontFamily: {
      main: ["Space Grotesk", "sans-serif"],
    },
    breakpoints: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "2560px",
    },
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],
  presets: [presetUno(), presetAttributify()],
});
