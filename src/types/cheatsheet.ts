export interface Cheatsheet {
  title: string
  description: string
  category: string
  tags: string[]
  content: string
  lastUpdated: string
  slug: string
}

export type CheatsheetCategory = 
  | "Programming"
  | "DevOps"
  | "Tools"
  | "Database"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Security"
  | "Testing"
