"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "B.E Computer Science",
    institution: "Rajalakshmi Engineering College, Chennai",
    period: "2020 — 2024",
  },
  {
    degree: "HSC",
    institution: "Mount Park Higher Secondary School, Kallakurichi",
    period: "2019 — 2020",
  },
  {
    degree: "SSLC",
    institution: "Saraswathi Vidyalaya Matric School, Vellore",
    period: "2017 — 2018",
  },
]

export function EducationSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
        className="relative flex items-center  w-full mb-6 before:absolute before:-left-[100vw] before:-z-10 before:w-[200vw] before:top-0 before:border-t before:border-border after:absolute after:-left-[100vw] after:-z-10 after:w-[200vw] after:bottom-0 after:border-b after:border-border"
      >
        <h2 className="font-display text-3xl font-bold text-foreground flex items-center gap-2">
          Education
        </h2>
      </motion.div>

      <div className="border border-border divide-y divide-border">
        {education.map((edu) => (
          <motion.div
            key={edu.degree}
            variants={item}
            className="p-5 hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-secondary rounded-lg shrink-0">
                <GraduationCap className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-display text-base text-foreground font-medium">{edu.degree}</h3>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.institution}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
