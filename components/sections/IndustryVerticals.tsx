"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { MotionDiv } from "@/components/motion/MotionDiv";
import { industries } from "@/data/industries";

export function IndustryVerticals() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="section-accent py-24" id="industries">
        <div className="mx-auto max-w-6xl px-6">
          <MotionDiv>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built for your industry
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Tantia understands the unique challenges of your vertical — from
                compliance requirements to production workflows.
              </p>
            </div>
          </MotionDiv>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <MotionDiv key={industry.name} delay={i * 0.08}>
                <div className="group rounded-2xl border border-border/30 bg-glass p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-glass-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <industry.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">{industry.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {industry.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {industry.painPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs text-muted-foreground/70"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
