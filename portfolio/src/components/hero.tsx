"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import PlusGrid from "./plus-grid";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center diagonal-crosses relative">
      <PlusGrid />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting Badge */}
          <Badge variant="secondary" className="mb-6 text-sm">
            👋 Hello, I'm
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Tris Giles
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
            Graphic Designer & Multimedia Artist
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I create compelling visual stories through graphic design and multimedia art. 
            Passionate about innovative design, creative storytelling, and bringing ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="sm" className="rounded-full">
              <Github size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Linkedin size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Mail size={20} />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <ArrowDown className="animate-bounce text-muted-foreground" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
