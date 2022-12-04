import { Faction } from "~~/types"

export type FactionOption = {
  label: Faction; code: string;
}

export const useFactions = () => {
  const factions = readonly<FactionOption[]>([{
    label: 'Exo Militia',
    code: 'exo',
  }, {
    label: 'Legion',
    code: 'legion',
  }, {
    label: 'Res\'ai',
    code: 'resai',
  }, {
    label: 'Ugnix',
    code: 'ugnix'
  }])

  return factions
}