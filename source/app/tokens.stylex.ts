import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  bg: {
    default: "#ffffff",
    "@media (prefers-color-scheme: dark)": "#0a0a0a",
  },
  fg: {
    default: "#171717",
    "@media (prefers-color-scheme: dark)": "#ededed",
  },
  grayAlpha200: {
    default: "rgba(0, 0, 0, 0.08)",
    "@media (prefers-color-scheme: dark)": "rgba(255, 255, 255, 0.145)",
  },
  grayAlpha100: {
    default: "rgba(0, 0, 0, 0.05)",
    "@media (prefers-color-scheme: dark)": "rgba(255, 255, 255, 0.145)",
  },
  btnPrimaryHover: {
    default: "#383838",
    "@media (prefers-color-scheme: dark)": "#cccccc",
  },
  btnSecondaryHover: {
    default: "#f2f2f2",
    "@media (prefers-color-scheme: dark)": "#1a1a1a",
  },
});

// The fonts will be loaded by `next/font`.
export const fonts = stylex.defineVars({
  "--geist-sans": "sans-serif",
  "--geist-mono": "Courier New, monospace",
});
