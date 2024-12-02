import { AlternativeCard } from "@/components/site/alternative/alternative-card";
import { SearchHeader } from "@/components/site/searcg-header";
import { SiteHeader } from "@/components/site/site-header";
import SAMPLE_ALTERNATIVES from "@/data/SAMPLES";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-10">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Open Source Alternatives To Proprietary Software
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Over 2 million users replaced proprietary software with this directory.
            </p>
          </div>
        </section>
        <section className="container py-8">
          <SearchHeader />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_ALTERNATIVES.map((alternative) => (
              <AlternativeCard key={alternative.id} alternative={alternative} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
