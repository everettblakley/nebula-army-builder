export type Faction = 'Exo Militia' | 'Res\'ai' | 'Legion' | 'Ugnix';

export interface Unit {
  faction: Faction;
  name: string;
  displayName: string;
  cost: number;
  base: number | null;
  initiative: number;
  defense: number;
  resilience: number;
  hp: number; 
  movement: number;
}