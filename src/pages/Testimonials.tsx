import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Heart, Quote, MapPin, Calendar, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Esther M.",
      location: "London, UK",
      rating: 5,
      service: "Reunite Lovers Spell",
      timeframe: "4 days",
      text: "She helped me bring back my fiancé in just 4 days. I'm in tears of joy! Thank you, Lady Amina. After 3 months of no contact, he called me crying and apologizing. We're getting married next month!",
      date: "2 days ago",
      verified: true
    },
    {
      name: "Joy A.",
      location: "Lagos, Nigeria",
      rating: 5,
      service: "Attract New Love Spell",
      timeframe: "1 week",
      text: "My boyfriend started texting me again after 2 weeks of silence. The spell worked — it's like a miracle. Our relationship is stronger than ever before and he's more committed now.",
      date: "1 week ago",
      verified: true
    },
    {
      name: "Mike T.",
      location: "Toronto, Canada",
      rating: 5,
      service: "Custom Spell Work",
      timeframe: "5 days",
      text: "I used to doubt spells, but her rituals are done with love and ethics. She is truly gifted. My wife and I are back together and our marriage has never been better.",
      date: "3 weeks ago",
      verified: true
    },
    {
      name: "Sarah L.",
      location: "Sydney, Australia",
      rating: 5,
      service: "Strengthen Relationship Spell",
      timeframe: "2 days",
      text: "Amazing results! The third party situation was resolved and my husband came home. Lady Amina's guidance throughout the process was incredible. Highly recommended!",
      date: "1 month ago",
      verified: true
    },
    {
      name: "David R.",
      location: "New York, USA",
      rating: 5,
      service: "Stop Break-Up Spell",
      timeframe: "3 days",
      text: "We were about to sign divorce papers when I found Lady Amina. Within 3 days, my wife changed her mind completely. We're in couples therapy now and rebuilding our love.",
      date: "6 weeks ago",
      verified: true
    },
    {
      name: "Maria S.",
      location: "Madrid, Spain",
      rating: 5,
      service: "Reunite Lovers Spell",
      timeframe: "6 days",
      text: "After 6 months of separation, my ex-boyfriend contacted me out of nowhere. He said he couldn't stop thinking about me. We're moving in together next month!",
      date: "2 months ago",
      verified: true
    },
    {
      name: "James K.",
      location: "Nairobi, Kenya",
      rating: 5,
      service: "Attract New Love Spell",
      timeframe: "1 week",
      text: "I met the love of my life exactly one week after the spell was completed. She's everything I asked for and more. We're planning our future together already.",
      date: "3 months ago",
      verified: true
    },
    {
      name: "Lisa M.",
      location: "Dublin, Ireland",
      rating: 5,
      service: "Custom Spell Work",
      timeframe: "4 days",
      text: "Lady Amina understood my complex situation perfectly. Her custom spell work addressed all my concerns. My relationship is completely transformed - we're both happier now.",
      date: "4 months ago",
      verified: true
    },
    {
      name: "Ahmed H.",
      location: "Dubai, UAE",
      rating: 5,
      service: "Strengthen Relationship Spell",
      timeframe: "1 day",
      text: "Fastest results ever! My wife's attitude changed overnight. The jealousy and arguments stopped completely. Our home is peaceful and full of love again.",
      date: "5 months ago",
      verified: true
    }
  ];

  const stats = [
    { number: "98%", label: "Success Rate", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "1200+", label: "Happy Clients", icon: <Heart className="h-6 w-6" /> },
    { number: "4.9/5", label: "Average Rating", icon: <Star className="h-6 w-6" /> },
    { number: "20+", label: "Countries", icon: <MapPin className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Client <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Real testimonials from real people who found love, healed relationships, and transformed their lives
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                  <div className="flex justify-center text-primary mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/80 border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        {testimonial.verified && (
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        )}
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      {testimonial.service}
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-accent font-medium">Results in {testimonial.timeframe}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/30" />
                    <p className="text-muted-foreground italic leading-relaxed pl-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-border/50">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Why Clients <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Choose</span> Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Verified Results</h3>
              <p className="text-muted-foreground">
                All testimonials are from real clients with verified results. We maintain strict authenticity standards.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Ethical Practice</h3>
              <p className="text-muted-foreground">
                Every spell is cast with love, respect, and positive intention. No harmful magic is ever used.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Ongoing Support</h3>
              <p className="text-muted-foreground">
                We provide continuous guidance and support until you achieve your desired outcome.
              </p>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
            <h3 className="text-2xl font-display font-bold mb-4">
              Ready to Write <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your Success Story</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied clients who have transformed their love lives through our ethical spiritual services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="mystical" size="lg" asChild>
                <Link to="/booking">
                  <Heart className="mr-2 h-5 w-5" />
                  Book Your Spell Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;