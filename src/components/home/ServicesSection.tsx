import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Home,
  Sparkles,
  Building2,
  TruckIcon,
  HardHat,
  BedDouble,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "General Cleaning",
    description: "Regular maintenance cleaning for your home. Perfect for weekly or bi-weekly schedules.",
    features: ["Dusting & Vacuuming", "Kitchen Cleaning", "Bathroom Sanitization"],
    price: "From ₱500",
    link: "/services/general-cleaning",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough top-to-bottom cleaning. Ideal for spring cleaning or special occasions.",
    features: ["Detailed Scrubbing", "Hard-to-Reach Areas", "Appliance Cleaning"],
    price: "From ₱1,200",
    link: "/services/deep-cleaning",
  },
  {
    icon: BedDouble,
    title: "Airbnb Cleaning",
    description: "Fast turnaround cleaning for rental properties. Guest-ready guarantee.",
    features: ["Quick Turnaround", "Linen Change", "Inspection Report"],
    price: "From ₱800",
    link: "/services/airbnb-cleaning",
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional cleaning for commercial spaces. Flexible scheduling available.",
    features: ["After-Hours Service", "Desk Sanitization", "Restroom Maintenance"],
    price: "Custom Quote",
    link: "/services/office-cleaning",
  },
  {
    icon: TruckIcon,
    title: "Move In/Out",
    description: "Complete cleaning for moving situations. Leave or enter a spotless space.",
    features: ["Empty Room Cleaning", "Cabinet Interior", "Window Cleaning"],
    price: "From ₱1,500",
    link: "/services/move-cleaning",
  },
  {
    icon: HardHat,
    title: "Post-Construction",
    description: "Heavy-duty cleaning after renovations. Dust and debris removal.",
    features: ["Dust Removal", "Paint Splatter", "Floor Polishing"],
    price: "Custom Quote",
    link: "/services/construction-cleaning",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional cleaning solutions tailored to your needs. All services include eco-friendly products and trained staff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group p-6 hover:shadow-hover transition-all duration-300 animate-scale-in bg-gradient-card border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                <h3 className="font-heading font-semibold text-xl mb-2">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-semibold text-primary">{service.price}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={service.link}>Learn More →</Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
