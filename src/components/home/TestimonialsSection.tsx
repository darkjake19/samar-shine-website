import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Maria Santos",
    location: "Catbalogan City",
    rating: 5,
    text: "Excellent service! The team was professional, thorough, and finished on time. My house has never been this clean. Highly recommend!",
    service: "Deep Cleaning",
  },
  {
    name: "Juan Dela Cruz",
    location: "Calbayog City",
    rating: 5,
    text: "I use Clean & Fresh for my Airbnb property. They're always reliable, quick, and do an amazing job. My guests love how spotless everything is!",
    service: "Airbnb Cleaning",
  },
  {
    name: "Anna Reyes",
    location: "Borongan",
    rating: 5,
    text: "After our home renovation, the house was a mess. Clean & Fresh did an incredible post-construction cleanup. Worth every peso!",
    service: "Post-Construction",
  },
  {
    name: "Roberto Garcia",
    location: "Catbalogan City",
    rating: 5,
    text: "We've been using their weekly cleaning service for 6 months. The team is trustworthy, punctual, and does a fantastic job every time.",
    service: "General Cleaning",
  },
  {
    name: "Lisa Fernandez",
    location: "Calbayog City",
    rating: 5,
    text: "Hired them for our office cleaning. Very professional and the office always looks great. The staff is friendly and respectful.",
    service: "Office Cleaning",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 h-full bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-hover transition-all">
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Service Badge */}
                  <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {testimonial.service}
                  </div>

                  {/* Client Info */}
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 fill-accent text-accent" />
            <span className="font-semibold text-foreground">
              4.9/5 Average Rating
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">500+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};
