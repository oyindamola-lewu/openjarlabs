"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 flex items-center gap-4">
      {/* Main Island */}
      <motion.div
        animate={{
          width: menuOpen ? 270 : 120,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        }}
        className=" flex items-center justify-center h-10 rounded-full backdrop-blur-xl bg-black border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {!menuOpen ? (
            <motion.span
              key="label"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-semibold text-white tracking-wide"
            >
              Home
            </motion.span>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-6 text-sm font-semibold text-white"
            >
              <Link href="/" className="hover:text-stone-400 transition">
                Home
              </Link>
              
              <Link href="/work" className="hover:text-stone-400 transition">
                Work
              </Link>
              <Link href="/contact" className="hover:text-stone-400 transition">
                Contact
              </Link>
              <Link href="/lab" className="hover:text-lime-400 transition">
                Labs
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Menu Bubble */}
      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-xl bg-black border border-white/20 hover:bg-black/60 cursor-pointer transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)]"
      >
        <AnimatePresence mode="wait">
          {!menuOpen ? (
            <motion.svg
              key="menu"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-4 h-4"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="close"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-4 h-4"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </nav>
  );
}
