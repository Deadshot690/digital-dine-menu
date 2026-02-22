import { categories } from "@/data/menuData";

interface CategoryBarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryBar = ({ activeCategory, onCategoryChange }: CategoryBarProps) => {
  const handleClick = (categoryId: string) => {
    onCategoryChange(categoryId);
    const element = document.getElementById(`section-${categoryId}`);
    if (element) {
      const offset = 140;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-[52px] z-20">
      <div className="flex gap-1 px-3 py-2 max-w-2xl mx-auto overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleClick(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <span className="text-sm">{cat.emoji}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryBar;
