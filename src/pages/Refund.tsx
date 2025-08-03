import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle, Clock, Shield, MessageCircle, CheckCircle, Heart } from "lucide-react";

const Refund = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Refund <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Understanding our refund policy for spiritual services. We are committed to your satisfaction and spiritual success.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
                <CardTitle className="text-xl">Important: Nature of Spiritual Services</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Spiritual services, including spell casting and energy work, are intangible services that begin 
                immediately upon consultation and ritual preparation. Once your personalized ritual has commenced, 
                the spiritual energy has been set in motion and cannot be reversed or undone.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Clock className="mr-3 h-6 w-6 text-primary" />
                Refund Eligibility Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-500/10 rounded-lg border border-green-500/20">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-green-500 mb-2">Before Ritual Begins</h3>
                  <p className="text-sm text-muted-foreground">Full refund available if you cancel before the spiritual ritual commences</p>
                </div>
                
                <div className="text-center p-6 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <AlertTriangle className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-amber-500 mb-2">Ritual in Progress</h3>
                  <p className="text-sm text-muted-foreground">Partial refund may be considered on case-by-case basis</p>
                </div>
                
                <div className="text-center p-6 bg-red-500/10 rounded-lg border border-red-500/20">
                  <Clock className="h-8 w-8 text-red-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-red-500 mb-2">After Completion</h3>
                  <p className="text-sm text-muted-foreground">No refunds available once the spiritual work is complete</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Refund Policy Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Eligible for Full Refund</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Cancellation before consultation and ritual preparation begins</li>
                  <li>• Technical issues preventing service delivery (rare)</li>
                  <li>• Misunderstanding about service scope (resolved through consultation)</li>
                  <li>• Change of mind within 2 hours of initial booking (before work begins)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Not Eligible for Refund</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Ritual has been performed and spiritual work completed</li>
                  <li>• Results not manifesting within expected timeframe (spiritual work takes time)</li>
                  <li>• Change of mind after spiritual energy has been activated</li>
                  <li>• Dissatisfaction with consultation advice (consultation is part of the service)</li>
                  <li>• Personal circumstances changing after ritual completion</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Partial Refund Considerations</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Emergency situations requiring service cancellation mid-process</li>
                  <li>• Mutual agreement between client and practitioner</li>
                  <li>• Exceptional circumstances evaluated on individual basis</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Understanding Spiritual Work Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Realistic Expectations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Spiritual work operates on subtle energy levels and typically manifests within 3-7 days, 
                  though some clients experience results within 48 hours while others may need up to 30 days. 
                  Results depend on various factors including:
                </p>
                <ul className="space-y-1 text-muted-foreground ml-4 mt-2">
                  <li>• Spiritual openness and receptivity</li>
                  <li>• Complexity of the situation</li>
                  <li>• Free will of all parties involved</li>
                  <li>• Karmic timing and life circumstances</li>
                  <li>• Follow-through on provided guidance</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Success Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While we cannot guarantee specific outcomes due to the nature of free will and spiritual timing, 
                  we are committed to your success. If results are not manifesting as expected, we offer:
                </p>
                <ul className="space-y-1 text-muted-foreground ml-4 mt-2">
                  <li>• Extended consultation and guidance</li>
                  <li>• Additional spiritual support and energy work</li>
                  <li>• Alternative approaches and recommendations</li>
                  <li>• Ongoing communication until resolution</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">How to Request a Refund</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Step-by-Step Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">1</div>
                    <div>
                      <p className="font-medium">Contact Us Immediately</p>
                      <p className="text-sm text-muted-foreground">Reach out via WhatsApp or email as soon as possible</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">2</div>
                    <div>
                      <p className="font-medium">Provide Booking Details</p>
                      <p className="text-sm text-muted-foreground">Include your full name, booking date, and reason for refund request</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">3</div>
                    <div>
                      <p className="font-medium">Review & Response</p>
                      <p className="text-sm text-muted-foreground">We'll review your request and respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">4</div>
                    <div>
                      <p className="font-medium">Processing</p>
                      <p className="text-sm text-muted-foreground">If approved, refunds are processed within 5-7 business days</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Contact Information for Refunds</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><strong>WhatsApp:</strong> Priority channel for urgent refund requests</p>
                  <p><strong>Email:</strong> hello@enchantingheartspells.com</p>
                  <p><strong>Subject Line:</strong> "Refund Request - [Your Name]"</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Alternative Solutions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Before requesting a refund, we encourage clients to explore these alternatives:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Extended Support</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                    <li>• Additional consultation sessions</li>
                    <li>• Modified spell approach</li>
                    <li>• Extended timeline for results</li>
                    <li>• Personalized guidance adjustment</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Service Modification</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                    <li>• Different spell type recommendation</li>
                    <li>• Custom spiritual approach</li>
                    <li>• Additional energy work</li>
                    <li>• Collaborative problem-solving</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">
                Questions About Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Refund Policy</span>?
              </CardTitle>
              <CardDescription className="text-lg">
                We're here to address any concerns and find the best solution for your situation
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground">
                Our commitment is to your spiritual success and satisfaction. If you have any questions 
                about our refund policy or need to discuss your specific situation, please contact us directly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="elegant" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Support
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                ⚡ 24/7 WhatsApp support • 📧 Email response within 24 hours • 🤝 Professional guidance
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Refund;