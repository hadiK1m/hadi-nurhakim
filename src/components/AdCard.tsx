// src/components/AdCard.tsx
import { Plus } from 'lucide-react';

export default function AdCard() {
  return (
    <div className="bg-secondary text-secondary-foreground p-6 rounded-xl flex flex-col justify-between h-full">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold border border-current/50 rounded-full px-3 py-1">
          ADS
        </span>
        <button className="w-8 h-8 rounded-full border-2 border-current/50 flex items-center justify-center cursor-pointer font-semibold">
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div>
        <p className="font-semibold mb-2 text-sm">Become A BROADCAST MEMBER</p>
        <h3 className="text-2xl font-bold mb-4">Real talk in a corporate world</h3>
        <a href="#" className="font-semibold underline">Learn more</a>
      </div>
    </div>
  );
}