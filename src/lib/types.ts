export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
  highlightMetric?: string;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  excludedFeatures?: string[];
  ctaLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Técnico" | "Legal y Fiscal" | "Comercial";
}
