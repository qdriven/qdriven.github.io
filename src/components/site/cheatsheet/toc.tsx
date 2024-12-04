"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  text: string
  level: number
}

interface TocProps {
  content: string
}

export function TableOfContents({ content }: TocProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Parse headings from markdown content
    const headings = content.match(/^#{1,6}\s+.+$/gm) || []
    const tocItems = headings.map((heading) => {
      const level = heading.match(/^#+/)?.[0].length || 1
      const text = heading.replace(/^#+\s+/, "")
      const id = text.toLowerCase().replace(/[^\w]+/g, "-")
      return { id, text, level }
    })
    setToc(tocItems)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    headings.forEach((heading) => observer.observe(heading))

    return () => {
      headings.forEach((heading) => observer.unobserve(heading))
    }
  }, [toc])

  if (toc.length === 0) return null

  return (
    <nav className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-auto">
      <h4 className="mb-4 font-semibold">Table of Contents</h4>
      <ul className="space-y-3 text-sm">
        {toc.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
          >
            <a
              href={`#${item.id}`}
              className={cn(
                "inline-block hover:text-foreground",
                activeId === item.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
