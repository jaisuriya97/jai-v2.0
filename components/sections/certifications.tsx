"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner (CCP)",
    issuer: "Amazon Web Services Training and Certification",
    credlyLink: "https://www.credly.com/badges/6d4b641f-ecd9-4c51-8c2e-a979ef504efe",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco",
    credlyLink: "https://www.credly.com/badges/4c97d390-66db-40ec-b617-f067ddd92f55",
  },
]

export function CertificationsSection() {
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
          Certifications
        </h2>
      </motion.div>

      <div className="space-y-4">
        {certifications.map((cert) => (
          <motion.div
            key={cert.name}
            variants={item}
            whileHover={{ x: 4 }}
            className="border border-border p-5 hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg shrink-0">
                <Award className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base text-foreground font-medium">{cert.name}</h3>
                <p className="mt-1 text-base text-muted-foreground">
                  Issued by <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                </p>
                <a
                  href={cert.credlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View on Credly
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
