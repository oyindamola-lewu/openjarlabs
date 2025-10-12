import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const skills = [
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually cohesive interfaces that balance creativity and clarity.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    title: "Custom Code",
    description:
      "Building high-performance, responsive, and expressive web experiences with clean code.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Animation & Motion",
    description:
      "Using motion to guide attention, create emotion, and communicate interaction states elegantly.",
    tags: ["Framer Motion", "GSAP"],
  },
  {
    title: "Brand Systems",
    description:
      "Crafting consistent design languages that extend across platforms and products.",
    tags: ["Identity", "Typography", "Design Ops"],
  },
];
const SkillCards = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return  <div className="h-auto w-full flex flex-col md:flex-row gap-4 items-end">
          {skills.map((skill, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={skill.title}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                animate={{
                  height: isExpanded
                    ? typeof window !== "undefined" && window.innerWidth < 768
                      ? 150 // expanded height on mobile
                      : 170 // expanded height on desktop
                    : typeof window !== "undefined" && window.innerWidth < 768
                    ? 45 // collapsed height on mobile
                    : 60, // collapsed height on desktop
                  transition: { type: "spring", stiffness: 200, damping: 25 },
                }}
                className="relative w-full bg-black border border-white/20 rounded-3xl px-4 py-2 md:px-6 md:py-4 cursor-pointer backdrop-blur-lg overflow-hidden transition-all duration-500 flex flex-col justify-between"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{skill.title}</h4>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary/70" />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <p className="text-sm text-primary/70">
                        {skill.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>;
};

export default SkillCards;
