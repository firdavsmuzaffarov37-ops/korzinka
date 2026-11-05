import { createClient } from '@supabase/supabase-js';

const DEFAULT_SUPABASE_URL = 'https://zbyfrluhowfmhlkjmyff.supabase.co';
const DEFAULT_SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_94zJDDykWBxfGHgLg35EAw_B-Q2oypm';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
export const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('your-project-id')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;

/**
 * Ping Supabase to verify connection and check if schema tables are initialized
 */
export async function checkSupabaseHealth() {
  if (!supabase) {
    return { connected: false, schemaReady: false, message: 'Client not initialized' };
  }
  try {
    const { data, error } = await supabase
      .from('products')
      .select('id')
      .limit(1);

    if (error) {
      // Connection works, but table might not be migrated yet (42P01 / PGRST205)
      return {
        connected: true,
        schemaReady: false,
        code: error.code,
        message: error.message,
      };
    }

    return {
      connected: true,
      schemaReady: true,
      rowCount: data?.length ?? 0,
      message: 'Connected to Supabase PostgreSQL (zbyfrluhowfmhlkjmyff)',
    };
  } catch (err) {
    return {
      connected: false,
      schemaReady: false,
      message: err instanceof Error ? err.message : 'Network error',
    };
  }
}
