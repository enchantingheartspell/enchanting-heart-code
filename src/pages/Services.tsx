import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Clock, Star, CheckCircle, Users, Shield, Sparkles, Crown } from "lucide-react";
import reuniteLoversSpell from "@/assets/reunite-lovers-spell.jpg";
import attractNewLoveSpell from "@/assets/attract-new-love-spell.jpg";
import strengthenRelationshipSpell from "@/assets/strengthen-relationship-spell.jpg";
import stopBreakupSpell from "@/assets/stop-breakup-spell.jpg";
import customSpellWork from "@/assets/custom-spell-work.jpg";
import candleBackground from "@/assets/candle-background.jpg";

const Services = () => {
  const services = [
    {
      title: "Reunite Lovers Spell",
      description: "Bring back an ex-lover or reconnect emotionally with someone who has grown distant.",
      delivery: "Within 3 days",
      price: "Most Popular",
      icon: <Heart className="h-8 w-8 text-primary" />,
      image: reuniteLoversSpell,
      features: [
        "Personalized ritual with your names",
        "Photo-based energy alignment",
        "Ancestral blessing ceremony",
        "Daily progress tracking",
        "7-day follow-up support"
      ],
      suitable: "Ex-partners, lost loves, broken relationships"
    },
    {
      title: "Attract New Love Spell",
      description: "Manifest a soulmate or serious partner who aligns with your energy and intentions.",
      delivery: "Within 5 days",
      price: "High Success Rate",
      icon: <Sparkles className="h-8 w-8 text-accent" />,
      image: attractNewLoveSpell,
      features: [
        "Soul-mate manifestation ritual",
        "Chakra alignment for love",
        "Attraction energy enhancement",
        "Compatibility blessing",
        "Monthly energy maintenance"
      ],
      suitable: "Singles seeking true love, those ready for commitment"
    },
    {
      title: "Strengthen Relationship Spell",
      description: "Eliminate third parties, restore peace, and deepen the bond in existing relationships.",
      delivery: "Within 48 hours",
      price: "Quick Results",
      icon: <Shield className="h-8 w-8 text-secondary" />,
      image: strengthenRelationshipSpell,
      features: [
        "Third party removal ritual",
        "Relationship protection barrier",
        "Communication enhancement",
        "Trust restoration ceremony",
        "Ongoing relationship support"
      ],
      suitable: "Troubled relationships, infidelity issues, communication problems"
    },
    {
      title: "Stop Break-Up / Divorce Spell",
      description: "Protect your marriage or relationship from falling apart and restore harmony.",
      delivery: "Within 2-4 days",
      price: "Emergency Service",
      icon: <Users className="h-8 w-8 text-primary" />,
      image: stopBreakupSpell,
      features: [
        "Emergency intervention ritual",
        "Conflict resolution energy work",
        "Marriage protection spell",
        "Immediate energy stabilization",
        "Crisis support counseling"
      ],
      suitable: "Couples facing separation, divorce proceedings, major conflicts"
    },
    {
      title: "Custom Spell Work",
      description: "Tailored spiritual work designed specifically for your unique love situation and needs.",
      delivery: "Time varies",
      price: "Personalized",
      icon: <Crown className="h-8 w-8 text-accent" />,
      image: customSpellWork,
      features: [
        "One-on-one consultation",
        "Completely customized ritual",
        "Multiple spell combinations",
        "Extended support period",
        "Guaranteed satisfaction"
      ],
      suitable: "Complex situations, multiple issues, special requirements"
    }
  ];

  const includedInAll = [
    "Personalized consultation",
    "Custom ritual performed with your name and photo",
    "Post-spell follow-up support",
    "24/7 WhatsApp assistance",
    "100% confidential service",
    "Ethical practices only"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
        {/* Background candle image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${candleBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-card/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Spiritual Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Professional love spell casting services designed to restore, attract, and strengthen relationships through ancient African wisdom
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <Star className="h-4 w-4 text-secondary" />
                <span>1200+ Success Stories</span>
              </div>
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>100% Ethical Practice</span>
              </div>
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Fast Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/80 border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs bg-primary/90 text-white px-3 py-1 rounded-full font-medium backdrop-blur-sm">
                      {service.price}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-2 text-accent">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">Delivery: {service.delivery}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">What's Included:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Best Suited For:</h4>
                    <p className="text-sm text-muted-foreground">{service.suitable}</p>
                  </div>
                  
                  <Button variant="elegant" className="w-full" asChild>
                    <Link to="/booking">
                      <Heart className="mr-2 h-4 w-4" />
                      Book This Service
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included in All Services */}
      <section className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-display mb-4">
                What's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Included</span> in Every Service
              </CardTitle>
              <CardDescription className="text-lg">
                Every spell casting service comes with comprehensive support and ethical practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedInAll.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How the <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Process Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process designed for your comfort and success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Book Consultation",
                description: "Fill out our form with your situation details",
                icon: <Heart className="h-6 w-6" />
              },
              {
                step: "2",
                title: "Personal Assessment",
                description: "I analyze your energy and create a custom plan",
                icon: <Star className="h-6 w-6" />
              },
              {
                step: "3",
                title: "Ritual Performance",
                description: "Sacred ceremony performed with your intention",
                icon: <Sparkles className="h-6 w-6" />
              },
              {
                step: "4",
                title: "Results & Support",
                description: "Ongoing guidance until your goals are achieved",
                icon: <CheckCircle className="h-6 w-6" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 p-2 bg-card rounded-full border-2 border-border text-primary">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transform</span> Your Love Life?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let another day pass without the love you deserve. Book your personalized consultation now 
            and take the first step towards manifesting your heart's desires.
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
                Free Consultation
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            ✅ No upfront payment required • 🔒 100% confidential • ⚡ Results within days
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;