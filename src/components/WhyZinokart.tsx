import {
  PaletteIcon,
  CodeIcon,
  TrendingUpIcon,
  SmartphoneIcon,
  ZapIcon,
  SparklesIcon,
  RefreshCwIcon,
  SlidersIcon,
  BuildingIcon,
  BookOpenIcon
} from
  'lucide-react';
import { SectionHeading, FadeUp, Counter } from './primitives';
type Advantage = {
  title: string;
  icon: any;
  description: string;
};
const ADVANTAGES: Advantage[] = [
  {
    title: "Multi-Vendor Marketplace",
    icon: BuildingIcon,
    description:
      "Allow unlimited vendors to register, manage stores and sell through one connected marketplace.",
  },
  {
    title: "Real-Time Order Tracking",
    icon: RefreshCwIcon,
    description:
      "Customers, stores and delivery partners stay updated with live order status from start to finish.",
  },
  {
    title: "Multiple Business Modules",
    icon: SparklesIcon,
    description:
      "Run Food Delivery, Grocery, Shopping, Pharmacy, Parcel Delivery and Cab Booking from one platform.",
  },
  {
    title: "Smart Delivery Management",
    icon: TrendingUpIcon,
    description:
      "Assign deliveries efficiently with live tracking, route updates and delivery status notifications.",
  },
  {
    title: "Secure Online Payments",
    icon: ZapIcon,
    description:
      "Support multiple payment methods including online payments, wallets and cash on delivery.",
  },
  {
    title: "Vendor Store Management",
    icon: PaletteIcon,
    description:
      "Enable vendors to manage products, inventory, pricing, offers and customer orders with ease.",
  },
  {
    title: "Promotions & Discounts",
    icon: SlidersIcon,
    description:
      "Create coupons, promotional offers and seasonal campaigns to attract and retain customers.",
  },
  {
    title: "Customer Engagement",
    icon: SmartphoneIcon,
    description:
      "Wishlist, order history, ratings, reviews and instant notifications create a better shopping experience.",
  },
  {
    title: "Location-Based Services",
    icon: BookOpenIcon,
    description:
      "Display nearby stores and optimize deliveries using accurate location and service zones.",
  },
  {
    title: "Multi-Country Ready",
    icon: BuildingIcon,
    description:
      "Expand into new regions with support for multiple countries, currencies and languages.",
  },
  {
    title: "Business Insights",
    icon: TrendingUpIcon,
    description:
      "Track orders, sales, earnings and marketplace performance to make informed business decisions.",
  },
  {
    title: "Scalable Marketplace",
    icon: CodeIcon,
    description:
      "Start with one business category and seamlessly grow into a complete hyperlocal marketplace.",
  },
];

const STATS = [
  {
    to: 6,
    suffix: "",
    label: "Business Modules",
  },
  {
    to: 3,
    suffix: "",
    label: "Dedicated Mobile Apps",
  },
  {
    to: 25,
    suffix: "+",
    label: "Marketplace Features",
  },
];

export function WhyZinokart() {
  return (
    <section className="relative overflow-hidden bg-surface-bg py-8 sm:py-10">
      <div className="pointer-events-none absolute left-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-brand-emerald/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Choose Zinokart"
          title={
            <>
              Practical advantages that{' '}
              <span className="zk-gradient-text">
                move your business forward.
              </span>
            </>
          }
          description="No vague promises — just the concrete reasons entrepreneurs and enterprises choose Zinokart to launch and scale their marketplace." />


        {/* Stats bar */}
        <FadeUp>
          <div className="mt-14 grid grid-cols-3 gap-4 rounded-3xl border border-surface-border bg-white p-6 shadow-soft sm:grid-cols-3 sm:p-8">
            {STATS.map((s) =>
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs font-medium text-ink-soft sm:text-sm">
                  {s.label}
                </p>
              </div>
            )}
          </div>
        </FadeUp>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <FadeUp key={adv.title} delay={i % 3 * 0.07}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-surface-border bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo transition-colors group-hover:bg-brand-indigo group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      {adv.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">
                      {adv.description}
                    </p>
                  </div>
                </div>
              </FadeUp>);

          })}
        </div>
      </div>
    </section>);

}