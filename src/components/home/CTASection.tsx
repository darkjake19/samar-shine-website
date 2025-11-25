import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Get 20% Off Your First Cleaning
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the difference of professional cleaning. Book now and enjoy special discount for new customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-lg h-14"
              asChild
            >
              <Link to="/contact">
                <Sparkles className="mr-2 h-5 w-5" />
                Book Your Cleaning
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg h-14"
              asChild
            >
              <a href="tel:+639123456789">
                <Phone className="mr-2 h-5 w-5" />
                Call: +63 912 345 6789
              </a>
            </Button>
          </div>

          <p className="text-white/80 text-sm mt-6">
            No commitment required • Satisfaction guaranteed • Same day service available
          </p>
        </div>
      </div>
    </section>
  );
};
