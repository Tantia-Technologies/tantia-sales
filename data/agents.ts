export interface Agent {
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  color: string;
}

export const agents: Agent[] = [
  {
    name: "TITAN",
    role: "General Director",
    description:
      "Orchestrates all agents and provides executive-level insights across the entire platform.",
    capabilities: [
      "Cross-module KPI synthesis",
      "Anomaly escalation & routing",
      "Strategic recommendations",
    ],
    color: "#00c8ff",
  },
  {
    name: "ARIA",
    role: "Sales Director",
    description:
      "Manages sales pipeline intelligence, deal scoring, and revenue forecasting.",
    capabilities: [
      "Deal probability scoring",
      "Revenue forecasting",
      "Customer sentiment analysis",
    ],
    color: "#a78bfa",
  },
  {
    name: "MARCO",
    role: "Production Planner",
    description:
      "Optimizes production schedules, detects bottlenecks, and balances capacity in real time.",
    capabilities: [
      "Smart scheduling optimization",
      "Bottleneck detection",
      "Capacity balancing",
    ],
    color: "#00d4aa",
  },
  {
    name: "SOFIA",
    role: "Quality Manager",
    description:
      "Monitors quality metrics, predicts defects, and ensures compliance with ISO standards.",
    capabilities: [
      "Defect pattern recognition",
      "Compliance monitoring",
      "Root cause analysis",
    ],
    color: "#f59e0b",
  },
  {
    name: "ELENA",
    role: "Finance Controller",
    description:
      "Analyzes financial health, predicts cash flow, and automates cost allocation.",
    capabilities: [
      "Cash flow prediction",
      "Cost anomaly detection",
      "Budget optimization",
    ],
    color: "#ec4899",
  },
  {
    name: "CARLOS",
    role: "Purchasing Agent",
    description:
      "Evaluates vendors, optimizes procurement timing, and negotiates best pricing.",
    capabilities: [
      "Vendor performance scoring",
      "Price trend analysis",
      "Reorder optimization",
    ],
    color: "#10b981",
  },
];
