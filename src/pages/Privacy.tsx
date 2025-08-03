import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Users } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Privacy <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your privacy and confidentiality are our highest priorities. Learn how we protect your personal information and spiritual consultations.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <Shield className="h-8 w-8 text-green-400 mb-2" />
                <CardTitle>100% Confidential</CardTitle>
                <CardDescription>All personal information and consultations remain completely private</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <Lock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Secure Storage</CardTitle>
                <CardDescription>Data encrypted and stored on secure, GDPR-compliant servers</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <Eye className="h-8 w-8 text-accent mb-2" />
                <CardTitle>No Third Parties</CardTitle>
                <CardDescription>We never share, sell, or distribute your information to anyone</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <Users className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Professional Discretion</CardTitle>
                <CardDescription>Licensed spiritual consultant bound by professional ethics</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Detailed Policy */}
          <div className="space-y-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Full name (for personalized spell casting)</li>
                    <li>• WhatsApp phone number (for direct communication)</li>
                    <li>• Email address (for written consultations and updates)</li>
                    <li>• Relationship situation details (for appropriate spell selection)</li>
                    <li>• Target person's first name (when applicable for specific spells)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automatically Collected</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Website usage data (for improving user experience)</li>
                    <li>• Device and browser information (for technical support)</li>
                    <li>• IP address (for security and fraud prevention)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Primary Uses</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Providing personalized spiritual consultations</li>
                    <li>• Performing customized spell casting services</li>
                    <li>• Communicating about your spell progress and results</li>
                    <li>• Offering ongoing support and guidance</li>
                    <li>• Scheduling appointments and consultations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">We DO NOT Use Your Information For</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Selling or sharing with third parties</li>
                    <li>• Marketing unrelated products or services</li>
                    <li>• Creating public testimonials without explicit consent</li>
                    <li>• Any purpose other than your spiritual service</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Data Protection & Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Security Measures</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• SSL encryption for all data transmission</li>
                    <li>• Secure, password-protected databases</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Limited access on need-to-know basis</li>
                    <li>• Professional-grade backup systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Data Retention</h3>
                  <p className="text-muted-foreground">
                    Your personal information is retained only as long as necessary to provide our services 
                    and support. You may request deletion of your data at any time by contacting us directly.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Your Rights & Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">You Have the Right To</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Access all personal data we hold about you</li>
                    <li>• Request correction of any inaccurate information</li>
                    <li>• Request deletion of your personal data</li>
                    <li>• Withdraw consent for data processing at any time</li>
                    <li>• Request a copy of your data in portable format</li>
                    <li>• File a complaint with relevant data protection authorities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">How to Exercise Your Rights</h3>
                  <p className="text-muted-foreground">
                    Contact us via WhatsApp or email at hello@enchantingheartspells.com to exercise any of these rights. 
                    We will respond to your request within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Communication & Consent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">WhatsApp Communications</h3>
                  <p className="text-muted-foreground">
                    By providing your WhatsApp number, you consent to receive service-related messages, 
                    consultation updates, and support communications. We use WhatsApp's end-to-end encryption 
                    for additional privacy protection.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Communications</h3>
                  <p className="text-muted-foreground">
                    Email communications include consultation confirmations, spell progress updates, and 
                    follow-up support. You can opt out of non-essential emails at any time.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Spiritual Confidentiality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  As a licensed spiritual consultant, Lady Amina is bound by professional ethics regarding 
                  client confidentiality. This means:
                </p>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• Your spiritual consultations are treated with the same confidentiality as medical or legal advice</li>
                  <li>• Details of your situation, spell work, and results are never discussed with others</li>
                  <li>• Testimonials are only published with explicit written consent</li>
                  <li>• Professional discretion is maintained in all interactions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us About Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or how we handle your personal information, 
                  please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> hello@enchantingheartspells.com</p>
                  <p><strong>WhatsApp:</strong> Available 24/7 for privacy concerns</p>
                  <p><strong>Response Time:</strong> Within 24 hours for privacy-related inquiries</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;