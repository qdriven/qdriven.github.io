import { Cheatsheet } from "@/types/cheatsheet"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface CheatsheetCardProps {
  cheatsheet: Cheatsheet
}

export function CheatsheetCard({ cheatsheet }: CheatsheetCardProps) {
  return (
    <Link href={`/cheatsheets/${cheatsheet.id}`}>
      <Card className="h-full transition-colors hover:bg-muted/50">
        <CardHeader>
          <CardTitle>{cheatsheet.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{cheatsheet.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">{cheatsheet.category}</Badge>
            {cheatsheet.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
