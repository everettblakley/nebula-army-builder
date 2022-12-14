import { MaybeRef } from "@vueuse/core"
import { Faction } from "~~/lib/types"

export const useFactions = () => {
  const factions = readonly<Faction[]>(['Exo Militia', 'Legion', "Res'Ai", 'Ugnix'])

  return factions
}

export const useFactionName = (faction: MaybeRef<Faction | null>) => {
  return computed(() => {
    const _faction = unref(faction)
    if (!_faction) return ''
    return _faction.toLowerCase().replace(/'/g, '').replace(/\s/g, '-')
  })
}