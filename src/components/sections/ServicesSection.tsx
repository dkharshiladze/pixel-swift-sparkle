import { Car, Clock, Shield, Users, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import serviceIcon from "@/assets/service-icon.webp";

export const ServicesSection = () => {
const services = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "მძღოლი გამოძახებით",
    description: "თუ ნასვამი ხარ, დაღლილი ან უბრალოდ გინდა უსაფრთხოდ დაბრუნდე – ჩვენ დაგეხმარებით. ფხიზელი მძღოლი გამოძახებით მოდის შენს ლოკაციაზე და თქვენივე ავტომობილით მიგიყვანთ დანიშნულების ადგილზე",
    features: ["24/7 გამოძახება", "სანდო და გამოცდილი მძღოლები", "უსაფრთხო მგზავრობა"]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "სწრაფი რეაგირება",
    description: "ჩვენთან დიდხანს ლოდინი არ მოგიწევს. ოპერატორი 2 წუთში გადაგამისამართებთ უახლოეს მძღოლთან.",
    features: ["მაქსიმალურად სწრაფი სერვისი", "ყველა უბანში", "დაგვიანების გარეშე"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "უსაფრთხოება და კონფიდენციალურობა",
    description: "ჩვენთვის მთავარი შენი უსაფრთხოებაა. ფხიზელი მძღოლის მომსახურება სრულად დაცულია",
    features: ["ანონიმურობა", "დაცული მონაცემები", "სანდოობა"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "გამოცდილი მძღოლები",
    description: "ჩვენი გუნდის ყველა მძღოლს აქვს დიდი გამოცდილება. შეგიძლია დარწმუნებული იყო, რომ საჭესთან პროფესიონალია.",
    features: ["მრავალწლიანი გამოცდილება", "სანდო გუნდი", "პროფესიონალური სერვისი"]
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "მომსახურება თბილისში და მის ფარგლებს გარეთ",
    description: "მძღოლი გამოძახებით ხელმისაწვდომია არა მხოლოდ თბილისის ყველა უბანში, არამედ ქალაქგარეთ მგზავრობისთვისაც. სადაც არ უნდა იყო, ჩვენ მოვალთ.",
    features: ["თბილისის ყველა რაიონი", "გარეუბნები", "ქალაქგარეთ მგზავრობა"]
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "მარტივი დაკავშირება",
    description: "ზარი, SMS ან ონლაინ ფორმა. საკმარისია ერთი ზარი, და შენი მძღოლი უკვე გზაშია.",
    features: ["დარეკე 591 924 924", "SMS შეკვეთა", "ონლაინ ფორმა"]
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
              ჩვენი სერვისები
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            24 საათიანი სერვისი გამოცდილი მძღოლებით - 
            ქალაქის ყველა უბანში და ქალაქგარეთ მგზავრობისთვის
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
