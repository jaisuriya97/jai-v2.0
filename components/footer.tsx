"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <p className="text-sm text-muted-foreground text-center flex items-center justify-center gap-1.5">
        Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by Jaisuriya
      </p>
    </motion.footer>
  )
}
