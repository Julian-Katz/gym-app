export interface ValidationError {
  message: string
  errors: {
    [key: string]: string[]
  }
}

export interface User {
  id: string;
  name: string;
  email: string;
}
