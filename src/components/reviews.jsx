import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Reviews() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "John delivered an exceptional website for our startup. His attention to detail and ability to understand our requirements was impressive. The final product exceeded our expectations.",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthLabs",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Working with John was a pleasure. He's not only technically skilled but also has a great eye for design. Our website conversion rate increased by 40% after his redesign.",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, Creative Studio",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "John is a talented developer who brings ideas to life. He created a portfolio website for our studio that perfectly captures our brand identity and showcases our work beautifully.",
    },
    {
      name: "David Kim",
      position: "Product Manager, SaaS Platform",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "We hired John to develop a complex web application, and he delivered it on time and within budget. His technical expertise and problem-solving skills are outstanding.",
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Clients Say</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Here's what some of my clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background shadow-lg dark:bg-background/50 dark:backdrop-blur-sm">
              <CardContent className="p-6 relative">
                <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" />
                <div className="pl-8 pt-4">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
