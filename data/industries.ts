import type { LucideIcon } from "lucide-react";
import {
  Package,
  UtensilsCrossed,
  Pill,
  Car,
  ShoppingBag,
  Cpu,
} from "lucide-react";

export interface Industry {
  name: string;
  description: string;
  painPoints: string[];
  icon: LucideIcon;
}

export const industries: Industry[] = [
  {
    name: "Packaging",
    description: "Streamline print, folding, corrugated, and flexible packaging operations.",
    painPoints: [
      "Complex job costing with variable substrates",
      "Pre-press proof cycle bottlenecks",
      "Waste tracking across multiple lines",
    ],
    icon: Package,
  },
  {
    name: "Food & Beverage",
    description: "Ensure compliance, traceability, and freshness from raw materials to shelf.",
    painPoints: [
      "Lot traceability and recall readiness",
      "Shelf-life and expiration management",
      "HACCP and FDA compliance documentation",
    ],
    icon: UtensilsCrossed,
  },
  {
    name: "Pharmaceuticals",
    description: "Meet regulatory standards while optimizing production throughput.",
    painPoints: [
      "GMP compliance and audit trails",
      "Batch record management",
      "Equipment qualification tracking",
    ],
    icon: Pill,
  },
  {
    name: "Automotive",
    description: "Manage complex supply chains and just-in-time production workflows.",
    painPoints: [
      "Multi-tier supplier coordination",
      "JIT delivery scheduling",
      "Defect parts per million (DPPM) tracking",
    ],
    icon: Car,
  },
  {
    name: "Consumer Products",
    description: "Scale production while maintaining quality and brand consistency.",
    painPoints: [
      "SKU proliferation management",
      "Seasonal demand forecasting",
      "Multi-channel fulfillment coordination",
    ],
    icon: ShoppingBag,
  },
  {
    name: "Electronics",
    description: "Handle precision assembly, component sourcing, and rapid iteration cycles.",
    painPoints: [
      "BOM version control across revisions",
      "Component lead time volatility",
      "SMT line yield optimization",
    ],
    icon: Cpu,
  },
];
