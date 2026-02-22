import { useState, useCallback, useEffect, useMemo } from "react";
import MenuHeader from "@/components/MenuHeader";
import CategoryBar from "@/components/CategoryBar";
import FilterBar, { type FilterType } from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import MenuCard from "@/components/MenuCard";
import MenuFooter from "@/components/MenuFooter";
import FloatingButtons from "@/components/FloatingButtons";
import { menuData, categories } from "@/data/menuData";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [sortOrder, setSortOrder] = useState<"none" | "low" | "high">("none");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(categories[0].id);

  const isSearching = searchQuery.trim().length > 0;

  const filteredItems = useMemo(() => {
    let items = menuData;

    // Search filter
    if (isSearching) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (i) => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (activeFilter === "veg") items = items.filter((i) => i.type === "Veg");
    else if (activeFilter === "nonveg") items = items.filter((i) => i.type === "Non-Veg");
    else if (activeFilter === "bestseller") items = items.filter((i) => i.bestseller);
    else if (activeFilter === "under200") items = items.filter((i) => i.price < 200);

    // Sort
    if (sortOrder === "low") items = [...items].sort((a, b) => a.price - b.price);
    else if (sortOrder === "high") items = [...items].sort((a, b) => b.price - a.price);

    return items;
  }, [searchQuery, activeFilter, sortOrder, isSearching]);

  // Bestsellers
  const bestsellers = useMemo(
    () => filteredItems.filter((i) => i.bestseller),
    [filteredItems]
  );

  const toggleSection = useCallback(
    (catId: string) => {
      setExpandedCategory((prev) => (prev === catId ? null : catId));
    },
    []
  );

  // Scroll-spy for active category
  useEffect(() => {
    if (isSearching) return;
    const handleScroll = () => {
      for (const cat of [...categories].reverse()) {
        const el = document.getElementById(`section-${cat.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSearching]);

  const handleCategoryChange = useCallback((catId: string) => {
    setActiveCategory(catId);
    setExpandedCategory(catId);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20">
      <MenuHeader />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      {!isSearching && (
        <CategoryBar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      )}
      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />

      <main className="max-w-2xl mx-auto px-4">
        {/* Popular Today */}
        {!isSearching && bestsellers.length > 0 && activeFilter !== "bestseller" && (
          <section className="mb-4">
            <h2 className="text-sm font-semibold text-accent flex items-center gap-1.5 mb-2 mt-3">
              🔥 Popular Today
            </h2>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
              {bestsellers.slice(0, 10).map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 bg-card border border-border rounded-lg px-3 py-2 min-w-[140px]"
                >
                  <span className="text-xs font-medium text-foreground line-clamp-1">{item.name}</span>
                  <span className="text-xs text-primary font-semibold">₹{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Search results */}
        {isSearching ? (
          <section className="mb-4">
            <p className="text-xs text-muted-foreground mb-2">
              {filteredItems.length} result{filteredItems.length !== 1 ? "s" : ""} for "{searchQuery}"
            </p>
            <div className="bg-card rounded-lg border border-border px-3">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
              {filteredItems.length === 0 && (
                <p className="py-8 text-center text-muted-foreground text-sm">No dishes found</p>
              )}
            </div>
          </section>
        ) : (
          /* Category sections */
          categories.map((cat) => {
            const items = filteredItems.filter((i) => i.category === cat.id);
            if (items.length === 0) return null;
            const isExpanded = expandedCategory === cat.id;
            return (
              <section key={cat.id} id={`section-${cat.id}`} className="mb-2">
                <button
                  onClick={() => toggleSection(cat.id)}
                  className="w-full flex items-center justify-between py-3 px-1 text-left group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{cat.emoji}</span>
                    <h2 className="text-sm font-semibold text-foreground">{cat.name}</h2>
                    <span className="text-[11px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                      {items.length}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="bg-card rounded-lg border border-border px-3 mb-2">
                    {items.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </section>
            );
          })
        )}
      </main>

      <MenuFooter />
      <FloatingButtons />
    </div>
  );
};

export default Index;
