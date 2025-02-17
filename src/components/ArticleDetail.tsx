"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Article {
  id: number
  title: string
  description: string
  date: string
  image: string
  content: string
}

export function ArticleDetail({ id }: { id: string }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get<Article>(`${URL}tnsv-blog/getArticle/${id}`)
        setArticle(response.data)
      } catch (err) {
        setError("Failed to fetch article.")
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!article) return <p>Article not found.</p>

  return (
    <Card className="max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>{article.date}</CardDescription>
      </CardHeader>
      <div className="relative h-64">
        <Image src={article.image || "https://kzml378iqm9efp7rc6zu.lite.vusercontent.net/placeholder.svg"} alt={article.title} layout="fill" objectFit="cover" />
      </div>
      <CardContent>
      <pre className="whitespace-pre-wrap pt-6">{article.content}</pre>
      </CardContent>
    </Card>
  )
}

