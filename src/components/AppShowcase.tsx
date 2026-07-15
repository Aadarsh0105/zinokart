import { motion } from 'framer-motion';
import { CheckCircle2Icon } from 'lucide-react';
import { SectionHeading, FadeUp } from './primitives';
type AppData = {
  name: string;
  tagline: string;
  description: string;
  workflow: string;
  capabilities: string[];
  businessValue: string;
  image: string;
  accent: string;
  glowColor: string;
};
const APPS: AppData[] = [
{
  name: 'Customer App',
  tagline: 'A shopping experience your customers will love',
  description:
  'Give shoppers a fast, delightful storefront to discover stores and products across every business category — with everything they need to browse, buy and track in one branded app.',
  workflow:
  'Customers browse categories, search products, save favourites to a wishlist, apply offers, pay from a built-in wallet or their preferred method, then follow every order live from checkout to doorstep.',
  capabilities: [
  'Product discovery & smart search',
  'Categories & wishlist',
  'In-app wallet & offers',
  'Frictionless checkout',
  'Real-time order tracking',
  'Multiple payment methods',
  'Order history & re-order',
  'Ratings, reviews & support',
  'Rich push notifications'],

  businessValue:
  'Higher conversion and repeat orders through a premium, personalized experience that keeps customers coming back.',
  image: "/249448bf-89c2-410d-a97e-651de9a60f59.jpg",

  accent: 'text-brand-indigo',
  glowColor: 'bg-brand-indigo/25'
},
{
  name: 'Store App',
  tagline: 'Everything a vendor needs to run their business',
  description:
  'Empower every store owner on your marketplace with a complete toolkit to manage their catalog, orders and earnings — right from their phone, without ever touching a back office.',
  workflow:
  'Store owners set business hours and availability, publish and organize their catalog, manage inventory, accept and fulfil incoming orders, launch discounts, and track earnings with clear analytics and reports.',
  capabilities: [
  'Store & profile management',
  'Product catalog & inventory',
  'Order management & fulfilment',
  'Availability & business hours',
  'Earnings & payouts',
  'Analytics & reports',
  'Discounts & promotions',
  'Low-stock notifications'],

  businessValue:
  'Self-serve vendors mean you scale supply without operational overhead — every store manages itself.',
  image: "/9eb2589f-f842-49e7-9b60-9d7f7025a3dc.jpg",

  accent: 'text-brand-cyan',
  glowColor: 'bg-brand-cyan/25'
},
{
  name: 'Delivery App',
  tagline: 'A precise, accountable last-mile experience',
  description:
  'Equip your delivery fleet with a purpose-built app that guides every partner from accepting a job to confirmed delivery — with navigation, proof and OTP verification built in.',
  workflow:
  'Delivery partners accept nearby jobs, follow the pickup workflow, navigate turn-by-turn, update live status, verify handover with OTP, capture proof of delivery, and watch their earnings grow in real time.',
  capabilities: [
  'Accept & assign deliveries',
  'Guided pickup workflow',
  'Turn-by-turn navigation',
  'Live delivery tracking',
  'OTP verification & proof of delivery',
  'Earnings & delivery history',
  'Real-time status updates',
  'Instant notifications'],

  businessValue:
  'Reliable, verifiable deliveries build trust with customers and reduce disputes across your marketplace.',
  image: "/db7bb5ba-c818-44af-b6d7-8f4381aeaaba.jpg",

  accent: 'text-brand-emerald',
  glowColor: 'bg-brand-emerald/25'
}];

function PhoneFrame({
  image,
  name,
  glowColor




}: {image: string;name: string;glowColor: string;}) {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div
        className={`absolute -inset-8 -z-10 rounded-full ${glowColor} blur-[80px]`} />
      
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          rotate: -3
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotate: 0
        }}
        viewport={{
          once: true,
          margin: '-80px'
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}
        whileHover={{
          y: -10
        }}
        className="relative rounded-[2.5rem] border-[10px] border-ink bg-ink p-0 shadow-card">
        
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
        <img
          src={image}
          alt={`${name} interface preview`}
          className="h-auto w-full rounded-[1.8rem] object-cover"
          loading="lazy" />
        
      </motion.div>
    </div>);

}
function AppBlock({ app, index }: {app: AppData;index: number;}) {
  const reversed = index % 2 === 1;
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reversed ? 'lg:order-2' : ''}>
        <PhoneFrame
          image={app.image}
          name={app.name}
          glowColor={app.glowColor} />
        
      </div>
      <FadeUp className={reversed ? 'lg:order-1' : ''}>
        <span
          className={`font-display text-sm font-bold uppercase tracking-widest ${app.accent}`}>
          
          {app.name}
        </span>
        <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
          {app.tagline}
        </h3>
        <p className="mt-4 text-ink-soft">{app.description}</p>
        <div className="mt-5 rounded-2xl border border-surface-border bg-white p-4 shadow-soft">
          <p className="text-sm font-semibold text-ink">How it works</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
            {app.workflow}
          </p>
        </div>
        <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {app.capabilities.map((cap) =>
          <li key={cap} className="flex items-start gap-2 text-sm text-ink">
              <CheckCircle2Icon
              size={16}
              className={`mt-0.5 shrink-0 ${app.accent}`} />
            
              {cap}
            </li>
          )}
        </ul>
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-ink/[0.03] p-4">
          <span className="mt-0.5 h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-brand-indigo to-brand-cyan" />
          <p className="text-sm font-medium text-ink">
            <span className="text-ink-soft">Business value — </span>
            {app.businessValue}
          </p>
        </div>
      </FadeUp>
    </div>);

}
export function AppShowcase() {
  return (
    <section id="applications" className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Three Dedicated Applications"
          title={
          <>
              Three apps.{' '}
              <span className="zk-gradient-text">One seamless flow.</span>
            </>
          }
          description="Every participant in your marketplace gets a purpose-built Flutter application designed around exactly what they need to do — nothing more, nothing less." />
        
        <div className="mt-20 space-y-24 sm:space-y-32">
          {APPS.map((app, i) =>
          <AppBlock key={app.name} app={app} index={i} />
          )}
        </div>
      </div>
    </section>);

}