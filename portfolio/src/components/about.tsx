"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code, Palette, Smartphone, Globe, CuboidIcon, Camera } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Adobe Creative Suite", icon: Camera, description: "Adobe Creative Suite, Branding, Social Media" },
    { name: "Graphic Design", icon: Palette, description: " Photoshop, Illustrator, Office" },
    { name: "3D Design", icon: CuboidIcon, description: "Blender, Substance Painter, Unity/Unreal" },
    { name: "Web Design", icon: Globe, description: "UI/UX, HTML, CSS" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Creative Visual Storyteller
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate graphic designer and multimedia artist with a love for visual storytelling. 
              With expertise in both traditional and digital design, I bring creative visions to life through 
              innovative design solutions and compelling multimedia experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                      <AvatarFallback className="text-2xl">TG</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Tris Giles</h3>
                      <p className="text-muted-foreground mb-4">
                        Graphic Designer & Multimedia Artist
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I specialize in creating compelling visual narratives through graphic design and multimedia art. 
                        With 5+ years of experience, I've worked with brands and artists to deliver 
                        innovative design solutions that captivate and inspire.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">What I Do</h3>
              {skills.map((skill, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
