"use client"

import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Sun, Moon, Palette, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

const themes = [
  { value: 'light', icon: Sun, label: 'Light' },
  { value: 'dark', icon: Moon, label: 'Dark' },
  { value: 'greenish', icon: Palette, label: 'Greenish' },
  { value: 'orangeish', icon: Palette, label: 'Orangeish' },
  { value: 'system', icon: Monitor, label: 'System' },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') || 'dark';
      setTheme(saved);
      document.documentElement.className = saved;
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      if (theme === 'system') {
        const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.className = system;
      } else {
        document.documentElement.className = theme;
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const Icon = themes.find(t => t.value === theme)?.icon || Sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
          <Icon className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        {themes.map((themeItem) => (
          <DropdownMenuItem
            key={themeItem.value}
            onClick={() => setTheme(themeItem.value)}
            className="flex-col items-start gap-1.5 capitalize"
          >
            <span className="flex items-center gap-2">
              <themeItem.icon className="h-4 w-4" />
              {themeItem.label}
            </span>
            <span className="text-xs text-muted-foreground">
              {themeItem.value === 'system' ? 'Follow system preference' : themeItem.value}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

