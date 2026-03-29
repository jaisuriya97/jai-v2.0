"use client"

import { Github, Linkedin, Code2, MapPin, Mail, Clock, User, Phone, Instagram, Settings, Download } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { WordRotate } from "@/components/ui/word-rotate"
import type { LucideIcon } from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const SpotifyIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
)

const infoItems: {
  icon: any
  label?: string
  href?: string
  type?: "time"
  iconClassName?: string
  linkClassName?: string
}[] = [
    { icon: User, label: "he/him" },
    { icon: MapPin, label: "Chennai, India" },
    { icon: Clock, type: "time" },
    { icon: Phone, label: "+91 9345453815", href: "tel:+919345453815" },
    { icon: Mail, label: "jaisuriya200297@gmail.com", href: "mailto:jaisuriya200297@gmail.com" },
    {
      icon: SpotifyIcon,
      label: "Vibe-Check 🎧",
      href: "https://open.spotify.com/playlist/7oCjQbWMNSsw5bImfpovJU?si=1607e7798cf34dab",
      iconClassName: "text-[#1DB954]",
      linkClassName: "hover:text-[#1DB954]"
    },
  ]

const socialLinks = [
  {
    name: "LinkedIn",
    handle: "@jaisuriyapk",
    href: "https://www.linkedin.com/in/jaisuriya-p-k-7156a2236/",
    iconBg: "bg-[#0A66C2]",
    icon: <Linkedin className="w-5 h-5 text-white" />,
  },
  {
    name: "GitHub",
    handle: "@jaisuriya97",
    href: "https://github.com/jaisuriya97",
    iconBg: "bg-[#181717] dark:bg-white",
    icon: <Github className="w-5 h-5 text-white dark:text-black" />,
  },
  {
    name: "Instagram",
    handle: "@jai_.suriya",
    href: "https://www.instagram.com/jai_.suriya/",
    iconBg: "bg-linear-to-tr from-[#FFD600] via-[#FF0069] to-[#7638FA]",
    icon: <Instagram className="w-5 h-5 text-white" />,
  },
  {
    name: "LeetCode",
    handle: "@jai_sa",
    href: "https://leetcode.com/u/jai_sa/",
    iconBg: "bg-[#FFA116]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.824.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.473 3.835-1.452l2.697-2.606c.514-.515.497-1.366-.038-1.901-.536-.535-1.388-.552-1.902-.038zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
      </svg>
    ),
  },
]

// Arrow icon shared by social cards
const ArrowIcon = () => (
  <svg className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
)

// ─── Component ────────────────────────────────────────────────────────────────

export function ProfileSection() {
  const [time, setTime] = useState("")
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-0">

      {/* ── Profile Card Header ── */}
      <motion.div variants={item} className="relative overflow-hidden border border-border p-6">

        {/* Top-right actions */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <a
            href="/projects/resume.pdf"
            download="Jaisuriya_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg backdrop-blur-md border border-muted-foreground/60 text-foreground  hover:text-foreground hover:bg-muted transition-colors focus:outline-none cursor-pointer text-xs font-semibold"
            aria-label="Download Resume"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="p-1.5 rounded-lg  backdrop-blur-md  border border-muted-foreground/60 text-foreground  hover:text-foreground hover:bg-muted transition-colors focus:outline-none cursor-pointer flex items-center justify-center"
                aria-label="Theme settings"
              >
                <Settings className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Flickering grid background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <FlickeringGrid
            className="w-full h-full"
            squareSize={4}
            gridGap={6}
            color={resolvedTheme === "light" ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"}
            maxOpacity={0.15}
            flickerChance={0.3}
          />
        </div>

        {/* Avatar + name */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden  border border-muted-foreground/60 text-foreground dark:border-muted-foreground dark:text-foreground">
              <Image
                src="/projects/jai.JPG"
                alt="Jaisuriya P K"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-background" />
          </div>

          <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground flex items-center justify-center sm:justify-start gap-1.5">
              Jaisuriya P K
              <svg aria-label="Verified" className="w-[1.2rem] h-[1.2rem] text-[#0095F6] mt-0.5" viewBox="0 0 40 40" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" />
              </svg>
            </h1>
            <WordRotate
              className="text-sm text-foreground/80"
              words={["Full Stack Developer", "Software Developer"]}
            />
          </div>
        </div>
      </motion.div>

      {/* ── Info Grid ── */}
      <motion.div variants={item} className="border border-border p-5 mt-2">
        {/* Role headline */}
        <div className="flex items-center gap-3 mb-4">
          <span className="border border-border rounded  p-1 flex items-center justify-center">
            <Code2 className="w-4 h-4 text-muted-foreground shrink-0" />
          </span>
          <span className="text-sm text-foreground">Associate Software Engineer @Toddle</span>
        </div>

        {/* Info items via map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {infoItems.map((info, i) => {
            const Icon = info.icon
            const content =
              info.type === "time" ? (
                <span className="text-sm text-foreground font-mono">
                  {mounted ? time : "--:--"}{" "}
                  <span className="text-xs opacity-60">// IST</span>
                </span>
              ) : info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`text-sm text-foreground transition-all duration-300 ${info.linkClassName || "hover:opacity-80"}`}
                >
                  {info.label}
                </a>
              ) : (
                <span className="text-sm text-foreground">{info.label}</span>
              )

            return (
              <div key={i} className="flex items-center gap-3">
                <span className="border border-border rounded  p-1 flex items-center justify-center shrink-0">
                  <Icon className={`w-4 h-4 ${info.iconClassName || "text-muted-foreground"}`} />
                </span>
                {content}
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* ── Social Links ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            variants={item}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border p-4 hover:bg-secondary/30 transition-colors group flex items-center gap-4"
          >
            <div className={`w-10 h-10 rounded-lg ${social.iconBg} flex items-center justify-center shrink-0`}>
              {social.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-sm font-medium text-foreground">{social.name}</p>
              <p className="text-xs text-muted-foreground truncate">{social.handle}</p>
            </div>
            <ArrowIcon />
          </motion.a>
        ))}
      </div>

    </motion.div>
  )
}
