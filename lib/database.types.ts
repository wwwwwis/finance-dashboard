export type Database = {
  public: {
    Tables: {
      accounts: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          type: "checking" | "savings" | "credit";
          balance: number;
          created_at: string;
        };
        Insert: {
          user_id: string;
          name: string;
          type: "checking" | "savings" | "credit";
          balance?: number;
        };
      };
      categories: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          kind: "income" | "expense";
          color: string | null;
          created_at: string;
        };
        Insert: {
          user_id: string;
          name: string;
          kind: "income" | "expense";
          color?: string;
        };
      };
      transactions: {
        Row: {
          id: string;
          user_id: string;
          account_id: string;
          category_id: string | null;
          amount: number;
          kind: "income" | "expense";
          description: string | null;
          occurred_at: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          account_id: string;
          category_id?: string | null;
          amount: number;
          kind: "income" | "expense";
          description?: string | null;
          occurred_at: string;
        };
      };
    };
  };
};
