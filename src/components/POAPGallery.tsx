"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ethers } from "ethers";
import Image from "next/image";

interface POAP {
  event: {
    id: number;
    name: string;
    description: string;
    image_url: string;
    event_url: string;
    start_date: string;
  };
  tokenId: string;
}

export function POAPGallery() {
  const [loading, setLoading] = useState(true);
  const [poaps, setPoaps] = useState<POAP[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPOAPs() {
      try {
        // Resolve ENS name to address
        const mainnetProvider = new ethers.JsonRpcProvider(
          "https://eth.llamarpc.com"
        );
        const walletAddress = await mainnetProvider.resolveName("gargs.eth");

        if (!walletAddress) {
          throw new Error("Could not resolve gargs.eth");
        }

        // Fetch POAPs from POAP API
        const response = await fetch(
          `https://api.poap.tech/actions/scan/${walletAddress}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch POAPs");
        }

        const data = await response.json();
        setPoaps(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching POAPs:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
        setLoading(false);
      }
    }

    fetchPOAPs();
  }, []);

  return (
    <section className="min-h-screen py-20 px-4 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/3 w-1/4 h-96 bg-primary/5 rotate-6 -z-10" />

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
              POAP
              <span className="text-primary">S</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-1 w-24 bg-primary" />
              <p className="text-muted-foreground font-mono text-sm uppercase tracking-wider">
                {loading ? "Loading..." : `${poaps.length} Collected`}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 border-4 border-foreground border-t-primary animate-spin mx-auto" />
              <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                Fetching POAPs...
              </p>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4 max-w-md">
              <div className="text-6xl">⚠</div>
              <p className="font-mono text-sm text-destructive">{error}</p>
            </div>
          </div>
        )}

        {/* POAP Gallery - Masonry/scattered grid */}
        {!loading && !error && poaps.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {poaps.slice(0, 16).map((poap, index) => (
              <motion.a
                key={poap.tokenId}
                href={poap.event.event_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative group ${
                  index % 3 === 0 ? "rotate-2" : index % 3 === 1 ? "-rotate-2" : "rotate-1"
                } ${
                  index % 4 === 0 ? "md:col-span-1 md:row-span-1" : ""
                }`}
              >
                {/* Card */}
                <div className="relative aspect-square border-4 border-foreground bg-card overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10">
                  {/* Brutalist shadow */}
                  <div className="absolute inset-0 bg-foreground translate-x-2 translate-y-2 -z-10 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />

                  {/* POAP Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={poap.event.image_url}
                      alt={poap.event.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <div className="text-center space-y-2">
                      <p className="font-bold text-xs uppercase tracking-wider line-clamp-2">
                        {poap.event.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(poap.event.start_date).getFullYear()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Small accent */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary -z-20" />
              </motion.a>
            ))}
          </div>
        )}

        {/* Show more message if there are more POAPs */}
        {!loading && !error && poaps.length > 16 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground font-mono text-sm">
              + {poaps.length - 16} more POAPs
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
