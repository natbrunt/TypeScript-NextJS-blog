"use client"

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SubmitArticleForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    const articleData = {
      title,
      description,
      content,
      image: image ? URL.createObjectURL(image) : null,
    }

    try {
      const response = await axios.post("https://your-api/addArticle", articleData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(response.data)
      setSuccess(true)
      // Reset form
      setTitle("")
      setDescription("")
      setContent("")
      setImage(null)
    } catch (err) {
      setError("Failed to submit article. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Submit New Article</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required rows={10} />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
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

