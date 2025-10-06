# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and shadcn/ui.

## Features

- 🎨 **Modern Design**: Clean, professional design with shadcn/ui components
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Next.js 15 and optimized for performance
- 🎯 **TypeScript**: Full type safety throughout the application
- 🌙 **Dark Mode**: Built-in dark mode support
- 📧 **Contact Form**: Functional contact form (ready for backend integration)
- 🎭 **Smooth Animations**: Subtle animations and transitions
- ♿ **Accessible**: Built with accessibility best practices

## Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal information and skills overview
- **Projects**: Showcase of featured and other projects
- **Skills**: Technical skills with progress indicators
- **Contact**: Contact form and social links
- **Footer**: Additional links and information

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information
Update the following files with your personal information:

- `src/components/hero.tsx` - Name, title, and description
- `src/components/about.tsx` - About section content
- `src/components/contact.tsx` - Contact information
- `src/components/footer.tsx` - Footer links and social media

### Projects
Edit `src/components/projects.tsx` to add your projects:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "/your-project-image.jpg",
    technologies: ["React", "TypeScript", "Next.js"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/your-project",
    featured: true, // Set to true for featured projects
  },
  // Add more projects...
];
```

### Skills
Update `src/components/skills.tsx` to reflect your skills:

```typescript
const skillCategories = [
  {
    title: "Your Skill Category",
    icon: YourIcon,
    skills: [
      { name: "Skill Name", level: 90 }, // Level is percentage (0-100)
    ],
    color: "from-blue-500 to-cyan-500" // Tailwind gradient colors
  },
  // Add more categories...
];
```

### Colors and Styling
The portfolio uses CSS custom properties for theming. You can customize colors in `src/app/globals.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%; /* Your primary color */
  --secondary: 210 40% 96%; /* Your secondary color */
  /* ... other color variables */
}
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── about.tsx            # About section
│   ├── contact.tsx          # Contact section
│   ├── footer.tsx           # Footer component
│   ├── hero.tsx             # Hero section
│   ├── navigation.tsx       # Navigation component
│   ├── projects.tsx         # Projects section
│   └── skills.tsx           # Skills section
└── lib/
    └── utils.ts             # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

Built with ❤️ using Next.js and shadcn/ui