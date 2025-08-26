import { Car, Clock, Shield, Users, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import serviceIcon from "@/assets/service-icon.jpg";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "ნასვამი მძღოლების მომსახურება",
      description: "თუ ვერ მართავთ ავტომობილს, ჩვენი პროფესიონალი მძღოლი მოვა და უსაფრთხოდ მიგიყვანთ სახლში",
      features: ["24/7 ხელმისაწვდომობა", "პროფესიონალი მძღოლები", "სრული უსაფრთხოება"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "სწრაფი მოძებნა",
      description: "ჩვენი ოპერატორი პასუხობს ზარს 30 წამში და 2 წუთში პოულობს ხელმისაწვდომ მძღოლს",
      features: ["2 წუთში პასუხი", "ქალაქის ყველა რაიონში", "სწრაფი სერვისი"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "სრული კონფიდენციალურობა",
      description: "თქვენი პირადი ინფორმაცია და მდებარეობა სრულად დაცულია. არავინ გაიგებს ჩვენი სერვისის გამოყენებას",
      features: ["სრული ანონიმურობა", "დაცული მონაცემები", "ღია შეთანხმება"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "გამოცდილი გუნდი",
      description: "ჩვენი ყველა მძღოლი გავლილია სპეციალურ ტრენინგს და აქვს მრავალწლიანი გამოცდილება",
      features: ["გამოცდილი მძღოლები", "ტრენინგ ქორსები", "სანდო გუნდი"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "ქალაქის ყველა რაიონში",
      description: "ვმუშაობთ თბილისის ყველა რაიონსა და გარეუბანში. ასევე ხელმისაწვდომია ქალაქგარეთ მგზავრობა",
      features: ["მთელი თბილისი", "გარეუბნები", "ქალაქგარეთ მგზავრობა"]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "მარტივი დაკავშირება",
      description: "შეგიძლიათ დაგვიკავშირდეთ ზარით, SMS-ით ან ონლაინ ფორმის შევსებით",
      features: ["ტელეფონი", "SMS", "ონლაინ ფორმა"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <img src={serviceIcon} alt="სერვისის იკონა" className="w-12 h-12 rounded-lg" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ჩვენი სერვისები
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ვთავazობთ სრულ სპექტრს უსაფრთხო ტრანსპორტირების სერვისებისა, 
            რომელიც მორგებულია თქვენს საჭიროებებზე
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-spring">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              variant="call" 
              size="xl"
              onClick={() => window.open('tel:+995595100334')}
              className="px-12 min-h-[44px]"
              aria-label="დარეკვა ნომერზე 595 100 334"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              595 100 334
            </Button>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 min-h-[44px]"
              aria-label="გადასვლა კონტაქტის სექციაზე"
            >
              ონლაინ მოთხოვნა
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            24 საათის განმავლობაში ხელმისაწვდომი
          </p>
        </div>
      </div>
    </section>
  );
};