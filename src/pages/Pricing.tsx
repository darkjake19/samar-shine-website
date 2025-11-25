import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Info } from "lucide-react";

const packages = [
  {
    name: "Studio / 1BR",
    sqm: "Up to 30 sqm",
    general: "₱500",
    deep: "₱1,200",
    features: [
      "1 Bedroom",
      "1 Bathroom",
      "Kitchen & Living Area",
      "Basic Cleaning Supplies Included",
    ],
  },
  {
    name: "2 Bedroom",
    sqm: "30-50 sqm",
    general: "₱800",
    deep: "₱1,800",
    features: [
      "2 Bedrooms",
      "1-2 Bathrooms",
      "Kitchen & Living Area",
      "Dining Area",
    ],
    popular: true,
  },
  {
    name: "3 Bedroom",
    sqm: "50-80 sqm",
    general: "₱1,200",
    deep: "₱2,500",
    features: [
      "3 Bedrooms",
      "2 Bathrooms",
      "Kitchen & Living Area",
      "Dining Area",
    ],
  },
  {
    name: "Large House",
    sqm: "80+ sqm",
    general: "Custom",
    deep: "Custom",
    features: [
      "4+ Bedrooms",
      "Multiple Bathrooms",
      "Multiple Living Areas",
      "Custom Quote Required",
    ],
  },
];

const addOns = [
  { name: "Inside Refrigerator", price: "₱200" },
  { name: "Inside Oven", price: "₱200" },
  { name: "Sofa Cleaning (per seat)", price: "₱150" },
  { name: "Carpet Shampoo (per sqm)", price: "₱50" },
  { name: "Window Cleaning (inside & out)", price: "₱100/window" },
  { name: "Balcony/Patio Cleaning", price: "₱300" },
  { name: "Laundry Service", price: "₱200/load" },
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No surprises. Just honest, affordable pricing for quality cleaning services.
            </p>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl mb-4">
                Service Packages
              </h2>
              <p className="text-muted-foreground">
                Choose the package that fits your home size
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
              {packages.map((pkg, index) => (
                <Card
                  key={pkg.name}
                  className={`p-6 hover:shadow-hover transition-all animate-scale-in ${
                    pkg.popular ? "border-2 border-primary bg-gradient-card" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {pkg.popular && (
                    <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="font-heading font-bold text-2xl mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.sqm}</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">
                        General Cleaning
                      </div>
                      <div className="font-bold text-2xl text-primary">
                        {pkg.general}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">
                        Deep Cleaning
                      </div>
                      <div className="font-bold text-2xl text-secondary">
                        {pkg.deep}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={pkg.popular ? "w-full bg-gradient-primary" : "w-full"}
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact">Book Now</Link>
                  </Button>
                </Card>
              ))}
            </div>

            {/* Info Box */}
            <Card className="max-w-3xl mx-auto p-6 bg-secondary/10 border-secondary/20">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Need a custom quote?</p>
                  <p className="text-muted-foreground">
                    For larger homes, commercial spaces, or special requirements, contact us for a personalized quote. We'll assess your needs and provide accurate pricing.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Add-Ons Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl mb-4">
                Optional Add-Ons
              </h2>
              <p className="text-muted-foreground">
                Enhance your cleaning service with these additional options
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {addOns.map((addon) => (
                <Card key={addon.name} className="p-4 flex items-center justify-between">
                  <span className="font-medium">{addon.name}</span>
                  <span className="text-primary font-semibold">{addon.price}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Frequency Discounts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl mb-4">
                Frequency Discounts
              </h2>
              <p className="text-muted-foreground">
                Save more with regular cleaning schedules
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { frequency: "Weekly", discount: "15% OFF", badge: "Best Value" },
                { frequency: "Bi-Weekly", discount: "10% OFF", badge: "Popular" },
                { frequency: "Monthly", discount: "5% OFF", badge: "" },
              ].map((plan) => (
                <Card key={plan.frequency} className="p-6 text-center hover:shadow-hover transition-all">
                  {plan.badge && (
                    <div className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="font-heading font-bold text-2xl mb-2">
                    {plan.frequency}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-4">
                    {plan.discount}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Regular scheduled cleaning
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your first cleaning today and get 20% off! No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/contact">Book Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="tel:+639123456789">Call for Quote</a>
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

export default Pricing;
