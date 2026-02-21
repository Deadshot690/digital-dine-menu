import { X } from "lucide-react";
import type { MenuItem } from "@/data/menuData";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface MenuModalProps {
  item: MenuItem | null;
  open: boolean;
  onClose: () => void;
}

const tagConfig: Record<string, { emoji: string; colorClass: string; bgClass: string }> = {
  Vegan: { emoji: "🌱", colorClass: "text-tag-vegan", bgClass: "bg-tag-vegan" },
  Vegetarian: { emoji: "🌿", colorClass: "text-tag-vegan", bgClass: "bg-tag-vegan" },
  "Gluten-Free": { emoji: "🌾", colorClass: "text-tag-gf", bgClass: "bg-tag-gf" },
  Spicy: { emoji: "🌶️", colorClass: "text-tag-spicy", bgClass: "bg-tag-spicy" },
};

const MenuModal = ({ item, open, onClose }: MenuModalProps) => {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="bg-card border-border p-0 overflow-hidden max-w-md mx-auto rounded-2xl gap-0">
        <DialogTitle className="sr-only">{item.name}</DialogTitle>
        <div className="relative aspect-[4/3] w-full">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-5 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-display text-xl font-semibold text-foreground">
              {item.name}
            </h2>
            <span className="text-primary font-bold font-body text-lg">
              ₹{item.price}
            </span>
          </div>
          <p className="text-muted-foreground text-sm font-body leading-relaxed">
            {item.description}
          </p>
          <div className="flex gap-2 flex-wrap">
            {item.tags.map((tag) => {
              const conf = tagConfig[tag];
              return (
                <span
                  key={tag}
                  className={`${conf.bgClass} ${conf.colorClass} text-xs px-2.5 py-1 rounded-full font-medium font-body`}
                >
                  {conf.emoji} {tag}
                </span>
              );
            })}
          </div>
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 font-body">
              Ingredients
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {item.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-lg font-body"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;
