"use client";

import { MotionDiv } from "@/components/motion/MotionDiv";
import { pricingTiers } from "@/data/pricing";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="py-24" id="pricing">
        <div className="mx-auto max-w-6xl px-6">
          <MotionDiv>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Start free, scale as you grow. All paid plans include a 14-day
                free trial — no credit card required.
              </p>
            </div>
          </MotionDiv>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, i) => (
              <MotionDiv key={tier.name} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border p-6 transition-all",
                    tier.featured
                      ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/5"
                      : "border-border/30 bg-glass backdrop-blur-sm hover:border-border/50",
                  )}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      {tier.period !== "forever" && (
                        <span className="text-sm text-muted-foreground">
                          {tier.period}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="mb-8 flex-1 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check
                          size={14}
                          className={cn(
                            "shrink-0",
                            tier.featured
                              ? "text-primary"
                              : "text-[var(--tantia-teal)]",
                          )}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.name === "Enterprise" ? "mailto:hello@tantia.tech" : "#"}
                    className={cn(
                      "block w-full py-2.5 text-center text-sm font-semibold",
                      tier.featured ? "glass-primary" : "glass-button",
                    )}
                  >
                    {tier.cta}
                  </a>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
    </section>
  );
}
