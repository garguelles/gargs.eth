"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
	project: Project;
	index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
	// Alternate rotation and styling for variety
	const rotations = ["-rotate-1", "rotate-1", "-rotate-2"];
	const rotation = rotations[index % rotations.length];

	return (
		<motion.article
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className={`relative group ${rotation}`}
		>
			{/* Main card */}
			<div className="relative bg-[#141414] border-4 border-foreground p-8 transition-all duration-300 hover:-translate-y-2 shadow-[8px_8px_0px_0px_#fafafa] hover:shadow-[12px_12px_0px_0px_#fafafa]">
				{/* Accent corner */}
				<div className="absolute top-0 right-0 w-16 h-16 bg-primary -translate-y-2 translate-x-2" />

				{/* Content */}
				<div className="space-y-6 relative">
					{/* Name */}
					<h3 className="text-3xl md:text-4xl text-brutalist text-foreground transition-colors">
						{project.name}
					</h3>

					{/* Description */}
					<p className="text-muted-foreground leading-relaxed font-mono text-sm md:text-base group-hover:text-muted-foreground transition-colors">
						{project.description}
					</p>

					{/* Tags */}
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="px-3 py-1 bg-foreground text-background text-xs font-bold uppercase tracking-wider"
							>
								{tag}
							</span>
						))}
					</div>

					{/* Links */}
					<div className="flex flex-wrap gap-4 pt-4 border-t-2 border-border">
						{project.links.map((link) => (
							<a
								key={link.label}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors group/link"
							>
								<span className="underline decoration-2 decoration-foreground group-hover/link:decoration-primary">
									{link.label}
								</span>
								<ExternalLink className="w-4 h-4" />
							</a>
						))}
					</div>
				</div>
			</div>
		</motion.article>
	);
}
