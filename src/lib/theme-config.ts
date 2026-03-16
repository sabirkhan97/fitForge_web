// CSS variables for easy theme switching
const themeConfig = {
  light: {
    '--bg-primary': '#ffffff',
    '--bg-secondary': '#f8fafc',
    '--bg-card': '#ffffff',
    '--text-primary': '#0f172a',
    '--text-secondary': '#64748b',
    '--border': '#e2e8f0',
    '--accent': '#10b981',
    '--accent-fg': '#ffffff',
    '--shadow': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  },
  dark: {
    '--bg-primary': '#0f0f23',
    '--bg-secondary': '#1e1e2e',
    '--bg-card': '#1e1e2e',
    '--text-primary': '#ffffff',
    '--text-secondary': '#a1a1aa',
    '--border': '#27272a',
    '--accent': '#c8f135',
    '--accent-fg': '#000000',
    '--shadow': '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
  },
  greenish: {
    '--bg-primary': '#0a1e0f',
    '--bg-secondary': '#1a2f1a',
    '--bg-card': '#1f3a20',
    '--text-primary': '#f0fdf4',
    '--text-secondary': '#a7f3d0',
    '--border': '#15803d',
    '--accent': '#22c55e',
    '--accent-fg': '#ffffff',
    '--shadow': '0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)',
  },
  orangeish: {
    '--bg-primary': '#1e0a0f',
    '--bg-secondary': '#2f1a1a',
    '--bg-card': '#3a2020',
    '--text-primary': '#fdf4f0',
    '--text-secondary': '#f3a7a0',
    '--border': '#f97316',
    '--accent': '#f97316',
    '--accent-fg': '#ffffff',
    '--shadow': '0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)',
  },
  system: 'dark' // default
} as const;

export type ThemeName = keyof typeof themeConfig | 'system';

export default themeConfig;

