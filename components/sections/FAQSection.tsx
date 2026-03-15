"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { MotionDiv } from "@/components/motion/MotionDiv";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="py-24" id="faq">
        <div className="mx-auto max-w-3xl px-6">
          <MotionDiv>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to know about Tantia.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </MotionDiv>
        </div>
      </section>
    </LazyMotion>
  );
}
