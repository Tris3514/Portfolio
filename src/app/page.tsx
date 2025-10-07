"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowDown, Camera, Palette, Cuboid, Globe, ExternalLink, Phone, MapPin } from "lucide-react"

export default function Home() {
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
                👋 Hello, I&apos;m
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Tris Giles
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
                Graphic Designer & Multimedia Artist
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                I create compelling visual stories through graphic design and multimedia art. Passionate about innovative design, creative storytelling, and bringing ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Get In Touch
                </Button>
              </div>
              <div className="flex justify-center space-x-6 mb-12">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <a href="https://www.linkedin.com/in/tristian-giles-83a68337b" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <a href="mailto:tristiancgiles@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
                <div className="animate-bounce">
                  <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">About Me</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Creative Visual Storyteller</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  I&apos;m a passionate graphic designer and multimedia artist with a love for visual storytelling. With expertise in both traditional and digital design, I bring creative visions to life through innovative design solutions and compelling multimedia experiences.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center space-y-6">
                        <div className="relative flex shrink-0 overflow-hidden rounded-full w-32 h-32">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-2xl">TG</div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">Tris Giles</h3>
                          <p className="text-muted-foreground mb-4">Graphic Designer & Multimedia Artist</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            I specialize in creating compelling visual narratives through graphic design and multimedia art. With 5+ years of experience, I&apos;ve worked with brands and artists to deliver innovative design solutions that captivate and inspire.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">What I Do</h3>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Camera className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Adobe Creative Suite</h4>
                          <p className="text-sm text-muted-foreground">Adobe Creative Suite, Branding, Social Media</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Palette className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Graphic Design</h4>
                          <p className="text-sm text-muted-foreground">Photoshop, Illustrator, Office</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Cuboid className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">3D Design</h4>
                          <p className="text-sm text-muted-foreground">Blender, Substance Painter, Unity/Unreal</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Web Design</h4>
                          <p className="text-sm text-muted-foreground">UI/UX, HTML, CSS</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">My Work</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={`${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/Previews/LogosPreview.png`}
                      alt="Corporate Logo Design Preview"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <CardTitle>Corporate Logo Design</CardTitle>
                      <CardDescription>
                        Complete brand identity package for over 300 companies, including both new and faithfully recreated logo designs, color palette, typography, and brand guidelines.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Adobe Illustrator</Badge>
                        <Badge variant="secondary">Adobe Photoshop</Badge>
                        <Badge variant="secondary">Branding</Badge>
                        <Badge variant="secondary">Typography</Badge>
                        <Badge variant="secondary">Visual Identity</Badge>
                      </div>
                      <div className="flex space-x-2 mt-auto">
                        <Button variant="outline" className="flex-1" asChild>
                          <a href="/Portfolio/gallery-static/">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Gallery
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-muted-foreground">Project Image</span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <CardTitle>Igaming Projects</CardTitle>
                      <CardDescription>
                        A collection of work spanning multiple formats and platforms for the igaming industry.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Adobe Illustrator</Badge>
                        <Badge variant="secondary">Adobe Photoshop</Badge>
                        <Badge variant="secondary">Blender</Badge>
                        <Badge variant="secondary">Substance Painter</Badge>
                        <Badge variant="secondary">Team Communication</Badge>
                      </div>
                      <div className="flex space-x-2 mt-auto">
                        <Button variant="outline" className="flex-1" asChild>
                          <a href="/Portfolio/igaming-gallery-static/">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Gallery
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-muted-foreground">Project Image</span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <CardTitle>Website Templates</CardTitle>
                      <CardDescription>
                        Modern, responsive website templates for various industries including business, e-commerce, and creative portfolios.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">HTML/CSS</Badge>
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">Responsive Design</Badge>
                        <Badge variant="secondary">UI/UX</Badge>
                        <Badge variant="secondary">Web Development</Badge>
                      </div>
                      <div className="flex space-x-2 mt-auto">
                        <Button variant="outline" className="flex-1" asChild>
                          <a href="/Portfolio/website-templates">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Gallery
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Project 4: 3D Art */}
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={`${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/Previews/3DPreview.png`}
                      alt="3D Art Preview"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="rounded-full">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <CardTitle>3D Art</CardTitle>
                      <CardDescription>
                        A collection of 3D artwork including character models, environmental designs, product visualizations, and digital sculptures.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Blender</Badge>
                        <Badge variant="secondary">Maya</Badge>
                        <Badge variant="secondary">3D Modeling</Badge>
                        <Badge variant="secondary">Texturing</Badge>
                        <Badge variant="secondary">Rendering</Badge>
                        <Badge variant="secondary">Animation</Badge>
                      </div>
                      <div className="flex space-x-2 mt-auto">
                        <Button variant="outline" className="flex-1" asChild>
                          <a href="/Portfolio/3d-art-gallery-static/">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Gallery
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Get In Touch</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Have a project in mind or just want to chat? I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>Fill out the form below and I&apos;ll get back to you within 24 hours.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                          <input 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                            id="firstName" 
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                          <input 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                            id="lastName" 
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input 
                          type="email" 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                          id="email" 
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                        <input 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                          id="subject" 
                          placeholder="Project Inquiry"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea 
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]" 
                          id="message" 
                          placeholder="Tell me about your project..."
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Mail className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Email</h3>
                            <p className="text-muted-foreground mb-2">Send me an email anytime</p>
                            <a href="mailto:tristiancgiles@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                              tristiancgiles@gmail.com
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Phone className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Phone</h3>
                            <p className="text-muted-foreground mb-2">Mon-Fri from 9am to 6pm</p>
                            <a href="tel:+35679303214" className="text-primary hover:text-primary/80 transition-colors">
                              +356 7930 3214
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Location</h3>
                            <p className="text-muted-foreground mb-2">Available for remote work</p>
                            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                              Attard, Malta
          </a>
        </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:tristiancgiles@gmail.com">
                    <Mail className="h-5 w-5" />
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
                      document.getElementById('about')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => {
                      document.getElementById('projects')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>tristiancgiles@gmail.com</p>
                <p>+356 7930 3214</p>
                <p>Attard, Malta</p>
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