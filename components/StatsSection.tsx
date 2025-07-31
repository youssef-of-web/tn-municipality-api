"use client";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Database, Users } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
}

interface StatsSectionProps {
  stats?: Stat[];
  className?: string;
}

const defaultStats: Stat[] = [
  {
    icon: <Database size={28} strokeWidth={1.5} />,
    label: "Governorates",
    value: 24,
    suffix: ""
  },
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    label: "Delegations",
    value: 264,
    suffix: ""
  }
];

export function StatsSection({ stats = defaultStats, className }: StatsSectionProps) {
  return (
    <section className={className} style={{ padding: '40px 0' }}>
      <motion.h2 
        style={{ 
          fontSize: 'clamp(20px, 4vw, 24px)', 
          fontWeight: 600, 
          textAlign: 'center', 
          marginBottom: 32,
          color: '#333'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Data Overview
      </motion.h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: 'clamp(16px, 3vw, 24px)',
        maxWidth: 800,
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 24px)'
      }}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card style={{ 
              padding: 'clamp(20px, 4vw, 28px)', 
              textAlign: 'center',
              border: '1px solid #e9ecef',
              background: 'white',
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: 'clamp(12px, 2vw, 16px)',
                color: '#0070f3'
              }}>
                {stat.icon}
              </div>
              <motion.div
                style={{ 
                  fontSize: 'clamp(24px, 5vw, 32px)', 
                  fontWeight: 700, 
                  color: '#333', 
                  marginBottom: 'clamp(4px, 1vw, 8px)',
                  lineHeight: 1.2
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                {stat.value.toLocaleString()}{stat.suffix}
              </motion.div>
              <div style={{ 
                fontSize: 'clamp(14px, 3vw, 16px)', 
                color: '#666', 
                fontWeight: 500,
                lineHeight: 1.4
              }}>
                {stat.label}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 