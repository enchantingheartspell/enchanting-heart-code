import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  Check, 
  X, 
  Eye,
  LogOut,
  Users,
  FileText,
  Star,
  Heart
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image_url: string;
  status: string;
  created_at: string;
}

interface SpellService {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image_url: string;
  category: string;
  status: string;
}

interface Testimonial {
  id: string;
  client_name: string;
  content: string;
  rating: number;
  status: string;
  created_at: string;
}

interface SpellRequest {
  id: string;
  client_name: string;
  client_email: string;
  spell_type: string;
  details: string;
  status: string;
  admin_notes: string;
  created_at: string;
}

export default function Admin() {
  const { user, isAdmin, signOut, signIn, loading } = useAuth();
  const { toast } = useToast();

  // State management
  const [activeTab, setActiveTab] = useState('dashboard');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [spellServices, setSpellServices] = useState<SpellService[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [spellRequests, setSpellRequests] = useState<SpellRequest[]>([]);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});

  // Auth form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Redirect if not admin
  useEffect(() => {
    if (user && !isAdmin) {
      window.location.href = '/';
    }
  }, [user, isAdmin]);

  // Load data
  useEffect(() => {
    if (isAdmin) {
      loadBlogPosts();
      loadSpellServices();
      loadTestimonials();
      loadSpellRequests();
      setupRealtimeSubscriptions();
    }
  }, [isAdmin]);

  const loadBlogPosts = async () => {
    const { data } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    setBlogPosts(data || []);
  };

  const loadSpellServices = async () => {
    const { data } = await supabase.from('spell_services').select('*').order('created_at', { ascending: false });
    setSpellServices(data || []);
  };

  const loadTestimonials = async () => {
    const { data } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
    setTestimonials(data || []);
  };

  const loadSpellRequests = async () => {
    const { data } = await supabase.from('spell_requests').select('*').order('created_at', { ascending: false });
    setSpellRequests(data || []);
  };

  const setupRealtimeSubscriptions = () => {
    const channel = supabase
      .channel('admin-updates')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'blog_posts' }, loadBlogPosts)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'spell_services' }, loadSpellServices)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'testimonials' }, loadTestimonials)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'spell_requests' }, loadSpellRequests)
      .subscribe();

    return () => supabase.removeChannel(channel);
  };

  const handleCreate = async (table: 'blog_posts' | 'spell_services' | 'testimonials' | 'spell_requests', data: any) => {
    const { error } = await supabase.from(table).insert(data);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Item created successfully" });
      setEditingItem(null);
      setFormData({});
    }
  };

  const handleUpdate = async (table: 'blog_posts' | 'spell_services' | 'testimonials' | 'spell_requests', id: string, data: any) => {
    const { error } = await supabase.from(table).update(data).eq('id', id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Item updated successfully" });
      setEditingItem(null);
      setFormData({});
    }
  };

  const handleDelete = async (table: 'blog_posts' | 'spell_services' | 'testimonials' | 'spell_requests', id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Item deleted successfully" });
    }
  };

  const handleApprove = async (table: 'testimonials' | 'spell_requests', id: string) => {
    await handleUpdate(table, id, { status: 'approved' });
  };

  const handleReject = async (table: 'testimonials' | 'spell_requests', id: string) => {
    await handleUpdate(table, id, { status: 'rejected' });
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      'published': 'default',
      'active': 'default',
      'approved': 'default',
      'draft': 'secondary',
      'inactive': 'secondary',
      'pending': 'outline',
      'rejected': 'destructive'
    };
    return <Badge variant={variants[status] || 'outline'}>{status}</Badge>;
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  // Show login form if not authenticated
  if (!user) {
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setAuthLoading(true);
      setAuthError('');

      try {
        const { error } = await signIn(email, password);
        if (error) {
          setAuthError(error.message);
        }
      } catch (err) {
        setAuthError('An unexpected error occurred');
      }

      setAuthLoading(false);
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {authError && (
                <Alert variant="destructive">
                  <AlertDescription>{authError}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full" disabled={authLoading}>
                {authLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show access denied if authenticated but not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="p-8">
          <CardContent className="text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-muted-foreground">You need admin privileges to access this page.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Enchant Admin Dashboard
          </h1>
          <Button variant="outline" onClick={signOut} className="flex items-center gap-2">
            <LogOut size={16} />
            Sign Out
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Users size={16} />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <FileText size={16} />
              Blog Posts
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Heart size={16} />
              Services
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-2">
              <Star size={16} />
              Testimonials
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center gap-2">
              <Eye size={16} />
              Spell Requests
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{blogPosts.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Services</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{spellServices.filter(s => s.status === 'active').length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Testimonials</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{testimonials.filter(t => t.status === 'pending').length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Spell Requests</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{spellRequests.filter(r => r.status === 'pending').length}</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Blog Posts Tab */}
          <TabsContent value="blog" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Blog Posts</h2>
              <Button onClick={() => { setEditingItem({ type: 'blog' }); setFormData({}); }}>
                <PlusCircle size={16} className="mr-2" />
                Add Post
              </Button>
            </div>

            {editingItem?.type === 'blog' && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingItem.id ? 'Edit Post' : 'Create Post'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Title"
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                  <Textarea
                    placeholder="Excerpt"
                    value={formData.excerpt || ''}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  />
                  <Textarea
                    placeholder="Content"
                    value={formData.content || ''}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={6}
                  />
                  <Input
                    placeholder="Image URL"
                    value={formData.image_url || ''}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  />
                  <select
                    className="w-full p-2 border rounded"
                    value={formData.status || 'draft'}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                  <div className="flex gap-2">
                    <Button onClick={() => {
                      if (editingItem.id) {
                        handleUpdate('blog_posts', editingItem.id, { ...formData, author_id: user?.id });
                      } else {
                        handleCreate('blog_posts', { ...formData, author_id: user?.id });
                      }
                    }}>
                      Save
                    </Button>
                    <Button variant="outline" onClick={() => { setEditingItem(null); setFormData({}); }}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {blogPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="flex justify-between items-start p-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{post.title}</h3>
                        {getStatusBadge(post.status)}
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{post.excerpt}</p>
                      <p className="text-xs text-muted-foreground">
                        Created: {new Date(post.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingItem({ ...post, type: 'blog' });
                          setFormData(post);
                        }}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete('blog_posts', post.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Spell Services</h2>
              <Button onClick={() => { setEditingItem({ type: 'service' }); setFormData({}); }}>
                <PlusCircle size={16} className="mr-2" />
                Add Service
              </Button>
            </div>

            {editingItem?.type === 'service' && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingItem.id ? 'Edit Service' : 'Create Service'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Title"
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                  <Textarea
                    placeholder="Description"
                    value={formData.description || ''}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                  />
                  <Input
                    placeholder="Price"
                    type="number"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                  />
                  <Input
                    placeholder="Duration"
                    value={formData.duration || ''}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  />
                  <Input
                    placeholder="Category"
                    value={formData.category || ''}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  />
                  <Input
                    placeholder="Image URL"
                    value={formData.image_url || ''}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  />
                  <select
                    className="w-full p-2 border rounded"
                    value={formData.status || 'active'}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <div className="flex gap-2">
                    <Button onClick={() => {
                      if (editingItem.id) {
                        handleUpdate('spell_services', editingItem.id, formData);
                      } else {
                        handleCreate('spell_services', formData);
                      }
                    }}>
                      Save
                    </Button>
                    <Button variant="outline" onClick={() => { setEditingItem(null); setFormData({}); }}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {spellServices.map((service) => (
                <Card key={service.id}>
                  <CardContent className="flex justify-between items-start p-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{service.title}</h3>
                        {getStatusBadge(service.status)}
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{service.description}</p>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>Price: ${service.price}</span>
                        <span>Duration: {service.duration}</span>
                        <span>Category: {service.category}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingItem({ ...service, type: 'service' });
                          setFormData(service);
                        }}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete('spell_services', service.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-6">
            <h2 className="text-xl font-semibold">Testimonials</h2>
            <div className="grid gap-4">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">{testimonial.client_name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Rating: {testimonial.rating}/5</span>
                          {getStatusBadge(testimonial.status)}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {testimonial.status === 'pending' && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleApprove('testimonials', testimonial.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Check size={16} />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleReject('testimonials', testimonial.id)}
                            >
                              <X size={16} />
                            </Button>
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete('testimonials', testimonial.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">{testimonial.content}</p>
                    <p className="text-xs text-muted-foreground">
                      Submitted: {new Date(testimonial.created_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Spell Requests Tab */}
          <TabsContent value="requests" className="space-y-6">
            <h2 className="text-xl font-semibold">Spell Requests</h2>
            <div className="grid gap-4">
              {spellRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">{request.client_name}</h3>
                        <p className="text-sm text-muted-foreground">{request.client_email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm">Type: {request.spell_type}</span>
                          {getStatusBadge(request.status)}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {request.status === 'pending' && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleApprove('spell_requests', request.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Check size={16} />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleReject('spell_requests', request.id)}
                            >
                              <X size={16} />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{request.details}</p>
                    {request.admin_notes && (
                      <div className="bg-muted p-3 rounded">
                        <p className="text-sm"><strong>Admin Notes:</strong> {request.admin_notes}</p>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      Submitted: {new Date(request.created_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}