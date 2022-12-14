import { Faction, Army } from "~~/lib/types";
import { serverSupabaseUser, serverSupabaseClient } from '#supabase/server'
import { Database } from "~~/lib/database.types";
interface CreateArmyDTO {
  name: string;
  faction: Faction;
}

export default defineEventHandler<Army>(async (event) => {
  const body = await readBody(event)
  const user = await serverSupabaseUser(event);
  const client = serverSupabaseClient<Database>(event);

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Must be authenticated to create an army' })
  }

  const created_by = user.id
  const { name, faction }: CreateArmyDTO = body

  const values = { name, faction, created_by }

  console.debug(values)

  const { data, error } = await client.from('armies').insert(values).select()

  if (error) {
    throw createError({ statusCode: 422, statusMessage: error.details })
  }

  const [army] = data

  return army
})