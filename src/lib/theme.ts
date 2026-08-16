// Mirrors the CSS custom properties in src/app/globals.css.
// Duplicated here because Satori (next/og) and Three.js can't consume CSS custom properties.
export const BG = "#1c1712";
export const SURFACE = "#2a211a";
export const BRASS = "#c97c3d";
export const CREAM = "#f2e9dd";
export const CREAM_MUTED = "#9c8b76";

// RGB tuples for contexts that need to interpolate between colors (e.g. Satori/next-og).
export const BRASS_RGB: [number, number, number] = [201, 124, 61];
export const CREAM_RGB: [number, number, number] = [242, 233, 221];
