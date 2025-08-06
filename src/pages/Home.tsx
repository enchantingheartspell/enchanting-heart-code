import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Shield, Clock, Star, CheckCircle, MessageCircle } from "lucide-react";
import reuniteLoversSpell from "@/assets/reunite-lovers-spell.jpg";
import attractNewLoveSpell from "@/assets/attract-new-love-spell.jpg";
import strengthenRelationshipSpell from "@/assets/strengthen-relationship-spell.jpg";

const Home = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Ethical Spell Casting",
      description: "Using only positive energy and ancient wisdom. No black magic or harmful intent."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "100% Confidentiality",
      description: "Your personal information and situation remain completely private and secure."
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Fast Results",
      description: "Most spells manifest within 3-5 days. Some clients see results in 48 hours."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "12+ Years Experience",
      description: "Licensed spiritual consultant with proven track record of success."
    }
  ];

  const services = [
    {
      title: "Reunite Lovers Spell",
      description: "Bring back an ex-lover or reconnect emotionally",
      delivery: "Within 3 days",
      price: "Most Popular",
      image: reuniteLoversSpell
    },
    {
      title: "Attract New Love Spell",
      description: "Manifest a soulmate or serious partner",
      delivery: "Within 5 days",
      price: "High Success Rate",
      image: attractNewLoveSpell
    },
    {
      title: "Strengthen Relationship Spell",
      description: "Eliminate third parties, restore peace",
      delivery: "Within 48 hours",
      price: "Quick Results",
      image: strengthenRelationshipSpell
    }
  ];

  const testimonials = [
    {
      name: "Esther",
      location: "UK",
      rating: 5,
      text: "She helped me bring back my fiancé in just 4 days. I'm in tears of joy! Thank you, Lady Amina.",
      days: "2 days ago"
    },
    {
      name: "Joy",
      location: "Nigeria",
      rating: 5,
      text: "My boyfriend started texting me again after 2 weeks of silence. The spell worked — it's like a miracle.",
      days: "1 week ago"
    },
    {
      name: "Mike",
      location: "Canada",
      rating: 5,
      text: "I used to doubt spells, but her rituals are done with love and ethics. She is truly gifted.",
      days: "3 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Enchanting Heart Spells</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining ancient wisdom with modern ethical practices for authentic love healing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Signature Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personalized spell work tailored to your unique love situation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/80 border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs bg-primary/90 text-white px-2 py-1 rounded-full font-medium backdrop-blur-sm">
                      {service.price}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-accent">
                    <Clock className="h-4 w-4" />
                    <span>Delivery: {service.delivery}</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Personalized consultation</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Custom ritual performed</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Follow-up support included</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="luxe" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What Our <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from real people who found love again
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location}</CardDescription>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <p className="text-xs text-muted-foreground">{testimonial.days}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/testimonials">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Restore Your Love</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards reuniting with your soulmate. Our personalized consultation 
            will help determine the perfect spell for your unique situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="xl" asChild>
              <Link to="/booking">
                <Heart className="mr-2 h-5 w-5" />
                Book Your Spell Now
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Free Consultation
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            ✅ 24/7 WhatsApp Support • 🔒 100% Confidential • ⚡ Fast Results
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;