import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fjeslhedltwygqygfuqg.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqZXNsaGVkbHR3eWdxeWdmdXFnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MzM2MzI1NywiZXhwIjoxOTg4OTM5MjU3fQ.FD4fttkfTPLcCBp_Nbd76ysY-5IMyV8XgrYbm-jfMCM"


export const supabase = createClient(supabaseUrl, supabaseAnonKey)