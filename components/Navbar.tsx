"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Home, BookOpen, Code2 } from "lucide-react";

interface NavbarProps {
  className?: string;
}

const navItems = [
  { name: "Home", href: "#home", icon: <Home size={22} /> },
  { name: "API", href: "#playground", icon: <Code2 size={22} /> },
  { name: "Docs", href: "#docs", icon: <BookOpen size={22} /> },
];

function scrollToHash(hash: string) {
  const el = document.getElementById(hash.replace("#", ""));
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.hash = hash;
  }
}

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Active section highlight
      let found = false;
      for (const item of navItems) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setActiveSection(id);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("home");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? "rgba(255, 255, 255, 0.97)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(0, 0, 0, 0.08)" : "none",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        boxShadow: isScrolled ? "0 2px 12px rgba(0,0,0,0.04)" : "none",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Main navigation"
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
        <motion.button
          type="button"
          aria-label="Go to home"
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#0070f3",
            cursor: "pointer",
            userSelect: "none",
            letterSpacing: "0.5px",
            display: "flex",
            alignItems: "center",
            background: "none",
            border: "none",
            outline: "none",
            padding: 0,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            scrollToHash("#home");
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #0070f3 60%, #00c6fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
              fontSize: 24,
              marginRight: 2,
              letterSpacing: "1px",
            }}
          >
            M
          </span>
          unicipality API
        </motion.button>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav
            aria-label="Primary"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", gap: 32 }}>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  type="button"
                  aria-current={
                    activeSection === item.href.replace("#", "")
                      ? "page"
                      : undefined
                  }
                  aria-label={item.name}
                  onClick={() => scrollToHash(item.href)}
                  style={{
                    textDecoration: "none",
                    color:
                      activeSection === item.href.replace("#", "")
                        ? "#0070f3"
                        : "#333",
                    fontWeight:
                      activeSection === item.href.replace("#", "") ? 700 : 500,
                    fontSize: 16,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 10px",
                    borderRadius: 6,
                    background:
                      activeSection === item.href.replace("#", "")
                        ? "#f0f4ff"
                        : "none",
                    border: "none",
                    transition:
                      "background 0.15s, color 0.15s, font-weight 0.15s",
                    outline: "none",
                  }}
                  whileHover={{
                    y: -2,
                    backgroundColor: "#f0f4ff",
                    color: "#0070f3",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  tabIndex={0}
                >
                  {item.icon}
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* GitHub Button */}
            <motion.button
              onClick={() =>
                window.open(
                  "https://github.com/youssef-of-web/tn-municipality-api",
                  "_blank",
                  "noopener noreferrer",
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
                outline: "none",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#0070f3",
                color: "white",
                boxShadow: "0 4px 12px rgba(0, 112, 243, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              tabIndex={0}
              aria-label="Open GitHub repository"
            >
              <Github size={18} />
              GitHub
            </motion.button>
          </nav>
        )}

        {/* Mobile Navigation: Icons Only */}
        {isMobile && (
          <nav
            aria-label="Primary mobile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            {navItems.map((item, index) => (
              <button
                key={item.name}
                aria-label={item.name}
                onClick={() => scrollToHash(item.href)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 6,
                  borderRadius: 8,
                  color:
                    activeSection === item.href.replace("#", "")
                      ? "#0070f3"
                      : "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 0,
                  transition: "background 0.15s, color 0.15s",
                  outline: "none",
                  boxShadow:
                    activeSection === item.href.replace("#", "")
                      ? "0 2px 8px rgba(0,112,243,0.08)"
                      : "none",
                }}
                tabIndex={0}
              >
                {item.icon}
              </button>
            ))}
            <button
              aria-label="Open GitHub repository"
              onClick={() =>
                window.open(
                  "https://github.com/youssef-of-web/tn-municipality-api",
                  "_blank",
                  "noopener noreferrer",
                )
              }
              style={{
                background: "none",
                border: "none",
                padding: 6,
                borderRadius: 8,
                color: "#0070f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 0,
                transition: "background 0.15s, color 0.15s",
                outline: "none",
              }}
              tabIndex={0}
            >
              <Github size={22} />
            </button>
          </nav>
        )}
      </div>
    </motion.nav>
  );
}
