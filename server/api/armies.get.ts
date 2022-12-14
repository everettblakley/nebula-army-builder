import { serverSupabaseClient } from "#supabase/server"
import { Database } from "~~/lib/database.types"
import { Army } from "~~/lib/types"

const SORTABLE_FIELDS: Array<keyof Army> = ['id', 'name', 'created_at', 'faction']
const DEFAULT_SORT = 'name'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const client = serverSupabaseClient<Database>(event)


  const { sort, ...filter } = query

  let data, error

  const selectStatement = `
  id, name, created_at, faction, 
  army_units ( 
    id, count, 
    units ( 
      name, cost 
    ) 
  )`

  if (filter.id) {
    const response = await client.from('armies').select(selectStatement).eq('id', filter.id).maybeSingle()
    data = response.data
    error = response.error
  } else {
    const order = sort && isString(sort) ? sort : DEFAULT_SORT

    const response = await client.from('armies').select(selectStatement).match(filter).order(order)
    data = response.data
    error = response.error
  }

  if (error) {
    console.error(error)
    throw createError({ statusCode: 422, statusMessage: 'Unable to fetch armies' })
  }

  return data ?? []
})