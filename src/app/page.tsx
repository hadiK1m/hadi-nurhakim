import AdCard from "@/components/AdCard";
import FeaturedCard from "@/components/FeaturedCard";
import Header from "@/components/Header";
import PicksCard from "@/components/PicksCard";

export default function Home() {
  return (
    <main className="bg-background min-h-screen p-4 sm:p-8"> 
      <div className="max-w-7xl mx-auto bg-card rounded-xl shadow-sm"> 
        <Header />
        
        <div className="p-4 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Best of the week</h2>
            <a href="#" className="font-semibold text-muted-foreground hover:text-foreground text-sm flex-shrink-0 ml-4">
              See all posts →
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FeaturedCard />
            </div>
            <div className="flex flex-col gap-8">
              <AdCard />
              <PicksCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}