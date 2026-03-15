"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { MotionDiv } from "@/components/motion/MotionDiv";
import { agents } from "@/data/agents";
import { Brain } from "lucide-react";

export function AIAgents() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative overflow-hidden py-24" id="ai">
        {/* Cyan glow background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[120px]"
            style={{ background: "var(--tantia-cyan)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <MotionDiv>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--tantia-cyan)]/20 bg-[var(--tantia-cyan)]/5 px-4 py-1.5 text-xs font-medium text-[var(--tantia-cyan)]">
                <Brain size={14} />
                TITAN AI Ecosystem
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                AI-native, not bolt-on
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Six specialized AI agents built into the platform from day one.
                They learn your operations and optimize autonomously — no
                training required.
              </p>
            </div>
          </MotionDiv>

          {/* Agent cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent, i) => (
              <MotionDiv key={agent.name} delay={i * 0.08}>
                <div className="group relative rounded-2xl border border-border/30 bg-glass p-6 backdrop-blur-sm transition-all hover:border-border/50">
                  {/* Glow dot */}
                  <div
                    className="absolute right-4 top-4 h-2 w-2 rounded-full"
                    style={{
                      background: agent.color,
                      boxShadow: `0 0 8px ${agent.color}`,
                      animation: "halo-pulse 4s ease-in-out infinite",
                    }}
                  />

                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold"
                      style={{
                        background: `${agent.color}15`,
                        color: agent.color,
                      }}
                    >
                      {agent.name[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold">{agent.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {agent.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {agent.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {agent.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-2 text-xs text-muted-foreground/80"
                      >
                        <span
                          className="h-1 w-1 shrink-0 rounded-full"
                          style={{ background: agent.color }}
                        />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Key differentiator */}
          <MotionDiv delay={0.5}>
            <div className="mt-12 rounded-2xl border border-[var(--tantia-cyan)]/10 bg-[var(--tantia-cyan)]/5 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">
                  90-day demand forecasting
                </strong>{" "}
                with confidence intervals &bull;{" "}
                <strong className="text-foreground">
                  Real-time anomaly detection
                </strong>{" "}
                across all sensors &bull;{" "}
                <strong className="text-foreground">
                  Natural language queries
                </strong>{" "}
                — ask your factory anything
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>
    </LazyMotion>
  );
}
