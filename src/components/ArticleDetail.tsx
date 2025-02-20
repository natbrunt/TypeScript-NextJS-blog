"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ReactMarkdown from 'react-markdown'

interface Article {
  id: number
  title: string
  description: string
  date: string
  image: string
  content: string
}

interface CodeProps {
  inline?: boolean; // `inline` is optional and can be a boolean
  [key: string]: any; // This allows other props to pass through
}

export function ArticleDetail({ id }: { id: string }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const customComponents = {
    h1: ({ ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
    h2: ({ ...props }) => <h2 className="text-2xl font-bold mb-3" {...props} />,
    h3: ({ ...props }) => <h3 className="text-xl font-bold mb-2" {...props} />,
    p: ({ ...props }) => <p className="mb-4" {...props} />,
    ul: ({ ...props }) => <ul className="list-disc pl-5 mb-4" {...props} />,
    ol: ({ ...props }) => <ol className="list-decimal pl-5 mb-4" {...props} />,
    li: ({ ...props }) => <li className="mb-1" {...props} />,
    a: ({ ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
    blockquote: ({ ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4" {...props} />,
    pre: ({ ...props }) => (
      <pre className="whitespace-pre-wrap break-words" {...props}/>
    ),
    code: ({ inline, ...props }: CodeProps) =>
      inline
        ? <code className="bg-secondary rounded px-1" {...props} />
        : <code className="block bg-secondary rounded p-2 mb-4" {...props} />,
  }

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
        {article.image ? 
          <Image src={`${URL}${article.image}`} alt={article.title} layout="fill" objectFit="cover" />
        :
          <Image src={"https://kzml378iqm9efp7rc6zu.lite.vusercontent.net/placeholder.svg"} alt={article.title} layout="fill" objectFit="cover" />
        }    

      </div>
      <CardContent>
        <div className="pt-6">
          <ReactMarkdown components={customComponents}>{article.content}</ReactMarkdown>
        </div>
      
        {/* pre enables white spaces, etc */}
        {/*<pre className="whitespace-pre-wrap pt-6">{article.content}</pre>*/}
      
      </CardContent>
    </Card>
  )
}

