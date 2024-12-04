import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SlidersHorizontal } from 'lucide-react'

export function SearchHeader() {
  return (
    <div className="flex flex-col space-y-4">a
      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <Input placeholder="Search alternatives..." className="w-full" />
        </div>
        <Select defaultValue="relevance">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="stars">Stars</SelectItem>
            <SelectItem value="recent">Recent</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="sr-only">Show filters</span>
        </Button>
      </div>
      <div className="text-sm text-muted-foreground">
        Find alternatives to your favorite tools in AI age.
      </div>
    </div>
  )
}

