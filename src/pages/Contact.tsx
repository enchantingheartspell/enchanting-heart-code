import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock, Globe, Heart, Star, Shield } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "2348139375655";
    const message = "Hello! I'm interested in your love spell services. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your love life? Contact Lady Amina for a free consultation and discover how our ethical spell casting can help you find the love you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp Contact */}
            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-green-500/20">
                  <MessageCircle className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl">WhatsApp Support</CardTitle>
                <CardDescription>Get instant help and book your consultation</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-green-500">24/7 Available</p>
                  <p className="text-muted-foreground">Instant response during business hours</p>
                  <p className="text-sm text-muted-foreground">Click the button below to start chatting</p>
                </div>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Button>
                <div className="text-xs text-muted-foreground">
                  <p>✅ Free consultation</p>
                  <p>⚡ Instant responses</p>
                  <p>🔒 100% Private & Secure</p>
                </div>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/20">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Email Support</CardTitle>
                <CardDescription>Send detailed questions and get comprehensive answers</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-lg font-semibold">hello@enchantingheartspells.com</p>
                  <p className="text-muted-foreground">Response within 12 hours</p>
                  <p className="text-sm text-muted-foreground">Perfect for detailed consultations</p>
                </div>
                 <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                <div className="text-xs text-muted-foreground">
                  <p>📧 Detailed responses</p>
                  <p>⏰ 12-hour reply guarantee</p>
                  <p>📋 Written consultation records</p>
                </div>
              </CardContent>
            </Card>

            {/* Book Consultation */}
            <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/20">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Book Consultation</CardTitle>
                <CardDescription>Schedule your personalized spell consultation</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-secondary">Free Initial Consultation</p>
                  <p className="text-muted-foreground">Personalized spell recommendation</p>
                  <p className="text-sm text-muted-foreground">Complete the booking form to get started</p>
                </div>
                <Button variant="luxe" className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
                <div className="text-xs text-muted-foreground">
                  <p>💖 Personalized service</p>
                  <p>🎯 Customized spell selection</p>
                  <p>🔮 Professional guidance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Working Hours & Availability */}
      <section className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-display mb-4">
                Availability & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Working Hours</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Professional spiritual services available around the clock
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Response Times</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• WhatsApp: Instant to 2 hours</li>
                        <li>• Email: Within 12 hours</li>
                        <li>• Booking Form: Within 12 hours</li>
                        <li>• Emergency situations: Immediate</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Globe className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Global Service</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Serving clients in 20+ countries</li>
                        <li>• All time zones accommodated</li>
                        <li>• Remote spell casting worldwide</li>
                        <li>• Multiple language support</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Star className="h-6 w-6 text-secondary mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Service Quality</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• 24/7 WhatsApp support</li>
                        <li>• Licensed spiritual consultant</li>
                        <li>• 12+ years of experience</li>
                        <li>• 4.9/5 average client rating</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Privacy & Security</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• 100% confidential consultations</li>
                        <li>• Secure encrypted communications</li>
                        <li>• No personal data sharing</li>
                        <li>• Professional discretion guaranteed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Asked Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">How quickly will I get a response?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  WhatsApp messages are typically answered within 2 hours during business hours, 
                  and within 8 hours during off-hours. Email responses are guaranteed within 12 hours.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Is the consultation really free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, the initial consultation is completely free. This includes discussing your situation, 
                  recommending the best spell for your needs, and answering any questions you have.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">How confidential is the service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely confidential. Your personal information, situation details, and our conversations 
                  are never shared with anyone. Professional discretion is guaranteed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">What time zone do you operate in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accommodate all time zones and serve clients globally. Our 24/7 WhatsApp support 
                  ensures you can reach us whenever you need assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Start Your Journey</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait another day to find the love and happiness you deserve. Contact us now for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              variant="elegant" 
              size="xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </Button>
            <Button variant="luxe" size="xl">
              <Heart className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            ✅ Free consultation • 🔒 100% confidential • ⚡ Fast response guaranteed
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
