import type { DietaryTag } from "@/data/menuData";

interface FilterBarProps {
  activeFilters: DietaryTag[];
  onToggleFilter: (tag: DietaryTag) => void;
}

const filters: { tag: DietaryTag; label: string; colorClass: string; bgClass: string }[] = [
  { tag: "Vegetarian", label: "🌿 Vegetarian", colorClass: "text-tag-vegan", bgClass: "bg-tag-vegan" },
  { tag: "Vegan", label: "🌱 Vegan", colorClass: "text-tag-vegan", bgClass: "bg-tag-vegan" },
  { tag: "Gluten-Free", label: "🌾 Gluten-Free", colorClass: "text-tag-gf", bgClass: "bg-tag-gf" },
  { tag: "Spicy", label: "🌶️ Spicy", colorClass: "text-tag-spicy", bgClass: "bg-tag-spicy" },
];

const FilterBar = ({ activeFilters, onToggleFilter }: FilterBarProps) => {
  return (
    <div className="px-5 py-3 max-w-2xl mx-auto">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {filters.map((f) => {
          const isActive = activeFilters.includes(f.tag);
          return (
            <button
              key={f.tag}
              onClick={() => onToggleFilter(f.tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium font-body whitespace-nowrap transition-all border ${
                isActive
                  ? `${f.bgClass} ${f.colorClass} border-current`
                  : "bg-secondary/50 text-muted-foreground border-transparent hover:border-border"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
