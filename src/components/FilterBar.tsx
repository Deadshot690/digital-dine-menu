type FilterType = "all" | "veg" | "nonveg" | "bestseller" | "under200";

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  sortOrder: "none" | "low" | "high";
  onSortChange: (sort: "none" | "low" | "high") => void;
}

const filters: { key: FilterType; label: string }[] = [
  { key: "all", label: "All" },
  { key: "veg", label: "🟢 Veg" },
  { key: "nonveg", label: "🔴 Non-Veg" },
  { key: "bestseller", label: "⭐ Bestseller" },
  { key: "under200", label: "Under ₹200" },
];

const FilterBar = ({ activeFilter, onFilterChange, sortOrder, onSortChange }: FilterBarProps) => {
  return (
    <div className="px-4 py-2 max-w-2xl mx-auto">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide items-center">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => onFilterChange(f.key === activeFilter ? "all" : f.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
              activeFilter === f.key && f.key !== "all"
                ? "bg-primary/20 text-primary border-primary/50"
                : f.key === "all" && activeFilter === "all"
                ? "bg-secondary text-foreground border-border"
                : "bg-secondary/50 text-muted-foreground border-transparent hover:border-border"
            }`}
          >
            {f.label}
          </button>
        ))}
        <span className="w-px h-5 bg-border flex-shrink-0" />
        <button
          onClick={() => {
            const next = sortOrder === "none" ? "low" : sortOrder === "low" ? "high" : "none";
            onSortChange(next);
          }}
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
            sortOrder !== "none"
              ? "bg-accent/20 text-accent border-accent/50"
              : "bg-secondary/50 text-muted-foreground border-transparent hover:border-border"
          }`}
        >
          {sortOrder === "low" ? "₹ Low→High" : sortOrder === "high" ? "₹ High→Low" : "Sort ₹"}
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
export type { FilterType };
