import { Faction } from "~~/types";

interface CreateArmyDTO {
  name: string;
  faction: Faction;
}

export default defineEventHandler<{ body: CreateArmyDTO }>(async (event) => {
  const body = await readBody(event)
  console.debug(body)
  return { body: body as CreateArmyDTO }
})