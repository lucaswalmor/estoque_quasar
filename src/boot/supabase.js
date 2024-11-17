import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/useAuthUser'

const supabaseUrl = 'https://wncrivgltbfzijtnovmy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduY3JpdmdsdGJmemlqdG5vdm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3MzU2NDksImV4cCI6MjA0NzMxMTY0OX0.aL9zEFKBs9uhpIRlMjamPFRE0WeWqZc0c6TyqeZGceQ'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();

  user.value = session?.user || null
})

export default function useSupabase() {
    return { supabase }
}
