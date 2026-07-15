import { motion } from 'framer-motion';
import {
  SmartphoneIcon,
  LayersIcon,
  BikeIcon,
  StoreIcon,
  TrendingUpIcon,
  Globe2Icon,
  LanguagesIcon,
  MapPinnedIcon,
  ShieldCheckIcon,
  WalletIcon
} from
  'lucide-react';
import { SectionHeading, FadeUp } from './primitives';
const LAYERS = [
  {
    name: "Customer Experience",
    tech: "One Seamless Shopping Journey",
    detail:
      "Customers can browse, order, pay securely and track deliveries from one intuitive mobile application.",
    icon: SmartphoneIcon,
    accent: "#4F46E5",
  },

  {
    name: "Store Operations",
    tech: "Complete Vendor Management",
    detail:
      "Store owners manage products, receive orders, update inventory and monitor business performance with ease.",
    icon: StoreIcon,
    accent: "#06B6D4",
  },

  {
    name: "Delivery Management",
    tech: "Real-Time Fulfillment",
    detail:
      "Delivery partners accept requests, navigate efficiently and complete deliveries with live status updates.",
    icon: BikeIcon,
    accent: "#10B981",
  },

  {
    name: "Marketplace Management",
    tech: "Business Growth",
    detail:
      "Keep customers, vendors, orders and payments connected through one unified marketplace ecosystem.",
    icon: LayersIcon,
    accent: "#4F46E5",
  },

  {
    name: "Business Expansion",
    tech: "Launch More Services",
    detail:
      "Start with one service and easily expand into Food, Grocery, Shopping, Pharmacy, Parcel or Cab.",
    icon: TrendingUpIcon,
    accent: "#06B6D4",
  },
];

const PILLARS = [
  {
    icon: ShieldCheckIcon,
    label: "Secure Marketplace",
  },
  {
    icon: Globe2Icon,
    label: "Multi Country",
  },
  {
    icon: LanguagesIcon,
    label: "Multi Language",
  },
  {
    icon: WalletIcon,
    label: "Multiple Payment Options",
  },
  {
    icon: MapPinnedIcon,
    label: "Live Order Tracking",
  },
];

export function EnterprisePlatform() {
  return (
    <section id="technology" className="relative py-8 sm:py-10">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-brand-indigo/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Enterprise Platform"
          title={
            <>
              Everything your marketplace needs ,{' '}
              <span className="zk-gradient-text">
                Built into one platform.
              </span>
            </>
          }
          description="From onboarding vendors and managing customers to processing orders,
payments and deliveries, Zinokart provides every essential capability
required to operate and grow a successful multi-vendor marketplace." />


        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Layered architecture graphic */}
          <div className="relative mx-auto w-full max-w-md space-y-3">
            {LAYERS.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.name}
                  initial={{
                    opacity: 0,
                    x: -30,
                    scale: 0.96
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    scale: 1
                  }}
                  viewport={{
                    once: true,
                    margin: '-40px'
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{
                    scale: 1.02
                  }}
                  className="relative flex items-center gap-4 rounded-2xl border border-surface-border bg-white p-4 shadow-soft"
                  style={{
                    marginLeft: `${i * 14}px`,
                    marginRight: `${(LAYERS.length - 1 - i) * 4}px`
                  }}>

                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{
                      backgroundColor: layer.accent
                    }}>

                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">
                      {layer.name}
                    </p>
                    <p
                      className="text-xs font-semibold"
                      style={{
                        color: layer.accent
                      }}>

                      {layer.tech}
                    </p>
                  </div>
                </motion.div>);

            })}
          </div>

          {/* Layer details */}
          <div className="space-y-4">
            {LAYERS.map((layer, i) =>
              <FadeUp key={layer.name} delay={i * 0.06}>
                <div className="border-l-2 border-surface-border pl-4">
                  <p className="font-display text-sm font-bold text-ink">
                    {layer.name}
                    <span className="ml-2 text-xs font-medium text-ink-soft">
                      {layer.tech}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{layer.detail}</p>
                </div>
              </FadeUp>
            )}
            <div className="flex flex-wrap gap-3 pt-2">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-4 py-2 text-xs font-semibold text-ink shadow-soft">

                    <Icon size={15} className="text-brand-cyan" />
                    {p.label}
                  </span>);

              })}
            </div>
          </div>
        </div>
      </div>
    </section>);

}