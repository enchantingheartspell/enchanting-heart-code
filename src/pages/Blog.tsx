import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Star, Heart, Moon, Shield, Sparkles, Eye } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Signs You Need a Love Spell",
      excerpt: "Discover the clear indicators that suggest spiritual intervention could help restore your romantic relationship and bring back the love you've lost.",
      author: "Lady Amina",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Love Guidance",
      icon: <Heart className="h-6 w-6 text-primary" />,
      featured: true
    },
    {
      title: "How the Full Moon Affects Spell Energy",
      excerpt: "Learn why lunar phases are crucial for spell casting success and how to harness the moon's energy for maximum spiritual effectiveness in love magic.",
      author: "Lady Amina", 
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Spiritual Wisdom",
      icon: <Moon className="h-6 w-6 text-accent" />,
      featured: true
    },
    {
      title: "Why African Love Spells Are So Powerful",
      excerpt: "Explore the ancient traditions and spiritual practices that make African love spells uniquely effective for healing hearts and reuniting soulmates.",
      author: "Lady Amina",
      date: "December 5, 2024", 
      readTime: "6 min read",
      category: "Cultural Heritage",
      icon: <Sparkles className="h-6 w-6 text-secondary" />,
      featured: true
    },
    {
      title: "Truth About Black Magic: What I Will Never Do",
      excerpt: "Understanding the difference between ethical spiritual practices and harmful magic. Learn why positive energy always leads to better, lasting results.",
      author: "Lady Amina",
      date: "November 28, 2024",
      readTime: "4 min read", 
      category: "Ethics & Safety",
      icon: <Shield className="h-6 w-6 text-green-400" />,
      featured: false
    },
    {
      title: "Preparing Your Heart for Love: Energy Cleansing",
      excerpt: "Simple daily practices to cleanse negative energy and prepare your spiritual aura to attract and maintain healthy, loving relationships.",
      author: "Lady Amina",
      date: "November 20, 2024",
      readTime: "8 min read",
      category: "Self-Preparation", 
      icon: <Star className="h-6 w-6 text-primary" />,
      featured: false
    },
    {
      title: "Understanding Spiritual Compatibility in Relationships",
      excerpt: "How energy alignment affects romantic connections and what you can do to enhance spiritual harmony with your partner or desired love.",
      author: "Lady Amina",
      date: "November 15, 2024",
      readTime: "6 min read",
      category: "Relationship Guidance",
      icon: <Heart className="h-6 w-6 text-accent" />,
      featured: false
    }
  ];

  const categories = [
    "All Articles",
    "Love Guidance", 
    "Spiritual Wisdom",
    "Cultural Heritage",
    "Ethics & Safety",
    "Self-Preparation",
    "Relationship Guidance"
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Spiritual <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Wisdom</span> Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover ancient wisdom, ethical spiritual practices, and guidance for love and relationships from Lady Amina's 12+ years of experience
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "elegant" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Essential reading for anyone seeking spiritual guidance in love and relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/80 border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                      {post.icon}
                    </div>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span className="bg-muted/50 px-2 py-1 rounded text-xs">{post.category}</span>
                    </div>
                    <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <a href="https://youtube.com/shorts/35MIcp0V9iQ?si=d75Wy9R6MLsyd_qr"<Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Eye className="mr-2 h-4 w-4" />
                    Read Article
                  </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              All <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive guides and insights into spiritual love practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                      {post.icon}
                    </div>
                    <span className="text-xs bg-muted/50 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-display group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto group-hover:text-primary transition-colors">
                    <Eye className="mr-2 h-4 w-4" />
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-display mb-4">
                Stay <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connected</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Subscribe to receive spiritual guidance, love wisdom, and exclusive insights directly from Lady Amina
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-secondary" />
                  <span>Weekly spiritual guidance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Exclusive love tips</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Moon className="h-4 w-4 text-accent" />
                  <span>Lunar ceremony updates</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="elegant">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe anytime. Your email is safe with us.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Personal Guidance</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            While our blog provides valuable insights, nothing replaces personalized spiritual consultation. 
            Book your free consultation to get guidance tailored to your unique situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="xl" asChild>
              <Link to="/booking">
                <Heart className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">
                Ask a Question
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
