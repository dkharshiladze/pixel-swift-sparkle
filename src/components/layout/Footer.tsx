import { Phone, Facebook, Clock, Shield, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">ფ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ფხიზელი მძღოლი</h3>
                <p className="text-primary-foreground/80 text-sm">24 საათიანი სერვისი</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              სანდო და უსაფრთხო მძღოლების სერვისი, რომელიც 2019 წლიდან 
              ემსახურება ქართულ საზოგადოებას სრული კონფიდენციალურობით.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">სწრაფი ლინკები</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth min-h-[44px] py-2"
                  aria-label="გადასვლა სერვისების სექციაზე"
                >
                  სერვისები
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth min-h-[44px] py-2"
                  aria-label="გადასვლა ჩვენს შესახებ სექციაზე"
                >
                  ჩვენს შესახებ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth min-h-[44px] py-2"
                  aria-label="გადასვლა კონტაქტის სექციაზე"
                >
                  კონტაქტი
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://www.facebook.com/pxizelimdzgoli.ge/', '_blank')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth min-h-[44px] py-2"
                  aria-label="გახსნა Facebook გვერდი ახალ ფანჯარაში"
                >
                  Facebook
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">კონტაქტი</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span>595 100 334</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-secondary" />
                <span>24/7 მუშაობა</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>თბილისი და გარეუბნები</span>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="w-4 h-4 text-secondary" />
                <span>@pxizelimdzgoli.ge</span>
              </div>
            </div>
          </div>

          {/* Trust & Security */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">ნდობა და უსაფრთხოება</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-secondary" />
                <span>ლიცენზირებული კომპანია</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-secondary" />
                <span>სრული კონფიდენციალურობა</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-secondary" />
                <span>დაზღვეული სერვისი</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-secondary" />
                <span>გამოცდილი მძღოლები</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2024 ფხიზელი მძღოლი. ყველა უფლება დაცულია.
            </div>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
              <button 
                className="hover:text-primary-foreground transition-smooth min-h-[44px] py-2"
                aria-label="კონფიდენციალურობის პოლიტიკის ნახვა"
              >
                კონფიდენციალურობის პოლიტიკა
              </button>
              <button 
                className="hover:text-primary-foreground transition-smooth min-h-[44px] py-2"
                aria-label="სერვისის პირობების ნახვა"
              >
                სერვისის პირობები
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Call Bar */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <button 
              onClick={() => window.open('tel:+995595100334')}
              className="flex items-center gap-3 text-secondary-foreground hover:scale-105 transition-spring min-h-[44px] px-4 py-2"
              aria-label="საგანგებო შემთხვევებისთვის დარეკვა ნომერზე 595 100 334"
            >
              <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
              <span className="font-bold text-lg">საგანგებო შემთხვევებისთვის: 595 100 334</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};