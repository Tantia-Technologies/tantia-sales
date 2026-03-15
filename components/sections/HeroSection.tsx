"use client";

import Image from "next/image";
import { MotionDiv } from "@/components/motion/MotionDiv";
import { TantiaLogo } from "@/components/svg/TantiaLogo";
import { MeshGradient } from "@/components/svg/MeshGradient";
import { HaloRing } from "@/components/svg/HaloRing";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.07] grayscale dark:opacity-[0.12]"
        aria-hidden="true"
      >
        <source
          src="https://videos.pexels.com/video-files/3191584/3191584-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/60 dark:bg-[var(--tantia-navy)]/70" />

      {/* MeshGradient */}
      <MeshGradient />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text content */}
          <div>
            <MotionDiv delay={0}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-glass px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--tantia-teal)]" />
                AI-Native Manufacturing ERP
              </span>
            </MotionDiv>

            <MotionDiv delay={0.1}>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                The operating system
                <br />
                <span className="bg-gradient-to-r from-[var(--tantia-cyan)] to-[var(--tantia-teal)] bg-clip-text text-transparent">
                  for factories
                </span>
              </h1>
            </MotionDiv>

            <MotionDiv delay={0.2}>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                Unified production, finance, people, and intelligence — powered
                by AI agents that learn your operations and optimize in real time.
              </p>
            </MotionDiv>

            <MotionDiv delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#pricing"
                  className="glass-primary px-8 py-3 text-sm font-semibold"
                >
                  Start Free
                </a>
                <a
                  href="#features"
                  className="glass-button px-8 py-3 text-sm font-semibold"
                >
                  Explore Features
                </a>
              </div>
            </MotionDiv>

            {/* Stats */}
            <MotionDiv delay={0.4}>
              <div className="mt-12 grid grid-cols-4 gap-4">
                {[
                  { value: "18", label: "Modules" },
                  { value: "6", label: "AI Agents" },
                  { value: "6", label: "Industries" },
                  { value: "99.9%", label: "Uptime" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold sm:text-2xl">
                      {stat.value}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>

          {/* Right: Visual — Tantia Logo + HaloRing + factory image */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-center">
            <HaloRing className="absolute inset-0 opacity-40" />
            <div className="relative">
              <TantiaLogo size={180} className="relative z-10" />
              {/* Factory image behind logo */}
              <div className="absolute -bottom-16 -right-16 h-48 w-64 overflow-hidden rounded-2xl border border-border/20 shadow-2xl shadow-primary/10">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=640&q=80&auto=format"
                  alt="Modern factory floor"
                  width={640}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="absolute -left-12 -top-8 h-36 w-52 overflow-hidden rounded-2xl border border-border/20 shadow-2xl shadow-primary/10">
                <Image
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=640&q=80&auto=format"
                  alt="Industrial automation"
                  width={640}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center lg:mt-20">
          <a
            href="#features"
            className="text-muted-foreground/40 transition-colors hover:text-muted-foreground"
            aria-label="Scroll to features"
          >
            <ArrowDown
              size={20}
              style={{ animation: "hero-bounce 2s ease-in-out infinite" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
