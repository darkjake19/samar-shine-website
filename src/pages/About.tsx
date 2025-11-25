import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Shield, Heart, Leaf, Award, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "We're insured, bonded, and background-checked. Your home and belongings are safe with us.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "100% satisfaction guarantee. If you're not happy, we'll make it right—no questions asked.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "We use environmentally safe, non-toxic cleaning products that are safe for kids and pets.",
  },
  {
    icon: Award,
    title: "Quality Standards",
    description: "Every team member is trained to our high standards and uses proven cleaning methods.",
  },
  {
    icon: Users,
    title: "Local Team",
    description: "We're a local Samar business, supporting our community and providing reliable local jobs.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your schedule with same-day service available and flexible booking options.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                About Clean & Fresh Samar
              </h1>
              <p className="text-xl text-muted-foreground">
                Your trusted partner for professional house cleaning services in Samar, Philippines.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-card">
                <h2 className="font-heading font-bold text-3xl mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2014, Clean & Fresh Samar began with a simple mission: to provide professional, affordable, and reliable cleaning services to homes and businesses throughout Samar. What started as a small team of three has grown into a trusted cleaning company serving over 500 satisfied clients.
                  </p>
                  <p>
                    We understand that inviting someone into your home requires trust. That's why we carefully screen, train, and insure every member of our team. Our cleaners aren't just employees—they're professionals who take pride in their work and treat your home with the same care they would their own.
                  </p>
                  <p>
                    As a locally-owned business, we're committed to supporting our community. We use eco-friendly products, provide fair wages to our staff, and continuously invest in training and equipment to ensure we deliver the highest quality service possible.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading font-bold text-4xl mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-muted-foreground">
                We're more than just a cleaning service. We're your partner in maintaining a healthy, happy home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="p-6 hover:shadow-hover transition-all bg-card animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { number: "10+", label: "Years in Business" },
                { number: "500+", label: "Happy Clients" },
                { number: "15+", label: "Trained Professionals" },
                { number: "5,000+", label: "Cleanings Completed" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-bold text-5xl text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-4xl mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                To provide exceptional cleaning services that give our clients more time to focus on what matters most—their families, their work, and their passions. We believe everyone deserves a clean, healthy home, and we're here to make that happen with professionalism, care, and a commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-6">
                Our Team
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Every member of our team is carefully selected, thoroughly trained, and dedicated to delivering exceptional service. We invest in ongoing training to ensure our cleaners stay up-to-date with the latest cleaning techniques and safety protocols.
              </p>
              <Card className="p-8 bg-gradient-card max-w-2xl mx-auto">
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Background Checked</h3>
                      <p className="text-sm text-muted-foreground">
                        All team members undergo thorough background checks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Professionally Trained</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive training on cleaning techniques and customer service
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Insured & Bonded</h3>
                      <p className="text-sm text-muted-foreground">
                        Full insurance coverage for your peace of mind
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
