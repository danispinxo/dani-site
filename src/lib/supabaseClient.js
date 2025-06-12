import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Create a single instance of the Supabase client
const supabase = createClient(supabaseUrl, key, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

// Set max listeners to prevent the warning
if (supabase.realtime) {
  supabase.realtime.setMaxListeners(20);
}

export default supabase;
