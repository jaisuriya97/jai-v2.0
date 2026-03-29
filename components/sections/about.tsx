"use client"

import { motion } from "framer-motion"
import { MousePointer2 } from "lucide-react"

export function AboutSection() {
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
          About
          {/* <MousePointer2 className="w-5 h-5 text-muted-foreground -rotate-12" /> */}
        </h2>
      </motion.div>

      <motion.ul variants={container} className="space-y-6">
        <motion.li variants={item} className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
          <p className="text-sm text-foreground leading-relaxed">
            I'm a developer passionate about crafting fast, accessible, and &nbsp;
            <u>
              <strong >
                pixel-perfect user interfaces
              </strong>
            </u>
            that blend thoughtful design with robust engineering. My favorite work lies at the intersection of&nbsp;
            <u>
              <strong>
                design and development
              </strong>
            </u> — creating experiences that not only look great but are meticulously built for performance and usability.          </p>
        </motion.li>

        <motion.li variants={item} className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
          <p className="text-sm text-foreground  leading-relaxed">
            Currently, I'm an&nbsp;
            <u>
              <strong>
                Associate Software Engineer at Toddle
              </strong>
            </u>, building and scaling features across the full stack — from intuitive frontend interfaces with React to reliable backend systems with GraphQL    </p>
        </motion.li>

        <motion.li variants={item} className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
          <p className="text-sm text-foreground leading-relaxed">
            In the past, I've had the opportunity to develop software across various domains — from e-commerce platforms to blockchain applications and AI-powered websites.          </p>
        </motion.li>

        <motion.li variants={item} className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
          <p className="text-sm text-foreground leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about cloud architecture and DevOps practices.          </p>
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}
