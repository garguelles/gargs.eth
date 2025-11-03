"use client";

import Image from "next/image";
import { Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Diagonal background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a1a1a] diagonal-cut-reverse border-l-4 border-primary/30" />
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            {/* Decorative border frame */}
            <div className="absolute -inset-4 border-4 border-foreground -rotate-2" />
            <div className="relative aspect-square overflow-hidden bg-card">
              <Image
                src="/gargs.png"
                alt="Profile image"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary -z-10" />
          </div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Name */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl text-brutalist">
              GARGS
              <span className="text-primary">.</span>
              ETH
            </h1>
            <div className="h-1 w-32 bg-primary" />
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-muted-foreground font-mono">
              Building{" "}
              <a
                href="https://twitter.com/blossomland_"
                className="text-foreground underline decoration-primary decoration-4 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @blossomland_
              </a>
              {" "}and{" "}
              <a
                href="https://x.com/cellfi_xyz"
                className="text-foreground underline decoration-primary decoration-4 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @cellfi_xyz
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <div className="h-px w-full bg-border" />
            <div className="flex flex-col space-y-2 font-mono text-sm">
              <a
                href="https://github.com/garguelles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover:translate-x-2 transition-all group"
              >
                <Github className="w-5 h-5" />
                <span className="group-hover:underline decoration-primary decoration-2">
                  GITHUB → @garguelles
                </span>
              </a>
              <a
                href="https://warpcast.com/gargs.eth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover:translate-x-2 transition-all group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 1260 1260"
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M947.747 1259.61H311.861C139.901 1259.61 0 1119.72 0 947.752V311.871C0 139.907 139.901 0.00541362 311.861 0.00541362H947.747C1119.71 0.00541362 1259.61 139.907 1259.61 311.871V947.752C1259.61 1119.72 1119.71 1259.61 947.747 1259.61Z" />
                  <path
                    d="M826.513 398.633L764.404 631.889L702.093 398.633H558.697L495.789 633.607L433.087 398.633H269.764L421.528 914.36H562.431L629.807 674.876L697.181 914.36H838.388L989.819 398.633H826.513Z"
                    fill="hsl(var(--background))"
                  />
                </svg>
                <span className="group-hover:underline decoration-primary decoration-2">
                  WARPCAST → gargs.eth
                </span>
              </a>
              <a
                href="https://twitter.com/grd_arguelles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover:translate-x-2 transition-all group"
              >
                <Twitter className="w-5 h-5" />
                <span className="group-hover:underline decoration-primary decoration-2">
                  TWITTER → @grd_arguelles
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
