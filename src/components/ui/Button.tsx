import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
  arrow?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  arrow = false,
  className = "",
}: ButtonProps) {
  const sizeClasses = {
    sm: "h-10 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-7 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#FDBA2D] to-[#F59E0B] text-white shadow-[0_12px_30px_rgba(249,168,37,.35)] hover:shadow-[0_18px_40px_rgba(249,168,37,.45)]",

    secondary:
      "border border-[#E8E4DD] bg-white text-[#171717] hover:border-[#F9A825] hover:text-[#F9A825] hover:bg-[#FFFDF7]",

    ghost:
      "bg-transparent text-[#171717] hover:bg-[#FFF7E8]",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    font-semibold
    transition-all
    duration-300
    whitespace-nowrap
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const content = (
    <>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        icon
      )}

      <span>{children}</span>

      {!loading && arrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const animation = {
    whileHover: {
      y: -2,
      scale: 1.02,
    },
    whileTap: {
      scale: 0.98,
    },
    transition: {
      duration: 0.18,
    },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${classes}`}
        {...animation}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={`group ${classes} disabled:cursor-not-allowed disabled:opacity-60`}
      {...animation}
    >
      {content}
    </motion.button>
  );
}