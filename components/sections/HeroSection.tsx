"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { MotionDiv } from "@/components/motion/MotionDiv";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background mesh */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-1/2 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
            style={{
              background: "var(--tantia-cyan)",
              animation: "mesh-drift-a 20s ease-in-out infinite",
            }}
          />
          <div
            className="absolute right-[20%] top-[30%] h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
            style={{
              background: "var(--tantia-teal)",
              animation: "mesh-drift-b 25s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-[20%] left-[20%] h-[500px] w-[500px] rounded-full opacity-10 blur-[100px]"
            style={{
              background: "oklch(0.546 0.214 259)",
              animation: "mesh-drift-c 22s ease-in-out infinite",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-32 text-center">
          <MotionDiv delay={0}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-glass px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--tantia-teal)]" />
              AI-Native Manufacturing ERP
            </span>
          </MotionDiv>

          <MotionDiv delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The operating system
              <br />
              <span className="bg-gradient-to-r from-[var(--tantia-cyan)] to-[var(--tantia-teal)] bg-clip-text text-transparent">
                for factories
              </span>
            </h1>
          </MotionDiv>

          <MotionDiv delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Unified production, finance, people, and intelligence — powered by
              AI agents that learn your operations and optimize in real time.
            </p>
          </MotionDiv>

          <MotionDiv delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

          {/* Stats bar */}
          <MotionDiv delay={0.5}>
            <div className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: "18", label: "Modules" },
                { value: "6", label: "AI Agents" },
                { value: "6", label: "Industries" },
                { value: "99.9%", label: "Uptime SLA" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center">
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
    </LazyMotion>
  );
}
