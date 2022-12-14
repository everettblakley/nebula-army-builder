import { Unit } from "~~/lib/types"
import { serverSupabaseClient } from "#supabase/server"
import { isString } from "lodash-es"

export default defineEventHandler(async (event): Promise<Unit[]> => {
  const client = serverSupabaseClient(event)

  const { sort, ...filter } = getQuery(event)

  const order = sort && isString(sort) ? sort : 'name'

  let data: Unit[]
  let error
  if (filter) {
    const response = await client.from('units').select('*').match(filter).order(order)
    data = response.data as Unit[]
    error = response.error
  } else {
    const response = await client.from('units').select('*').order(order)
    data = response.data as Unit[]
    error = response.error
  }

  if (error) {
    console.error(error)
    throw createError({ statusCode: 422, statusMessage: 'An error occurred fetching units' })
  }

  if (!data) return []

  return data as Unit[]
})