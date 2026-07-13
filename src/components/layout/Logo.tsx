import { motion } from "framer-motion";

interface LogoProps {
  dark?: boolean;
}

export default function Logo({ dark = false }: LogoProps) {
  return (
    <motion.a
      href="#top"
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="flex items-center gap-3 select-none"
    >
      {/* Brand Icon */}
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#FDBA2D] via-[#F9A825] to-[#E58A00] shadow-[0_10px_25px_rgba(249,168,37,.35)]">

        {/* Glow */}
        <div className="absolute inset-0 bg-white/10" />

        {/* Z */}
        <span className="relative text-lg font-black tracking-tight text-white">
          Z
        </span>
      </div>

      {/* Text */}
      <div className="leading-tight">
        <h1
          className={`text-[18px] font-bold tracking-tight ${
            dark ? "text-white" : "text-[#171717]"
          }`}
        >
          Zinokart
        </h1>

        <p
          className={`text-[11px] font-medium ${
            dark ? "text-gray-300" : "text-stone-500"
          }`}
        >
          Multi-Vendor Commerce Platform
        </p>
      </div>
    </motion.a>
  );
}