"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
    social: [
      { name: "GitHub", href: "https://github.com/johndoe", icon: Github },
      { name: "LinkedIn", href: "https://linkedin.com/in/johndoe", icon: Linkedin },
      { name: "Twitter", href: "https://twitter.com/johndoe", icon: Twitter },
      { name: "Email", href: "mailto:john.doe@example.com", icon: Mail },
    ],
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="#home" className="text-2xl font-bold text-primary mb-4 block">
              Tris Giles
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Graphic Designer & Multimedia Artist creating compelling visual stories 
              through innovative design and creative multimedia experiences.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200"
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>tris.giles@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Creative Studio, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Tris Giles. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Built with Next.js, TypeScript & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
