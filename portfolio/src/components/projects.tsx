"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Corporate Logo Design",
      description: "Complete brand identity package for over 300 companies, including both new and faithfully recreated logo designs, color palette, typography, and brand guidelines.",
      image: "/placeholder-project-1.jpg",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Branding", "Typography", "Visual Identity"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Igaming Projects",
      description: "A collection of work spanning multiple formats and platforms for the igaming industry.",
      image: "/placeholder-project-2.jpg",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Blender", "Substance Painter", "Team Communication"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Motion Graphics Reel",
      description: "Animated promotional video featuring dynamic motion graphics and 3D elements for a creative agency.",
      image: "/placeholder-project-3.jpg",
      technologies: ["After Effects", "Cinema 4D", "Motion Graphics", "3D Animation", "Video Editing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "UI/UX Design System",
      description: "Comprehensive design system for a mobile app including components, patterns, and user experience guidelines.",
      image: "/placeholder-project-4.jpg",
      technologies: ["Figma", "Adobe XD", "UI/UX", "Design Systems", "Prototyping"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Print Campaign Design",
      description: "Multi-platform print campaign featuring posters, brochures, and promotional materials for a cultural event.",
      image: "/placeholder-project-5.jpg",
      technologies: ["Adobe InDesign", "Photoshop", "Print Design", "Layout", "Typography"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Interactive Web Experience",
      description: "Immersive web experience combining digital art, animation, and interactive elements for an art gallery.",
      image: "/placeholder-project-6.jpg",
      technologies: ["Figma", "After Effects", "Web Design", "Interactive Design", "Animation"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              My Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating 
              exceptional digital experiences.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <ExternalLink size={16} />
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Link href={project.title === "Igaming Projects" ? "/igaming-gallery" : "/gallery"} className="flex-1">
                      <Button size="sm" variant="outline" className="w-full">
                        <ExternalLink size={16} className="mr-2" />
                        View Gallery
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Project Image</span>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Link href="/gallery" className="flex-1">
                        <Button size="sm" variant="ghost" className="w-full text-xs">
                          <ExternalLink size={14} className="mr-1" />
                          Gallery
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
