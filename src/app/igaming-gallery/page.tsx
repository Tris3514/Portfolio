"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Play, Pause } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

// Define the igaming animation assets
const igamingAnimations = [
  {
    id: "barrel",
    name: "Barrel Animation",
    description: "3D barrel animation frames for gaming environments",
    category: "3D Animation",
    tags: ["3D Modeling", "Animation", "Game Assets"],
    frames: [
    "barrel1.png", "barrel2.png", "barrel3.png", "barrel4.png",
    "barrel5.png", "barrel6.png", "barrel7.png", "barrel8.png"
  ],
    basePath: "/igaming-gallery/barrel/"
  },
  {
    id: "cannon",
    name: "Cannon Animation",
    description: "3D cannon animation frames for gaming environments",
    category: "3D Animation",
    tags: ["3D Modeling", "Animation", "Game Assets"],
    frames: [
    "cannon1.png", "cannon2.png", "cannon3.png", "cannon4.png",
    "cannon5.png", "cannon6.png", "cannon7.png", "cannon8.png"
  ],
    basePath: "/igaming-gallery/cannon/"
  },
  {
    id: "pistol",
    name: "Pistol Animation",
    description: "3D pistol animation frames for gaming environments",
    category: "3D Animation",
    tags: ["3D Modeling", "Animation", "Game Assets"],
    frames: [
    "pistol1.png", "pistol2.png", "pistol3.png", "pistol4.png",
    "pistol5.png", "pistol6.png", "pistol7.png", "pistol8.png"
  ],
    basePath: "/igaming-gallery/pistol/"
  },
  {
    id: "hook",
    name: "Hook Symbol",
    description: "Hook symbol design for gaming interfaces",
    category: "UI Design",
    tags: ["UI Design", "Symbols", "Game Assets"],
    frames: [
    "BF-Symbol-Hook-Full.png"
    ],
    basePath: "/igaming-gallery/hook/"
  }
]

// Animation component for individual items
function AnimationCard({ animation }: { animation: typeof igamingAnimations[0] }) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && animation.frames.length > 1) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % animation.frames.length);
      }, 200); // 200ms per frame for smooth animation
    }
    return () => clearInterval(interval);
  }, [isPlaying, animation.frames.length]);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = () => {
    if (animation.frames.length > 1) {
      setIsHovered(true);
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPlaying(false);
    setCurrentFrame(0);
  };

  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent className="p-4">
        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 group-hover:bg-muted/80 transition-colors relative">
          <Image
            src={`${animation.basePath}${animation.frames[currentFrame]}`}
            alt={`${animation.name} - Frame ${currentFrame + 1}`}
            width={120}
            height={120}
            className="max-w-full max-h-full object-contain"
            unoptimized
          />
          {animation.frames.length > 1 && (
            <div className="absolute top-2 right-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={toggleAnimation}
                className="h-8 w-8 p-0"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
            </div>
          )}
        </div>
        <div className="mt-3">
          <h4 className="font-semibold text-sm mb-1">{animation.name}</h4>
          <p className="text-xs text-muted-foreground mb-2">{animation.description}</p>
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary" className="text-xs">
              {animation.category}
            </Badge>
            {animation.frames.length > 1 && (
              <Badge variant="outline" className="text-xs">
                {animation.frames.length} Frames
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function IgamingGalleryPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center diagonal-crosses-dark relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full">
            <div className="plus-grid-animation-dark w-full h-full"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6 text-sm">
                🎮 iGaming Projects
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                iGaming Assets Gallery
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
                3D Assets & Designs for the Gaming Industry
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                A collection of work spanning multiple formats and platforms for the igaming industry, featuring game assets, UI elements, and promotional materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => {
                    document.getElementById('gallery')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  View Gallery
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <Link href="/">
                    Back to Portfolio
                  </Link>
                </Button>
              </div>
              <div className="flex justify-center space-x-6 mb-12">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">iGaming Animations</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Interactive 3D Animations</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Frame-by-frame animations for the igaming industry. Hover over items to see animations in action.
                </p>
              </div>

              {/* Animation Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {igamingAnimations.map((animation) => (
                  <AnimationCard key={animation.id} animation={animation} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <button 
                className="text-2xl font-bold text-primary mb-4 block text-left"
                onClick={() => {
                  document.getElementById('home')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Tris Giles
              </button>
              <p className="text-muted-foreground mb-6 max-w-md">
                Graphic Designer & Multimedia Artist creating compelling visual stories through innovative design and creative multimedia experiences.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/tristian-giles-83a68337b" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => {
                      document.getElementById('home')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => {
                      document.getElementById('gallery')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/">
                      Portfolio
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Gallery Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{igamingAnimations.length} Animations</p>
                <p>3D Modeling</p>
                <p>Game Design</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2025 Tris Giles. All rights reserved.</p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">Built with Next.js, TypeScript & shadcn/ui</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
