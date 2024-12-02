import Link from "next/link"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">revisited in AI age</span>
          </Link>
          <div className="hidden md:flex md:w-[200px] lg:w-[300px]">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search alternatives..."
                className="pl-8"
              />
            </div>
          </div>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/discover">Discover</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/sponsor">Sponsor</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href="/submit">Submit project</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

