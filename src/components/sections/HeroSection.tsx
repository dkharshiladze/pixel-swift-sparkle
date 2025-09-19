import { Phone, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.webp";

export const HeroSection = () => {
  const handleQuickCall = () => {
    window.open('tel:+9955951924924');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-secondary" />
              <span className="text-secondary font-medium">სანდო სერვისი 2014 წლიდან</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              ფხიზელი მძღოლის გამოძახება თბილისში - 24/7
              <span className="block text-2xl md:text-3xl font-normal text-primary-foreground/90 mt-2">
                24 საათიანი სერვისი
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg mx-auto lg:mx-0">
              უსაფრთხო და სანდო მძღოლების სერვისი ნებისმიერ დროს. 
              ჩვენი ოპერატორი დაგიკავშირდებათ 2 წუთში.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-medium">24/7 მუშაობა</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="font-medium">სრული კონფიდენციალურობა</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Star className="w-5 h-5 text-secondary" />
                <span className="font-medium">ღირსეული ფასები</span>
              </div>
            </div>

            {/* Quick Call Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="call" 
                size="xl"
                onClick={handleQuickCall}
                className="text-xl px-8 min-h-[44px]"
                aria-label="დარეკვა ნომერზე 595 100 334"
              >
                <Phone className="w-6 h-6" aria-hidden="true" />
                595 100 334
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
