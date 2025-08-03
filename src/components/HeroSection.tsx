import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Heart, Shield, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <div className="space-y-8">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Restore Your Love
            </span>
            <span className="block bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Today 🌹
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Welcome to <span className="text-primary font-semibold">Enchanting Heart Spells</span> — a sanctuary where love, energy, and intention align. 
            I'm a licensed spiritual consultant with over <span className="text-accent font-semibold">12 years of experience</span> helping 
            souls reunite with their true partners through ancient, ethical, and natural spell casting.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 py-8">
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">1200+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
              <Star className="h-5 w-5 text-secondary" />
              <span className="text-lg font-semibold">20+ Countries Served</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-lg font-semibold">24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="mystical" size="xl" asChild>
              <Link to="/booking" className="group">
                <Heart className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Book Your Spell Now
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">Trusted by thousands worldwide</p>
            <div className="flex justify-center items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
              <span className="ml-2 text-sm font-medium">4.9/5 Client Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              fontSize: `${1 + (i % 3) * 0.5}rem`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;