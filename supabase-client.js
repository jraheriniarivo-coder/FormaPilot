/*
  SUPABASE CONNECTION PLACEHOLDER
  This file intentionally does not connect to a project yet.
  Next phase: install @supabase/supabase-js, then initialize the client using
  your Supabase Project URL and publishable key.

  NEVER put a service_role/secret key in browser code.
  Do not paste secrets into GitHub or this repository.
*/
export const supabaseConfig = {
  url: "",
  publishableKey: ""
};

export function assertSupabaseConfigured() {
  if (!supabaseConfig.url || !supabaseConfig.publishableKey) {
    throw new Error("Supabase is not configured. Add the project URL and publishable key in the approved configuration step.");
  }
}
