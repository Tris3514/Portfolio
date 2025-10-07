"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Define the igaming assets
const igamingAssets = {
  barrel: [
    "barrel1.png", "barrel2.png", "barrel3.png", "barrel4.png",
    "barrel5.png", "barrel6.png", "barrel7.png", "barrel8.png"
  ],
  cannon: [
    "cannon1.png", "cannon2.png", "cannon3.png", "cannon4.png",
    "cannon5.png", "cannon6.png", "cannon7.png", "cannon8.png"
  ],
  pistol: [
    "pistol1.png", "pistol2.png", "pistol3.png", "pistol4.png",
    "pistol5.png", "pistol6.png", "pistol7.png", "pistol8.png"
  ],
  hook: [
    "BF-Symbol-Hook-Full.png"
  ]
}

export default function IgamingGalleryPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center diagonal-crosses relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full">
            <div className="plus-grid-animation w-full h-full"></div>
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
                <Badge variant="outline" className="mb-4">iGaming Assets</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">3D Game Assets</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  A collection of 3D assets and designs created for the igaming industry, featuring weapons, props, and interface elements.
                </p>
              </div>

              {/* Barrel Section */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Barrel Assets</h3>
                  <p className="text-muted-foreground">3D barrel models and textures for gaming environments</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {igamingAssets.barrel.map((imageName, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 group-hover:bg-muted/80 transition-colors">
                          <Image
                            src={`/igaming-gallery/barrel/${imageName}`}
                            alt={`Barrel ${index + 1}`}
                            width={120}
                            height={120}
                            className="max-w-full max-h-full object-contain"
                            unoptimized
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          Barrel {index + 1}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Cannon Section */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Cannon Assets</h3>
                  <p className="text-muted-foreground">3D cannon models and textures for gaming environments</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {igamingAssets.cannon.map((imageName, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 group-hover:bg-muted/80 transition-colors">
                          <Image
                            src={`/igaming-gallery/cannon/${imageName}`}
                            alt={`Cannon ${index + 1}`}
                            width={120}
                            height={120}
                            className="max-w-full max-h-full object-contain"
                            unoptimized
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          Cannon {index + 1}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Pistol Section */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Pistol Assets</h3>
                  <p className="text-muted-foreground">3D pistol models and textures for gaming environments</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {igamingAssets.pistol.map((imageName, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 group-hover:bg-muted/80 transition-colors">
                          <Image
                            src={`/igaming-gallery/pistol/${imageName}`}
                            alt={`Pistol ${index + 1}`}
                            width={120}
                            height={120}
                            className="max-w-full max-h-full object-contain"
                            unoptimized
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          Pistol {index + 1}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Hook Section */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Hook Symbols</h3>
                  <p className="text-muted-foreground">Hook symbol designs for gaming interfaces</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {igamingAssets.hook.map((imageName, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-2 group-hover:bg-muted/80 transition-colors">
                          <Image
                            src={`/igaming-gallery/hook/${imageName}`}
                            alt="Hook Symbol"
                            width={120}
                            height={120}
                            className="max-w-full max-h-full object-contain"
                            unoptimized
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          Hook Symbol
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
                <p>{Object.values(igamingAssets).flat().length} Assets</p>
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
