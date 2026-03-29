"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Redux", icon: "devicon-redux-original colored" },
  { name: "Laravel", icon: "devicon-laravel-original colored" },
  { name: "MySQL", icon: "devicon-mysql-original colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "GraphQL", icon: "devicon-graphql-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
  { name: "Webpack", icon: "devicon-webpack-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
]

export function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
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
          Skills
        </h2>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ y: -4, scale: 1.05 }}
            className="flex flex-col items-center gap-3 p-4 border border-border hover:bg-secondary/30 transition-colors group"
          >
            <i className={`${skill.icon} text-2xl`} />
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
