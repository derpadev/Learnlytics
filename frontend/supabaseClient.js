import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xbdeywtwlzioindbgqih.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiZGV5d3R3bHppb2luZGJncWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NzAwNDMsImV4cCI6MjA3NTU0NjA0M30.Go88CqL1lDEB91CxH2BCzK3dXkDzf2ivEi1TV802B-A";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);