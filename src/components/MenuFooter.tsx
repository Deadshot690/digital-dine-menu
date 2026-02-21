import { Phone, Instagram, MapPin } from "lucide-react";

const MenuFooter = () => {
  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-2xl mx-auto px-5 py-8 space-y-6">
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="Directions"
          >
            <MapPin className="w-4 h-4" />
          </a>
        </div>
        <p className="text-center text-muted-foreground text-xs font-body">
          123 Gold Avenue, Downtown · Open Tue–Sun, 6 PM – 11 PM
        </p>
        <a
          href="tel:+15551234567"
          className="flex items-center justify-center gap-2 mx-auto w-full max-w-xs py-3 rounded-full bg-primary text-primary-foreground font-semibold font-body text-sm hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          Call Server
        </a>
        <p className="text-center text-muted-foreground/50 text-[10px] font-body">
          © 2026 Aurum Fine Dining. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MenuFooter;
