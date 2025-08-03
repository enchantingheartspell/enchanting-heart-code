import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

type TableName = 'blog_posts' | 'spell_services' | 'testimonials' | 'spell_requests';

export const useRealtimeData = (
  table: TableName,
  filter?: Record<string, any>
) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const { data: result } = await supabase
        .from(table)
        .select('*')
        .order('created_at', { ascending: false });
      
      setData(result || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [table]);

  useEffect(() => {
    fetchData();

    // Set up real-time subscription
    const channel = supabase
      .channel(`realtime-${table}`)
      .on('postgres_changes', { event: '*', schema: 'public', table }, () => {
        fetchData();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [table, fetchData]);

  return { data, loading, refetch: fetchData };
};