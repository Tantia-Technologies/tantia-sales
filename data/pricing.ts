export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Developer",
    price: "Free",
    period: "forever",
    description: "For individual developers exploring the platform.",
    features: [
      "1 user",
      "Core modules",
      "Community support",
      "API access",
      "Local development",
    ],
    cta: "Get Started",
  },
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "For small teams getting started with manufacturing ERP.",
    features: [
      "Up to 5 users",
      "All core modules",
      "Email support",
      "Basic AI insights",
      "5 GB storage",
      "Standard integrations",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For growing manufacturers who need full AI capabilities.",
    features: [
      "Up to 25 users",
      "All modules",
      "Priority support",
      "Full TITAN AI agents",
      "50 GB storage",
      "Custom workflows",
      "Advanced analytics",
      "API webhooks",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$399",
    period: "/month",
    description: "For large operations with custom requirements and SLAs.",
    features: [
      "Unlimited users",
      "All modules",
      "Dedicated support",
      "Custom AI agents",
      "Unlimited storage",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
      "SSO & SAML",
    ],
    cta: "Contact Sales",
  },
];
