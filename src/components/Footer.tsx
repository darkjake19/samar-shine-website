import { Link } from "react-router-dom";
import { Sparkles, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-muted to-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Clean & Fresh</h3>
                <p className="text-xs text-muted-foreground">Samar</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Professional, affordable, and reliable house cleaning services in Samar, Philippines.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Pricing", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "General Cleaning",
                "Deep Cleaning",
                "Office Cleaning",
                "Move In/Out Cleaning",
                "Post Construction",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Samar, Philippines</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+639123456789"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +63 912 345 6789
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@cleanfreshsamar.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@cleanfreshsamar.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-medium mb-1">Business Hours</p>
              <p className="text-sm text-muted-foreground">Mon - Sat: 8AM - 6PM</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Clean & Fresh Samar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
