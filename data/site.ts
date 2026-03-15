export const siteConfig = {
  name: "Tantia Technologies",
  tagline: "The operating system for factories",
  url: "https://sales.tantia.tech",
  email: "hello@tantia.tech",
  description:
    "AI-native ERP built for manufacturers. Unified production, finance, people, and intelligence — all in one platform.",
  links: {
    app: "https://app.tantia.tech",
    main: "https://tantia.tech",
    shop: "https://shop.tantia.tech",
    github: "https://github.com/Tantia-Technologies",
    linkedin: "https://linkedin.com/company/tantia-technologies",
  },
} as const;

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "AI Agents", href: "#ai" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;
