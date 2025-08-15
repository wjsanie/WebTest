import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, ExternalLink, Calendar, MapPin } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-muted via-background to-muted/50">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            I craft digital experiences that blend innovative design with robust functionality. Passionate about
            creating solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "React", level: "Expert", icon: "⚛️" },
              { name: "TypeScript", level: "Advanced", icon: "📘" },
              { name: "Node.js", level: "Advanced", icon: "🟢" },
              { name: "Python", level: "Intermediate", icon: "🐍" },
              { name: "AWS", level: "Intermediate", icon: "☁️" },
              { name: "Docker", level: "Intermediate", icon: "🐳" },
              { name: "GraphQL", level: "Advanced", icon: "🔗" },
              { name: "MongoDB", level: "Advanced", icon: "🍃" },
            ].map((skill) => (
              <Card
                key={skill.name}
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                  <Badge variant="secondary">{skill.level}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                image: "/modern-ecommerce-interface.png",
              },
              {
                title: "Task Management App",
                description: "Collaborative project management tool with real-time updates",
                tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
                image: "/task-management-dashboard.png",
              },
              {
                title: "AI Chat Application",
                description: "Intelligent chatbot with natural language processing capabilities",
                tech: ["Python", "OpenAI", "FastAPI", "React"],
                image: "/ai-chat-interface.png",
              },
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Professional Experience</h2>
          <div className="space-y-12">
            {[
              {
                role: "Senior Full-Stack Developer",
                company: "Tech Innovations Inc.",
                period: "2022 - Present",
                location: "San Francisco, CA",
                achievements: [
                  "Led development of microservices architecture serving 1M+ users",
                  "Reduced application load time by 40% through optimization",
                  "Mentored 5 junior developers and established coding standards",
                ],
              },
              {
                role: "Frontend Developer",
                company: "Digital Solutions Ltd.",
                period: "2020 - 2022",
                location: "New York, NY",
                achievements: [
                  "Built responsive web applications using React and TypeScript",
                  "Collaborated with UX team to implement pixel-perfect designs",
                  "Improved user engagement by 25% through A/B testing",
                ],
              },
              {
                role: "Junior Developer",
                company: "StartUp Ventures",
                period: "2019 - 2020",
                location: "Austin, TX",
                achievements: [
                  "Developed RESTful APIs using Node.js and Express",
                  "Implemented automated testing reducing bugs by 30%",
                  "Contributed to open-source projects and documentation",
                ],
              },
            ].map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <Card className="ml-6">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Your Name. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
