// const articles: Article[] = [
//   {
//     id: 1,
//     title: "Introduction to React",
//     description: "Learn the basics of React and start building awesome UIs.",
//     date: "2023-06-01",
//     image: "/images/react.jpeg",
//     content:
//       "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components that can be composed to build complex applications. React uses a virtual DOM to efficiently update the UI, making it fast and responsive. In this article, we'll cover the fundamental concepts of React, including components, props, and state. We'll also look at how to set up a React project and create your first component. By the end of this introduction, you'll have a solid foundation to start building your own React applications.",
//   },
//   {
//     id: 2,
//     title: "Next.js: The React Framework",
//     description: "Discover how Next.js can supercharge your React applications.",
//     date: "2023-06-05",
//     image: "/images/nextjs.jpeg",
//     content:
//       "Next.js is a powerful React framework that provides a suite of features for building modern web applications. It offers server-side rendering, static site generation, and API routes out of the box. Next.js simplifies the development process by handling routing, code splitting, and optimization automatically. In this article, we'll explore the key features of Next.js and how they can benefit your React projects. We'll cover topics such as file-based routing, API routes, and image optimization. By the end, you'll understand why Next.js is becoming the go-to choice for many React developers.",
//   },
//   {
//     id: 3,
//     title: "Tailwind CSS: A Utility-First CSS Framework",
//     description: "Explore the power of Tailwind CSS for rapid UI development.",
//     date: "2023-06-10",
//     image: "/images/tailwind.jpeg",
//     content:
//       "Tailwind CSS is a utility-first CSS framework that allows developers to rapidly build custom user interfaces. Unlike traditional CSS frameworks, Tailwind doesn't provide pre-built components. Instead, it offers low-level utility classes that you can combine to create any design. This approach gives developers more flexibility and control over their designs. In this article, we'll dive into the core concepts of Tailwind CSS, including its utility classes, responsive design system, and customization options. We'll also look at how Tailwind can speed up your development process and help you create consistent, maintainable CSS. By the end, you'll have a good understanding of how to leverage Tailwind CSS in your projects.",
//   },
// ]

"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"

interface Article {
  _id: string
  title: string
  description: string
  date: string
  image: string
  content: string
}

export function ArticleFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Article[]>(URL+"tnsv-blog/getArticles");
        setArticles(response.data);
        //console.log(articles)
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {articles.map((article) => (
        <Link key={article._id} href={`/article/${article._id}`}>
          <Card className="w-full aspect-square overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-1/2">
              {article.image ? 
                <Image src={`${URL}${article.image}`} alt={article.title} layout="fill" objectFit="cover" />
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
                <p>{article.content}</p>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent"></div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}





