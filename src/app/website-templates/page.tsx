"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Template data - your actual website templates
const templates = [
  {
    id: "driftwood",
    name: "driftwood",
    description: "A beautiful, modern website template with elegant design and smooth animations.",
    category: "Business",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    previewUrl: "/templates/driftwood/index.html",
    image: "/templates/driftwood/preview.jpg"
  },
  {
    id: "willow",
    name: "willow", 
    description: "A clean and professional template perfect for business websites and portfolios.",
    category: "Business",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    previewUrl: "/templates/willow/index.html",
    image: "/templates/willow/preview.jpg"
  }
]

export default function WebsiteTemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Website Templates Gallery</h1>
                <p className="text-muted-foreground">Professional website templates ready to use</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              {templates.length} Templates
            </Badge>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
              {/* Template Preview Image */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                {/* Preview image */}
                <Image 
                  src={template.image} 
                  alt={`${template.name} template preview`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hidden">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground capitalize">{template.name}</span>
                  </div>
                </div>
              </div>

              {/* Template Content */}
              <div className="flex flex-col flex-grow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{template.name.charAt(0).toUpperCase() + template.name.slice(1)}</CardTitle>
                  <CardDescription className="text-sm">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(template.previewUrl, '_blank')}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Add New Template Section */}
        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">More Templates Coming Soon</h3>
              <p className="text-sm text-muted-foreground mb-4">
                I&apos;m constantly working on new templates. Check back for updates!
              </p>
              <Button variant="outline" asChild>
                <Link href="/">
                  Back to Portfolio
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Professional website templates for modern businesses and creative professionals.
            </p>
            <div className="mt-4">
              <Button variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}