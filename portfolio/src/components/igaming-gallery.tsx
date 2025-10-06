"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import igamingGalleryImages from "@/data/igaming-gallery-images.json";

interface GalleryItem {
  type: 'single' | 'animation';
  name: string;
  folder: string;
  frames: string[];
  thumbnail: string;
}

const IgamingGallery = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setItems(igamingGalleryImages as GalleryItem[]);
  }, []);

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    setCurrentFrame(0);
    setIsPlaying(item.type === 'animation' && item.frames.length > 1); // Auto-play animations with multiple frames
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsPlaying(false);
  };

  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    setSelectedItem(items[nextIndex]);
    setCurrentFrame(0);
    setIsPlaying(false);
  };

  const prevItem = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
    setSelectedItem(items[prevIndex]);
    setCurrentFrame(0);
    setIsPlaying(false);
  };

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const nextFrame = () => {
    if (selectedItem && selectedItem.type === 'animation') {
      setCurrentFrame((prev) => (prev + 1) % selectedItem.frames.length);
    }
  };

  // Auto-advance frames when playing
  useEffect(() => {
    if (isPlaying && selectedItem && selectedItem.type === 'animation') {
      const interval = setInterval(nextFrame, 200); // 5 FPS
      return () => clearInterval(interval);
    }
  }, [isPlaying, selectedItem, nextFrame]);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground mb-4">
          <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-2xl">🎮</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Igaming Gallery Empty</h3>
          <p className="text-sm">
            Add PNG images to the <code className="bg-muted px-2 py-1 rounded">public/igaming-gallery/</code> folder
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Gallery Grid */}
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {items.map((item, index) => (
          <Card 
            key={index} 
            className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
            onClick={() => openModal(item, index)}
          >
            <CardContent className="p-1 md:p-2">
              <div className="aspect-square relative overflow-hidden rounded-md">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-muted/20"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="secondary" className="bg-white/90 text-black text-xs">
                      {item.type === 'animation' ? '🎬' : 'View'}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4 z-10"
              onClick={closeModal}
            >
              <X size={16} />
            </Button>

            {/* Navigation Buttons */}
            {items.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                  onClick={prevItem}
                >
                  <ChevronLeft size={16} />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                  onClick={nextItem}
                >
                  <ChevronRight size={16} />
                </Button>
              </>
            )}

            {/* Animation Controls */}
            {selectedItem.type === 'animation' && (
              <div className="absolute top-4 left-4 z-10">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={toggleAnimation}
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </Button>
              </div>
            )}

            {/* Image/Animation */}
            <div className="bg-black rounded-lg overflow-hidden">
              <img
                src={selectedItem.frames[currentFrame]}
                alt={selectedItem.name}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Item Info */}
            <div className="mt-4 text-center">
              <p className="text-white font-medium">{selectedItem.name}</p>
              {items.length > 1 && (
                <p className="text-white/70 text-sm mt-1">
                  {currentIndex + 1} of {items.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IgamingGallery;