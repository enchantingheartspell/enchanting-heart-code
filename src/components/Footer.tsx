import { Link } from "react-router-dom";
import { Heart, Mail, MessageCircle, Shield, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                EnchantingHeartSpells
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional spiritual consultant with 12+ years of experience helping souls reunite with their true partners.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-green-400">
                <Shield className="h-4 w-4 mr-1" />
                <span className="text-xs">SSL Secured</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Lock className="h-4 w-4 mr-1" />
                <span className="text-xs">DMCA Protected</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Me</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Reunite Lovers Spell</li>
              <li className="text-muted-foreground">Attract New Love Spell</li>
              <li className="text-muted-foreground">Strengthen Relationship</li>
              <li className="text-muted-foreground">Stop Break-Up Spell</li>
              <li className="text-muted-foreground">Custom Spell Work</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm text-muted-foreground">24/7 WhatsApp Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Enchantingheartspell@outlook.com</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <div>🌍 Serving 20+ Countries</div>
                <div>✅ 1200+ Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 EnchantingHeartSpells. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/refund" className="text-muted-foreground hover:text-primary transition-colors">
                Refund Policy
              </Link>
              <span className="text-muted-foreground">
                Licensed Spiritual Consultant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
