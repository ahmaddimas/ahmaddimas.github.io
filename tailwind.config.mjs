/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#d9e3f6",
        "secondary-container": "#d6e0f3",
        "outline": "#737686",
        "surface-bright": "#f7f9fb",
        "outline-variant": "#c3c6d7",
        "on-tertiary": "#ffffff",
        "surface": "#f7f9fb",
        "tertiary-container": "#007d55",
        "on-surface": "#191c1e",
        "primary": "#004ac6",
        "on-secondary-fixed-variant": "#3d4756",
        "on-background": "#191c1e",
        "border-subtle": "#e2e8f0",
        "on-tertiary-container": "#bdffdb",
        "secondary": "#555f6f",
        "on-primary": "#ffffff",
        "surface-container-highest": "#e0e3e5",
        "on-secondary-container": "#596373",
        "tertiary-fixed-dim": "#4edea3",
        "inverse-surface": "#2d3133",
        "on-surface-variant": "#434655",
        "primary-container": "#2563eb",
        "tertiary": "#006242",
        "on-error-container": "#93000a",
        "background": "#f7f9fb",
        "surface-muted": "#f1f5f9",
        "on-tertiary-fixed": "#002113",
        "surface-container-low": "#f2f4f6",
        "on-secondary": "#ffffff",
        "surface-container": "#eceef0",
        "error-container": "#ffdad6",
        "surface-variant": "#e0e3e5",
        "on-secondary-fixed": "#121c2a",
        "text-dimmed": "#64748b",
        "secondary-fixed-dim": "#bdc7d9",
        "primary-fixed-dim": "#b4c5ff",
        "surface-tint": "#0053db",
        "on-primary-container": "#eeefff",
        "on-tertiary-fixed-variant": "#005236",
        "inverse-on-surface": "#eff1f3",
        "surface-dim": "#d8dadc",
        "tertiary-fixed": "#6ffbbe",
        "surface-container-high": "#e6e8ea",
        "inverse-primary": "#b4c5ff",
        "error": "#ba1a1a",
        "on-primary-fixed-variant": "#003ea8",
        "on-error": "#ffffff",
        "on-primary-fixed": "#00174b",
        "surface-container-lowest": "#ffffff",
        "primary-fixed": "#dbe1ff"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "unit": "4px",
        "max-width": "1200px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        "gutter": "24px"
      },
      fontFamily: {
        "headline-lg": ["Inter"],
        "label-mono": ["JetBrains Mono"],
        "code-sm": ["JetBrains Mono"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "headline-md": ["Inter"],
        "display-lg": ["Inter"]
      },
      fontSize: {
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "label-mono": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "500" }],
        "code-sm": ["13px", { lineHeight: "18px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }]
      }
    }
  }
};
