import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional house cleaning"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Trusted by 500+ Homes in Samar</span>
            </div>

            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              Professional House Cleaning Services in{" "}
              <span className="text-primary">Samar</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              Affordable • Reliable • Trusted Local Cleaners
            </p>

            <div className="space-y-3">
              {["100% Satisfaction Guaranteed", "Eco-friendly Products", "Insured & Trained Staff"].map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary text-lg h-14" asChild>
                <Link to="/contact">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "5★", label: "Average Rating" },
                { number: "10+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-heading font-bold text-3xl text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Card */}
          <div className="relative hidden lg:block animate-slide-up">
            <div className="relative rounded-3xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Clean and fresh home interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-card/95 backdrop-blur-sm p-6 rounded-2xl shadow-card">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      Same Day Service Available
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Book before 12PM for same-day cleaning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
