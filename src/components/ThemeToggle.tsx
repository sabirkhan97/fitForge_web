"use client"

import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Sun, Moon, Monitor, Palette } from 'lucide-react';
import { useEffect, useState } from 'react';

const themes = [
  { name: 'Light', value: 'light', icon: Sun },
  { name: 'Dark', value: 'dark', icon: Moon },
  { name: 'Greenish', value: 'greenish', icon: Palette },
  { name: 'Orangeish', value: 'orangeish', icon: Palette },
  { name: 'System', value: 'system', icon: Monitor },
];

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') as string | null;
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initial = saved || system;
    setCurrentTheme(initial);
    document.documentElement.className = initial;
  }, []);

  const setTheme = (value: string) => {
    localStorage.setItem('theme', value);
    if (value === 'system') {
      const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.className = system;
      setCurrentTheme(system);
    } else {
      document.documentElement.className = value;
      setCurrentTheme(value);
    }
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Loading themes...</span>
      </Button>
    );
  }

  const activeTheme = themes.find((theme) => theme.value === currentTheme) || themes[1];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
          <activeTheme.icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuLabel className="flex flex-col gap-1.5">
          <span>Theme</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setTheme(theme.value)}
            className="flex cursor-default select-none items-center gap-2 capitalize"
          >
            <theme.icon className="h-4 w-4" />
            {theme.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

