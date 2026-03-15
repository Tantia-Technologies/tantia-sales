import Image from "next/image";
import { siteConfig } from "@/data/site";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "AI Agents", href: "#ai" },
    { label: "Pricing", href: "#pricing" },
    { label: "Industries", href: "#industries" },
  ],
  Company: [
    { label: "About", href: siteConfig.links.main },
    { label: "Shop", href: siteConfig.links.shop },
    { label: "GitHub", href: siteConfig.links.github },
    { label: "LinkedIn", href: siteConfig.links.linkedin },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Status", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/tantia-logo.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold tracking-tight">
                Tantia
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-xs text-muted-foreground/60">
              {siteConfig.email}
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold">{title}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/40 pt-6">
          <p className="text-center text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Tantia Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
