"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section className="min-h-screen py-20 px-4 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/4 w-1/3 h-64 bg-primary/5 -rotate-12 -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl text-brutalist">
              PROJECTS
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-1 w-24 bg-primary" />
              <p className="text-muted-foreground font-mono text-sm uppercase tracking-wider">
                Selected Work
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects grid - asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={index === 1 ? "lg:mt-20" : ""}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
