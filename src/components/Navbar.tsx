"use client"

import { Button } from '../components/ui/button';
import { Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime">
            <Dumbbell className="h-5 w-5 shrink-0 text-black" />
          </div>
          <span className="font-bold">FitForge</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          <Link to="/workout" className="text-muted-foreground hover:text-ink text-sm font-medium transition-colors">
            Generator
          </Link>
          <Link to="#" className="text-muted-foreground hover:text-ink text-sm font-medium transition-colors">
            Pricing
          </Link>
          <ThemeToggle />
          <Button size="sm" className="bg-lime hover:bg-lime/90">
            <Link to="/workout">Generate Free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

