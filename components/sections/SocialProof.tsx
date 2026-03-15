import Image from "next/image";

const integrations = [
  { name: "SAP", src: "/logos/sap.svg" },
  { name: "QuickBooks", src: "/logos/quickbooks.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "CONTPAQi", src: "/logos/contpaqi.svg" },
  { name: "WhatsApp", src: "/logos/whatsapp.svg" },
];

export function SocialProof() {
  const doubled = [...integrations, ...integrations];

  return (
    <section className="border-y border-border/20 bg-muted/30 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
          Integrates with the tools you already use
        </p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-muted/30 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-muted/30 to-transparent" />

          <div
            className="flex items-center gap-16"
            style={{
              animation: "scroll-left 25s linear infinite",
              width: "max-content",
            }}
          >
            {doubled.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex h-8 shrink-0 items-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={32}
                  className="h-6 w-auto opacity-40 grayscale transition-all hover:opacity-70 hover:grayscale-0 dark:invert dark:opacity-30 dark:hover:opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
