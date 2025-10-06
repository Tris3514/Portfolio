import IgamingGallery from "@/components/igaming-gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function IgamingGalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Tris Giles</h1>
                <p className="text-sm text-muted-foreground">Igaming Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">
                Igaming
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Igaming Projects
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                A collection of work spanning multiple formats and platforms for the igaming industry, 
                featuring game assets, UI elements, and promotional materials.
              </p>
            </div>

            {/* Gallery Component */}
            <IgamingGallery />
          </div>
        </div>
      </main>
    </div>
  );
}
