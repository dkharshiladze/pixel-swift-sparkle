import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ფ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">ფხიზელი მძღოლი</h1>
              <p className="text-xs text-muted-foreground">24 საათიანი სერვისი</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              სერვისები
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              ჩვენს შესახებ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              კონტაქტი
            </button>
          </nav>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="call" 
              size="lg"
              className="hidden sm:flex"
              onClick={() => window.open('tel:+995595100334')}
            >
              <Phone className="w-4 h-4" />
              595 100 334
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-background/98 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                სერვისები
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                ჩვენს შესახებ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                კონტაქტი
              </button>
              <Button 
                variant="call" 
                size="lg"
                className="w-full justify-center mt-4"
                onClick={() => window.open('tel:+995595100334')}
              >
                <Phone className="w-4 h-4" />
                595 100 334
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};