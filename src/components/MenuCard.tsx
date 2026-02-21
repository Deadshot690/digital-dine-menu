import type { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

const tagConfig: Record<string, { emoji: string; colorClass: string; bgClass: string }> = {
  Vegan: { emoji: "🌱", colorClass: "text-tag-vegan", bgClass: "bg-tag-vegan" },
  Vegetarian: { emoji: "🌿", colorClass: "text-tag-vegan", bgClass: "bg-tag-vegan" },
  "Gluten-Free": { emoji: "🌾", colorClass: "text-tag-gf", bgClass: "bg-tag-gf" },
  Spicy: { emoji: "🌶️", colorClass: "text-tag-spicy", bgClass: "bg-tag-spicy" },
};

const MenuCard = ({ item, onClick }: MenuCardProps) => {
  return (
    <button
      onClick={() => onClick(item)}
      className="w-full flex gap-4 p-4 rounded-2xl bg-card hover:bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300 text-left group"
    >
      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-base font-semibold text-foreground leading-tight">
              {item.name}
            </h3>
            <span className="text-primary font-semibold font-body text-sm whitespace-nowrap">
              ₹{item.price}
            </span>
          </div>
          <p className="text-muted-foreground text-xs mt-1 line-clamp-2 font-body leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="flex gap-1.5 mt-2">
          {item.tags.map((tag) => {
            const conf = tagConfig[tag];
            return (
              <span
                key={tag}
                className={`${conf.bgClass} ${conf.colorClass} text-[10px] px-2 py-0.5 rounded-full font-medium font-body`}
              >
                {conf.emoji} {tag}
              </span>
            );
          })}
        </div>
      </div>
    </button>
  );
};

export default MenuCard;
