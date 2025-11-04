import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl!, supabaseKey!);

export async function addAdmin() {
  const BACK_URL = import.meta.env.VITE_BACKEND_URL;
  const response = await fetch(`${BACK_URL}/admin`)

  // this is supposed to be on the backend, we also
  // need to send the users token in order to know who 
  // the FLAPS is trying to create a user!
  //
  //supabase.from('admins').insert({
  //  "name": "Jesus"
  //});
}

