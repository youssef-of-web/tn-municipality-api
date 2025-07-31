"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
    className?: string;
}

export function ScrollToTop({ className }: ScrollToTopProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className={className}
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        left: 20,
                        zIndex: 1000,
                        background: 'rgba(0, 0, 0, 0.8)',
                        border: 'none',
                        borderRadius: 50,
                        width: 50,
                        height: 50,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        backdropFilter: 'blur(10px)',
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        y: -5
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
} 