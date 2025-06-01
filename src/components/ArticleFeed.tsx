"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"
import { articles, Article } from '../data/articles';


export function ArticleFeed() {
  // const [articles, setArticles] = useState<Article[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  // const URL = process.env.NEXT_PUBLIC_SERVER_URL;
 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<Article[]>(URL+"tnsv-blog/getArticles");
  //       setArticles(response.data);
  //       //console.log(articles)
  //     } catch (err) {
  //       setError("Failed to fetch data.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {articles.map((article) => (
        <Link key={article._id} href={`/article/${article._id}`}>
          <Card className="w-full aspect-square overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-1/2">
              {article.image ? 
                <Image src={`${article.image}`} alt={article.title} layout="fill" objectFit="cover" />
              :
                <Image src={"https://kzml378iqm9efp7rc6zu.lite.vusercontent.net/placeholder.svg"} alt={article.title} layout="fill" objectFit="cover" />
              }            
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-24 overflow-hidden relative">
                <p>{article.preview}</p>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent"></div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}





