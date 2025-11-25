import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  location: z.string().min(2, "Location is required").max(200),
  serviceType: z.string().min(1, "Please select a service"),
  propertySize: z.string().min(1, "Please select property size"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form data:", data);
    
    toast.success("Booking request received!", {
      description: "We'll contact you within 24 hours to confirm your booking.",
    });
    
    reset();
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book your cleaning service or get a free quote. We're here to help!
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6 text-center hover:shadow-hover transition-all">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <a
                  href="tel:+639123456789"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +63 912 345 6789
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-hover transition-all">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a
                  href="mailto:info@cleanfreshsamar.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@cleanfreshsamar.com
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-hover transition-all">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon-Sat: 8AM - 6PM
                  <br />
                  Sunday: Closed
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="font-heading font-bold text-3xl mb-6">
                  Book Your Cleaning Service
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with a confirmation and quote.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Juan Dela Cruz"
                        className="mt-1.5"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="+63 912 345 6789"
                        className="mt-1.5"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="juan@example.com"
                      className="mt-1.5"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="location">Location in Samar *</Label>
                    <Input
                      id="location"
                      {...register("location")}
                      placeholder="Catbalogan City"
                      className="mt-1.5"
                    />
                    {errors.location && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.location.message}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="serviceType">Service Type *</Label>
                      <Select
                        onValueChange={(value) => setValue("serviceType", value)}
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Cleaning</SelectItem>
                          <SelectItem value="deep">Deep Cleaning</SelectItem>
                          <SelectItem value="airbnb">Airbnb Cleaning</SelectItem>
                          <SelectItem value="office">Office Cleaning</SelectItem>
                          <SelectItem value="move">Move In/Out</SelectItem>
                          <SelectItem value="construction">
                            Post-Construction
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.serviceType && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.serviceType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="propertySize">Property Size *</Label>
                      <Select
                        onValueChange={(value) => setValue("propertySize", value)}
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="studio">Studio / 1BR</SelectItem>
                          <SelectItem value="2br">2 Bedroom</SelectItem>
                          <SelectItem value="3br">3 Bedroom</SelectItem>
                          <SelectItem value="large">Large House (80+ sqm)</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.propertySize && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.propertySize.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Details *</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us about your cleaning needs, preferred schedule, any special requirements..."
                      rows={5}
                      className="mt-1.5"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by Clean & Fresh Samar regarding your booking.
                  </p>
                </form>
              </div>

              {/* Map & Info */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-4">
                    Service Areas
                  </h3>
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-2">We Serve All of Samar</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Catbalogan City</li>
                        <li>• Calbayog City</li>
                        <li>• Borongan</li>
                        <li>• Basey</li>
                        <li>• Gandara</li>
                        <li>• And surrounding areas</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Don't see your area? Contact us! We may still be able to serve you.
                  </p>
                </Card>

                {/* Map Placeholder */}
                <Card className="p-0 overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Map View</p>
                      <p className="text-sm text-muted-foreground">Samar, Philippines</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="font-semibold mb-3">Quick Response Guarantee</h3>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours. For urgent same-day bookings, please call us directly.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
