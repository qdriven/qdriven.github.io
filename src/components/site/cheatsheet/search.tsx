"use client"

import { useCallback, useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import { CategoryFilter } from "./category-filter"
import { Cheatsheet } from "@/types/cheatsheet"

interface SearchProps {
  cheatsheets: Cheatsheet[]
  onFilter: (filtered: Cheatsheet[]) => void
}

export function CheatsheetSearch({ cheatsheets, onFilter }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [showFilters, setShowFilters] = useState(false)

  // Get unique categories and tags
  const categories = Array.from(new Set(cheatsheets.map((c) => c.category || '')))
  const allTags = Array.from(
    new Set(cheatsheets.flatMap((c) => c.tags || []))
  ).sort()

  const filterCheatsheets = useCallback(() => {
    let filtered = cheatsheets

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (c) => {
          // Safely check each field, handling potential undefined values
          const title = (c.title || '').toLowerCase()
          const description = (c.description || '').toLowerCase()
          const content = (c.content || '').toLowerCase()
          const category = (c.category || '').toLowerCase()
          const tags = c.tags || []

          return (
            title.includes(term) ||
            description.includes(term) ||
            content.includes(term) ||
            category.includes(term) ||
            tags.some(tag => (tag || '').toLowerCase().includes(term))
          )
        }
      )
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((c) => c.category === selectedCategory)
    }

    // Filter by tags
    if (selectedTags.size > 0) {
      filtered = filtered.filter((c) =>
        c.tags?.some((tag) => selectedTags.has(tag))
      )
    }

    onFilter(filtered)
  }, [cheatsheets, searchTerm, selectedCategory, selectedTags, onFilter])

  // Trigger filtering whenever state changes
  useEffect(() => {
    filterCheatsheets()
    setShowFilters(false) // Collapse filters after selection
  }, [searchTerm, selectedCategory, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) => {
      const newTags = new Set(prevTags)
      if (newTags.has(tag)) {
        newTags.delete(tag)
      } else {
        newTags.add(tag)
      }
      return newTags
    })
  }

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
  }

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search cheatsheets..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 pr-12 py-2 w-full"
          />
          <Filter
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
            onClick={() => setShowFilters(!showFilters)}
          />
        </div>
      </div>
      {showFilters && (
        <div className="absolute left-0 right-0 mx-auto mt-2 w-full max-w-xl bg-white shadow-lg rounded-lg p-4 z-10">
          <div className="flex space-x-8">
            <div className="w-1/2">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.has(tag) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
