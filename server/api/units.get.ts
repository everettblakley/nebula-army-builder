import { Unit } from "~~/types"
import { serverSupabaseClient } from "#supabase/server"

export default defineEventHandler(async (event): Promise<Unit[]> => {
  const client = serverSupabaseClient(event)

  const query = getQuery(event)
  const faction = query.faction
  console.debug(query)

  let data: Unit[]
  if (faction) {
    const response = await client.from('units').select('*').eq('faction', faction)
    data = response.data as Unit[]
  } else {
    const response = await client.from('units').select('*')
    data = response.data as Unit[]
  }


  if (!data) return []

  return data as Unit[]
})