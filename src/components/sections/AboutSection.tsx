import { Shield, Users, Award, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import safetyTrust from "@/assets/safety-trust.jpg";

export const AboutSection = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "5000+", label: "კმაყოფილი კლიენტი" },
    { icon: <Clock className="w-6 h-6" />, number: "24/7", label: "ხელმისაწვდომობა" },
    { icon: <Award className="w-6 h-6" />, number: "5", label: "წლიანი გამოცდილება" },
    { icon: <Shield className="w-6 h-6" />, number: "100%", label: "კონფიდენციალურობა" }
  ];

  const testimonials = [
    {
      name: "ნინო მ.",
      text: "ძალიან სწრაფი და სანდო სერვისი! მძღოლმა 5 წუთში მოაღწია და უსაფრთხოდ მიმიყვანა სახლში.",
      rating: 5
    },
    {
      name: "გიორგი კ.",
      text: "რეკომენდირებული! კონფიდენციალურობა სრულად დაცული და ძალიან კეთილშობილი მძღოლები.",
      rating: 5
    },
    {
      name: "ანა ვ.",
      text: "24 საათის სერვისია ნამდვილად. ღამე 2 საათზე გამოვიძახე და რამდენიმე წუთში მოვიდნენ.",
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ჩვენს შესახებ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ფხიზელი მძღოლი - სანდო და უსაფრთხო ტრანსპორტირების სერვისი, 
            რომელიც 2019 წლიდან ემსახურება ქართულ საზოგადოებას
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={safetyTrust} 
                alt="Safety and Trust" 
                className="w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 gradient-card shadow-card text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                რატომ ვართ ვარჩევის საუკეთესო ვარიანტი?
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ჩვენ ვართ პირველი კომპანია საქართველოში, რომელმაც შემოიღო 
                  ნასვამი მძღოლების მომსახურების ინოვაციური სისტემა. ჩვენი მიზანია 
                  თქვენი უსაფრთხოება და კომფორტი.
                </p>
                <p>
                  ჩვენი ყველა მძღოლი გავლილია სპეციალურ ტრენინგს, აქვს მოქმედი 
                  მოწმობა და მრავალწლიანი გამოცდილება. ვართ ლიცენზირებული 
                  კომპანია და ვგვაქვს სრული იურიდიული უზრუნველყოფა.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">ჩვენი უპირატესობები:</h4>
              <div className="space-y-3">
                {[
                  "სწრაფი რეაგირება - 2 წუთში პასუხი",
                  "სრული კონფიდენციალურობა და ანონიმურობა", 
                  "ღირსეული ფასები და გამჭვირვალე ტარიფები",
                  "24/7 ხელმისაწვდომობა ყველა დღეს",
                  "ქალაქის ყველა რაიონისა და გარეუბნის მომსახურება",
                  "პროფესიონალი და გამოცდილი მძღოლები"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            რას ამბობენ ჩვენი კლიენტები
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 gradient-card shadow-card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-secondary rounded-full mr-1"></div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};