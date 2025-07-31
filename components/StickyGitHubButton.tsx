"use client";
import { motion } from "framer-motion";
import { Github, Star } from "lucide-react";

interface StickyGitHubButtonProps {
    repoUrl?: string;
    className?: string;
}

export function StickyGitHubButton({
    repoUrl = "https://github.com/youssef-of-web/tn-municipality-api",
    className
}: StickyGitHubButtonProps) {
    return (
        <motion.div
            className={className}
            style={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                zIndex: 1000,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <motion.button
                onClick={() => window.open(repoUrl, '_blank')}
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: 50,
                    padding: '16px 20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 16,
                    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease',
                }}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.4)',
                    y: -5
                }}
                whileTap={{ scale: 0.95 }}
                whileInView={{
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5, repeat: Infinity, repeatDelay: 3 }
                }}
            >
                <Github size={20} />
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    Star
                    <Star size={16} style={{ fill: 'white' }} />
                </span>
            </motion.button>
        </motion.div>
    );
} 