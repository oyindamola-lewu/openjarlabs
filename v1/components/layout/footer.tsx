"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const links = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:oyindamolalewu@gmail.com",
    className: "flex md:hidden",
  },
  { name: "GitHub", icon: Github, href: "https://github.com/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/" },
];

export default function Footer() {
  return (
    <footer className="w-full rounded-4xl  backdrop-blur-xl bg-black border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] text-white py-6 flex flex-col md:flex-row items-center justify-center md:justify-between md:px-8 gap-6">
      {/* CTA Bubble */}
      <div className="md:w-1/3 hidden md:flex justify-start">
        <motion.a
          href="mailto:oyindamolalewu@gmail.com"
          whileHover={{
            scale: 1.05,
            width: 250,
            transition: { type: "spring", stiffness: 250, damping: 18 },
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-auto md:w-1/2 px-4 md:px-8 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors font-semibold text-white shadow-[0_0_25px_rgba(255,255,255,0.1)]"
        >
          Get in Touch
        </motion.a>
      </div>

      {/* Social Dock */}
      <div className="flex items-center justify-center gap-6 md:gap-12 md:w-1/3">
        {links.map(({ name, icon: Icon, href, className }) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className={`group items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all overflow-hidden ${
              className ?? "flex"
            }`}
          >
            <Icon className="w-5 h-5 text-white" />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-[-1.5rem] text-xs text-white/80 group-hover:bottom-[-2.2rem] transition-all"
            >
              {name}
            </motion.span>
          </motion.a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-sm text-white/60 text-right md:w-1/3">
        © 2025 Open Jar Labs. All rights reserved.
      </p>
    </footer>
  );
}
