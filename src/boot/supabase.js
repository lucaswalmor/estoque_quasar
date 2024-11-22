import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/useAuthUser'

const supabaseUrl = process.env.supabaseUrl
const supabaseKey = process.env.supabaseKey
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();

  user.value = session?.user || null
})

export default function useSupabase() {
    return { supabase }
}
