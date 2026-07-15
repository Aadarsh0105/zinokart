import { motion } from 'framer-motion';
import {
  SmartphoneIcon,
  StoreIcon,
  BikeIcon,
  RefreshCwIcon,
  BellIcon,
  CreditCardIcon,
  MapPinIcon,
  MessageSquareIcon } from
'lucide-react';
import { SectionHeading, FadeUp } from './primitives';
const NODES = [
{
  title: 'Customer App',
  icon: SmartphoneIcon,
  angle: -90
},
{
  title: 'Store App',
  icon: StoreIcon,
  angle: 30
},
{
  title: 'Delivery App',
  icon: BikeIcon,
  angle: 150
}];

const SYNC_ITEMS = [
{
  icon: RefreshCwIcon,
  label: 'Orders'
},
{
  icon: CreditCardIcon,
  label: 'Payments'
},
{
  icon: BellIcon,
  label: 'Notifications'
},
{
  icon: MapPinIcon,
  label: 'Tracking'
},
{
  icon: MessageSquareIcon,
  label: 'Communication'
}];

export function EcosystemSection() {
  const radius = 150;
  const center = 200;
  return (
    <section id="ecosystem" className="relative overflow-hidden py-8 sm:py-10">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-brand-indigo/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Marketplace Ecosystem"
          title={
          <>
              One Platform. Three Dedicated Applications.{' '}
              <span className="zk-gradient-text">Unlimited Possibilities.</span>
            </>
          }
          description="The Customer App, Store App and Delivery App aren't separate products — they are three faces of one connected marketplace infrastructure. Every order placed, payment processed, notification sent and location tracked flows through a single synchronized platform, keeping every participant in perfect sync in real time." />
        

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Architecture diagram */}
          <FadeUp>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <svg viewBox="0 0 400 400" className="h-full w-full">
                <defs>
                  <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>

                <circle cx="200" cy="200" r="180" fill="url(#coreGlow)" />

                {/* Connectors + moving dots */}
                {NODES.map((node, i) => {
                  const rad = node.angle * Math.PI / 180;
                  const x = center + radius * Math.cos(rad);
                  const y = center + radius * Math.sin(rad);
                  return (
                    <g key={node.title}>
                      <line
                        x1={center}
                        y1={center}
                        x2={x}
                        y2={y}
                        stroke="url(#flow)"
                        strokeWidth="2"
                        strokeOpacity="0.4" />
                      
                      <motion.circle
                        r="4"
                        fill="#06B6D4"
                        animate={{
                          cx: [center, x, center],
                          cy: [center, y, center]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.7,
                          ease: 'easeInOut'
                        }} />
                      
                    </g>);

                })}

                {/* Center core */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="52"
                  fill="white"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{
                    transformOrigin: 'center'
                  }} />
                
              </svg>

              {/* Center label */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                <span className="font-display text-xs font-bold leading-tight text-brand-indigo">
                  Marketplace
                  <br />
                  Infrastructure
                </span>
              </div>

              {/* Node cards */}
              {NODES.map((node) => {
                const Icon = node.icon;
                const rad = node.angle * Math.PI / 180;
                const left = 40 + radius / 4 * Math.cos(rad);
                const top = 45 + radius / 4 * Math.sin(rad);
                return (
                  <motion.div
                    key={node.title}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`
                    }}
                    animate={{
                      y: [0, -6, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}>
                    
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-surface-border bg-white text-brand-indigo shadow-card">
                      <Icon size={22} />
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-ink shadow-soft">
                      {node.title}
                    </span>
                  </motion.div>);

              })}
            </div>
          </FadeUp>

          {/* Sync explanation */}
          <div className="space-y-4">
            <FadeUp>
              <p className="text-lg font-semibold text-ink">
                One synchronized source of truth for your entire marketplace.
              </p>
              <p className="mt-2 text-ink-soft">
                When a customer places an order, the store is notified
                instantly, the delivery partner is dispatched, payments settle
                across all parties, and everyone tracks the same live status. No
                disconnected systems, no manual reconciliation.
              </p>
            </FadeUp>
            <div className="grid gap-3 sm:grid-cols-2">
              {SYNC_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <FadeUp key={item.label} delay={i * 0.06}>
                    <div className="flex items-center gap-3 rounded-xl border border-surface-border bg-white p-3.5 shadow-soft transition-transform hover:-translate-y-0.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo">
                        <Icon size={18} />
                      </span>
                      <span className="text-sm font-semibold text-ink">
                        {item.label} in sync
                      </span>
                    </div>
                  </FadeUp>);

              })}
            </div>
          </div>
        </div>
      </div>
    </section>);

}