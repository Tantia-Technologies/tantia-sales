"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { MotionDiv } from "@/components/motion/MotionDiv";

export function CTASection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="section-cta-blue">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center">
          <MotionDiv>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your factory?
            </h2>
          </MotionDiv>
          <MotionDiv delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-base opacity-80">
              Join manufacturers who replaced legacy systems with a modern,
              AI-native platform. Start free — upgrade when you are ready.
            </p>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[oklch(0.20_0.16_259)] transition-all hover:bg-white/90 active:scale-[0.98]"
              >
                Start Free Trial
              </a>
              <a
                href="mailto:hello@tantia.tech"
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                Schedule Demo
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>
    </LazyMotion>
  );
}
