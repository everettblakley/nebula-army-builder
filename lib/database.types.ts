export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      armies: {
        Row: {
          id: number
          created_at: string | null
          created_by: string
          name: string
          point_limit: number
          faction: string
          updated_at: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          created_by: string
          name?: string
          point_limit?: number
          faction: string
          updated_at?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          created_by?: string
          name?: string
          point_limit?: number
          faction?: string
          updated_at?: string | null
        }
      }
      army_units: {
        Row: {
          id: number
          created_at: string | null
          created_by: string
          army_id: number
          unit_id: number
          count: number
        }
        Insert: {
          id?: number
          created_at?: string | null
          created_by: string
          army_id: number
          unit_id: number
          count?: number
        }
        Update: {
          id?: number
          created_at?: string | null
          created_by?: string
          army_id?: number
          unit_id?: number
          count?: number
        }
      }
      factions: {
        Row: {
          name: string
          description: string | null
        }
        Insert: {
          name: string
          description?: string | null
        }
        Update: {
          name?: string
          description?: string | null
        }
      }
      units: {
        Row: {
          id: number
          created_at: string | null
          name: string
          faction: string
          base_size: number | null
          cost: number
          initiative: number
          defense: number
          resilience: number
          hit_points: number
          movement: number
        }
        Insert: {
          id?: number
          created_at?: string | null
          name?: string
          faction: string
          base_size?: number | null
          cost: number
          initiative: number
          defense: number
          resilience: number
          hit_points: number
          movement: number
        }
        Update: {
          id?: number
          created_at?: string | null
          name?: string
          faction?: string
          base_size?: number | null
          cost?: number
          initiative?: number
          defense?: number
          resilience?: number
          hit_points?: number
          movement?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

