"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, X, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

// ULTRAKILL Level data - using actual files from the directory
const ultrakillLevels = [
  {
    id: "ultrakill1",
    name: "Level Showcase 1",
    description: "A detailed look at custom level design and environmental storytelling.",
    category: "Showcase",
    tags: ["Unity", "Level Design", "Environment", "Lighting"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill1.png`,
    type: "image"
  },
  {
    id: "ultrakill2",
    name: "Level Showcase 2", 
    description: "Combat-focused level design with intense action sequences.",
    category: "Combat",
    tags: ["Unity", "Level Design", "Combat", "Gameplay"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill2.png`,
    type: "image"
  },
  {
    id: "ultrakill3",
    name: "Level Showcase 3",
    description: "Dynamic level progression with multiple combat encounters.",
    category: "Gameplay",
    tags: ["Unity", "Level Design", "Combat", "Progression"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill3.mp4`,
    type: "video"
  },
  {
    id: "ultrakill4",
    name: "Level Showcase 4",
    description: "Environmental storytelling through level architecture and lighting.",
    category: "Environment",
    tags: ["Unity", "Level Design", "Environment", "Lighting"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill4.mp4`,
    type: "video"
  },
  {
    id: "ultrakill5",
    name: "Level Showcase 5",
    description: "Boss encounter design with challenging mechanics and visual effects.",
    category: "Boss Fight",
    tags: ["Unity", "Level Design", "Boss Fight", "Visual Effects"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill5.mp4`,
    type: "video"
  },
  {
    id: "ultrakill6",
    name: "Level Showcase 6",
    description: "Vertical level design with platforming and combat elements.",
    category: "Platforming",
    tags: ["Unity", "Level Design", "Platforming", "Combat"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill6.mp4`,
    type: "video"
  },
  {
    id: "ultrakill7",
    name: "Level Showcase 7",
    description: "Atmospheric level design with mood lighting and particle effects.",
    category: "Atmosphere",
    tags: ["Unity", "Level Design", "Atmosphere", "Particles"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill7.mp4`,
    type: "video"
  },
  {
    id: "ultrakill8",
    name: "Level Showcase 8",
    description: "Complex level geometry with multiple paths and exploration elements.",
    category: "Exploration",
    tags: ["Unity", "Level Design", "Exploration", "Geometry"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill8.mp4`,
    type: "video"
  },
  {
    id: "ultrakill9",
    name: "Level Showcase 9",
    description: "Final showcase featuring advanced level design techniques and optimization.",
    category: "Advanced",
    tags: ["Unity", "Level Design", "Optimization", "Advanced"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill9.mp4`,
    type: "video"
  },
  {
    id: "ultrakill10",
    name: "Level Showcase 10",
    description: "Bonus content showcasing additional level design work and techniques.",
    category: "Bonus",
    tags: ["Unity", "Level Design", "Bonus", "Techniques"],
    previewUrl: "/3d-art-gallery-static/",
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/Ultrakill10.mp4`,
    type: "video"
  }
]

export default function UltrakillGalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<{
    src: string;
    type: 'image' | 'video';
    title: string;
  } | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const openModal = (media: string, type: 'image' | 'video', title: string) => {
    setSelectedMedia({ src: media, type, title });
    setIsMuted(true); // Start videos muted
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">ULTRAKILL Levels Gallery</h1>
                <p className="text-muted-foreground">Custom levels made from scratch for the game ULTRAKILL</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              {ultrakillLevels.length} Levels
            </Badge>
          </div>
        </div>
      </div>

      {/* Levels Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ultrakillLevels.map((level) => (
            <Card key={level.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
              {/* Level Preview Media */}
              <div 
                className="aspect-video bg-muted relative overflow-hidden cursor-pointer"
                onClick={() => openModal(level.media, level.type as 'image' | 'video', level.name)}
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

        {/* Add New Level Section */}
        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">More Levels Coming Soon</h3>
              <p className="text-sm text-muted-foreground mb-4">
                I&apos;m constantly working on new ULTRAKILL levels. Check back for updates!
              </p>
              <Button variant="outline" asChild>
                <Link href={`${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/`}>
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
              Custom ULTRAKILL levels showcasing level design and game development skills.
            </p>
            <div className="mt-4">
              <Button variant="outline" asChild>
                <Link href={`${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
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

            {/* Media Content */}
            <div className="relative w-full h-full flex items-center justify-center">
              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-full object-contain"
                  priority
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    src={selectedMedia.src}
                    className="max-w-full max-h-full object-contain"
                    controls
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                  />
                  
                  {/* Volume Control */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 left-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                  </Button>
                </div>
              )}
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-semibold bg-black/50 px-4 py-2 rounded-lg">
                {selectedMedia.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
