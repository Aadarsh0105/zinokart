import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { AppStoreButtons } from './primitives';
const NAV_LINKS = [
{
  label: 'Ecosystem',
  href: '#ecosystem'
},
{
  label: 'Applications',
  href: '#applications'
},
{
  label: 'Modules',
  href: '#modules'
},
{
  label: 'Features',
  href: '#features'
},
{
  label: 'Technology',
  href: '#technology'
}];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${scrolled ? 'border border-surface-border/80 bg-white/80 shadow-soft backdrop-blur-xl' : 'border border-transparent bg-white/40 backdrop-blur-md'}`}>
        
        <a href="#top" aria-label="Zinokart home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
          <li key={link.href}>
              <a
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-surface-bg hover:text-ink">
              
                {link.label}
              </a>
            </li>
          )}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#download"
            className="rounded-xl bg-brand-indigo px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]">
            
            Get the Apps
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-white p-2 text-ink lg:hidden">
          
          {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{
            opacity: 0,
            y: -12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -12
          }}
          transition={{
            duration: 0.25
          }}
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-surface-border bg-white/95 p-4 shadow-card backdrop-blur-xl lg:hidden">
          
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
            <li key={link.href}>
                  <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface-bg hover:text-ink">
                
                    {link.label}
                  </a>
                </li>
            )}
            </ul>
            <div className="mt-3 border-t border-surface-border pt-3">
              <AppStoreButtons />
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.header>);

}