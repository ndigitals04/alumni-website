/**
 * tailwind.config.js
 * -------------------------------------------------------------------------
 * Central design tokens for the NACOS UNN Alumni Association site.
 *
 * WHY THE withOpacityValue HELPER EXISTS:
 * Tailwind v3's opacity-modifier syntax (e.g. `border-ink/8`, `bg-forest/10`)
 * only works when a color is defined as a CSS-variable-backed RGB channel
 * function — not as a plain hex string.  The helper below wraps every brand
 * color so that Tailwind can inject the right alpha value at build time:
 *   border-ink/8  →  border-color: rgb(32 36 31 / 0.08)
 * Without it, the build throws "class does not exist" for every /N modifier.
 * -------------------------------------------------------------------------
 */

/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) / ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./initiatives.html",
    "./support.html",
    "./join.html",
    "./projects.html",
  ],

  theme: {
    extend: {
      colors: {
        // Brand: Deep Green
        forest:         withOpacity("--color-forest"),
        "forest-dark":  withOpacity("--color-forest-dark"),
        "forest-light": withOpacity("--color-forest-light"),

        // Brand: Gold
        gold:           withOpacity("--color-gold"),
        "gold-soft":    withOpacity("--color-gold-soft"),
        "gold-deep":    withOpacity("--color-gold-deep"),

        // Brand: Dark Gray
        ink:            withOpacity("--color-ink"),
        "ink-soft":     withOpacity("--color-ink-soft"),

        // Section background tint
        mist:           withOpacity("--color-mist"),
      },

      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono:    ["Space Grotesk", "ui-monospace", "monospace"],
      },

      keyframes: {
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        nodePulse: {
          "0%, 100%": { opacity: 0.35 },
          "50%":      { opacity: 0.75 },
        },
        scrollCue: {
          "0%, 100%": { transform: "translateY(0)", opacity: 0.6 },
          "50%":      { transform: "translateY(6px)", opacity: 1 },
        },
        timelineReveal: {
          "0%":   { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      animation: {
        fadeUp:    "fadeUp 0.8s ease-out both",
        nodePulse: "nodePulse 4s ease-in-out infinite",
        scrollCue: "scrollCue 2s ease-in-out infinite",
      },

      maxWidth: {
        content: "80rem",
      },
    },
  },
  plugins: [],
};