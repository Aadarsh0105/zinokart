import { motion, useReducedMotion } from 'framer-motion';
import {
  BikeIcon,
  CheckIcon,
  Globe2Icon,
  PackageIcon,
  PillIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SmartphoneIcon,
  StoreIcon,
  UtensilsCrossedIcon,
  CarIcon
} from
  'lucide-react';
import { AppStoreButtons } from './primitives';
type AppCard = {
  title: string;
  detail: string;
  icon: any;
  iconBackground: string;
  iconColor: string;
  position: string;
};
type ModuleChip = {
  label: string;
  icon: any;
  accent: string;
  position: string;
};
const CUSTOMER_APP_IMAGE = "/249448bf-89c2-410d-a97e-651de9a60f59.jpg";

const APP_CARDS: AppCard[] = [
  {
    title: 'Customer App',
    detail: 'Browse, buy & track',
    icon: SmartphoneIcon,
    iconBackground: "bg-[#FFF4DA]",
    iconColor: "text-[#F5A300]",
    position: 'left-[3%] top-[31%] sm:left-[5%] sm:top-[30%]'
  },
  {
    title: 'Store App',
    detail: 'Accept & fulfil',
    icon: StoreIcon,
    iconBackground: "bg-[#FFF0CC]",
    iconColor: "text-[#E88900]",
    position: 'right-[3%] top-[15%] sm:right-[5%] sm:top-[15%]'
  },
  {
    title: 'Delivery App',
    detail: 'Pick up & deliver',
    icon: BikeIcon,
    iconBackground: "bg-[#FFF7E4]",
    iconColor: "text-[#FFAE00]",
    position: 'bottom-[17%] right-[3%] sm:bottom-[16%] sm:right-[5%]'
  }];

const MODULE_CHIPS: ModuleChip[] = [
  {
    label: 'Food Delivery',
    icon: UtensilsCrossedIcon,
    accent: 'text-[#F5A300]',
    position: 'left-[4%] top-[6%]'
  },
  {
    label: 'Grocery',
    icon: ShoppingCartIcon,
    accent: 'text-[#F5A300]',
    position: 'right-[4%] top-[6%]'
  },
  {
    label: 'Shopping',
    icon: ShoppingBagIcon,
    accent: 'text-[#FF9800]',
    position: 'left-[3%] top-[59%]'
  },
  {
    label: 'Pharmacy',
    icon: PillIcon,
    accent: 'text-[#F5A300]',
    position: 'right-[3%] top-[55%]'
  },
  {
    label: 'Parcel Delivery',
    icon: PackageIcon,
    accent: 'text-[#F5A300]',
    position: 'left-[12%] bottom-[7%]'
  },
  {
    label: 'Cab Booking',
    icon: CarIcon,
    accent: 'text-[#FF9800]',
    position: 'right-[12%] bottom-[7%]'
  }];

const PROOF_POINTS = [
  '25+ Marketplace Features',
  'Multi Vendor',
  'Multi Country',
];

const PARTICLES = [
  {
    left: '19%',
    top: '20%',
    delay: 0.2
  },
  {
    left: '76%',
    top: '31%',
    delay: 0.8
  },
  {
    left: '12%',
    top: '76%',
    delay: 1.4
  },
  {
    left: '82%',
    top: '74%',
    delay: 2
  },
  {
    left: '47%',
    top: '6%',
    delay: 2.6
  }];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const floatTransition = (delay: number, duration = 5) => ({
    duration,
    delay,
    repeat: reducedMotion ? 0 : Infinity,
    ease: 'easeInOut' as const
  });
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative min-h-[100svh] w-full overflow-hidden bg-surface-bg pb-14 lg:pb-16 pt-28 sm:pt-32 lg:min-h-[92vh]">

      <div className="zk-grid pointer-events-none absolute inset-0 -z-20 opacity-80" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_35%,rgba(255,193,7,0.18),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(255,153,0,0.12),transparent_28%)]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-[#FFD56A]/30 blur-[100px] sm:h-96 sm:w-96"
        animate={
          reducedMotion ?
            undefined :
            {
              x: [0, -22, 0],
              y: [0, 14, 0]
            }
        }
        transition={floatTransition(0.3, 12)} />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-10 -z-10 h-64 w-64 rounded-full bg-[#FFB200]/25 blur-[100px] sm:h-80 sm:w-80"
        animate={
          reducedMotion ?
            undefined :
            {
              x: [0, 20, 0],
              y: [0, -14, 0]
            }
        }
        transition={floatTransition(0.8, 14)} />


      <div className="relative mx-auto grid max-w-7xl gap-x-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center xl:gap-x-16">
        <header className="lg:col-start-1 lg:row-start-1">
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 14
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white/75 px-3.5 py-2 text-[11px] font-semibold tracking-wide text-ink shadow-soft backdrop-blur-xl sm:text-xs">

            <span className="relative flex h-2 w-2" aria-hidden="true">
              {!reducedMotion &&
                <span className="absolute inset-0 animate-ping rounded-full bg-[#F5A300]/60" />
              }
              <span className="relative h-2 w-2 rounded-full bg-[#F5A300]" />
            </span>
            Trusted Marketplace Platform
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 18
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.58,
              delay: 0.04,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mt-6 max-w-xl font-display font-bold leading-[1.05] tracking-[-0.05em] text-ink text-[2.3rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.8rem]">
            <span className="block">Launch Your Own</span>
            <span className="zk-gradient-text mt-1 block">
              Marketplace Platform
            </span>
            <span className="mt-4 block max-w-xl text-[0.46em] font-semibold leading-[1.18] tracking-[-0.035em] text-ink-soft sm:mt-5">
              Everything Required. One Connected Ecosystem.
            </span>
          </motion.h1>
        </header>

        <motion.div
          initial={{
            opacity: 0,
            scale: reducedMotion ? 1 : 0.96,
            y: reducedMotion ? 0 : 18
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative mt-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">

          <div className="relative mx-auto aspect-[1/1.08] w-full max-w-[540px] overflow-visible rounded-[2rem] border border-white/70 bg-white/45 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.25)] backdrop-blur-sm sm:rounded-[2.5rem]">
            <div className="pointer-events-none absolute inset-4 rounded-[1.55rem] border border-slate-200/70 sm:rounded-[2rem]" />
            <div className="zk-grid pointer-events-none absolute inset-0 rounded-[2rem] opacity-35 sm:rounded-[2.5rem]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD35E]/35 blur-[70px]" />

            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 h-full w-full"
              viewBox="0 0 560 604"
              fill="none"
              preserveAspectRatio="none">

              <defs>
                <linearGradient
                  id="hero-connector"
                  x1="90"
                  y1="180"
                  x2="480"
                  y2="460"
                  gradientUnits="userSpaceOnUse">

                  <stop stopColor="#FFB000" stopOpacity="0.15" />
                  <stop offset="0.5" stopColor="#FF9800" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#FFD54F" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {[
                'M112 250 C 190 230, 228 260, 280 302',
                'M448 150 C 397 202, 356 246, 280 302',
                'M438 445 C 392 418, 350 370, 280 302'].
                map((path, index) =>
                  <motion.path
                    key={path}
                    d={path}
                    stroke="url(#hero-connector)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeDasharray="5 9"
                    initial={{
                      opacity: 0,
                      pathLength: reducedMotion ? 1 : 0
                    }}
                    animate={
                      reducedMotion ?
                        {
                          opacity: 0.55,
                          pathLength: 1
                        } :
                        {
                          opacity: 0.7,
                          pathLength: 1,
                          strokeDashoffset: [0, -42]
                        }
                    }
                    transition={
                      reducedMotion ?
                        {
                          duration: 0.01
                        } :
                        {
                          opacity: {
                            duration: 0.4,
                            delay: 0.16 + index * 0.04
                          },
                          pathLength: {
                            duration: 0.8,
                            delay: 0.16 + index * 0.04
                          },
                          strokeDashoffset: {
                            duration: 2.4,
                            repeat: Infinity,
                            ease: 'linear'
                          }
                        }
                    } />

                )}
            </svg>

            {PARTICLES.map((particle) =>
              <motion.span
                key={particle.left + particle.top}
                aria-hidden="true"
                className="pointer-events-none absolute z-10 h-1.5 w-1.5 rounded-full bg-[#FFB300] shadow-[0_0_18px_rgba(255,179,0,.8)]"
                style={{
                  left: particle.left,
                  top: particle.top
                }}
                animate={
                  reducedMotion ?
                    undefined :
                    {
                      y: [0, -9, 0],
                      opacity: [0.35, 1, 0.35]
                    }
                }
                transition={floatTransition(particle.delay, 4.6)} />

            )}

            <motion.div
              className="absolute left-[30%] top-[10%] z-20 w-[43%] max-w-[252px] -translate-x-1/2 -translate-y-1/2"
              animate={
                reducedMotion ?
                  undefined :
                  {
                    y: [0, -7, 0],
                    rotate: [-1.2, 1.2, -1.2]
                  }
              }
              transition={floatTransition(0.15, 6.8)}>

              <div className="absolute -inset-8 -z-10 rounded-full bg-[#F6B100]/35 blur-[46px]" />
              <div className="relative rounded-[2rem] border-[7px] border-slate-900 bg-slate-900 p-[2px] shadow-[0_30px_45px_-24px_rgba(15,23,42,0.72)] sm:rounded-[2.35rem] sm:border-[9px]">
                <div className="absolute left-1/2 top-1.5 z-10 h-3.5 w-[42%] -translate-x-1/2 rounded-full bg-slate-900 sm:top-2 sm:h-4" />
                <img
                  src={CUSTOMER_APP_IMAGE}
                  alt="Customer App marketplace interface"
                  className="aspect-[9/18.5] w-full rounded-[1.5rem] object-cover object-top sm:rounded-[1.75rem]" />

              </div>
            </motion.div>

            {APP_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{
                    opacity: 0,
                    scale: reducedMotion ? 1 : 0.9,
                    y: reducedMotion ? 0 : 12
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.2 + index * 0.04,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={
                    reducedMotion ?
                      undefined :
                      {
                        y: -5,
                        scale: 1.02
                      }
                  }
                  className={`absolute z-30 w-[34%] min-w-[104px] ${card.position}`}>

                  <motion.div
                    animate={
                      reducedMotion ?
                        undefined :
                        {
                          y: [0, -6, 0]
                        }
                    }
                    transition={floatTransition(
                      0.8 + index * 0.35,
                      5.4 + index * 0.5
                    )}
                    className="rounded-xl border border-white/80 bg-white/80 p-2.5 shadow-[0_18px_35px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:rounded-2xl sm:p-3.5">

                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg ${card.iconBackground} sm:h-8 sm:w-8`}>

                      <Icon
                        size={15}
                        className={card.iconColor}
                        aria-hidden="true" />

                    </span>
                    <p className="mt-2 font-display text-[10px] font-bold leading-none text-ink sm:text-xs">
                      {card.title}
                    </p>
                    <p className="mt-1 hidden text-[9px] leading-none text-ink-soft sm:block">
                      {card.detail}
                    </p>
                  </motion.div>
                </motion.div>);

            })}

            {MODULE_CHIPS.map((chip, index) => {
              const Icon = chip.icon;
              return (
                <motion.div
                  key={chip.label}
                  initial={{
                    opacity: 0,
                    scale: reducedMotion ? 1 : 0.88
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{
                    duration: 0.36,
                    delay: 0.34 + index * 0.04,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`absolute z-40 ${chip.position}`}>

                  <motion.span
                    animate={
                      reducedMotion ?
                        undefined :
                        {
                          y: [0, -4, 0]
                        }
                    }
                    transition={floatTransition(
                      1.2 + index * 0.18,
                      5.8 + index * 0.25
                    )}
                    className="flex items-center gap-1 rounded-full border border-white/90 bg-white/80 px-1.5 py-1 text-[8px] font-semibold text-ink shadow-[0_10px_24px_-16px_rgba(15,23,42,0.34)] backdrop-blur-xl sm:gap-1.5 sm:px-2.5 sm:py-1.5 sm:text-[10px]">

                    <Icon
                      size={10}
                      className={chip.accent}
                      aria-hidden="true" />

                    <span>{chip.label}</span>
                  </motion.span>
                </motion.div>);

            })}

            <div className="absolute bottom-[8%] left-1/2 z-30 -translate-x-1/2 rounded-full border border-[#FFB000]/20 bg-white/85 px-2.5 py-1 text-[8px] font-semibold text-[#E78C00] shadow-soft backdrop-blur-xl sm:px-3 sm:py-1.5 sm:text-[10px]">
              One connected marketplace
            </div>
          </div>
        </motion.div>

        <div className="mt-5 lg:col-start-1 lg:row-start-2 lg:mt-5">
          <motion.p
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 14
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.52,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="max-w-lg text-[15px] leading-6 text-ink-soft sm:text-[16px]">

            Give customers a polished place to discover and order, empower
            stores to fulfil with confidence, and equip delivery partners for
            every last-mile handoff. Zinokart keeps all three applications
            moving as one branded marketplace—so you can launch faster and grow
            without disconnected experiences.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 14
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.52,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mt-6">

            <AppStoreButtons fullWidthOnMobile />
          </motion.div>

          <motion.ul
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 12
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            aria-label="Platform highlights"
            className="mt-6 flex max-w-xl flex-wrap gap-2">

            {PROOF_POINTS.map((point, index) =>
              <li
                key={point}
                className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-white/80 px-2.5 py-1.5 text-[10px] font-semibold text-ink-soft shadow-soft backdrop-blur sm:px-3 sm:text-xs">

                {index === 3 ?
                  <Globe2Icon
                    size={12}
                    className="text-[#FF9800]"
                    aria-hidden="true" /> :


                  <CheckIcon
                    size={12}
                    className="text-[#F5A300]"
                    aria-hidden="true" />

                }
                {point}
              </li>
            )}
          </motion.ul>
        </div>
      </div>
    </section>);

}