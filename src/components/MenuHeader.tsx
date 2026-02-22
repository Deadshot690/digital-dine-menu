import logo from "@/assets/logo.png";

const MenuHeader = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
        <img src={logo} alt="SK Chinese Corner" className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h1 className="text-lg font-bold text-foreground leading-tight">SK Chinese Corner</h1>
          <p className="text-xs text-muted-foreground">Authentic Indo-Chinese Delights</p>
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;
