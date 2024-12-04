import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Cheatsheet } from '@/types/cheatsheet'

const CHEATSHEETS_PATH = path.join(process.cwd(), 'content/cheatsheets')

export function getCheatsheetSlugs() {
  return fs.readdirSync(CHEATSHEETS_PATH).filter((file) => file.endsWith('.md'))
}

export function getCheatsheetBySlug(slug: string): Cheatsheet | null {
  try {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = path.join(CHEATSHEETS_PATH, `${realSlug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug: realSlug,
      title: data.title,
      description: data.description,
      category: data.category,
      tags: data.tags || [],
      lastUpdated: data.lastUpdated,
      content,
    }
  } catch (error) {
    console.error(`Error reading cheatsheet ${slug}:`, error)
    return null
  }
}

export function getAllCheatsheets(): Cheatsheet[] {
  const slugs = getCheatsheetSlugs()
  const cheatsheets = slugs
    .map((slug) => getCheatsheetBySlug(slug))
    .filter((cheatsheet): cheatsheet is Cheatsheet => cheatsheet !== null)
  
  return cheatsheets
}

export function getCheatsheetsByCategory(): Record<string, Cheatsheet[]> {
  const cheatsheets = getAllCheatsheets()
  return cheatsheets.reduce((acc, cheatsheet) => {
    const category = cheatsheet.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(cheatsheet)
    return acc
  }, {} as Record<string, Cheatsheet[]>)
}

export function getAllTags(): string[] {
  const cheatsheets = getAllCheatsheets()
  const tags = new Set<string>()
  cheatsheets.forEach((cheatsheet) => {
    cheatsheet.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}
