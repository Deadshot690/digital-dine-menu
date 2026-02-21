import { useState, useCallback, useEffect } from "react";
import MenuHeader from "@/components/MenuHeader";
import CategoryBar from "@/components/CategoryBar";
import FilterBar from "@/components/FilterBar";
import MenuCard from "@/components/MenuCard";
import MenuModal from "@/components/MenuModal";
import MenuFooter from "@/components/MenuFooter";
import { menuData, categories, type MenuItem, type DietaryTag } from "@/data/menuData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("starters");
  const [activeFilters, setActiveFilters] = useState<DietaryTag[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const toggleFilter = useCallback((tag: DietaryTag) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const filteredItems = menuData.filter((item) => {
    if (activeFilters.length === 0) return true;
    return activeFilters.some((f) => item.tags.includes(f));
  });

  // Track active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const cat of [...categories].reverse()) {
        const el = document.getElementById(`section-${cat.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <MenuHeader />
      <CategoryBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <FilterBar activeFilters={activeFilters} onToggleFilter={toggleFilter} />

      <main className="max-w-2xl mx-auto px-4 pb-8">
        {categories.map((cat) => {
          const items = filteredItems.filter((i) => i.category === cat.id);
          if (items.length === 0) return null;
          return (
            <section key={cat.id} id={`section-${cat.id}`} className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4 mt-6">
                {cat.emoji} {cat.name}
              </h2>
              <div className="space-y-3">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} onClick={setSelectedItem} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <MenuFooter />
      <MenuModal
        item={selectedItem}
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default Index;
