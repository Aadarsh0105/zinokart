import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { SectionHeading } from './primitives';
type QA = {
  q: string;
  a: string;
};
const FAQS: QA[] = [
{
  q: 'What exactly is Zinokart?',
  a: 'Zinokart is a complete white-label multi-vendor marketplace platform. It gives you three dedicated Flutter mobile applications — a Customer App, a Store App and a Delivery App — all connected through one scalable marketplace infrastructure that keeps every operation synchronized in real time.'
},
{
  q: 'Is Zinokart really white-label?',
  a: 'Yes. Every app can be shipped entirely under your own brand — your name, logo, colors and identity. Your customers, vendors and delivery partners experience your marketplace, not ours.'
},
{
  q: 'Do I receive the complete source code?',
  a: 'You receive the full source code for all three applications and the marketplace infrastructure that powers them. You own the codebase and can customize, extend and evolve it however your business requires.'
},
{
  q: 'Which business categories can I launch?',
  a: 'Zinokart supports six business modules out of the box: Food Delivery, Grocery, Shopping, Pharmacy, Parcel Delivery and Cab Booking. You can run one module or several from the same connected platform.'
},
{
  q: 'How do the three apps work together?',
  a: 'They are three faces of one platform. When a customer places an order, the store is notified, a delivery partner is dispatched, payments settle, and everyone tracks the same live status — all through a single synchronized marketplace infrastructure.'
},
{
  q: 'What technology is Zinokart built with?',
  a: 'The apps are built with Flutter for native iOS and Android performance. The backend uses Laravel with a clean REST API layer, MySQL for structured data, and Firebase for real-time sync and push notifications — deployed on scalable cloud infrastructure.'
},
{
  q: 'Can I customize the platform?',
  a: 'Absolutely. Thanks to a clean, well-documented codebase you can adapt branding, flows, modules and features to match your exact business model without fighting the system.'
},
{
  q: 'Does Zinokart support multiple languages and currencies?',
  a: 'Yes. The platform is built for localization with multi-language and multi-currency support, so you can launch across different countries and regions with confidence.'
},
{
  q: 'How are payments handled?',
  a: 'The platform supports multiple payment methods, an in-app wallet, secure transactions and split payouts to vendors — giving customers flexibility while keeping settlements clean for every party.'
},
{
  q: 'Is the platform ready to scale?',
  a: 'Yes. Zinokart is engineered on a modern, scalable architecture with efficient data sync and cloud deployment, so it grows with you from your first city to nationwide operations.'
},
{
  q: 'How do you ensure secure and verified deliveries?',
  a: 'The Delivery App includes OTP verification and proof of delivery, alongside secure authentication and role-based access across the platform — reducing disputes and building trust with your customers.'
},
{
  q: 'Do vendors manage their own stores?',
  a: 'Yes. Store owners run their entire business from the Store App — catalog, inventory, orders, availability, business hours, discounts, earnings and analytics — so you scale supply without operational overhead.'
},
{
  q: 'Will I receive updates and documentation?',
  a: 'Zinokart ships with rich documentation and regular updates that keep your platform current, secure and aligned with modern standards, so your team stays productive.'
},
{
  q: 'Can developers extend the platform via APIs?',
  a: 'Yes. A documented REST API layer with extensible endpoints makes it straightforward to add integrations and build on top of the platform.'
},
{
  q: 'Is Zinokart suitable for enterprises?',
  a: 'Yes. From multi-vendor management and analytics to security and performance, Zinokart is designed for real operations at real volume — enterprise-ready from the start.'
}];

function FaqItem({
  item,
  isOpen,
  onToggle




}: {item: QA;isOpen: boolean;onToggle: () => void;}) {
  return (
    <div className="border-b border-surface-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left">
        
        <span className="font-display text-base font-semibold text-ink sm:text-lg">
          {item.q}
        </span>
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0
          }}
          transition={{
            duration: 0.25
          }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-brand-indigo text-white' : 'bg-surface-bg text-ink'}`}>
          
          <PlusIcon size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="overflow-hidden">
          
            <p className="pb-6 pr-12 text-sm leading-relaxed text-ink-soft sm:text-base">
              {item.a}
            </p>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title={
          <>
              Everything you need{' '}
              <span className="zk-gradient-text">to feel confident.</span>
            </>
          } />
        
        <div className="mt-12">
          {FAQS.map((item, i) =>
          <FaqItem
            key={item.q}
            item={item}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? null : i)} />

          )}
        </div>
      </div>
    </section>);

}