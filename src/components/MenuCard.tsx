import type { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
}

const spiceIndicator = (level: number) => {
  return "🌶️".repeat(level);
};

const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <div className="flex items-center justify-between gap-3 py-2.5 px-1 border-b border-border/40 last:border-0">
      <div className="flex items-center gap-2.5 min-w-0 flex-1">
        <span
          className={`w-3 h-3 rounded-sm border-2 flex-shrink-0 ${
            item.type === "Veg" ? "border-green-500" : "border-red-500"
          }`}
          style={{
            backgroundColor: item.type === "Veg" ? "hsl(142 60% 45% / 0.3)" : "hsl(0 72% 50% / 0.3)",
          }}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium text-foreground truncate">{item.name}</span>
            {item.bestseller && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-tag-bestseller text-tag-bestseller font-medium flex-shrink-0">
                ⭐
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[11px] text-muted-foreground truncate">{item.description}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-[11px]">{spiceIndicator(item.spiceLevel)}</span>
        <span className="text-sm font-semibold text-primary">₹{item.price}</span>
      </div>
    </div>
  );
};

export default MenuCard;
