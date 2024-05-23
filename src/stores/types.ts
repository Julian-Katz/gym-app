export interface ValidationError {
  message: string
  errors: {
    [key: string]: string[]
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
}
export interface Exercise {
  id?: number;
  user_id?: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
}

