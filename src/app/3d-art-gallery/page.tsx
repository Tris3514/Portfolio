"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

// 3D Artwork data
const artwork3D = [
  {
    id: "3d1",
    name: "3D Artwork 1",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d1.png`,
    type: "image"
  },
  {
    id: "3d2",
    name: "3D Artwork 2",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d2.png`,
    type: "image"
  },
  {
    id: "3d3",
    name: "3D Artwork 3",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d3.png`,
    type: "image"
  },
  {
    id: "3d4",
    name: "3D Artwork 4",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d4.png`,
    type: "image"
  },
  {
    id: "3d5",
    name: "3D Artwork 5",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d5.png`,
    type: "image"
  },
  {
    id: "3d6",
    name: "3D Artwork 6",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d6.png`,
    type: "image"
  },
  {
    id: "3d7",
    name: "3D Artwork 7",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d7.png`,
    type: "image"
  },
  {
    id: "3d8",
    name: "3D Artwork 8",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d8.png`,
    type: "image"
  },
  {
    id: "3d9",
    name: "3D Artwork 9",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d9.png`,
    type: "image"
  },
  {
    id: "3d10",
    name: "3D Artwork 10",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d10.png`,
    type: "image"
  },
  {
    id: "3d11",
    name: "3D Artwork 11",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d11.png`,
    type: "image"
  },
  {
    id: "3d12",
    name: "3D Artwork 12",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d12.png`,
    type: "image"
  },
  {
    id: "3d13",
    name: "3D Artwork 13",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d13.png`,
    type: "image"
  },
  {
    id: "3d14",
    name: "3D Artwork 14",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d14.png`,
    type: "image"
  },
  {
    id: "3d15",
    name: "3D Artwork 15",
    description: "3D model and render showcasing modern techniques",
    category: "3D Art",
    tags: ["3D Modeling", "Rendering", "Digital Art"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3d15.png`,
    type: "image"
  }
];

// 3D Printing data
const printing3D = [
  {
    id: "3dp1",
    name: "3D Print 1",
    description: "Physical 3D printed model showcasing real-world fabrication",
    category: "3D Printing",
    tags: ["3D Printing", "Prototype", "Physical Model"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3dp1.png`,
    type: "image"
  },
  {
    id: "3dp2",
    name: "3D Print 2",
    description: "Physical 3D printed model showcasing real-world fabrication",
    category: "3D Printing",
    tags: ["3D Printing", "Prototype", "Physical Model"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3dp2.png`,
    type: "image"
  },
  {
    id: "3dp3",
    name: "3D Print 3",
    description: "Physical 3D printed model showcasing real-world fabrication",
    category: "3D Printing",
    tags: ["3D Printing", "Prototype", "Physical Model"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3dp3.png`,
    type: "image"
  },
  {
    id: "3dp4",
    name: "3D Print 4",
    description: "Physical 3D printed model showcasing real-world fabrication",
    category: "3D Printing",
    tags: ["3D Printing", "Prototype", "Physical Model"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3dp4.png`,
    type: "image"
  },
  {
    id: "3dp5",
    name: "3D Print 5",
    description: "Physical 3D printed model showcasing real-world fabrication",
    category: "3D Printing",
    tags: ["3D Printing", "Prototype", "Physical Model"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3dp5.png`,
    type: "image"
  },
  {
    id: "3dp6",
    name: "3D Print 6",
    description: "Physical 3D printed model showcasing real-world fabrication",
    category: "3D Printing",
    tags: ["3D Printing", "Prototype", "Physical Model"],
    media: `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/3d-art-gallery-static/3dp6.png`,
    type: "image"
  }
];

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
  const [selectedType, setSelectedType] = useState<'ultrakill' | '3d-art' | '3d-printing' | null>(null);

  const openModal = (index: number, type: 'ultrakill' | '3d-art' | '3d-printing') => {
    setSelectedIndex(index);
    setSelectedType(type);
  };

  // Smooth scrolling for navigation links
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const closeModal = () => {
    setSelectedIndex(null);
    setSelectedType(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedType !== null) {
      const currentArray = getCurrentArray();
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : currentArray.length - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null && selectedType !== null) {
      const currentArray = getCurrentArray();
      setSelectedIndex(selectedIndex < currentArray.length - 1 ? selectedIndex + 1 : 0);
    }
  };

  const getSelectedItem = () => {
    if (selectedIndex === null || selectedType === null) return null;
    const currentArray = getCurrentArray();
    return currentArray[selectedIndex];
  };

  const getCurrentArray = () => {
    switch (selectedType) {
      case 'ultrakill':
        return ultrakillLevels;
      case '3d-art':
        return artwork3D;
      case '3d-printing':
        return printing3D;
      default:
        return [];
    }
  };

  const selectedItem = getSelectedItem();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-card border-r border-border flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
        <div className="p-6">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-4">
                 <Link href="/">
                   <ArrowLeft className="w-4 h-4 mr-2" />
                   Back to Portfolio
                 </Link>
               </Button>
            <h1 className="text-xl font-bold text-foreground">3D Art Showcase</h1>
            <p className="text-sm text-muted-foreground mt-2">
              3D models, environments, and digital art created with modern tools
            </p>
          </div>
          
          <nav className="space-y-2">
            <a 
              href="#ultrakill-levels" 
              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              ULTRAKILL Levels
            </a>
            <a 
              href="#3d-artwork" 
              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              3D Artwork
            </a>
            <a 
              href="#3d-printing" 
              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            >
              3D Printing
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="border-b border-border bg-card">
          <div className="px-8 py-6">
            <h1 className="text-3xl font-bold text-foreground">3D Art Showcase</h1>
            <p className="text-muted-foreground mt-2">
              3D models, environments, and digital art created with modern tools
            </p>
        </div>
      </div>

      {/* ULTRAKILL Levels Section */}
        <div id="ultrakill-levels" className="px-8 py-8">
          <div className="text-left mb-12">
          <h2 className="text-3xl font-bold mb-4">ULTRAKILL Levels</h2>
            <p className="text-muted-foreground max-w-3xl">
              3D models, environments, and digital art created with modern tools, showcasing 3D modeling and design skills.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ultrakillLevels.map((level, index) => (
            <Card key={level.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
              {/* Level Preview Media */}
              <div 
                className="aspect-video bg-muted relative overflow-hidden cursor-pointer"
                onClick={() => openModal(index, 'ultrakill')}
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
        <div id="3d-artwork" className="px-8 py-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold mb-4">3D Artwork</h2>
            <p className="text-muted-foreground max-w-3xl">
              A collection of 3D models, renders, and artistic creations showcasing various techniques and styles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artwork3D.map((artwork, index) => (
              <Card key={artwork.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Artwork Preview Media */}
                <div 
                  className="aspect-video bg-muted relative overflow-hidden cursor-pointer"
                  onClick={() => openModal(index, '3d-art')}
                >
                  <Image 
                    src={artwork.media} 
                    alt={`${artwork.name} preview`}
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
                  <div className="absolute inset-0 bg-muted flex items-center justify-center" style={{display: 'none'}}>
                    <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  </div>
                </div>
                
                <CardContent className="p-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {artwork.category}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                      {artwork.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {artwork.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {artwork.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs px-2 py-0">
                        {tag}
                      </Badge>
                    ))}
                    {artwork.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-0">
                        +{artwork.tags.length - 3}
                      </Badge>
                    )}
                  </div>
              </CardContent>
            </Card>
            ))}
          </div>
        </div>

        {/* 3D Printing Section */}
        <div id="3d-printing" className="px-8 py-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold mb-4">3D Printing</h2>
            <p className="text-muted-foreground max-w-3xl">
              Physical 3D printed models and prototypes, bringing digital designs into the real world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {printing3D.map((print, index) => (
              <Card key={print.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Print Preview Media */}
                <div 
                  className="aspect-video bg-muted relative overflow-hidden cursor-pointer"
                  onClick={() => openModal(index, '3d-printing')}
                >
                  <Image 
                    src={print.media} 
                    alt={`${print.name} preview`}
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
                  <div className="absolute inset-0 bg-muted flex items-center justify-center" style={{display: 'none'}}>
                    <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                
                <CardContent className="p-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {print.category}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                      {print.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {print.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {print.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs px-2 py-0">
                        {tag}
                      </Badge>
                    ))}
                    {print.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-0">
                        +{print.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border bg-card mt-12">
        <div className="px-8 py-6">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              3D models, environments, and digital art created with modern tools.
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

      {/* Media Modal */}
      {selectedItem && (
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
              {selectedItem.type === "image" ? (
                <Image
                  src={selectedItem.media}
                  alt={selectedItem.name}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-full object-contain"
                  priority
                />
              ) : (
                <video
                  src={selectedItem.media}
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
                {selectedItem.name} ({selectedIndex! + 1} of {getCurrentArray().length})
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
