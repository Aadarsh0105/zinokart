import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { AppStoreButtons } from './primitives';
const INCLUDED = [
'Customer App',
'Store App',
'Delivery App',
'Marketplace Infrastructure',
'Business Modules',
'Flutter Applications',
'White-label Platform'];

export function FinalCTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-[#0B1020] py-12 sm:py-16">
      
      {/* Animated gradients + glows */}
      <motion.div
        className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-[#F5A300]/25 blur-[130px]"
        animate={{
          x: [0, 60, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
      
      <motion.div
        className="pointer-events-none absolute right-1/4 bottom-0 h-[360px] w-[360px] rounded-full bg-[#FFD56A]/20 blur-[130px]"
        animate={{
          x: [0, -50, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
      
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage:
          'radial-gradient(ellipse at center, black, transparent 75%)'
        }} />
      

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{
            opacity: 0,
            y: 24
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
          
          Ready to Launch Your{' '}
          <span className="bg-gradient-to-r from-[#F5A300] via-[#E89A00] to-[#FFD56A] bg-clip-text text-transparent">
            Marketplace Platform?
          </span>
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
            y: 18
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.1
          }}
          className="mx-auto mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
          
          Everything required to build your marketplace already exists.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 18
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="mx-auto mt-8 flex flex-wrap justify-center gap-2.5">
          
          {INCLUDED.map((item) =>
          <span
            key={item}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#F5A300]/20 bg-[#F5A300]/8 px-3.5 py-1.5 text-sm font-medium text-slate-200 backdrop-blur">
            
              <CheckIcon size={14} className="text-[#F5A300]" />
              {item}
            </span>
          )}
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 18
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="mt-10 flex justify-center">
          
          <AppStoreButtons variant="dark" />
        </motion.div>
      </div>
    </section>);

}