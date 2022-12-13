import { serverSupabaseClient } from "#supabase/server"
import { Database } from "~~/lib/database.types"
import { Army } from "~~/lib/types"

const SORTABLE_FIELDS: Array<keyof Army> = ['id', 'name', 'created_at', 'faction']
const DEFAULT_SORT = 'name'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const client = serverSupabaseClient<Database>(event)


  const { sort, ...filter } = query

  const order = sort && isString(sort) ? sort : DEFAULT_SORT

  const { data, error } = await client.from('armies').select(`
    id, name, created_at, faction, 
    army_units ( 
      id, count, 
      units ( 
        name, cost 
      ) 
    )`).match(filter).order(order)

  if (error) {
    console.error(error)
    throw createError({ statusCode: 422, statusMessage: 'Unable to fetch armies' })
  }

  return data ?? []
})