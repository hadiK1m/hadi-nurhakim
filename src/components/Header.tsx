// src/components/Header.tsx
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Kembalikan prop 'count'
const NavLink = ({ children, count }: { children: React.ReactNode; count?: number }) => (
  <a href="#" className="text-sm text-muted-foreground hover:text-foreground flex items-center">
    {children}
    {count && <span className="ml-1.5 text-xs">({count})</span>}
  </a>
);

export default function Header() {
  return (
    // Header sekarang memiliki background sendiri dan border bawah
    <header className="py-4 bg-card/80 backdrop-blur-lg sticky top-0 z-50">
      {/* Konten header dibungkus agar sejajar dengan konten utama */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <h1 className="font-bold text-xl text-foreground">Blog Spot.</h1>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink count={460}>Articles</NavLink>
            <NavLink count={8}>Radio</NavLink>
            <NavLink count={40}>Podcast</NavLink>
            <NavLink>Be a writer</NavLink>
            <NavLink>Talk to us</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="bg-foreground text-background rounded-full">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}