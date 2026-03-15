"use client";

import { useState } from "react";
import { MotionDiv } from "@/components/motion/MotionDiv";
import {
  modules,
  categories,
  type ModuleCategory,
} from "@/data/modules";
import { cn } from "@/lib/utils";

const categoryKeys: ModuleCategory[] = [
  "operations",
  "finance",
  "people",
  "intelligence",
];

export function ModuleShowcase() {
  const [active, setActive] = useState<ModuleCategory>("operations");

  const filtered = modules.filter((m) => m.category === active);

  return (
    <section className="section-dark-primary py-24" id="features">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <MotionDiv>
            <div className="mb-4 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-glass px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                18 Modules
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything your factory needs
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Modular by design. Start with what you need, expand as you grow.
                Every module shares a unified data layer — zero duplication.
              </p>
            </div>
          </MotionDiv>

          {/* Category tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  active === key
                    ? "glass-primary"
                    : "glass-button",
                )}
              >
                {categories[key].label}
              </button>
            ))}
          </div>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            {categories[active].description}
          </p>

          {/* Module grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((mod, i) => (
              <MotionDiv key={mod.name} delay={i * 0.05}>
                <div className="group rounded-2xl border border-border/30 bg-glass p-5 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-glass-hover">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                      <mod.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{mod.name}</h3>
                      <p className="text-xs text-muted-foreground/70">
                        {mod.tagline}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
    </section>
  );
}
