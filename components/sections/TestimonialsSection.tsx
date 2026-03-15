"use client";

import { MotionDiv } from "@/components/motion/MotionDiv";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Tantia replaced three separate systems for us. Production, inventory, and quality — all in one platform. Our team adapted in days, not months.",
    name: "Maria Gonzalez",
    title: "Plant Manager",
    company: "FlexPrint Group",
  },
  {
    quote:
      "The AI agents caught a maintenance issue we would have missed. Saved us an estimated $45K in downtime costs in the first quarter alone.",
    name: "David Chen",
    title: "VP Operations",
    company: "Precision Foods Inc.",
  },
  {
    quote:
      "Finally, an ERP that doesn't feel like it was built in 2005. The interface is modern, the onboarding was smooth, and the support team actually responds.",
    name: "James Wright",
    title: "CEO",
    company: "MetalWorks Co.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-high-contrast py-24">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <MotionDiv>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted by manufacturers
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Hear from teams who transformed their operations with Tantia.
              </p>
            </div>
          </MotionDiv>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <MotionDiv key={t.name} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-border/30 bg-glass p-6 backdrop-blur-sm">
                  <Quote
                    size={24}
                    className="mb-4 text-primary/30"
                  />
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 border-t border-border/20 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.title}, {t.company}
                        </p>
                      </div>
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
