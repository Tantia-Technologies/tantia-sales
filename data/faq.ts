export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "How long does it take to deploy Tantia?",
    answer:
      "Most teams are up and running within a week. Our guided onboarding walks you through configuration, data import, and user setup. Enterprise deployments with custom integrations typically take 4-6 weeks.",
  },
  {
    question: "Can I migrate data from my existing ERP?",
    answer:
      "Yes. Tantia supports bulk data import via CSV, Excel, and API. We provide migration templates for common ERP systems and our support team can assist with complex migrations at no extra cost on Professional and Enterprise plans.",
  },
  {
    question: "How does the AI work? Do I need to train it?",
    answer:
      "Tantia's AI agents (the TITAN ecosystem) learn from your operational data automatically. No manual training required. The agents start providing insights within days of deployment and improve continuously as more data flows through the system.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. Tantia uses AES-256 encryption at rest, TLS 1.3 in transit, and SOC 2 Type II compliant infrastructure. Enterprise plans include SSO, SAML, and the option for on-premise deployment behind your own firewall.",
  },
  {
    question: "What integrations are available?",
    answer:
      "Tantia integrates with popular tools out of the box: QuickBooks, Xero, Stripe, Shopify, Salesforce, Slack, and more. Our REST API and webhook system allow you to connect any custom system. Enterprise plans include dedicated integration support.",
  },
  {
    question: "Can I start with just one module?",
    answer:
      "Yes. Tantia is fully modular. Start with just Forge (production) or Ledger (finance) and add modules as your needs grow. All modules share a unified data layer, so there is zero data duplication when you expand.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. All paid plans include a 14-day free trial with full access to every feature. No credit card required. The Developer plan is free forever for individual developers exploring the platform.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Developer plans get community support. Starter plans include email support with 24-hour response time. Professional plans get priority support with 4-hour response. Enterprise plans include a dedicated account manager and phone support.",
  },
];
