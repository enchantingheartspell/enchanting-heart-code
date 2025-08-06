import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Heart, Search, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 space-y-8">
          {/* 404 Display */}
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-display font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Page Not <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Found</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              It seems the spiritual energies have redirected you to an unknown path. 
              Don't worry, we'll help you find your way back to love and healing.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Return Home</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Go back to our homepage and discover our spiritual services
                </p>
                <Button variant="elegant" className="w-full" asChild>
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Take Me Home
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Book a Spell</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Start your love journey with a personalized consultation
                </p>
                <Button variant="luxe" className="w-full" asChild>
                  <Link to="/booking">
                    <Heart className="mr-2 h-4 w-4" />
                    Book Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Or explore these popular pages:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">About Dr Diamenos</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/testimonials">Success Stories</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/blog">Spiritual Wisdom</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Help Section */}
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-border/50 max-w-xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                Need Immediate Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                If you were looking for something specific or need spiritual guidance, 
                our 24/7 WhatsApp support is here to help.
              </p>
              <Button variant="outline" className="bg-green-500/10 border-green-500/20 hover:bg-green-500/20">
                <MessageCircle className="mr-2 h-4 w-4 text-green-500" />
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Mystical Quote */}
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
              "Sometimes the path we're meant to take reveals itself when we're lost. 
              Every detour is an opportunity for new spiritual discoveries."
              <footer className="text-sm mt-2 text-primary">— Dr Diamenos</footer>
            </blockquote>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-primary/20 animate-float"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
                fontSize: `${1.5 + i * 0.5}rem`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${5 + i}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
