import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Heart, Clock, Shield, CheckCircle, Star, MessageCircle } from "lucide-react";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    spellType: "",
    targetName: "",
    situation: "",
    acceptTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
    accuracy: number;
  } | null>(null);

  // Get user's location when component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          });
        },
        (error) => {
          console.log('Geolocation error:', error);
          // Continue without location if user denies permission
        }
      );
    }
  }, []);

  const spellTypes = [
    "Reunite Lovers Spell",
    "Attract New Love Spell", 
    "Strengthen Relationship Spell",
    "Stop Break-Up / Divorce Spell",
    "Custom Spell Work"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting booking with data:', formData);
      
      // Send directly to Telegram via edge function
      const { data, error } = await supabase.functions.invoke('send-telegram-booking', {
        body: {
          ...formData,
          location: userLocation
        }
      });

      console.log('Telegram response:', { data, error });

      if (error) {
        console.error('Telegram error:', error);
        throw new Error('Failed to send to Telegram: ' + error.message);
      }

      // Save to database after successful Telegram send
      const { error: dbError } = await supabase
        .from('spell_requests')
        .insert({
          client_name: formData.fullName,
          client_email: formData.email,
          spell_type: formData.spellType,
          details: `WhatsApp: ${formData.whatsapp}\nTarget: ${formData.targetName}\nSituation: ${formData.situation}`,
          status: 'pending'
        });

      if (dbError) {
        console.error('Database error:', dbError);
        // Don't fail if database save fails, Telegram is primary
      }

      // Show success dialog instead of toast
      setShowSuccessDialog(true);

      // Reset form
      setFormData({
        fullName: "",
        whatsapp: "",
        email: "",
        spellType: "",
        targetName: "",
        situation: "",
        acceptTerms: false
      });

    } catch (error: any) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your booking. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };


  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Book Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Spell Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Take the first step towards transforming your love life. Fill out the form below for a personalized consultation.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Response within 12 hours</span>
              </div>
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <Star className="h-4 w-4 text-secondary" />
                <span>Licensed Spiritual Consultant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-display flex items-center">
                    <Heart className="mr-3 h-6 w-6 text-primary" />
                    Spell Consultation Form
                  </CardTitle>
                  <CardDescription>
                    Please provide detailed information about your situation for the most effective spell casting.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b border-border/50 pb-2">Personal Information</h3>
                      
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                          <Input
                            id="whatsapp"
                            value={formData.whatsapp}
                            onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                            placeholder="+1234567890"
                            required
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Spell Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b border-border/50 pb-2">Spell Requirements</h3>
                      
                      <div>
                        <Label htmlFor="spellType">Type of Spell *</Label>
                        <Select value={formData.spellType} onValueChange={(value) => handleInputChange("spellType", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Choose the spell that matches your situation" />
                          </SelectTrigger>
                          <SelectContent>
                            {spellTypes.map((spell) => (
                              <SelectItem key={spell} value={spell}>
                                {spell}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="targetName">Target Person's First Name</Label>
                        <Input
                          id="targetName"
                          value={formData.targetName}
                          onChange={(e) => handleInputChange("targetName", e.target.value)}
                          placeholder="First name of the person (if applicable)"
                          className="mt-1"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Leave blank for "Attract New Love" spells
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="situation">Describe Your Situation *</Label>
                        <Textarea
                          id="situation"
                          value={formData.situation}
                          onChange={(e) => handleInputChange("situation", e.target.value)}
                          placeholder="Please provide detailed information about your love situation, relationship history, and what you hope to achieve..."
                          rows={6}
                          required
                          className="mt-1"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          The more details you provide, the more personalized and effective your spell will be.
                        </p>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                        <Checkbox
                          id="terms"
                          checked={formData.acceptTerms}
                          onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                        />
                        <div className="text-sm leading-relaxed">
                          <Label htmlFor="terms" className="cursor-pointer">
                            I accept the Terms & Conditions and understand that:
                          </Label>
                          <ul className="mt-2 space-y-1 text-muted-foreground">
                            <li>• All spell work is performed with ethical, positive intentions only</li>
                            <li>• Results typically manifest within 3-7 days of completion</li>
                            <li>• My personal information will remain 100% confidential</li>
                            <li>• I will receive 24/7 WhatsApp support throughout the process</li>
                            <li>• Due to the spiritual nature of this work, results cannot be guaranteed</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                     <Button 
                      type="submit" 
                      variant="elegant" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Submitting..." : "Book Now"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* What Happens Next */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <div>
                      <p className="font-medium">Immediate Confirmation</p>
                      <p className="text-sm text-muted-foreground">You'll see a success message confirming your booking.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <div>
                      <p className="font-medium">Personal Contact</p>
                      <p className="text-sm text-muted-foreground">Lady Amina will contact you within 12 hours via WhatsApp.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <div>
                      <p className="font-medium">Consultation & Planning</p>
                      <p className="text-sm text-muted-foreground">Detailed discussion about your situation and spell selection.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                    <div>
                      <p className="font-medium">Spell Performance</p>
                      <p className="text-sm text-muted-foreground">Custom ritual performed with your intention and energy.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about which spell is right for you? Contact us directly for a free consultation.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>WhatsApp:</strong> Available 24/7</p>
                    <p><strong>Email:</strong> hello@enchantingheartspells.com</p>
                    <p><strong>Response Time:</strong> Within 12 hours</p>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-sm"><strong>4.9/5</strong> from 1200+ clients</p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center justify-center space-x-2">
                        <Shield className="h-4 w-4 text-green-400" />
                        <span>SSL Secured & DMCA Protected</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-400" />
                        <span>Licensed Spiritual Consultant</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center text-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <span>Success!</span>
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 py-4">
            <p className="text-lg font-medium">Booking Received!</p>
            <p className="text-muted-foreground">
              You'll be contacted within 12 hours via WhatsApp.
            </p>
            <Button 
              onClick={() => setShowSuccessDialog(false)} 
              variant="elegant" 
              className="w-full"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Booking;