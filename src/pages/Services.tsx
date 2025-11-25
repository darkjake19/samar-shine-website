import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Home,
  Sparkles,
  Building2,
  TruckIcon,
  HardHat,
  BedDouble,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "general-cleaning",
    icon: Home,
    title: "General Cleaning",
    description: "Perfect for regular home maintenance and keeping your space consistently clean.",
    price: "From ₱500",
    duration: "2-3 hours",
    includes: [
      "Dusting all surfaces",
      "Vacuuming and mopping floors",
      "Kitchen cleaning and sanitization",
      "Bathroom cleaning and disinfection",
      "Trash removal",
      "Making beds and organizing",
    ],
    ideal: "Weekly or bi-weekly cleaning schedules",
  },
  {
    id: "deep-cleaning",
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough top-to-bottom cleaning that reaches every corner of your home.",
    price: "From ₱1,200",
    duration: "4-6 hours",
    includes: [
      "Everything in General Cleaning",
      "Baseboards and door frames",
      "Light fixtures and ceiling fans",
      "Inside appliances (oven, microwave, fridge)",
      "Cabinet exteriors",
      "Window sills and tracks",
      "Behind furniture cleaning",
    ],
    ideal: "Spring cleaning, moving in, or special occasions",
  },
  {
    id: "airbnb-cleaning",
    icon: BedDouble,
    title: "Airbnb & Rental Cleaning",
    description: "Fast turnaround cleaning designed specifically for short-term rentals.",
    price: "From ₱800",
    duration: "2-3 hours",
    includes: [
      "Full cleaning between guests",
      "Fresh linen change",
      "Towel restocking",
      "Amenities check and restock",
      "Inspection report with photos",
      "Same-day turnaround available",
    ],
    ideal: "Airbnb hosts, vacation rentals, and property managers",
  },
  {
    id: "office-cleaning",
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional cleaning services for commercial and office spaces.",
    price: "Custom Quote",
    duration: "Varies",
    includes: [
      "Desk and workstation cleaning",
      "Restroom sanitization",
      "Kitchen/break room cleaning",
      "Floor vacuuming and mopping",
      "Trash removal and recycling",
      "Window and glass cleaning",
    ],
    ideal: "Offices, retail spaces, and commercial buildings",
  },
  {
    id: "move-cleaning",
    icon: TruckIcon,
    title: "Move In / Move Out Cleaning",
    description: "Complete cleaning for empty properties during moving transitions.",
    price: "From ₱1,500",
    duration: "4-6 hours",
    includes: [
      "Deep cleaning of empty rooms",
      "Cabinet and closet interiors",
      "Appliance deep cleaning",
      "Window cleaning inside and out",
      "Wall spot cleaning",
      "Floor deep cleaning and polishing",
    ],
    ideal: "Tenants, landlords, and property managers",
  },
  {
    id: "construction-cleaning",
    icon: HardHat,
    title: "Post-Construction Cleaning",
    description: "Heavy-duty cleaning after renovation or construction work.",
    price: "Custom Quote",
    duration: "Varies",
    includes: [
      "Dust and debris removal",
      "Paint splatter cleaning",
      "Window and glass cleaning",
      "Floor scrubbing and polishing",
      "Fixture cleaning and polishing",
      "Final walkthrough inspection",
    ],
    ideal: "After renovations, remodeling, or new construction",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Our Cleaning Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional cleaning solutions for every need. All services include eco-friendly products, trained staff, and satisfaction guarantee.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="p-8 md:p-10 hover:shadow-hover transition-all animate-fade-in bg-gradient-card"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="bg-primary/10 p-4 rounded-xl">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <h2 className="font-heading font-bold text-3xl mb-2">
                              {service.title}
                            </h2>
                            <p className="text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-6">
                          <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg">
                            <span className="font-semibold">{service.price}</span>
                          </div>
                          <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-lg">
                            <span className="font-semibold">{service.duration}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">Ideal For:</h3>
                          <p className="text-muted-foreground">{service.ideal}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                        <ul className="space-y-3">
                          {service.includes.map((item) => (
                            <li key={item} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-3 mt-6">
                          <Button className="bg-gradient-primary" asChild>
                            <Link to="/contact">Book This Service</Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link to="/contact">Get Custom Quote</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation. We'll help you choose the perfect cleaning service for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+639123456789">Call: +63 912 345 6789</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
