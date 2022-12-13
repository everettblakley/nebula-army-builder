import { Database } from "./database.types";

export type Faction = 'Exo Militia' | "Res'Ai" | 'Legion' | 'Ugnix';

export type Army = Database['public']['Tables']['armies']['Row']
export type Unit = Database['public']['Tables']['units']['Row']