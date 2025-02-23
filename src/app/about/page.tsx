import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Globe, Mail, Terminal } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nathaniel JB</h1>
        <p className="text-xl text-muted-foreground">Full Stack Developer & Software Engineer</p>
      </div>

      {/* About Me Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          <CardDescription>Professional Background & Expertise</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            I am a passionate Full Stack Developer with expertise in modern web technologies. My focus is on building
            scalable, efficient, and user-friendly applications using cutting-edge tools and frameworks.
          </p>
          <p>
            With experience in both frontend and backend development, I specialize in creating robust web applications
            using technologies like React, Next.js, Node.js, and various cloud platforms.
          </p>
        </CardContent>
      </Card>

      {/* Projects Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Featured Projects</CardTitle>
          <CardDescription>Some of my recent work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* Real-Time Editor Project */}
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Real-Time Markdown Editor
              </h3>
              <p className="text-muted-foreground mb-4">
                A simplistic text editor with real-time markdown display and color-theme customization.
                Built with React, Shadcn, and Tailwind css.
              </p>
              <Link href="https://real-time-editor-topaz.vercel.app/" target="_blank">
                <Button variant="outline" size="sm">
                  View Project
                </Button>
              </Link>
            </div>

            {/* Article Feed Project */}
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Article Feed Platform</h3>
              <p className="text-muted-foreground mb-4">
                A modern blog platform built with Next.js and MongoDB, featuring a clean UI and robust content
                management system.
              </p>
              <Link href="/">
                <Button variant="outline" size="sm">
                  View Project
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact & Links Section */}
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Connect with me through various platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Link
              href="https://njb-developer.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-5 w-5" />
              Portfolio Website: njb-developer.vercel.app
            </Link>
            <Link
              href="https://github.com/natbrunt"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              GitHub Profile
            </Link>
            <Link
              href="mailto:nathanieljbrunnett@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              nathanieljbrunnett@gmail.com
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

