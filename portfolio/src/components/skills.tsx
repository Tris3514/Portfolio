"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Code, Smartphone, Globe, Cpu, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Adobe Creative Suite",
      icon: Palette,
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 92 },
        { name: "Adobe InDesign", level: 88 },
        { name: "Branding", level: 90 },
        { name: "Social Media", level: 85 },
        { name: "Print Design", level: 87 },
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Digital Art",
      icon: Code,
      skills: [
        { name: "Procreate", level: 90 },
        { name: "Digital Illustration", level: 88 },
        { name: "Concept Art", level: 85 },
        { name: "Character Design", level: 82 },
        { name: "Digital Painting", level: 87 },
        { name: "Art Direction", level: 80 },
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "3D Design",
      icon: Smartphone,
      skills: [
        { name: "Modeling", level: 85 },
        { name: "Rendering", level: 88 },
        { name: "Animation", level: 82 },
        { name: "Blender", level: 75 },
        { name: "Cinema 4D", level: 70 },
        { name: "3D Visualization", level: 80 },
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "UI/UX",
      icon: Globe,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Figma", level: 88 },
        { name: "Prototyping", level: 80 },
        { name: "User Research", level: 85 },
        { name: "Responsive Design", level: 87 },
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Creative Tools",
      icon: Cpu,
      skills: [
        { name: "Adobe Creative Suite", level: 92 },
        { name: "Blender", level: 70 },
        { name: "Cinema 4D", level: 65 },
        { name: "Sketch", level: 75 },
        { name: "Canva Pro", level: 85 },
        { name: "Figma", level: 90 },
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Business & Strategy",
      icon: Cloud,
      skills: [
        { name: "Brand Strategy", level: 85 },
        { name: "Creative Direction", level: 88 },
        { name: "Project Management", level: 82 },
        { name: "Client Relations", level: 90 },
        { name: "Marketing Design", level: 85 },
        { name: "Portfolio Development", level: 87 },
      ],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const technologies = [
    "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Blender", "Cinema 4D", "Figma", 
    "Procreate", "HTML", "CSS", "Sketch", "Canva Pro", "Adobe XD", 
    "Branding", "Social Media", "3D Modeling", "Rendering", "Digital Art", "UI/UX"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Skills & Expertise
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I work with a wide range of technologies and tools to create exceptional digital experiences. 
              Here&apos;s a breakdown of my technical expertise.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;