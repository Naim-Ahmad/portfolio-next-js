import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
  const workExperience = [
    {
      period: "2025 - Present",
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      description:
        "Leading the frontend development team, implementing new features, and optimizing performance for enterprise clients.",
    },
    {
      period: "2019 - 2021",
      title: "Frontend Developer",
      company: "Digital Creations",
      description:
        "Developed responsive web applications using React and Next.js, collaborated with designers to implement UI/UX designs.",
    },
    {
      period: "2017 - 2019",
      title: "Web Developer",
      company: "WebCraft Agency",
      description:
        "Built websites for small to medium businesses, implemented responsive designs, and maintained client websites.",
    },
  ]

  const education = [
    {
      period: "2013 - 2017",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      description: "Graduated with honors, specialized in web development and software engineering.",
    },
    {
      period: "2018",
      degree: "Advanced JavaScript Certification",
      institution: "Code Academy",
      description: "Intensive program focused on modern JavaScript frameworks and best practices.",
    },
    {
      period: "2020",
      degree: "UI/UX Design Fundamentals",
      institution: "Design Institute",
      description: "Learned principles of user interface and experience design for web applications.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Journey</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience & Education</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-4">
              {workExperience.map((job, index) => (
                <Card key={index} className="relative border-l-4 border-l-primary">
                  <CardHeader className="pb-2">
                    <Badge variant="outline" className="w-fit mb-2">
                      {job.period}
                    </Badge>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="relative border-l-4 border-l-primary">
                  <CardHeader className="pb-2">
                    <Badge variant="outline" className="w-fit mb-2">
                      {edu.period}
                    </Badge>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
