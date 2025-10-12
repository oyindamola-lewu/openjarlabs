// Button Component
// A reusable button component with support for variants (primary, secondary, glass, etc.)
// TODO: Implement props for label, onClick, variant, size, and disabled states.

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "glass";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};

const Button = ({ label, onClick, variant = "glass", size = "md", disabled = false }: ButtonProps) => {
  const sizeClasses: Record<typeof size, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg"
  };

  return (
    <>
      <button
        className={`
          relative ${sizeClasses[size]} rounded-full font-medium transition-all duration-300
          backdrop-blur-md bg-white/10 border border-white/20
          hover:bg-white/20 hover:shadow-[inset_0_2px_6px_rgba(255,255,255,0.2)]
          active:shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)]
          disabled:opacity-50 disabled:cursor-not-allowed
          before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent before:animate-[glow_2s_linear_infinite]
        `}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
      <style jsx>{`
        @keyframes glow {
          0% { border-color: transparent; }
          50% { border-color: rgba(255, 255, 255, 0.6); }
          100% { border-color: transparent; }
        }
      `}</style>
    </>
  );
};

export default Button;
