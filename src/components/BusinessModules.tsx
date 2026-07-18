// import { motion } from 'framer-motion';
// import {
//   UtensilsCrossedIcon,
//   ShoppingCartIcon,
//   ShoppingBagIcon,
//   PillIcon,
//   PackageIcon,
//   CarIcon } from
// 'lucide-react';
// import { SectionHeading, FadeUp } from './primitives';
// type ModuleData = {
//   name: string;
//   icon: any;
//   accent: string;
//   bg: string;
//   story: string;
//   highlights: string[];
//   useCase: string;
// };
// const MODULES: ModuleData[] = [
// {
//   name: 'Food Delivery',
//   icon: UtensilsCrossedIcon,
//   accent: '#4F46E5',
//   bg: 'from-brand-indigo/10',
//   story:
//   'Turn local restaurants into a connected on-demand network. Menus, live kitchen availability and delivery timing all stay in sync so hungry customers get exactly what they ordered, fast.',
//   highlights: [
//   'Live menu & availability',
//   'Scheduled & instant orders',
//   'Kitchen-to-doorstep tracking'],

//   useCase:
//   'Launch a city-wide food ordering brand where hundreds of restaurants operate as independent vendors under your marketplace.'
// },
// {
//   name: 'Grocery',
//   icon: ShoppingCartIcon,
//   accent: '#10B981',
//   bg: 'from-brand-emerald/10',
//   story:
//   'Run everyday essentials at scale with catalog-heavy stores, unit pricing, substitutions and large baskets — built for high-frequency repeat buyers.',
//   highlights: [
//   'Bulk catalog & variants',
//   'Smart substitutions',
//   'Slot-based delivery'],

//   useCase:
//   'Power neighbourhood supermarkets and dark stores that fulfil dozens of items per order with reliable delivery windows.'
// },
// {
//   name: 'Shopping',
//   icon: ShoppingBagIcon,
//   accent: '#06B6D4',
//   bg: 'from-brand-cyan/10',
//   story:
//   'Give retailers a full e-commerce storefront inside your marketplace — fashion, electronics, home and more — with rich product pages and multi-vendor checkout.',
//   highlights: [
//   'Rich product pages',
//   'Multi-vendor cart',
//   'Offers & campaigns'],

//   useCase:
//   'Build a regional online mall where independent boutiques and brands sell under a single trusted marketplace identity.'
// },
// {
//   name: 'Pharmacy',
//   icon: PillIcon,
//   accent: '#4F46E5',
//   bg: 'from-brand-indigo/10',
//   story:
//   'Handle sensitive, prescription-aware ordering with careful verification, discreet delivery and precise fulfilment for health and wellness needs.',
//   highlights: [
//   'Prescription handling',
//   'Discreet delivery',
//   'Verified pickup with OTP'],

//   useCase:
//   'Connect local pharmacies for on-demand medicine delivery with the accountability healthcare commerce demands.'
// },
// {
//   name: 'Parcel Delivery',
//   icon: PackageIcon,
//   accent: '#10B981',
//   bg: 'from-brand-emerald/10',
//   story:
//   'Move packages point-to-point with pickup workflows, live tracking and proof of delivery — a full courier experience without a single storefront.',
//   highlights: [
//   'Point-to-point pickup',
//   'Live parcel tracking',
//   'Proof of delivery'],

//   useCase:
//   'Operate an on-demand courier service where anyone can send a package across town and follow it in real time.'
// },
// {
//   name: 'Cab Booking',
//   icon: CarIcon,
//   accent: '#06B6D4',
//   bg: 'from-brand-cyan/10',
//   story:
//   'Extend beyond goods into mobility — match riders with drivers, navigate routes and settle fares through the same connected infrastructure.',
//   highlights: [
//   'Rider–driver matching',
//   'Live ride navigation',
//   'Fare estimates & payments'],

//   useCase:
//   'Add ride-hailing to your marketplace so the same platform that delivers goods also moves people.'
// }];

// function ModuleBlock({ mod, index }: {mod: ModuleData;index: number;}) {
//   const Icon = mod.icon;
//   const reversed = index % 2 === 1;
//   return (
//     <FadeUp>
//       <div className="grid items-center gap-8 rounded-3xl border border-surface-border bg-white p-6 shadow-soft transition-shadow hover:shadow-card sm:p-8 lg:grid-cols-2 lg:gap-12">
//         {/* Illustration */}
//         <div className={reversed ? 'lg:order-2' : ''}>
//           <div
//             className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${mod.bg} to-white`}>

//             <div className="zk-grid absolute inset-0 opacity-40" />
//             <motion.div
//               animate={{
//                 y: [0, -10, 0]
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: 'easeInOut'
//               }}
//               className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-card"
//               style={{
//                 color: mod.accent
//               }}>

//               <Icon size={44} />
//             </motion.div>
//             {/* orbiting dots */}
//             {[0, 1, 2].map((d) =>
//             <motion.span
//               key={d}
//               className="absolute h-2.5 w-2.5 rounded-full"
//               style={{
//                 backgroundColor: mod.accent
//               }}
//               animate={{
//                 rotate: 360
//               }}
//               transition={{
//                 duration: 8 + d * 3,
//                 repeat: Infinity,
//                 ease: 'linear'
//               }} />

//             )}
//           </div>
//         </div>

//         {/* Content */}
//         <div className={reversed ? 'lg:order-1' : ''}>
//           <span
//             className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
//             style={{
//               color: mod.accent,
//               backgroundColor: `${mod.accent}14`
//             }}>

//             <Icon size={14} />
//             {mod.name}
//           </span>
//           <p className="mt-4 text-base leading-relaxed text-ink-soft">
//             {mod.story}
//           </p>
//           <ul className="mt-5 flex flex-wrap gap-2">
//             {mod.highlights.map((h) =>
//             <li
//               key={h}
//               className="rounded-lg border border-surface-border bg-surface-bg px-3 py-1.5 text-xs font-semibold text-ink">

//                 {h}
//               </li>
//             )}
//           </ul>
//           <div className="mt-5 rounded-2xl bg-ink/[0.03] p-4">
//             <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">
//               Real business use case
//             </p>
//             <p className="mt-1.5 text-sm text-ink">{mod.useCase}</p>
//           </div>
//         </div>
//       </div>
//     </FadeUp>);

// }
// export function BusinessModules() {
//   return (
//     <section
//       id="modules"
//       className="relative overflow-hidden bg-surface-bg py-8 sm:py-10">

//       <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-brand-cyan/10 blur-[120px]" />
//       <div className="mx-auto max-w-6xl px-6">
//         <SectionHeading
//           eyebrow="Marketplace Business Modules"
//           title={
//           <>
//               One Platform.{' '}
//               <span className="zk-gradient-text">
//                 Multiple Business Opportunities.
//               </span>
//             </>
//           }
//           description="Zinokart isn't built for a single vertical. The same connected infrastructure powers six distinct marketplace businesses — each a complete product experience in its own right." />

//         <div className="mt-16 space-y-8">
//           {MODULES.map((mod, i) =>
//           <ModuleBlock key={mod.name} mod={mod} index={i} />
//           )}
//         </div>
//       </div>
//     </section>);

// }

import { motion } from 'framer-motion';
import {
  UtensilsCrossedIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  PillIcon,
  PackageIcon,
  CarIcon,
  CheckIcon,
} from 'lucide-react';
import { SectionHeading, FadeUp } from './primitives';

type ModuleData = {
  name: string;
  icon: any;
  accent: string;
  glow: string;
  story: string;
  highlights: string[];
  useCase: string;
};

const MODULES: ModuleData[] = [
  {
    name: 'Food Delivery',
    icon: UtensilsCrossedIcon,
    accent: '#F5A300',
    glow: 'bg-[#FFE8B3]',
    story:
      'Turn local restaurants into a connected on-demand network. Menus, live kitchen availability and delivery timing stay synchronized so customers always receive a fast, reliable experience.',
    highlights: [
      'Live menu & availability',
      'Scheduled & instant orders',
      'Kitchen-to-doorstep tracking',
    ],
    useCase:
      'Launch a city-wide food ordering platform where restaurants operate independently while customers enjoy one seamless marketplace.',
  },
  {
    name: 'Grocery',
    icon: ShoppingCartIcon,
    accent: '#E89A00',
    glow: 'bg-[#FFF0C7]',
    story:
      'Power supermarkets and convenience stores with large catalogs, inventory syncing, substitutions and scheduled deliveries designed for frequent repeat purchases.',
    highlights: [
      'Bulk catalog & variants',
      'Smart substitutions',
      'Scheduled delivery',
    ],
    useCase:
      'Enable supermarkets and dark stores to fulfil hundreds of products with fast and reliable delivery.',
  },
  {
    name: 'Shopping',
    icon: ShoppingBagIcon,
    accent: '#DA9000',
    glow: 'bg-[#FFF5D9]',
    story:
      'Create a multi-vendor shopping destination for fashion, electronics, home décor and more with rich product pages and unified checkout.',
    highlights: [
      'Rich product pages',
      'Multi-vendor cart',
      'Offers & campaigns',
    ],
    useCase:
      'Build an online mall where local brands and retailers sell together under one trusted marketplace.',
  },
  {
    name: 'Pharmacy',
    icon: PillIcon,
    accent: '#C78300',
    glow: 'bg-[#FFF2CF]',
    story:
      'Support medicine ordering with prescription verification, secure fulfilment, OTP confirmation and responsible delivery workflows.',
    highlights: [
      'Prescription handling',
      'Discreet delivery',
      'OTP verification',
    ],
    useCase:
      'Connect pharmacies into one trusted healthcare delivery platform.',
  },
  {
    name: 'Parcel Delivery',
    icon: PackageIcon,
    accent: '#F0AE2B',
    glow: 'bg-[#FFF6DF]',
    story:
      'Move packages across the city with pickup requests, live courier tracking and proof-of-delivery built into every shipment.',
    highlights: [
      'Point-to-point pickup',
      'Live tracking',
      'Proof of delivery',
    ],
    useCase:
      'Launch an on-demand courier service for businesses and individuals.',
  },
  {
    name: 'Cab Booking',
    icon: CarIcon,
    accent: '#B97700',
    glow: 'bg-[#FFF2D5]',
    story:
      'Expand beyond commerce by connecting riders and drivers through one intelligent mobility platform with live navigation and secure payments.',
    highlights: [
      'Driver matching',
      'Live navigation',
      'Fare management',
    ],
    useCase:
      'Offer ride-hailing alongside food, grocery and shopping from one ecosystem.',
  },
];

function ModuleBlock({
  mod,
  index,
}: {
  mod: ModuleData;
  index: number;
}) {
  const Icon = mod.icon;
  const reversed = index % 2 === 1;

  return (
    <FadeUp>
      <div className="grid items-center gap-10 rounded-[28px] border border-[#F3E6CB] bg-[#FFFDFC] p-7 shadow-[0_20px_60px_rgba(15,23,42,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#F5A300]/40 hover:shadow-[0_30px_70px_rgba(245,163,0,.12)] lg:grid-cols-2 lg:gap-14">

        {/* Illustration */}

        <div className={reversed ? 'lg:order-2' : ''}>
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[24px] border border-[#F5E8CA] bg-white">

            <div className="zk-grid absolute inset-0 opacity-30" />

            <div
              className={`absolute inset-0 ${mod.glow} opacity-60 blur-[90px]`}
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-20 flex h-20 w-20 items-center justify-center rounded-3xl border border-white bg-white shadow-[0_15px_35px_rgba(15,23,42,.08)]"
            >
              <Icon
                size={38}
                style={{
                  color: mod.accent,
                }}
              />
            </motion.div>

            {/* Workflow nodes */}
            <div className="absolute left-10 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#F5A300]" />
              <span className="text-[11px] font-semibold text-ink-soft">
                Store
              </span>
            </div>

            <div className="absolute right-10 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#F5A300]" />
              <span className="text-[11px] font-semibold text-ink-soft">
                Customer
              </span>
            </div>

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 300"
            >
              <line
                x1="90"
                y1="150"
                x2="200"
                y2="150"
                stroke="#F5A300"
                strokeDasharray="6 6"
                opacity="0.45"
              />

              <line
                x1="200"
                y1="150"
                x2="310"
                y2="150"
                stroke="#F5A300"
                strokeDasharray="6 6"
                opacity="0.45"
              />
            </svg>
            {/* Floating workflow indicator */}
            {/* <motion.div
              className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 rounded-full border border-[#F3E5C6] bg-white px-4 py-2 shadow-[0_12px_30px_rgba(15,23,42,.08)]"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="text-xs font-semibold text-[#D98A00]">
                Connected Marketplace
              </span>
            </motion.div> */}
          </div>
        </div>

        {/* Content */}

        <div className={reversed ? 'lg:order-1' : ''}>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[#F5E3BC] bg-[#FFF8E8] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]"
            style={{
              color: mod.accent,
            }}
          >
            <Icon size={14} />
            {mod.name}
          </span>

          <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-ink">
            {mod.name}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-ink-soft">
            {mod.story}
          </p>

          {/* Features */}

          <div className="mt-7 flex flex-wrap gap-3">
            {mod.highlights.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-2 rounded-full border border-[#F4E5C5] bg-white px-3 py-2 text-sm font-medium text-ink transition-all duration-300 hover:border-[#F5A300]/40 hover:shadow-[0_10px_20px_rgba(245,163,0,.08)]"
              >
                <CheckIcon
                  size={14}
                  className="text-[#F5A300]"
                />
                {feature}
              </span>
            ))}
          </div>

          {/* Business Use Case */}

          <div className="mt-8 rounded-2xl border border-[#F3E5C6] bg-[#FFFBF3] p-5">

            <div className="flex items-center gap-2">
              <span className="text-lg">💡</span>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D98A00]">
                Perfect For
              </p>
            </div>

            <p className="mt-3 text-[15px] leading-7 text-ink">
              {mod.useCase}
            </p>

          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export function BusinessModules() {
  return (
    <section
      id="modules"
      className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-[#FFECC2]/40 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-[#FFF7E4] blur-[130px]" />

      {/* Grid */}
      <div className="zk-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.04]" />

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Marketplace Business Modules"
          title={
            <>
              One Platform.&nbsp;
              <span className="zk-gradient-text">
                Infinite Business Models.
              </span>
            </>
          }
          description="Zinokart is designed to power multiple business verticals from a single connected ecosystem. Launch food delivery, grocery, shopping, pharmacy, parcel delivery, cab booking and more—all under one powerful marketplace platform."
        />

        <div className="mt-20 space-y-10 lg:space-y-12">
          {MODULES.map((mod, index) => (
            <ModuleBlock
              key={mod.name}
              mod={mod}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}

        <FadeUp delay={0.2}>
          <div className="mt-20 rounded-[32px] border border-[#F3E5C6] bg-gradient-to-br from-[#FFFDF8] to-white p-8 text-center shadow-[0_25px_70px_rgba(15,23,42,.05)] sm:p-12">

            <span className="inline-flex items-center rounded-full border border-[#F5E1B5] bg-[#FFF8E7] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D98A00]">
              Built for Growth
            </span>

            <h3 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
              Start with one business.
              <br />
              Expand into many.
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-ink-soft">
              Every module shares the same customers, stores, delivery
              partners, payments and infrastructure. Launch a single vertical
              today, then scale into a complete multi-service marketplace
              without rebuilding your platform.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              {[
                'Food Delivery',
                'Grocery',
                'Shopping',
                'Pharmacy',
                'Parcel',
                'Cab Booking',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#F3E5C6] bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm"
                >
                  {item}
                </span>
              ))}

            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}