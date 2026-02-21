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
      const offset = 120;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-background border-b border-border">
      <div className="flex gap-1 px-4 py-3 max-w-2xl mx-auto overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleClick(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-body whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryBar;
