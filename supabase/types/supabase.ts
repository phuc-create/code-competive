export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      problem_overview: {
        Row: {
          created_at: string
          disliked: boolean | null
          id: number
          liked: boolean | null
          problem_id: number | null
          solutions: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          disliked?: boolean | null
          id?: number
          liked?: boolean | null
          problem_id?: number | null
          solutions?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          disliked?: boolean | null
          id?: number
          liked?: boolean | null
          problem_id?: number | null
          solutions?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "problem_overview_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_problem_overview_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      problems: {
        Row: {
          categories: string[] | null
          completed: number | null
          constraints: string | null
          created_at: string
          descriptions: string | null
          dislikes: number | null
          id: number
          level: Database["public"]["Enums"]["levels"] | null
          likes: number | null
          name: string | null
          number: number
          starter_func_name: string | null
          template_code: string | null
          test_cases: Json | null
          title: string | null
        }
        Insert: {
          categories?: string[] | null
          completed?: number | null
          constraints?: string | null
          created_at?: string
          descriptions?: string | null
          dislikes?: number | null
          id?: number
          level?: Database["public"]["Enums"]["levels"] | null
          likes?: number | null
          name?: string | null
          number?: number
          starter_func_name?: string | null
          template_code?: string | null
          test_cases?: Json | null
          title?: string | null
        }
        Update: {
          categories?: string[] | null
          completed?: number | null
          constraints?: string | null
          created_at?: string
          descriptions?: string | null
          dislikes?: number | null
          id?: number
          level?: Database["public"]["Enums"]["levels"] | null
          likes?: number | null
          name?: string | null
          number?: number
          starter_func_name?: string | null
          template_code?: string | null
          test_cases?: Json | null
          title?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          email: string | null
          id: string
          name: string | null
          picture: string | null
          role: Database["public"]["Enums"]["roles"] | null
          user_id: string | null
        }
        Insert: {
          email?: string | null
          id?: string
          name?: string | null
          picture?: string | null
          role?: Database["public"]["Enums"]["roles"] | null
          user_id?: string | null
        }
        Update: {
          email?: string | null
          id?: string
          name?: string | null
          picture?: string | null
          role?: Database["public"]["Enums"]["roles"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_completed: {
        Args: {
          problem_id: number
          x: number
        }
        Returns: undefined
      }
    }
    Enums: {
      levels: "easy" | "medium" | "hard"
      roles: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
