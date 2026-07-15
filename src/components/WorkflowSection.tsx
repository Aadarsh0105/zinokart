import { motion } from 'framer-motion';
import {
  SmartphoneIcon,
  StoreIcon,
  BikeIcon,
  PackageCheckIcon,
  ArrowRightIcon } from
'lucide-react';
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
  'A customer discovers a store, builds their basket and checks out in the branded Customer App — choosing their payment method and confirming the order.',
  accent: '#4F46E5'
},
{
  step: '02',
  title: 'Store',
  icon: StoreIcon,
  description:
  'The store is notified instantly in the Store App, accepts the order, prepares the items and marks it ready for pickup — all synced to the platform.',
  accent: '#06B6D4'
},
{
  step: '03',
  title: 'Delivery Partner',
  icon: BikeIcon,
  description:
  'A delivery partner accepts the job, navigates to the store, verifies pickup, and delivers with OTP confirmation and proof of delivery.',
  accent: '#10B981'
},
{
  step: '04',
  title: 'Customer',
  icon: PackageCheckIcon,
  description:
  'The customer tracks every step live, receives the order, then rates and reviews — closing the loop and feeding insight back into the marketplace.',
  accent: '#4F46E5'
}];

export function WorkflowSection() {
  return (
    <section className="relative overflow-hidden bg-surface-bg py-8 sm:py-10">
      <div className="zk-grid pointer-events-none absolute inset-0 -z-10 opacity-50" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Marketplace Workflow"
          title={
          <>
              One order.{' '}
              <span className="zk-gradient-text">
                A perfectly orchestrated loop.
              </span>
            </>
          }
          description="Follow a single order as it flows through the connected marketplace infrastructure — from the customer's tap to the confirmed delivery and back again." />
        

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <FadeUp key={stage.step} delay={i * 0.1} className="relative">
                <div className="relative h-full rounded-3xl border border-surface-border bg-white p-6 shadow-soft">
                  <span className="font-display text-sm font-bold text-ink-soft/60">
                    {stage.step}
                  </span>
                  <motion.span
                    animate={{
                      y: [0, -6, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3
                    }}
                    className="mt-3 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-glow"
                    style={{
                      backgroundColor: stage.accent
                    }}>
                    
                    <Icon size={26} />
                  </motion.span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {stage.description}
                  </p>
                </div>

                {/* Connector arrow */}
                {i < STAGES.length - 1 &&
                <div className="absolute left-1/2 top-full z-10 my-2 flex -translate-x-1/2 justify-center lg:left-full lg:top-1/2 lg:my-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
                    <motion.span
                    animate={{
                      x: [0, 5, 0],
                      y: [0, 0, 0]
                    }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.2
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-surface-border bg-white text-brand-indigo shadow-soft">
                    
                      <ArrowRightIcon
                      size={16}
                      className="rotate-90 lg:rotate-0" />
                    
                    </motion.span>
                  </div>
                }
              </FadeUp>);

          })}
        </div>

        <FadeUp delay={0.3}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-ink-soft">
            Every stage updates the same live order across all three apps — no
            polling, no manual handoffs, just one continuously synchronized
            marketplace loop.
          </p>
        </FadeUp>
      </div>
    </section>);

}