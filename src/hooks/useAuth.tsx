import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state change:', { event, userId: session?.user?.id });
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Check if user is admin using setTimeout to avoid infinite recursion
          setTimeout(async () => {
            try {
              const { data: profile, error } = await supabase
                .from('profiles')
                .select('role')
                .eq('user_id', session.user.id)
                .maybeSingle();
              
              console.log('Profile lookup result:', { profile, error, userId: session.user.id });
              
              const isUserAdmin = profile?.role === 'admin';
              setIsAdmin(isUserAdmin);
              
              // Redirect admin users to admin page after successful login
              if (event === 'SIGNED_IN' && isUserAdmin && window.location.pathname !== '/admin') {
                console.log('Redirecting admin user to /admin');
                setTimeout(() => {
                  window.location.href = '/admin';
                }, 100);
              }
            } catch (err) {
              console.error('Error checking admin status:', err);
              setIsAdmin(false);
            }
            setLoading(false);
          }, 0);
        } else {
          setIsAdmin(false);
          setLoading(false);
        }
      }
    );

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Initial session check:', { userId: session?.user?.id });
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        supabase
          .from('profiles')
          .select('role')
          .eq('user_id', session.user.id)
          .maybeSingle()
          .then(({ data: profile, error }) => {
            console.log('Initial profile lookup:', { profile, error, userId: session.user.id });
            const isUserAdmin = profile?.role === 'admin';
            setIsAdmin(isUserAdmin);
            setLoading(false);
            
            // Check if admin is trying to access admin page on initial load
            if (isUserAdmin && window.location.pathname === '/admin') {
              console.log('Admin user accessing admin page - staying on page');
              // Stay on admin page
            } else if (isUserAdmin && window.location.pathname === '/') {
              console.log('Redirecting admin from home to admin page');
              // Redirect admin to admin page if they're on home page
              window.location.href = '/admin';
            }
          });
      } else {
        console.log('No session found, setting loading to false');
        setLoading(false);
      }
    }).catch((err) => {
      console.error('Error getting initial session:', err);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  };

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectUrl }
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      isAdmin,
      loading,
      signIn,
      signUp,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};