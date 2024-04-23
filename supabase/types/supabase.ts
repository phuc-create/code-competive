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
          solutions: string[] | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          disliked?: boolean | null
          id?: number
          liked?: boolean | null
          problem_id?: number | null
          solutions?: string[] | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          disliked?: boolean | null
          id?: number
          liked?: boolean | null
          problem_id?: number | null
          solutions?: string[] | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_problem_overview_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: true
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_problem_overview_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      problems: {
        Row: {
          categories: string[] | null
          constraints: Json | null
          created_at: string
          description: Json | null
          dislikes: number | null
          id: number
          level: string | null
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
          constraints?: Json | null
          created_at?: string
          description?: Json | null
          dislikes?: number | null
          id?: number
          level?: string | null
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
          constraints?: Json | null
          created_at?: string
          description?: Json | null
          dislikes?: number | null
          id?: number
          level?: string | null
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
      user: {
        Row: {
          categories: string[] | null
          created_at: string
          dislikes: number | null
          id: string
          level: string | null
          likes: number | null
          link: string | null
          number: number
          title: string | null
          updated_at: string | null
        }
        Insert: {
          categories?: string[] | null
          created_at?: string
          dislikes?: number | null
          id?: string
          level?: string | null
          likes?: number | null
          link?: string | null
          number?: number
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          categories?: string[] | null
          created_at?: string
          dislikes?: number | null
          id?: string
          level?: string | null
          likes?: number | null
          link?: string | null
          number?: number
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
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
