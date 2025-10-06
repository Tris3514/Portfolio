import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
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
                <h1 className="text-2xl font-bold text-foreground">Igaming Assets Gallery</h1>
                <p className="text-muted-foreground">3D models and assets for gaming industry</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              {Object.values(igamingAssets).flat().length} Assets
            </Badge>
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Barrel Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2">Barrel Assets</h2>
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
        </section>

        {/* Cannon Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2">Cannon Assets</h2>
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
        </section>

        {/* Pistol Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2">Pistol Assets</h2>
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
        </section>

        {/* Hook Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2">Hook Assets</h2>
            <p className="text-muted-foreground">Hook symbols and icons for gaming interfaces</p>
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
        </section>
      </div>

      {/* Footer */}
      <div className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Professional 3D assets and symbols for the igaming industry.
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
