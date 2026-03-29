"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { ProfileSection } from "@/components/sections/profile";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { CertificationsSection } from "@/components/sections/certifications";
import { EducationSection } from "@/components/sections/education";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Footer } from "@/components/footer";

function SectionDivider() {
  return (
    <div
      className="relative flex h-8 w-full 
    before:absolute before:-left-[100vw] before:-z-10 before:h-8 before:w-[200vw] 
    before:bg-[repeating-linear-gradient(315deg,var(--color-border)_0,var(--color-border)_1px,transparent_0,transparent_50%)] 
    dark:before:bg-[repeating-linear-gradient(315deg,#1C1C1E_0,#1C1C1E_1px,transparent_0,transparent_50%)] 
    before:[background-size:10px_10px] before:opacity-55
    after:absolute after:-left-[100vw] after:w-[200vw] after:top-0 after:border-t after:border-border dark:after:border-[#1C1C1E]
    [&>span]:absolute [&>span]:-left-[100vw] [&>span]:w-[200vw] [&>span]:bottom-0 [&>span]:border-b [&>span]:border-border dark:[&>span]:border-[#1C1C1E]
    "
    >
      <span />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background relative overflow-x-clip">
        {/* Fixed vertical edge lines with hatched pattern */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="max-w-4xl mx-auto h-full relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-3 sm:w-8
              before:absolute before:-top-[100vh] before:-z-10 before:w-3 before:sm:w-8 before:h-[200vh]
              before:bg-[repeating-linear-gradient(315deg,var(--color-border)_0,var(--color-border)_1px,transparent_0,transparent_50%)]
              dark:before:bg-[repeating-linear-gradient(315deg,#1C1C1E_0,#1C1C1E_1px,transparent_0,transparent_50%)]
              before:[background-size:10px_10px] before:opacity-55
              after:absolute after:-top-[100vh] after:h-[200vh] after:left-0 after:border-l after:border-border dark:after:border-[#1C1C1E]
              [&>span]:absolute [&>span]:-top-[100vh] [&>span]:h-[200vh] [&>span]:right-0 [&>span]:border-r [&>span]:border-border dark:[&>span]:border-[#1C1C1E]
            "
            >
              <span />
            </div>
            <div
              className="absolute right-0 top-0 bottom-0 w-3 sm:w-8
              before:absolute before:-top-[100vh] before:-z-10 before:w-3 before:sm:w-8 before:h-[200vh]
              before:bg-[repeating-linear-gradient(315deg,var(--color-border)_0,var(--color-border)_1px,transparent_0,transparent_50%)]
              dark:before:bg-[repeating-linear-gradient(315deg,#1C1C1E_0,#1C1C1E_1px,transparent_0,transparent_50%)]
              before:[background-size:10px_10px] before:opacity-55
              after:absolute after:-top-[100vh] after:h-[200vh] after:left-0 after:border-l after:border-border dark:after:border-[#1C1C1E]
              [&>span]:absolute [&>span]:-top-[100vh] [&>span]:h-[200vh] [&>span]:right-0 [&>span]:border-r [&>span]:border-border dark:[&>span]:border-[#1C1C1E]
            "
            >
              <span />
            </div>
          </div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12">
          <div className="pt-8">
            <ProfileSection />
          </div>

          <div className="py-4">
            <SectionDivider />
          </div>
          <section id="about" className="py-6">
            <AboutSection />
          </section>

          <div className="py-4">
            <SectionDivider />
          </div>
          <section id="experience" className="py-6">
            <ExperienceSection />
          </section>

          <div className="py-4">
            <SectionDivider />
          </div>
          <section id="projects" className="py-6">
            <ProjectsSection />
          </section>

          <div className="py-4">
            <SectionDivider />
          </div>
          <section id="skills" className="py-6">
            <SkillsSection />
          </section>

          <div className="py-4">
            <SectionDivider />
          </div>
          <section id="certifications" className="py-6">
            <CertificationsSection />
          </section>

          <div className="py-4">
            <SectionDivider />
          </div>
          <section id="education" className="py-6">
            <EducationSection />
          </section>

          <div className="py-4">
            <SectionDivider />
          </div>
          <Footer />
        </main>

        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
