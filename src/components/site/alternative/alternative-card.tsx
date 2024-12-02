import Link from "next/link"
import { Star } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Alternative } from "@/types/alternative"

interface AlternativeCardProps {
  alternative: Alternative
}

export function AlternativeCard({ alternative }: AlternativeCardProps) {
  return (
    <Link href={alternative.url}>
      <Card className="h-full transition-colors hover:bg-muted/50">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
          <img
            src={alternative.icon}
            alt={`${alternative.name} icon`}
            className="h-8 w-8"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{alternative.name}</h3>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4" />
            {alternative.stars.toLocaleString()}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{alternative.description}</p>
          <div className="mt-2">
            <Badge variant="secondary" className="text-xs">
              {alternative.category}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

