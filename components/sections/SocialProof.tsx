const logos = [
  "Acme Manufacturing",
  "GlobalPack Inc.",
  "Precision Foods",
  "MetalWorks Co.",
  "PharmaCorp",
  "ElectroParts",
  "FlexPrint Group",
  "AutoDrive Systems",
];

export function SocialProof() {
  return (
    <section className="border-y border-border/20 bg-muted/30 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
          Trusted by industry leaders
        </p>
        <div className="relative overflow-hidden">
          <div
            className="flex gap-12"
            style={{
              animation: "scroll-left 30s linear infinite",
              width: "max-content",
            }}
          >
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-8 shrink-0 items-center text-sm font-semibold text-muted-foreground/40"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
