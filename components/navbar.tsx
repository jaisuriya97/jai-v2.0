"use client"

import { Github, Moon, Sun, Search, Home, Briefcase, FolderOpen, Code2, Award, GraduationCap } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: "#about", icon: Home, label: "About" },
    { href: "#experience", icon: Briefcase, label: "Experience" },
    { href: "#projects", icon: FolderOpen, label: "Projects" },
    { href: "#skills", icon: Code2, label: "Skills" },
    { href: "#certifications", icon: Award, label: "Certs" },
    { href: "#education", icon: GraduationCap, label: "Education" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href="/" className="font-bold text-2xl tracking-tight text-foreground" style={{ fontFamily: "'Tiny5', sans-serif" }}>
              JS
            </Link>
          </motion.div>

          {/* Center Nav - Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}

                className="px-3 py-1.5 text-sm text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Right Actions */}

        </div>
      </div>

      {/* Mobile Nav Icons */}
      <div className="md:hidden border-t border-border">
        <div className="flex justify-around py-2">
          {navItems.slice(0, 5).map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <item.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  )
}
