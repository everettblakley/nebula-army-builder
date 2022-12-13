import { Faction } from "~~/lib/types"

export const useFactions = () => {
  const factions = readonly<Faction[]>(['Exo Militia', 'Legion', "Res'Ai", 'Ugnix'])

  return factions
}