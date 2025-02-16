"use client"

import { useParams, useSearchParams } from "next/navigation";
import { ArticleDetail } from "@/components/ArticleDetail"

const ArticlePage = () => {
  const { id } = useParams(); // Extract dynamic route param
  if (!id || Array.isArray(id)) return <p>Invalid Article ID</p>;

    return (
        <ArticleDetail id={id} />
    )
};

export default ArticlePage;
