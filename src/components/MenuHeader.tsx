
import logo from "@/assets/logo.png";

const MenuHeader = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-2xl mx-auto px-5 pt-8 pb-4 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <img src={logo} alt="Aurum logo" className="w-7 h-7 object-cover" />
          <span className="font-serif text-sm text-muted-foreground tracking-widest">Aurum</span>
          <span className="font-display text-2xl font-semibold text-foreground ml-2">Aurum</span>
        </div>
        <span className="font-body text-xs text-muted-foreground tracking-[0.2em] uppercase">Fine Dining</span>
      </div>
    </header>
  );
};

export default MenuHeader;
