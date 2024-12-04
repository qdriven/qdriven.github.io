import { CheatsheetCard } from "@/components/site/cheatsheet/cheatsheet-card";
import { SearchHeader } from "@/components/site/search-header";
import { SiteHeader } from "@/components/site/site-header";
import { SAMPLE_CHEATSHEETS } from "@/data/cheatsheets";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-10">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Developer Cheatsheets
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Quick reference guides for developers - from basics to advanced topics
            </p>
          </div>
        </section>
        <section className="container py-8">
          <SearchHeader />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_CHEATSHEETS.map((cheatsheet) => (
              <CheatsheetCard key={cheatsheet.id} cheatsheet={cheatsheet} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
