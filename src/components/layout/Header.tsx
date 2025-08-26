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
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="მთავარი ნავიგაცია">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-smooth min-h-[44px] px-4 py-2"
              aria-label="გადასვლა სერვისების სექციაზე"
            >
              სერვისები
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth min-h-[44px] px-4 py-2"
              aria-label="გადასვლა ჩვენს შესახებ სექციაზე"
            >
              ჩვენს შესახებ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth min-h-[44px] px-4 py-2"
              aria-label="გადასვლა კონტაქტების სექციაზე"
            >
              კონტაქტი
            </button>
          </nav>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="call" 
              size="lg"
              className="hidden sm:flex min-h-[44px]"
              onClick={() => window.open('tel:+995595100334')}
              aria-label="დარეკვა ნომერზე 595 100 334"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              595 100 334
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden min-w-[44px] min-h-[44px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "მენიუს დახურვა" : "მენიუს გახსნა"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t bg-background/98 backdrop-blur-md">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="მობაილური ნავიგაცია">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-smooth py-3 px-4 min-h-[44px]"
                aria-label="გადასვლა სერვისების სექციაზე"
              >
                სერვისები
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-smooth py-3 px-4 min-h-[44px]"
                aria-label="გადასვლა ჩვენს შესახებ სექციაზე"
              >
                ჩვენს შესახებ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-smooth py-3 px-4 min-h-[44px]"
                aria-label="გადასვლა კონტაქტების სექციაზე"
              >
                კონტაქტი
              </button>
              <Button 
                variant="call" 
                size="lg"
                className="w-full justify-center mt-4 min-h-[44px]"
                onClick={() => window.open('tel:+995595100334')}
                aria-label="დარეკვა ნომერზე 595 100 334"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                595 100 334
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};