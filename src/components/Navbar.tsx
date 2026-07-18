// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MenuIcon, XIcon } from 'lucide-react';
// import { Logo } from './Logo';
// import { AppStoreButtons } from './primitives';
// const NAV_LINKS = [
// {
//   label: 'Ecosystem',
//   href: '#ecosystem'
// },
// {
//   label: 'Applications',
//   href: '#applications'
// },
// {
//   label: 'Modules',
//   href: '#modules'
// },
// {
//   label: 'Features',
//   href: '#features'
// },
// {
//   label: 'Technology',
//   href: '#technology'
// }];

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener('scroll', onScroll, {
//       passive: true
//     });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);
//   return (
//     <motion.header
//       initial={{
//         y: -80,
//         opacity: 0
//       }}
//       animate={{
//         y: 0,
//         opacity: 1
//       }}
//       transition={{
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1]
//       }}
//       className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      
//       <nav
//         className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${scrolled ? 'border border-surface-border/80 bg-white/80 shadow-soft backdrop-blur-xl' : 'border border-transparent bg-white/40 backdrop-blur-md'}`}>
        
//         <a href="#top" aria-label="Zinokart home">
//           <Logo />
//         </a>

//         <ul className="hidden items-center gap-1 lg:flex">
//           {NAV_LINKS.map((link) =>
//           <li key={link.href}>
//               <a
//               href={link.href}
//               className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-[#FFF6DD] hover:text-ink">
              
//                 {link.label}
//               </a>
//             </li>
//           )}
//         </ul>

//         <div className="hidden items-center gap-2 lg:flex">
//           <a
//             href="#download"
//             className="
// rounded-xl
// bg-[#F5A300]
// hover:bg-[#E89000]
// text-white
// shadow-[0_10px_35px_rgba(245,163,0,.35)]
// transition
// ">
            
//             Get the Apps
//           </a>
//         </div>

//         <button
//           type="button"
//           aria-label="Toggle menu"
//           onClick={() => setOpen((v) => !v)}
//           className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-white p-2 text-ink lg:hidden">
          
//           {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
//         </button>
//       </nav>

//       <AnimatePresence>
//         {open &&
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: -12
//           }}
//           animate={{
//             opacity: 1,
//             y: 0
//           }}
//           exit={{
//             opacity: 0,
//             y: -12
//           }}
//           transition={{
//             duration: 0.25
//           }}
//           className="mx-auto mt-2 max-w-6xl rounded-2xl border border-surface-border bg-white/95 p-4 shadow-card backdrop-blur-xl lg:hidden">
          
//             <ul className="flex flex-col gap-1">
//               {NAV_LINKS.map((link) =>
//             <li key={link.href}>
//                   <a
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:text-[#E88B00] hover:text-ink">
                
//                     {link.label}
//                   </a>
//                 </li>
//             )}
//             </ul>
//             <div className="mt-3 border-t border-surface-border pt-3">
//               <AppStoreButtons />
//             </div>
//           </motion.div>
//         }
//       </AnimatePresence>
//     </motion.header>);

// }

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { AppStoreButtons } from "./primitives";

const NAV_LINKS = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Applications", href: "#applications" },
  { label: "Modules", href: "#modules" },
  { label: "Features", href: "#features" },
  { label: "Technology", href: "#technology" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-[26px] px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border border-[#F6DFC0] bg-white/90 shadow-[0_18px_50px_rgba(245,163,0,.12)] backdrop-blur-2xl"
            : "border border-white/60 bg-white/70 backdrop-blur-xl"
        }`}
      >
        <a href="#top">
          <Logo />
        </a>

        {/* Desktop */}

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-xl px-4 py-2.5 text-[15px] font-medium text-[#4E5665] transition-all duration-300 hover:bg-[#FFF6E1] hover:text-[#E48A00]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}

        <div className="hidden lg:flex">
          <a
            href="#download"
            className="
            rounded-2xl
            bg-gradient-to-r
            from-[#F7A700]
            to-[#F28A00]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            shadow-[0_12px_30px_rgba(245,163,0,.35)]
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_18px_40px_rgba(245,163,0,.45)]
            "
          >
            Get the Apps
          </a>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#F4E3C4] bg-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            className="mx-auto mt-3 max-w-7xl rounded-[24px] border border-[#F6DFC0] bg-white/95 p-5 shadow-[0_18px_40px_rgba(0,0,0,.08)] backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-medium text-[#4E5665] transition hover:bg-[#FFF6E1] hover:text-[#E48A00]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 border-t border-[#F2E2C4] pt-5">
              <AppStoreButtons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}