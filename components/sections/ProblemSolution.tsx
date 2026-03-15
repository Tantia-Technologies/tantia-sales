"use client";

import { MotionDiv } from "@/components/motion/MotionDiv";
import {
  AlertTriangle,
  CheckCircle,
  FileSpreadsheet,
  Keyboard,
  Clock,
  EyeOff,
  Database,
  Zap,
  TrendingUp,
  Eye,
} from "lucide-react";

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: "Disconnected spreadsheets",
    description: "Critical data scattered across Excel files, email threads, and sticky notes.",
  },
  {
    icon: Keyboard,
    title: "Manual data entry",
    description: "Hours wasted re-keying the same information across systems.",
  },
  {
    icon: Clock,
    title: "Reactive maintenance",
    description: "Equipment fails before anyone sees the warning signs.",
  },
  {
    icon: EyeOff,
    title: "No visibility",
    description: "Executives make decisions on week-old data — or gut feeling.",
  },
];

const solutions = [
  {
    icon: Database,
    title: "Unified real-time data",
    description: "One source of truth across every department, updated in real time.",
  },
  {
    icon: Zap,
    title: "AI-automated workflows",
    description: "Intelligent agents handle repetitive tasks so your team can focus.",
  },
  {
    icon: TrendingUp,
    title: "Predictive operations",
    description: "Forecast demand, detect anomalies, and prevent downtime before it happens.",
  },
  {
    icon: Eye,
    title: "360-degree visibility",
    description: "Executive dashboards with live KPIs from floor to boardroom.",
  },
];

export function ProblemSolution() {
  return (
    <section className="section-high-contrast py-24" id="problem-solution">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <MotionDiv>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The factory floor is broken.
                <br />
                <span className="bg-gradient-to-r from-[var(--tantia-cyan)] to-[var(--tantia-teal)] bg-clip-text text-transparent">
                  We fix it.
                </span>
              </h2>
            </div>
          </MotionDiv>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Pain points */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <AlertTriangle size={16} className="text-destructive" />
                <span className="text-sm font-semibold uppercase tracking-wider text-destructive">
                  The Problem
                </span>
              </div>
              <div className="space-y-4">
                {painPoints.map((item, i) => (
                  <MotionDiv key={item.title} delay={i * 0.1}>
                    <div className="flex gap-4 rounded-xl border border-destructive/10 bg-destructive/5 p-4">
                      <item.icon
                        size={20}
                        className="mt-0.5 shrink-0 text-destructive/70"
                      />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <CheckCircle
                  size={16}
                  className="text-[var(--tantia-teal)]"
                />
                <span className="text-sm font-semibold uppercase tracking-wider text-[var(--tantia-teal)]">
                  The Tantia Way
                </span>
              </div>
              <div className="space-y-4">
                {solutions.map((item, i) => (
                  <MotionDiv key={item.title} delay={i * 0.1} direction="right">
                    <div className="flex gap-4 rounded-xl border border-[var(--tantia-teal)]/10 bg-[var(--tantia-teal)]/5 p-4">
                      <item.icon
                        size={20}
                        className="mt-0.5 shrink-0 text-[var(--tantia-teal)]"
                      />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
