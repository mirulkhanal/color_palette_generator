// Helper function to generate random integer between 0 and 255
export type Color = {
  rgb: string;
  hex: string;
  hsl: string;
};

export type Palette = Color[];

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Convert RGB to HEX
const rgbToHex = (r: number, g: number, b: number) => {
  const componentToHex = (c: number) => c.toString(16).padStart(2, '0');
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

// Convert RGB to HSL
const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h! /= 6;
  }

  h = Math.round(h! * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
};

// Function to generate a random color
const generateRandomColor = (): Color => {
  const r = randomInt(0, 255);
  const g = randomInt(0, 255);
  const b = randomInt(0, 255);

  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = rgbToHex(r, g, b);
  const hsl = rgbToHsl(r, g, b);

  return {rgb, hex, hsl};
};

// Function to generate a palette of 5 random colors
export const generateColorPalette = (): Palette => {
  const palette = [];
  for (let i = 0; i < 5; i++) {
    palette.push(generateRandomColor());
  }
  return palette;
};
