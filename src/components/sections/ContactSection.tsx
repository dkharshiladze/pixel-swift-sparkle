import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const ContactSection = () => {

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "ტელეფონი",
      details: ["591 924 924", "+995 591 924 924"],
      action: () => window.open('tel:+995591924924')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "სამუშაო საათები",
      details: ["24 საათი, 7 დღეში", "ყოველდღიური მომსახურება"]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "მომსახურების არეალი",
      details: ["თბილისი და გარეუბნები", "ქალაქგარეთ მგზავრობა"]
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: "სოციალური ქსელები",
      details: ["Facebook", "@pxizelimdzgoli.ge"],
      action: () => window.open('https://www.facebook.com/pxizelimdzgoli.ge/', '_blank')
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            კონტაქტი
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            დაგვიკავშირდით ნებისმიერ დროს ნებისმიერი კითხვით. 
            ჩვენი ოპერატორები მზად არიან დაგეხმარონ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`p-6 gradient-card shadow-card transition-smooth ${
                  info.action ? 'cursor-pointer hover:shadow-elegant' : ''
                }`}
                onClick={info.action}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>

        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-accent shadow-elegant border-secondary/20">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
              საგანგებო შემთხვევებისთვის
            </h3>
            <p className="text-secondary-foreground/90 mb-6 text-lg">
              ფირებს რთული იყოს მოღნით თქვენთვის ამ ნომერს. ჩვენ ყოველთვის მზად ვართ
            </p>
            <Button 
              variant="call" 
              size="xl"
              onClick={() => window.open('tel:+995591924924')}
              className="text-xl px-12 min-h-[44px]"
              aria-label="გამოიძახე მძღოლი 591 924 924"
            >
              <Phone className="w-6 h-6" aria-hidden="true" />
              591 924 924
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
