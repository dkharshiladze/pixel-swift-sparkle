import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      toast({
        title: "შეცდომა",
        description: "გთხოვთ, შეიყვანეთ ტელეფონის ნომერი",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "წერილი გაგზავნილია!",
      description: "ჩვენი ოპერატორი დაგიკავშირდებათ უახლოეს დროში",
      variant: "default"
    });
    
    setFormData({ name: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "ტელეფონი",
      details: ["595 100 334", "+995 595 100 334"],
      action: () => window.open('tel:+995595100334')
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
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
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

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              საკონტაქტო ინფორმაცია
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`p-6 gradient-card shadow-card transition-smooth ${
                  info.action ? 'cursor-pointer hover:shadow-elegant' : ''
                }`}
                onClick={info.action}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}

            {/* Quick Call Button */}
            <Button 
              variant="call" 
              size="xl"
              className="w-full min-h-[44px]"
              onClick={() => window.open('tel:+995595100334')}
              aria-label="დაუყოვნებლივ დარეკვა ნომერზე 595 100 334"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              დაუყოვნებლივ დაზარეთ
            </Button>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 gradient-card shadow-elegant">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                გაგზავნეთ შეტყობინება
              </h3>
              <p className="text-muted-foreground mb-8">
                შეავსეთ ფორმა და ჩვენი ოპერატორი დაგიკავშირდებათ უახლოეს დროში
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      სახელი (არასავალდებულო)
                    </label>
                    <Input
                      type="text"
                      placeholder="თქვენი სახელი"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      ტელეფონის ნომერი *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+995 5__ ___ ___"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    შეტყობინება (არასავალდებულო)
                  </label>
                  <Textarea
                    placeholder="მოგვიყევით თქვენი მოთხოვნის შესახებ..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="success" 
                  size="xl" 
                  className="w-full min-h-[44px]"
                  aria-label="შეტყობინების გაგზავნა"
                >
                  გაგზავნა
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-6">
                * ჩვენთან კონფიდენციალურობა სრულად დაცულია
              </p>
            </Card>
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
              onClick={() => window.open('tel:+995595100334')}
              className="text-xl px-12 bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 min-h-[44px]"
              aria-label="საგანგებო შემთხვევებისთვის დარეკვა ნომერზე 595 100 334"
            >
              <Phone className="w-6 h-6" aria-hidden="true" />
              595 100 334
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};