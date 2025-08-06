import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Heart, Shield, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mystical candle background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-card/60 to-background/80">
        {/* Elegant floating elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-3 h-3 bg-secondary rounded-full animate-sparkle" />
          <div className="absolute top-32 right-32 w-2 h-2 bg-primary rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
          <div className="absolute top-60 left-1/3 w-4 h-4 bg-accent rounded-full animate-sparkle" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-secondary rounded-full animate-sparkle" style={{ animationDelay: '3s' }} />
          <div className="absolute bottom-60 left-1/2 w-3 h-3 bg-primary rounded-full animate-sparkle" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/2 right-20 w-2 h-2 bg-accent rounded-full animate-sparkle" style={{ animationDelay: '5s' }} />
        </div>
        
        {/* Sophisticated orbs */}
        <div className="absolute top-1/4 left-16 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-luxe-float" />
        <div className="absolute top-1/3 right-24 w-40 h-40 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl animate-luxe-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-accent/25 to-secondary/25 rounded-full blur-2xl animate-luxe-float" style={{ animationDelay: '4s' }} />
        
        {/* Elegant light rays */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-40 bg-gradient-to-b from-transparent via-secondary/40 to-transparent" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 w-px h-36 bg-gradient-to-t from-transparent via-accent/35 to-transparent" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <div className="space-y-8">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-wide">
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
              Enchanting Heart
            </span>
            <span className="block bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Spells ✨
            </span>
          </h1>

          {/* Subtitle */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-garamond italic text-foreground/90 max-w-3xl mx-auto">
              "Where Love, Energy & Divine Intention Align"
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-inter">
              Welcome to a sanctuary of authentic love restoration. I'm a licensed spiritual consultant with over 
              <span className="text-primary font-semibold"> 12 years of experience</span> helping souls reunite through 
              <span className="text-accent font-semibold"> ancient, ethical spell casting</span>.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-12">
            <div className="flex items-center space-x-3 bg-card/70 backdrop-blur-md rounded-xl px-6 py-4 border border-primary/20">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-lg font-garamond font-medium">1200+ Reunited Hearts</span>
            </div>
            <div className="flex items-center space-x-3 bg-card/70 backdrop-blur-md rounded-xl px-6 py-4 border border-secondary/20">
              <Star className="h-6 w-6 text-secondary" />
              <span className="text-lg font-garamond font-medium">20+ Countries Served</span>
            </div>
            <div className="flex items-center space-x-3 bg-card/70 backdrop-blur-md rounded-xl px-6 py-4 border border-accent/20">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-lg font-garamond font-medium">24/7 Spiritual Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="elegant" size="xl" asChild>
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