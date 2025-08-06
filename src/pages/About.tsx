import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Award, Shield, Users, Star, Globe, Clock, CheckCircle } from "lucide-react";

const About = () => {
  const certifications = [
    {
      title: "Energy Healing License",
      organization: "Holistic Practitioner Board",
      year: "2018",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "Spiritual Wellness Certification",
      organization: "Global Occult Council (G.O.C.)",
      year: "2016",
      icon: <Award className="h-6 w-6 text-accent" />
    },
    {
      title: "Registered Member",
      organization: "Spiritual Advisors Network (SAN)",
      year: "2015",
      icon: <Shield className="h-6 w-6 text-secondary" />
    }
  ];

  const values = [
    {
      title: "Ethical Spell Casting",
      description: "I never use black magic or harmful intentions. All my work is based on positive energy and love.",
      icon: <Shield className="h-8 w-8 text-primary" />
    },
    {
      title: "100% Confidentiality",
      description: "Your personal information and situation remain completely private and secure at all times.",
      icon: <Heart className="h-8 w-8 text-accent" />
    },
    {
      title: "No Black Magic",
      description: "I strictly follow ancient traditions that promote healing, love, and positive transformation.",
      icon: <Star className="h-8 w-8 text-secondary" />
    }
  ];

  const stats = [
    { number: "1200+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "20+", label: "Countries Served", icon: <Globe className="h-6 w-6" /> },
    { number: "12+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> },
    { number: "4.9/5", label: "Client Rating", icon: <Star className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Dr Diamenos</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A 5th-generation African healer born with the divine gift of energetic alignment and emotional healing
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                My <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Spiritual Journey</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello, I'm a spiritualist and 5th-generation African healer. I was born with the divine gift of 
                  energetic alignment and emotional healing. My journey began in the sacred lands of Benin, where 
                  my grandmother passed down secret ancestral rituals for love and harmony.
                </p>
                <p>
                  For over 12 years, I have dedicated my life to helping souls reunite with their true partners 
                  through ancient, ethical, and natural spell casting. My practice combines traditional African 
                  spiritual wisdom with modern holistic healing principles.
                </p>
                <p>
                  I believe that love is the most powerful force in the universe, and when channeled correctly 
                  through spiritual practice, it can heal even the deepest wounds and restore the strongest bonds.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="elegant" asChild>
                  <Link to="/booking">Book Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-xl">
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-16 w-16 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display">Ancestral Wisdom</CardTitle>
                  <CardDescription>
                    Passed down through 5 generations of healers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                        <div className="flex justify-center text-primary mb-2">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-primary">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Licensed and certified by recognized spiritual and holistic healing organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                    {cert.icon}
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <CardDescription>{cert.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    Certified {cert.year}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              My Core <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every spell I cast and every client I serve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-card to-card/80 border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-display">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Why <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Trust</span> Me?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Licensed spiritual consultant with verified credentials</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Over 1200 successful love reunification cases</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Strict ethical guidelines - no harmful magic ever</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>24/7 support and follow-up care included</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Serving clients across 20+ countries globally</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Average 4.9/5 star rating from satisfied clients</span>
              </div>
            </div>
          </div>
          <Button variant="elegant" size="xl" asChild>
            <Link to="/booking">
              <Heart className="mr-2 h-5 w-5" />
              Start Your Love Journey
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
