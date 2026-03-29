"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Code2, ChevronDown } from "lucide-react"
import { useState } from "react"

const companies = [
  {
    name: "Toddle",
    online: true,
    logoUrl: "https://www.google.com/s2/favicons?domain=toddleapp.com&sz=128",
    logoLetter: "T",
    roles: [
      {
        id: "toddle-support",
        title: "Associate Software Engineer",
        type: "Full-time",
        period: "February, 2026 — Present",
        descriptions: [
          "Triaged and resolved frontend bugs and support tickets across a React-based platform, ensuring high product reliability and user satisfaction.",
          "Contributed to feature development as a product-focused frontend engineer, translating design requirements into polished, maintainable React components.",
          "Identified and addressed performance bottlenecks in React rendering and Webpack build pipelines, improving overall application responsiveness.",
        ],
        tags: ["React", "Webpack", "HTML", "CSS", "JavaScript", "GraphQL"],
      },
    ]
  },
  {
    name: "Whirldata",
    online: false,
    logoUrl: "https://www.google.com/s2/favicons?domain=whirldatascience.com&sz=128",
    logoLetter: "W",
    roles: [
      {
        id: "whirldata-associate",
        title: "Solution Engineer",
        type: "Full-time",
        period: "December, 2024 — February, 2026",
        descriptions: [
          "Engineered a robust visualization module for 400k+ invoice cases using Recharts in React, improving financial auditing efficiency by 30%.",
          "Enhanced real-time discrepancy tracking, boosting user efficiency by 25% and reducing manual errors.",
          "Optimized Laravel data export for 400K+ records using queued jobs, reducing export time from 5 minutes to 60 seconds.",
          "Migrated UI from Syncfusion (paid) to Rsuite (open source), reducing licensing costs by 40% while maintaining feature parity."
        ],
        tags: ["React", "Recharts", "Laravel", "Data Visualization", "Rsuite"],
      },
      {
        id: "whirldata-trainee",
        title: "Solution Trainee",
        type: "Intern",
        period: "March, 2024 — December, 2024",
        descriptions: [
          "Hardened Jupyter Notebook access with token-based authentication and JavaScript sandboxing to block unauthorized script execution.",
          "Developed a 3D visualized charting module for executive dashboards, enhancing data interpretation and decision-making.",
          "Automated repository mirroring via GitHub Actions, reducing manual sync effort by 90%, and orchestrated a CI/CD pipeline for Azure VM deployment.",
          "Upgraded performance and maintainability of React and Laravel projects using SonarQube, improving code efficiency by 20% while reducing technical debt."
        ],
        tags: ["Python", "Jupyter", "GitHub Actions", "CI/CD", "SonarQube", "React", "Laravel"],
      }
    ]
  }
];

export function ExperienceSection() {
  const [expandedRoleByCompany, setExpandedRoleByCompany] = useState<Record<string, string | null>>({
    "Toddle": "toddle-support",
    "Whirldata": "whirldata-associate",
  })

  const toggleRole = (companyName: string, roleId: string) => {
    setExpandedRoleByCompany(prev => ({
      ...prev,
      [companyName]: prev[companyName] === roleId ? null : roleId
    }))
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemAnim = {
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
        variants={itemAnim}
        className="relative flex items-center w-full mb-6 before:absolute before:-left-[100vw] before:-z-10 before:w-[200vw] before:top-0 before:border-t before:border-border after:absolute after:-left-[100vw] after:-z-10 after:w-[200vw] after:bottom-0 after:border-b after:border-border"
      >
        <h2 className="font-display text-3xl font-bold text-foreground flex items-center gap-2">
          Experience
        </h2>
      </motion.div>

      <div className="flex flex-col mt-4">
        {companies.map((company) => (
          <motion.div
            key={company.name}
            variants={itemAnim}
            // Add full screen divider between companies using after pseudo element
            className="relative py-6 flex flex-col 
            after:absolute after:bottom-0 
            after:-left-[100vw] after:w-[200vw] after:border-b after:border-border last:after:hidden"
          >
            {/* Company Header */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 shrink-0 rounded p-2  border border-border/50 flex items-center justify-center z-10 text-foreground font-semibold text-base overflow-hidden">
                {company.logoUrl ? (
                  <img src={company.logoUrl} alt={`${company.name} logo`} className="w-full h-full object-cover" />
                ) : (
                  company.logoLetter
                )}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-display text-base font-semibold text-foreground tracking-tight">{company.name}</span>
                {company.online && <span className="w-1.5 h-1.5 rounded-full bg-[#32D74B] mt-0.5 shadow-[0_0_8px_rgba(50,215,75,0.6)]" />}
              </div>
            </div>

            {/* Roles Container */}
            <div className="relative mt-5">
              {/* Connecting Vertical Stub (Company -> First Role) */}
              <div className="absolute left-[15px] -top-5 h-5 w-px bg-border dark:bg-[#333] z-0" />

              <div className="flex flex-col gap-5">
                {company.roles.map((role, idx) => {
                  const isExpanded = expandedRoleByCompany[company.name] === role.id;
                  const isLast = idx === company.roles.length - 1;

                  return (
                    <div key={role.id} className="relative z-10 flex gap-4">
                      {/* Connecting Vertical Segment (Current Role -> Next Role) */}
                      {!isLast && (
                        <div className="absolute left-[15px] top-[24px] bottom-[-20px] w-px bg-border dark:bg-[#333] -z-10" />
                      )}

                      {/* Role Icon */}
                      <div className="w-8 shrink-0 flex justify-center">
                        <div className="w-[1.35rem] h-[1.35rem] 
                        mt-0.5 bg-background  border border-border flex 
                        items-center justify-center text-muted-foreground rounded
                        ">
                          <Code2 className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Role Content */}
                      <div className="flex-1 -mt-0.5">
                        <button
                          onClick={() => toggleRole(company.name, role.id)}
                          // Removed hover text color effect to ensure text and icon don't change
                          className="w-full flex items-start justify-between group/role focus:outline-none"
                        >
                          <div className="text-left flex flex-col gap-0.5">
                            {/* Bumped text-size to text-lg to match other sections */}
                            <h3 className="font-display text-base font-medium text-foreground">
                              {role.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-muted-foreground/90 font-mono">{role.type}</span>
                              <span className="text-muted-foreground/30">|</span>
                              <span className="text-sm font-mono text-muted-foreground/90">{role.period}</span>
                            </div>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-muted-foreground/50 transition-transform duration-200 mt-0.5 shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 pb-2">
                                <ul className="space-y-3">
                                  {role.descriptions.map((desc, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <span className="w-[4px] h-[4px] rounded-sm bg-muted-foreground/60 mt-2 shrink-0 content-['']" />
                                      <span className="text-sm text-foreground leading-relaxed font-mono">{desc}</span>
                                    </li>
                                  ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-5">
                                  {role.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 text-xs font-mono  border border-muted-foreground/60 text-foreground rounded-md">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
