// import {createClient} from '@supabase/supabase-js'

// const supabaseURL=process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseAnonKey=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// export const supabase=createClient(supabaseURL,supabaseAnonKey)

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zqmlizorowafaexzcztm.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseKey) 

