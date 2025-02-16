import { ArticleFeed } from "@/components/ArticleFeed"

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Latest Articles</h1>
      <ArticleFeed />
    </div>
  )
}

