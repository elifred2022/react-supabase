import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jzwjtbsrnmniztxltrnw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6d2p0YnNybm1uaXp0eGx0cm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1ODcwMzcsImV4cCI6MjA2MDE2MzAzN30.n4Y_NO3aNPhjy2Yn1SnyXNpCJ6bIG4iQvSH2gqWIXhQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/*
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);
*/
