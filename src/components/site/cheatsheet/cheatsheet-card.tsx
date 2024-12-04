import { Cheatsheet } from "@/types/cheatsheet"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface CheatsheetCardProps extends Cheatsheet {}

export function CheatsheetCard(props: CheatsheetCardProps) {
  return (
    <Link href={`/cheatsheets/${props.slug}`}>
      <Card className="h-full transition-colors hover:bg-muted/50">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{props.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary">{props.category}</Badge>
            {props.tags.map((tag) => (
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
