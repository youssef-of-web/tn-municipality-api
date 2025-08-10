"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "API", href: "#playground" },
    { name: "Docs", href: "#docs" },
  ];

  return (
    <motion.nav
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        {/* Logo */}
        <motion.div
          style={{ fontSize: 20, fontWeight: 700, color: "#0070f3" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Municipality API
        </motion.div>

        {/* Desktop Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", gap: 32 }}>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: 500,
                  fontSize: 16,
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* GitHub Button */}
          <motion.button
            onClick={() =>
              window.open(
                "https://github.com/youssef-of-web/tn-municipality-api",
                "_blank",
              )
            }
            style={{
              background: "none",
              border: "2px solid #0070f3",
              borderRadius: 8,
              padding: "8px 16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#0070f3",
              fontWeight: 500,
              transition: "all 0.2s ease",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#0070f3",
              color: "white",
              boxShadow: "0 4px 12px rgba(0, 112, 243, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            GitHub
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div style={{ display: "none" }}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ padding: 8 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "white",
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: 500,
                padding: "8px 0",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
