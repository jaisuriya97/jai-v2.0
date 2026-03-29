"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    number: "01",
    title: "SchemaFlow",
    description: "Design databases at the speed of thought",
    tags: ["React", "JavaScript"],
    link: "https://schema-to-board.vercel.app/",
    image: "/projects/schemaflow.png",
  },
  {
    number: "02",
    title: "Laravel Blog",
    description: "Simple blog application with full CRUD functionality",
    tags: ["Laravel", "PHP", "MySQL", "Blade"],
    link: "https://github.com/jaisuriya97/Laravel_blogApp",
    image: "/projects/laravel-blog.png",
  },
  {
    number: "03",
    title: "Todo App",
    description: "Blockchain-based todo application with smart contracts",
    tags: ["Juno", "React"],
    link: "https://5rhf7-eqaaa-aaaal-aczua-cai.icp0.io/",
    image: "/projects/todo-app.png",
  },
  {
    number: "04",
    title: "Voice Enabled Task Tracker",
    description: "Voice-enabled task tracking with real-time updates and notifications",
    tags: ["React", "JavaScript", "Node.js", "MongoDB", "Gemini API"],
    link: "https://github.com/jaisuriya97/Voice-Enabled-Task-Tracking/",
    image: "/projects/voice-tracker.png",
  },
  {
    number: "05",
    title: "MediCare Hub: High Availability on AWS",
    description: "Highly available, fault-tolerant healthcare app on AWS.",
    tags: ["AWS", "EC2", "ALB", "RDS", "EFS", "Route 53", "CloudWatch"],
    link: "https://www.linkedin.com/posts/jaisuriya-p-k-7156a2236_aws-cloudcomputing-reliability-activity-7382701401333927936-Hb56?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrVo4EBqzofKNKGbGD3onRj6M-9tXgnbHM",
    image: "/projects/medicare-aws.png",
  },
]

export function ProjectsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        variants={item}
        className="relative flex items-center w-full mb-6 before:absolute before:-left-[100vw] before:-z-10 before:w-[200vw] before:top-0 before:border-t before:border-border after:absolute after:-left-[100vw] after:-z-10 after:w-[200vw] after:bottom-0 after:border-b after:border-border"
      >
        <h2 className="font-display text-3xl font-bold text-foreground flex items-center gap-2">
          Projects
        </h2>
      </motion.div>

      <div className="border border-border divide-y divide-border">
        {projects.map((project) => (
          <motion.a
            key={project.number}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="group relative block p-5 hover:bg-secondary/30 transition-colors"
          >
            {/* Arrow — top right, appears on hover */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
              <ArrowUpRight className="w-4 h-4 text-foreground" />
            </div>

            <div className="flex items-start gap-5 pr-6">
              {/* Number */}
              <span className="text-sm font-mono text-muted-foreground mt-0.5 shrink-0">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0 flex items-start gap-4">
                {/* Project image — left side */}
                <div className="hidden sm:block w-32 h-20 shrink-0 overflow-hidden rounded border border-border bg-secondary/30">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={128}
                    height={80}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base text-foreground font-medium group-hover:underline underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs  border border-muted-foreground/60 text-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
