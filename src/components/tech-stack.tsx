import { Card } from "../components/ui/card"

const technologies = [
  {
    category: "Core",
    skills: ["React", "TypeScript", "SCSS", "Vite", "JavaScript", "HTML5/CSS3"],
  },
  {
    category: "UI Libraries",
    skills: ["Material UI", "Tailwind CSS", "Styled Components", "Framer Motion", "React Query", "Redux"],
  },
  {
    category: "Tools",
    skills: ["Webpack", "ESLint", "Prettier", "Jest", "React Testing Library", "Storybook"],
  },
  {
    category: "Workflow",
    skills: ["Git", "GitHub", "Figma", "Vercel", "Netlify", "CI/CD"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
