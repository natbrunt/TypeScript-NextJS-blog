"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ReactMarkdown from 'react-markdown'
import markDownComponents from "./markDownComponents"
import { articles, Article } from '@/components/articles';


// interface Article {
//   id: number
//   title: string
//   description: string
//   date: string
//   image: string
//   content: string
//   preview: string
// }



export function ArticleDetail({ id }: { id: string }) {
  // const [article, setArticle] = useState<Article | null>(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState<string | null>(null)
  // const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  // useEffect(() => {
  //   const fetchArticle = async () => {
  //     try {
  //       const response = await axios.get<Article>(`${URL}tnsv-blog/getArticle/${id}`)
  //       setArticle(response.data)
  //     } catch (err) {
  //       setError("Failed to fetch article.")
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchArticle()
  // }, [id])

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error: {error}</p>

  const article: Article | undefined = articles.find((a) => a._id === id)
  
  if (!article) return <p>Article not found.</p>

  return (
    <Card className="max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>{article.description}</CardDescription>
      </CardHeader>
      <div className="relative h-64">
        {article.image ? 
          <Image src={`${article.image}`} alt={article.title} layout="fill" objectFit="cover" />
        :
          <Image src={"https://kzml378iqm9efp7rc6zu.lite.vusercontent.net/placeholder.svg"} alt={article.title} layout="fill" objectFit="cover" />
        }    

      </div>
      <CardContent>
        <div className="pt-6">
          <ReactMarkdown components={markDownComponents}>{article.content}</ReactMarkdown>
        </div>
      
        {/* pre enables white spaces, etc */}
        {/*<pre className="whitespace-pre-wrap pt-6">{article.content}</pre>*/}
      
      </CardContent>
    </Card>
  )
}

