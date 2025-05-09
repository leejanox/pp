import { Button } from "../components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import {Link} from "react-router-dom"
import ContactForm from "../components/contact-form"
import ProjectCard from "../components/project-card"
import TechStack from "../components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" to="/">
              <span className="hidden font-bold sm:inline-block">Alex.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link to="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link to="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link to="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto">
            Resume
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Frontend Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Crafting beautiful user interfaces with React, TypeScript, and modern frontend technologies.
                  Passionate about creating responsive, accessible, and performant web experiences.
                </p>
              </div>
              <div className="space-x-4">
                <Link to="https://github.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link to="https://linkedin.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link to="https://twitter.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link to="mailto:hello@example.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Interactive Dashboard"
                description="A responsive dashboard with data visualization components built with React, TypeScript, and SCSS."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["React", "TypeScript", "SCSS", "Vite"]}
              />
              <ProjectCard
                title="E-commerce UI"
                description="A modern e-commerce interface with advanced filtering, cart functionality, and animations."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["React", "TypeScript", "SCSS", "Framer Motion"]}
              />
              <ProjectCard
                title="Design System"
                description="A comprehensive component library and design system built with React, TypeScript, and SCSS modules."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["React", "TypeScript", "SCSS", "Storybook"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Alex.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
