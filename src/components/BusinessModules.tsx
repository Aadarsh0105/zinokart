import { motion } from 'framer-motion';
import {
  UtensilsCrossedIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  PillIcon,
  PackageIcon,
  CarIcon } from
'lucide-react';
import { SectionHeading, FadeUp } from './primitives';
type ModuleData = {
  name: string;
  icon: any;
  accent: string;
  bg: string;
  story: string;
  highlights: string[];
  useCase: string;
};
const MODULES: ModuleData[] = [
{
  name: 'Food Delivery',
  icon: UtensilsCrossedIcon,
  accent: '#4F46E5',
  bg: 'from-brand-indigo/10',
  story:
  'Turn local restaurants into a connected on-demand network. Menus, live kitchen availability and delivery timing all stay in sync so hungry customers get exactly what they ordered, fast.',
  highlights: [
  'Live menu & availability',
  'Scheduled & instant orders',
  'Kitchen-to-doorstep tracking'],

  useCase:
  'Launch a city-wide food ordering brand where hundreds of restaurants operate as independent vendors under your marketplace.'
},
{
  name: 'Grocery',
  icon: ShoppingCartIcon,
  accent: '#10B981',
  bg: 'from-brand-emerald/10',
  story:
  'Run everyday essentials at scale with catalog-heavy stores, unit pricing, substitutions and large baskets — built for high-frequency repeat buyers.',
  highlights: [
  'Bulk catalog & variants',
  'Smart substitutions',
  'Slot-based delivery'],

  useCase:
  'Power neighbourhood supermarkets and dark stores that fulfil dozens of items per order with reliable delivery windows.'
},
{
  name: 'Shopping',
  icon: ShoppingBagIcon,
  accent: '#06B6D4',
  bg: 'from-brand-cyan/10',
  story:
  'Give retailers a full e-commerce storefront inside your marketplace — fashion, electronics, home and more — with rich product pages and multi-vendor checkout.',
  highlights: [
  'Rich product pages',
  'Multi-vendor cart',
  'Offers & campaigns'],

  useCase:
  'Build a regional online mall where independent boutiques and brands sell under a single trusted marketplace identity.'
},
{
  name: 'Pharmacy',
  icon: PillIcon,
  accent: '#4F46E5',
  bg: 'from-brand-indigo/10',
  story:
  'Handle sensitive, prescription-aware ordering with careful verification, discreet delivery and precise fulfilment for health and wellness needs.',
  highlights: [
  'Prescription handling',
  'Discreet delivery',
  'Verified pickup with OTP'],

  useCase:
  'Connect local pharmacies for on-demand medicine delivery with the accountability healthcare commerce demands.'
},
{
  name: 'Parcel Delivery',
  icon: PackageIcon,
  accent: '#10B981',
  bg: 'from-brand-emerald/10',
  story:
  'Move packages point-to-point with pickup workflows, live tracking and proof of delivery — a full courier experience without a single storefront.',
  highlights: [
  'Point-to-point pickup',
  'Live parcel tracking',
  'Proof of delivery'],

  useCase:
  'Operate an on-demand courier service where anyone can send a package across town and follow it in real time.'
},
{
  name: 'Cab Booking',
  icon: CarIcon,
  accent: '#06B6D4',
  bg: 'from-brand-cyan/10',
  story:
  'Extend beyond goods into mobility — match riders with drivers, navigate routes and settle fares through the same connected infrastructure.',
  highlights: [
  'Rider–driver matching',
  'Live ride navigation',
  'Fare estimates & payments'],

  useCase:
  'Add ride-hailing to your marketplace so the same platform that delivers goods also moves people.'
}];

function ModuleBlock({ mod, index }: {mod: ModuleData;index: number;}) {
  const Icon = mod.icon;
  const reversed = index % 2 === 1;
  return (
    <FadeUp>
      <div className="grid items-center gap-8 rounded-3xl border border-surface-border bg-white p-6 shadow-soft transition-shadow hover:shadow-card sm:p-8 lg:grid-cols-2 lg:gap-12">
        {/* Illustration */}
        <div className={reversed ? 'lg:order-2' : ''}>
          <div
            className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${mod.bg} to-white`}>
            
            <div className="zk-grid absolute inset-0 opacity-40" />
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-card"
              style={{
                color: mod.accent
              }}>
              
              <Icon size={44} />
            </motion.div>
            {/* orbiting dots */}
            {[0, 1, 2].map((d) =>
            <motion.span
              key={d}
              className="absolute h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: mod.accent
              }}
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 8 + d * 3,
                repeat: Infinity,
                ease: 'linear'
              }} />

            )}
          </div>
        </div>

        {/* Content */}
        <div className={reversed ? 'lg:order-1' : ''}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
            style={{
              color: mod.accent,
              backgroundColor: `${mod.accent}14`
            }}>
            
            <Icon size={14} />
            {mod.name}
          </span>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            {mod.story}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {mod.highlights.map((h) =>
            <li
              key={h}
              className="rounded-lg border border-surface-border bg-surface-bg px-3 py-1.5 text-xs font-semibold text-ink">
              
                {h}
              </li>
            )}
          </ul>
          <div className="mt-5 rounded-2xl bg-ink/[0.03] p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">
              Real business use case
            </p>
            <p className="mt-1.5 text-sm text-ink">{mod.useCase}</p>
          </div>
        </div>
      </div>
    </FadeUp>);

}
export function BusinessModules() {
  return (
    <section
      id="modules"
      className="relative overflow-hidden bg-surface-bg py-8 sm:py-10">
      
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-brand-cyan/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Marketplace Business Modules"
          title={
          <>
              One Platform.{' '}
              <span className="zk-gradient-text">
                Multiple Business Opportunities.
              </span>
            </>
          }
          description="Zinokart isn't built for a single vertical. The same connected infrastructure powers six distinct marketplace businesses — each a complete product experience in its own right." />
        
        <div className="mt-16 space-y-8">
          {MODULES.map((mod, i) =>
          <ModuleBlock key={mod.name} mod={mod} index={i} />
          )}
        </div>
      </div>
    </section>);

}