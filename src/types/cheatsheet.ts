export interface Cheatsheet {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  content: string
  lastUpdated: string
}

export type CheatsheetCategory = 
  | "Programming"
  | "DevOps"
  | "Tools"
  | "Frameworks"
  | "Databases"
  | "CLI"
