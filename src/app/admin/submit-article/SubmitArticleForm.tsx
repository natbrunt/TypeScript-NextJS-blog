"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FormEvent } from 'react'

export default function SubmitArticleForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

 //form data method
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    if (image) {
      formData.append("image", image); // Send the actual file, not a blob URL
    }
  
    try {
     const response = await fetch(`${SERVER_URL}tnsv-blog/addArticle`,{
        method: 'POST',
        body: formData,
        
    });
      setSuccess(true)
      // Reset form
      setTitle("")
      setDescription("")
      setContent("")
      setImage(null)
  
      console.log("Upload successful:", response.json());
    } catch (error) {
      setError("Failed to submit article. Please try again.")
      console.error("Upload failed:", error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Submit New Article</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-foreground">
              Title
            </label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-foreground">
              Description
            </label>
            <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-foreground">
              Content
            </label>
            <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required rows={10} />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-foreground">
              Image (optional)
            </label>
            <Input id="image" type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} accept="image/*" />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Article"}
          </Button>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {success && (
            <Alert>
              <AlertDescription>Article submitted successfully!</AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

