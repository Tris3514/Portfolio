"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

// ULTRAKILL Level data - using actual files from the directory
const ultrakillLevels = [
  {
    id: "ultrakill1",
    name: "",
    description: "",
    category: "Showcase",
    tags: ["Unity", "Level Design", "Environment", "Lighting"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill1.png`,
    type: "image"
  },
  {
    id: "ultrakill2",
    name: "",
    description: "",
    category: "Showcase",
    tags: ["Unity", "Level Design", "Combat"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill2.png`,
    type: "image"
  },
  {
    id: "ultrakill3",
    name: "",
    description: "",
    category: "Gameplay",
    tags: ["Unity", "Level Design"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill3.mp4`,
    type: "video"
  },
  {
    id: "ultrakill4",
    name: "",
    description: "",
    category: "Environment",
    tags: ["Unity", "Level Design", "Environment", "Lighting"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill4.mp4`,
    type: "video"
  },
  {
    id: "ultrakill5",
    name: "",
    description: "",
    category: "Showcase",
    tags: ["Unity", "Level Design", "Visual Effects"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill5.mp4`,
    type: "video"
  },
  {
    id: "ultrakill6",
    name: "",
    description: "",
    category: "Showcase",
    tags: ["Unity", "Level Design", "Platforming", "Combat"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill6.mp4`,
    type: "video"
  },
  {
    id: "ultrakill7",
    name: "",
    description: "",
    category: "Atmosphere",
    tags: ["Unity", "Level Design", "Atmosphere", "Particles"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill7.mp4`,
    type: "video"
  },
  {
    id: "ultrakill8",
    name: "",
    description: "",
    category: "Showcase",
    tags: ["Unity", "Level Design", "Geometry"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill8.mp4`,
    type: "video"
  },
  {
    id: "ultrakill9",
    name: "",
    description: "",
    category: "Showcase",
    tags: ["Unity", "Level Design", "Optimization", "Advanced"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill9.mp4`,
    type: "video"
  },
  {
    id: "ultrakill10",
    name: "",
    description: "",
    category: "Showcase",
    tags: ["Unity", "Level Design"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill10.mp4`,
    type: "video"
  }
]

export default function UltrakillGalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : ultrakillLevels.length - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex < ultrakillLevels.length - 1 ? selectedIndex + 1 : 0);
    }
  };

  const selectedLevel = selectedIndex !== null ? ultrakillLevels[selectedIndex] : null;

  return (
    <div className="min-h-screen">
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
                <h1 className="text-2xl font-bold text-foreground">3D Art Showcase</h1>
                <p className="text-muted-foreground">3D models, environments, and digital art created with modern tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ULTRAKILL Levels Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ULTRAKILL Levels</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            3D models, environments, and digital art created with modern tools, showcasing 3D modeling and design skills.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ultrakillLevels.map((level, index) => (
            <Card key={level.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
              {/* Level Preview Media */}
              <div 
                className="aspect-video bg-muted relative overflow-hidden cursor-pointer"
                onClick={() => openModal(index)}
              >
                {level.type === "image" ? (
                  <Image 
                    src={level.media} 
                    alt={`${level.name} level preview`}
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
                ) : (
                  <video 
                    src={level.media}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                    onError={(e) => {
                      // Fallback to placeholder if video fails to load
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                )}
                {/* Fallback placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hidden">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground capitalize">{level.name}</span>
                  </div>
                </div>
                {/* Video play indicator */}
                {level.type === "video" && (
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    Video
                  </div>
                )}
                
                {/* Click to expand overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Level Content */}
              <div className="flex flex-col flex-grow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {level.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{level.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {level.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {level.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* 3D Artwork Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">3D Artwork</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A collection of 3D models, renders, and artistic creations showcasing various techniques and styles.
            </p>
          </div>
          <div className="text-center">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">3D Artwork Coming Soon</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay tuned for a showcase of 3D models, renders, and artistic creations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 3D Printing Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">3D Printing</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Physical 3D printed models and prototypes, bringing digital designs into the real world.
            </p>
          </div>
          <div className="text-center">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">3D Printing Coming Soon</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Physical 3D printed models and prototypes will be showcased here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Custom ULTRAKILL levels showcasing level design and game development skills.
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

      {/* Media Modal */}
      {selectedLevel && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={goToNext}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Media Content */}
            <div className="relative w-full h-full flex items-center justify-center">
              {selectedLevel.type === "image" ? (
                <Image
                  src={selectedLevel.media}
                  alt={selectedLevel.name}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-full object-contain"
                  priority
                />
              ) : (
                <video
                  src={selectedLevel.media}
                  className="max-w-full max-h-full object-contain"
                  controls
                  autoPlay
                  muted={false}
                  loop
                  playsInline
                />
              )}
            </div>

            {/* Title and Counter Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-semibold bg-black/50 px-4 py-2 rounded-lg">
                {selectedLevel.name} ({selectedIndex! + 1} of {ultrakillLevels.length})
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
