import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { getCheatsheetBySlug, getCheatsheetSlugs } from "@/lib/markdown"
import { TableOfContents } from "@/components/site/cheatsheet/toc"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getCheatsheetSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }))
}

export default function CheatsheetPage({ params }: PageProps) {
  const cheatsheet = getCheatsheetBySlug(params.slug)

  if (!cheatsheet) {
    notFound()
  }

  return (
    <article className="container mx-auto py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_250px]">
        <div>
          <header className="mb-8">
            <h1 className="mb-2 text-4xl font-bold">{cheatsheet.title}</h1>
            <p className="mb-4 text-lg text-muted-foreground">
              {cheatsheet.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{cheatsheet.category}</Badge>
              {cheatsheet.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>
          <div className="prose prose-invert max-w-none">
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children, ...props }) => (
                  <h1 id={children?.toString().toLowerCase().replace(/[^\w]+/g, "-")} {...props}>
                    {children}
                  </h1>
                ),
                h2: ({ children, ...props }) => (
                  <h2 id={children?.toString().toLowerCase().replace(/[^\w]+/g, "-")} {...props}>
                    {children}
                  </h2>
                ),
                h3: ({ children, ...props }) => (
                  <h3 id={children?.toString().toLowerCase().replace(/[^\w]+/g, "-")} {...props}>
                    {children}
                  </h3>
                ),
                table({ node, ...props }) {
                  return (
                    <div className="my-8 overflow-x-auto">
                      <table className="w-full border-collapse border border-border" {...props} />
                    </div>
                  )
                },
                thead({ node, ...props }) {
                  return <thead className="bg-muted" {...props} />
                },
                th({ node, ...props }) {
                  return <th className="border border-border p-2 text-left font-semibold" {...props} />
                },
                td({ node, ...props }) {
                  return <td className="border border-border p-2" {...props} />
                },
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "")
                  return !inline && match ? (
                    <SyntaxHighlighter
                      language={match[1]}
                      PreTag="div"
                      style={vscDarkPlus}
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {cheatsheet.content}
            </Markdown>
          </div>
        </div>
        <div className="hidden lg:block">
          <TableOfContents content={cheatsheet.content} />
        </div>
      </div>
    </article>
  )
}
