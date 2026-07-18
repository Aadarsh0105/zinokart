// import { motion } from 'framer-motion';
// import {
//   SmartphoneIcon,
//   StoreIcon,
//   BikeIcon,
//   PackageCheckIcon,
//   ArrowRightIcon } from
// 'lucide-react';
// import { SectionHeading, FadeUp } from './primitives';
// type Stage = {
//   step: string;
//   title: string;
//   icon: any;
//   description: string;
//   accent: string;
// };
// const STAGES: Stage[] = [
// {
//   step: '01',
//   title: 'Customer',
//   icon: SmartphoneIcon,
//   description:
//   'A customer discovers a store, builds their basket and checks out in the branded Customer App — choosing their payment method and confirming the order.',
//   accent: '#4F46E5'
// },
// {
//   step: '02',
//   title: 'Store',
//   icon: StoreIcon,
//   description:
//   'The store is notified instantly in the Store App, accepts the order, prepares the items and marks it ready for pickup — all synced to the platform.',
//   accent: '#06B6D4'
// },
// {
//   step: '03',
//   title: 'Delivery Partner',
//   icon: BikeIcon,
//   description:
//   'A delivery partner accepts the job, navigates to the store, verifies pickup, and delivers with OTP confirmation and proof of delivery.',
//   accent: '#10B981'
// },
// {
//   step: '04',
//   title: 'Customer',
//   icon: PackageCheckIcon,
//   description:
//   'The customer tracks every step live, receives the order, then rates and reviews — closing the loop and feeding insight back into the marketplace.',
//   accent: '#4F46E5'
// }];

// export function WorkflowSection() {
//   return (
//     <section className="relative overflow-hidden bg-surface-bg py-8 sm:py-10">
//       <div className="zk-grid pointer-events-none absolute inset-0 -z-10 opacity-50" />
//       <div className="mx-auto max-w-6xl px-6">
//         <SectionHeading
//           eyebrow="Marketplace Workflow"
//           title={
//           <>
//               One order.{' '}
//               <span className="zk-gradient-text">
//                 A perfectly orchestrated loop.
//               </span>
//             </>
//           }
//           description="Follow a single order as it flows through the connected marketplace infrastructure — from the customer's tap to the confirmed delivery and back again." />
        

//         <div className="mt-16 grid gap-6 lg:grid-cols-4">
//           {STAGES.map((stage, i) => {
//             const Icon = stage.icon;
//             return (
//               <FadeUp key={stage.step} delay={i * 0.1} className="relative">
//                 <div className="relative h-full rounded-3xl border border-surface-border bg-white p-6 shadow-soft">
//                   <span className="font-display text-sm font-bold text-ink-soft/60">
//                     {stage.step}
//                   </span>
//                   <motion.span
//                     animate={{
//                       y: [0, -6, 0]
//                     }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: 'easeInOut',
//                       delay: i * 0.3
//                     }}
//                     className="mt-3 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-glow"
//                     style={{
//                       backgroundColor: stage.accent
//                     }}>
                    
//                     <Icon size={26} />
//                   </motion.span>
//                   <h3 className="mt-4 font-display text-lg font-bold text-ink">
//                     {stage.title}
//                   </h3>
//                   <p className="mt-2 text-sm leading-relaxed text-ink-soft">
//                     {stage.description}
//                   </p>
//                 </div>

//                 {/* Connector arrow */}
//                 {i < STAGES.length - 1 &&
//                 <div className="absolute left-1/2 top-full z-10 my-2 flex -translate-x-1/2 justify-center lg:left-full lg:top-1/2 lg:my-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
//                     <motion.span
//                     animate={{
//                       x: [0, 5, 0],
//                       y: [0, 0, 0]
//                     }}
//                     transition={{
//                       duration: 1.6,
//                       repeat: Infinity,
//                       ease: 'easeInOut',
//                       delay: i * 0.2
//                     }}
//                     className="flex h-8 w-8 items-center justify-center rounded-full border border-surface-border bg-white text-brand-indigo shadow-soft">
                    
//                       <ArrowRightIcon
//                       size={16}
//                       className="rotate-90 lg:rotate-0" />
                    
//                     </motion.span>
//                   </div>
//                 }
//               </FadeUp>);

//           })}
//         </div>

//         <FadeUp delay={0.3}>
//           <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-ink-soft">
//             Every stage updates the same live order across all three apps — no
//             polling, no manual handoffs, just one continuously synchronized
//             marketplace loop.
//           </p>
//         </FadeUp>
//       </div>
//     </section>);

// }
import { motion } from 'framer-motion';
import {
  SmartphoneIcon,
  StoreIcon,
  BikeIcon,
  PackageCheckIcon,
  ArrowRightIcon,
} from 'lucide-react';
import { SectionHeading, FadeUp } from './primitives';

type Stage = {
  step: string;
  title: string;
  icon: any;
  description: string;
  accent: string;
};

const STAGES: Stage[] = [
  {
    step: '01',
    title: 'Customer',
    icon: SmartphoneIcon,
    description:
      'A customer discovers a store, builds their basket and checks out through the Customer App using their preferred payment method.',
    accent: '#F5A300',
  },
  {
    step: '02',
    title: 'Store',
    icon: StoreIcon,
    description:
      'The Store App instantly receives the order, confirms availability, prepares the items and marks everything ready for pickup.',
    accent: '#E89A00',
  },
  {
    step: '03',
    title: 'Delivery Partner',
    icon: BikeIcon,
    description:
      'A delivery partner accepts the request, navigates to the store, verifies pickup and completes the delivery securely.',
    accent: '#D99000',
  },
  {
    step: '04',
    title: 'Customer',
    icon: PackageCheckIcon,
    description:
      'The customer tracks every step live, confirms delivery with OTP and leaves ratings that improve future marketplace experiences.',
    accent: '#C78300',
  },
];

export function WorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFFEFC] py-12 sm:py-16 lg:py-20">
      {/* Background */}

      <div className="pointer-events-none absolute left-0 top-32 -z-10 h-[360px] w-[360px] rounded-full bg-[#FFECC2]/35 blur-[130px]" />

      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[320px] w-[320px] rounded-full bg-[#FFF7E7] blur-[120px]" />

      <div className="zk-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.04]" />

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Marketplace Workflow"
          title={
            <>
              One Order.&nbsp;
              <span className="zk-gradient-text">
                One Connected Marketplace.
              </span>
            </>
          }
          description="Every order moves seamlessly between customers, stores and delivery partners through one synchronized platform, ensuring complete visibility from checkout to successful delivery."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;

            return (
              <FadeUp
                key={stage.step}
                delay={i * 0.08}
                className="relative"
              >
                <div className="group relative flex h-full flex-col rounded-[28px] border border-[#F3E5C6] bg-[#FFFDFC] p-7 shadow-[0_20px_55px_rgba(15,23,42,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#F5A300]/40 hover:shadow-[0_30px_70px_rgba(245,163,0,.12)]">

                  {/* Glow */}

                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#FFE9B3] opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-70" />

                  {/* Step */}

                  <span className="text-sm font-bold tracking-[0.18em] text-[#D98A00]">
                    STEP {stage.step}
                  </span>

                  {/* Icon */}

                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3,
                    }}
                    className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F5E5BF] bg-[#FFF4DA]"
                  >
                    <Icon
                      size={30}
                      style={{
                        color: stage.accent,
                      }}
                    />
                  </motion.div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                    {stage.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-ink-soft">
                    {stage.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#F5A300] to-[#FFD56A] transition-all duration-300 group-hover:w-20" />
                  </div>
                </div>

                {/* Connector */}

                {i < STAGES.length - 1 && (
                  <div className="absolute left-1/2 top-full z-10 my-3 flex -translate-x-1/2 justify-center lg:left-full lg:top-1/2 lg:my-0 lg:-translate-x-1/2 lg:-translate-y-1/2">

                    <motion.div
                      animate={{
                        x: [0, 6, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F3E5C6] bg-white shadow-[0_10px_25px_rgba(15,23,42,.06)]"
                    >
                      <ArrowRightIcon
                        size={18}
                        className="rotate-90 text-[#F5A300] lg:rotate-0"
                      />
                    </motion.div>

                  </div>
                )}
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-20 rounded-[30px] border border-[#F3E5C6] bg-gradient-to-br from-[#FFFDF8] to-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,.05)] sm:p-12">

            <span className="inline-flex rounded-full border border-[#F5E3BC] bg-[#FFF8E8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D98A00]">
              Live Synchronization
            </span>

            <h3 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
              Every Action Updates Everyone.
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-ink-soft">
              Customers, vendors, delivery partners and administrators all
              operate from the same real-time source of truth. Every order
              status, payment, notification and delivery update is instantly
              synchronized across the entire Zinokart ecosystem.
            </p>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}