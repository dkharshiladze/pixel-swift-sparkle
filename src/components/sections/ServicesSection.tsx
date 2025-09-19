import { Car, Clock, Shield, Users, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import serviceIcon from "@/assets/service-icon.webp";

export const ServicesSection = () => {
 const services = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "მძღოლი გამოძახებით 24/7",
    description: "საჭესთან ვერ ჯდებით? ჩვენი ფხიზელი მძღოლი გამოძახებით მოვა ადგილზე და უსაფრთხოდ მიგიყვანთ ნებისმიერ ადგილას.",
    features: ["24/7 გამოძახება", "უსაფრთხო მგზავრობა", "სანდო მომსახურება"]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "სწრაფი გამოძახება",
    description: "ოპერატორი პასუხობს ზარს 30 წამში და 2 წუთში პოულობს უახლოეს მძღოლს. თქვენი მგზავრობა სწრაფად იწყება.",
    features: ["2 წუთში მძღოლი", "ყველა რაიონში", "მაქსიმალური სისწრაფე"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "სრული უსაფრთხოება და კონფიდენციალურობა",
    description: "ფხიზელი მძღოლის სერვისი იცავს თქვენს პირად ინფორმაციას. ნასვამი მძღოლის მომსახურება სრულიად ანონიმურია.",
    features: ["სრული კონფიდენციალურობა", "დაცული მონაცემები", "უსაფრთხო მგზავრობა"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "გამოცდილი ფხიზელი მძღოლები",
    description: "ყველა მძღოლს აქვს მრავალწლიანი გამოცდილება. სანდო სერვისი, რომელიც უზრუნველყოფს უსაფრთხო მგზავრობას.",
    features: ["გამოცდილი გუნდი", "პროფესიონალიზმი", "სანდოობა"]
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "მომსახურება თბილისის ყველა რაიონში",
    description: "მძღოლი გამოძახებით ხელმისაწვდომია მთელ თბილისში და გარეუბნებში. ასევე ვთავაზობთ ქალაქგარეთ მგზავრობას.",
    features: ["თბილისის ყველა რაიონი", "გარეუბნები", "ქალაქგარეთ მგზავრობა"]
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "მარტივი დაკავშირება",
    description: "დაგვირეკეთ ნომერზე და მძღოლი გამოძახებით უკვე გზაშია. ასევე შესაძლებელია SMS და ონლაინ შეკვეთა.",
    features: ["ტელეფონი", "SMS", "ონლაინ ფორმა"]
  }
];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <img src={serviceIcon} alt="სერვისის იკონა" className="w-12 h-12 rounded-lg" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ფხიზელი მძღოლი - ჩვენი სერვისები
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            სანდო 24 საათიანი სერვისი გამოცდილი მძღოლებით სრული კონფიდენციალურობით - 
            ქალაქის ყველა რაიონში და ქალაქგარეთ მგზავრობისთვის
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

      </div>
    </section>
  );
};
