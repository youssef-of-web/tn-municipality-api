import { Card } from "./ui/card";
import { Rocket, Search, BarChart } from "lucide-react";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features?: Feature[];
  className?: string;
}

const defaultFeatures: Feature[] = [
  {
    icon: <Rocket size={32} strokeWidth={1.5} />,
    title: "Fast & Reliable",
    description: "Lightning-fast responses with 99.9% uptime guarantee",
  },
  {
    icon: <Search size={32} strokeWidth={1.5} />,
    title: "Powerful Filtering",
    description: "Filter by governorate, delegation, postal code, and more",
  },
  {
    icon: <BarChart size={32} strokeWidth={1.5} />,
    title: "Rich Data",
    description: "Complete municipality data with coordinates and Arabic names",
  },
];

export function FeaturesSection({
  features = defaultFeatures,
  className,
}: FeaturesSectionProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 20,
        marginBottom: 48,
        padding: "0 8px",
      }}
      className={className}
    >
      {features.map((feature, index) => (
        <Card key={index} style={{ padding: 20, textAlign: "center" }}>
          <div
            style={{
              marginBottom: 12,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {feature.icon}
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>
            {feature.title}
          </h3>
          <p style={{ color: "#666", fontSize: 15 }}>{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}
