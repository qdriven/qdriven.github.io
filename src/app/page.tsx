"use client"

import { useEffect, useState } from "react"
import { CheatsheetSearch } from "@/components/site/cheatsheet/search"
import { Cheatsheet } from "@/types/cheatsheet"
import { SiteHeader } from "@/components/site/site-header"
import { CheatsheetCard } from "@/components/site/cheatsheet/cheatsheet-card"
import { CategoryFilter } from "@/components/site/cheatsheet/category-filter"

export default function Home() {
  const [allCheatsheets, setAllCheatsheets] = useState<Cheatsheet[]>([])
  const [filteredCheatsheets, setFilteredCheatsheets] = useState<Cheatsheet[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCheatsheets() {
      try {
        const response = await fetch('/api/cheatsheets')
        const data = await response.json()
        
        setAllCheatsheets(data)
        setFilteredCheatsheets(data)
      } catch (error) {
        console.error('Error fetching cheatsheets:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCheatsheets()
  }, [])

  // Extract unique categories
  const categories = Array.from(new Set(allCheatsheets.map((c) => c.category || '')))

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
    if (category) {
      setFilteredCheatsheets(allCheatsheets.filter(c => c.category === category))
    } else {
      setFilteredCheatsheets(allCheatsheets)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 flex">
        <section className="container py-8 flex-1">
          <div className="mx-auto max-w-[980px] text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Developer Cheatsheets
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              Quick reference guides for developers
            </p>
          </div>
          <div className="mx-auto max-w-xl py-8">
            <CheatsheetSearch
              cheatsheets={allCheatsheets}
              onFilter={setFilteredCheatsheets}
            />
          </div>
          {loading ? (
            <div className="text-center text-muted-foreground">Loading cheatsheets...</div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 container">
              {filteredCheatsheets.map((cheatsheet) => (
                <CheatsheetCard key={cheatsheet.slug} {...cheatsheet} />
              ))}
            </div>
          )}
        </section>
        <aside className="w-64 bg-gray-100 p-4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        </aside>
      </main>
    </div>
  )
}
