import type { LucideIcon } from "lucide-react";
import {
  Factory,
  Truck,
  Warehouse,
  Package,
  PackageCheck,
  Map,
  ShieldCheck,
  Wrench,
  PenTool,
  Receipt,
  TrendingUp,
  Users,
  HeartPulse,
  MessageCircle,
  BarChart3,
  Workflow,
  Bot,
  Settings,
} from "lucide-react";

export type ModuleCategory = "operations" | "finance" | "people" | "intelligence";

export interface Module {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  category: ModuleCategory;
}

export const categories: Record<ModuleCategory, { label: string; description: string }> = {
  operations: {
    label: "Operations",
    description: "End-to-end production, supply chain, and quality management.",
  },
  finance: {
    label: "Finance",
    description: "Accounting, invoicing, and financial analytics.",
  },
  people: {
    label: "People",
    description: "HR, payroll, and internal communications.",
  },
  intelligence: {
    label: "Intelligence",
    description: "AI agents, analytics, workflows, and platform administration.",
  },
};

export const modules: Module[] = [
  {
    name: "Forge",
    tagline: "Where things are made",
    description: "Work order scheduling, OEE tracking, capacity planning, and shift analytics.",
    icon: Factory,
    category: "operations",
  },
  {
    name: "Source",
    tagline: "Where everything begins",
    description: "Purchase orders, vendor scorecards, lead time management, and price comparison.",
    icon: Truck,
    category: "operations",
  },
  {
    name: "Vault",
    tagline: "Everything in its place",
    description: "Warehouse locations, stock moves, pick orders, cycle counts, and throughput.",
    icon: Warehouse,
    category: "operations",
  },
  {
    name: "Materia",
    tagline: "The building blocks",
    description: "Raw material inventory, stock monitoring, lot tracking, and consumption analysis.",
    icon: Package,
    category: "operations",
  },
  {
    name: "Porto",
    tagline: "Ready for the world",
    description: "Finished goods inventory, allocations, shipment planning, and quality release.",
    icon: PackageCheck,
    category: "operations",
  },
  {
    name: "Atlas",
    tagline: "The map of everything you own",
    description: "Stock control, ABC analysis, valuation, reorder points, and turnover metrics.",
    icon: Map,
    category: "operations",
  },
  {
    name: "Caliber",
    tagline: "Precision is the standard",
    description: "NCR management, ISO audits, CAPA workflows, defect analysis, and cost of quality.",
    icon: ShieldCheck,
    category: "operations",
  },
  {
    name: "Sentinel",
    tagline: "Always watching. Always ready",
    description: "Asset management, preventive and corrective maintenance, spare parts, and downtime tracking.",
    icon: Wrench,
    category: "operations",
  },
  {
    name: "Canvas",
    tagline: "From concept to plate",
    description: "Job management, proof workflows, plate tracking, and designer workload balancing.",
    icon: PenTool,
    category: "operations",
  },
  {
    name: "Ledger",
    tagline: "Every cent, accounted for",
    description: "Invoicing, accounts receivable/payable, cash flow forecasting, and profitability analysis.",
    icon: Receipt,
    category: "finance",
  },
  {
    name: "Aria",
    tagline: "The melody of deals",
    description: "Pipeline management, deal scoring, forecasting, smart quotes, and commission tracking.",
    icon: TrendingUp,
    category: "finance",
  },
  {
    name: "Bond",
    tagline: "Every relationship, connected",
    description: "Employee database, recruitment pipeline, onboarding workflows, and benefits admin.",
    icon: Users,
    category: "people",
  },
  {
    name: "Pulse",
    tagline: "The heartbeat of your people",
    description: "Attendance tracking, payroll processing, time-off management, and engagement surveys.",
    icon: HeartPulse,
    category: "people",
  },
  {
    name: "Wire",
    tagline: "Stay connected",
    description: "Internal messaging, team channels, announcements, and collaboration tools.",
    icon: MessageCircle,
    category: "people",
  },
  {
    name: "Summit",
    tagline: "The view from the top",
    description: "Executive KPI dashboards, trend analysis, utilization tracking, and margin reporting.",
    icon: BarChart3,
    category: "intelligence",
  },
  {
    name: "Flow",
    tagline: "Automate everything",
    description: "Low-code workflow builder, event triggers, AI decision nodes, and process templates.",
    icon: Workflow,
    category: "intelligence",
  },
  {
    name: "Muse",
    tagline: "Intelligence that inspires action",
    description: "AI agent management, custom agent creation, natural language queries, and insights.",
    icon: Bot,
    category: "intelligence",
  },
  {
    name: "Core",
    tagline: "The foundation",
    description: "User management, RBAC, audit logs, API integrations, and platform settings.",
    icon: Settings,
    category: "intelligence",
  },
];
