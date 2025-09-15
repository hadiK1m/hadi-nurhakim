// src/components/Header.tsx
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Impor Button shadcn

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
    {children}
  </a>
);

export default function Header() {
  return (
    <header className="py-6 px-8 flex justify-between items-center bg-card border-b">
      <div className="flex items-center gap-12">
        <h1 className="font-bold text-xl text-foreground">Blog Spot.</h1>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink>Articles</NavLink>
          <NavLink>Radio</NavLink>
          <NavLink>Podcast</NavLink>
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
    </header>
  );
}