// import {
//   LayoutGridIcon,
//   UsersIcon,
//   HeartIcon,
//   ClipboardListIcon,
//   CreditCardIcon,
//   MegaphoneIcon,
//   BarChart3Icon,
//   GlobeIcon,
//   BellIcon,
//   ShieldCheckIcon,
//   GaugeIcon,
//   PlugIcon } from
// 'lucide-react';
// import { SectionHeading, FadeUp } from './primitives';
// type Category = {
//   title: string;
//   icon: any;
//   description: string;
//   features: string[];
// };
// const CATEGORIES: Category[] = [
// {
//   title: 'Marketplace Management',
//   icon: LayoutGridIcon,
//   description:
//   'Run the whole marketplace as one connected system, not a patchwork of tools.',
//   features: [
//   'Multi-category configuration',
//   'Commission & fee rules',
//   'Zone & region control',
//   'Content & catalog governance']

// },
// {
//   title: 'Vendor Management',
//   icon: UsersIcon,
//   description:
//   'Onboard, verify and empower stores to run themselves at scale.',
//   features: [
//   'Self-serve vendor onboarding',
//   'Approval & verification flows',
//   'Per-vendor storefronts',
//   'Payouts & settlements']

// },
// {
//   title: 'Customer Experience',
//   icon: HeartIcon,
//   description: 'Every touchpoint tuned for conversion and loyalty.',
//   features: [
//   'Personalized discovery',
//   'Wishlist & wallet',
//   'Ratings & reviews',
//   'In-app support']

// },
// {
//   title: 'Orders',
//   icon: ClipboardListIcon,
//   description: 'A single order lifecycle shared across all three apps.',
//   features: [
//   'Real-time order routing',
//   'Live status sync',
//   'Order history & re-order',
//   'Cancellations & refunds']

// },
// {
//   title: 'Payments',
//   icon: CreditCardIcon,
//   description: 'Flexible, multi-party money movement built in.',
//   features: [
//   'Multiple payment methods',
//   'In-app wallet',
//   'Split payouts to vendors',
//   'Secure transactions']

// },
// {
//   title: 'Marketing',
//   icon: MegaphoneIcon,
//   description: 'Grow demand with tools your vendors and you can wield.',
//   features: [
//   'Offers & coupons',
//   'Promotions & campaigns',
//   'Referrals',
//   'Featured placements']

// },
// {
//   title: 'Analytics',
//   icon: BarChart3Icon,
//   description: 'Turn marketplace activity into decisions.',
//   features: [
//   'Sales & earnings insights',
//   'Vendor performance',
//   'Order & delivery metrics',
//   'Exportable reports']

// },
// {
//   title: 'Localization',
//   icon: GlobeIcon,
//   description: 'Launch anywhere, in any language and currency.',
//   features: [
//   'Multi-language support',
//   'Multi-currency',
//   'Regional formats',
//   'Country-level rollout']

// },
// {
//   title: 'Notifications',
//   icon: BellIcon,
//   description: 'Keep everyone informed at exactly the right moment.',
//   features: [
//   'Push notifications',
//   'Order & delivery alerts',
//   'Promotional messaging',
//   'Real-time updates']

// },
// {
//   title: 'Security',
//   icon: ShieldCheckIcon,
//   description: 'Protect users, data and every transaction.',
//   features: [
//   'OTP verification',
//   'Secure authentication',
//   'Role-based access',
//   'Data protection']

// },
// {
//   title: 'Performance',
//   icon: GaugeIcon,
//   description: 'Built to stay fast as your marketplace grows.',
//   features: [
//   'Optimized Flutter apps',
//   'Scalable architecture',
//   'Efficient data sync',
//   'High availability']

// },
// {
//   title: 'APIs',
//   icon: PlugIcon,
//   description: 'A clean REST API layer to extend and integrate.',
//   features: [
//   'Documented REST APIs',
//   'Third-party integrations',
//   'Extensible endpoints',
//   'Developer-friendly structure']

// }];

// export function EnterpriseFeatures() {
//   return (
//     <section id="features" className="relative py-8 sm:py-10">
//       <div className="mx-auto max-w-6xl px-6">
//         <SectionHeading
//           eyebrow="Enterprise Platform Features"
//           title={
//           <>
//               A complete feature set,{' '}
//               <span className="zk-gradient-text">
//                 organized the way you think.
//               </span>
//             </>
//           }
//           description="Instead of an overwhelming wall of feature cards, Zinokart's capabilities are grouped into twelve focused domains — each with the depth an enterprise marketplace demands." />


//         <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {CATEGORIES.map((cat, i) => {
//             const Icon = cat.icon;
//             return (
//               <FadeUp key={cat.title} delay={i % 3 * 0.08}>
//                 <div className="group h-full rounded-2xl border border-surface-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
//                   <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo transition-colors group-hover:bg-brand-indigo group-hover:text-white">
//                     <Icon size={22} />
//                   </span>
//                   <h3 className="mt-4 font-display text-lg font-bold text-ink">
//                     {cat.title}
//                   </h3>
//                   <p className="mt-1.5 text-sm text-ink-soft">
//                     {cat.description}
//                   </p>
//                   <ul className="mt-4 space-y-2 border-t border-surface-border pt-4">
//                     {cat.features.map((f) =>
//                     <li
//                       key={f}
//                       className="flex items-center gap-2 text-sm text-ink">

//                         <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
//                         {f}
//                       </li>
//                     )}
//                   </ul>
//                 </div>
//               </FadeUp>);

//           })}
//         </div>
//       </div>
//     </section>);

// }

import {
  LayoutGridIcon,
  UsersIcon,
  HeartIcon,
  ClipboardListIcon,
  CreditCardIcon,
  MegaphoneIcon,
  BarChart3Icon,
  GlobeIcon,
  BellIcon,
  ShieldCheckIcon,
  GaugeIcon,
  PlugIcon,
  CheckIcon,
} from 'lucide-react';

import { SectionHeading, FadeUp } from './primitives';

type Category = {
  title: string;
  icon: any;
  description: string;
  features: string[];
};

const CATEGORIES: Category[] = [
  {
    title: 'Marketplace Management',
    icon: LayoutGridIcon,
    description:
      'Run the whole marketplace as one connected system instead of a collection of disconnected tools.',
    features: [
      'Multi-category configuration',
      'Commission & fee rules',
      'Zone & region control',
      'Content & catalog governance',
    ],
  },
  {
    title: 'Vendor Management',
    icon: UsersIcon,
    description:
      'Onboard, verify and empower every vendor to manage their own business.',
    features: [
      'Self-serve vendor onboarding',
      'Approval & verification',
      'Vendor storefronts',
      'Payout management',
    ],
  },
  {
    title: 'Customer Experience',
    icon: HeartIcon,
    description:
      'Deliver an intuitive shopping journey that keeps customers returning.',
    features: [
      'Personalized discovery',
      'Wishlist & wallet',
      'Ratings & reviews',
      'Customer support',
    ],
  },
  {
    title: 'Orders',
    icon: ClipboardListIcon,
    description:
      'Every order stays synchronized across customers, vendors and delivery partners.',
    features: [
      'Live order routing',
      'Real-time status',
      'Order history',
      'Refund management',
    ],
  },
  {
    title: 'Payments',
    icon: CreditCardIcon,
    description:
      'Built-in payment infrastructure for customers, vendors and administrators.',
    features: [
      'Multiple payment methods',
      'Wallet system',
      'Vendor payouts',
      'Secure transactions',
    ],
  },
  {
    title: 'Marketing',
    icon: MegaphoneIcon,
    description:
      'Increase engagement with campaigns, coupons and promotional tools.',
    features: [
      'Coupons & offers',
      'Referral programs',
      'Campaign management',
      'Featured placements',
    ],
  },
  {
    title: 'Analytics',
    icon: BarChart3Icon,
    description:
      'Monitor marketplace growth with actionable insights and reports.',
    features: [
      'Sales reports',
      'Vendor analytics',
      'Delivery metrics',
      'Exportable reports',
    ],
  },
  {
    title: 'Localization',
    icon: GlobeIcon,
    description:
      'Expand globally with multi-language and multi-currency support.',
    features: [
      'Multiple languages',
      'Multi-currency',
      'Regional formats',
      'Country rollout',
    ],
  },
  {
    title: 'Notifications',
    icon: BellIcon,
    description:
      'Instant notifications keep every participant informed in real time.',
    features: [
      'Push notifications',
      'Order alerts',
      'Marketing campaigns',
      'Status updates',
    ],
  },
  {
    title: 'Security',
    icon: ShieldCheckIcon,
    description:
      'Enterprise-grade protection for users, vendors and administrators.',
    features: [
      'OTP verification',
      'Role permissions',
      'Secure authentication',
      'Data protection',
    ],
  },
  {
    title: 'Performance',
    icon: GaugeIcon,
    description:
      'Optimized architecture designed for speed and scalability.',
    features: [
      'Flutter optimization',
      'Scalable infrastructure',
      'Fast synchronization',
      'High availability',
    ],
  },
  {
    title: 'Developer APIs',
    icon: PlugIcon,
    description:
      'Flexible REST APIs make integrations and custom development simple.',
    features: [
      'REST APIs',
      'Third-party integrations',
      'Webhook ready',
      'Developer documentation',
    ],
  },
];

export function EnterpriseFeatures() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#FFFEFC] py-12 sm:py-16 lg:py-20"
    >
      {/* Background */}

      <div className="pointer-events-none absolute left-0 top-32 -z-10 h-[380px] w-[380px] rounded-full bg-[#FFECC2]/35 blur-[130px]" />

      <div className="pointer-events-none absolute right-0 bottom-20 -z-10 h-[320px] w-[320px] rounded-full bg-[#FFF7E7] blur-[120px]" />

      <div className="zk-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.04]" />

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Enterprise Platform Features"
          title={
            <>
              Everything Required.&nbsp;
              <span className="zk-gradient-text">
                Built for Enterprise Scale.
              </span>
            </>
          }
          description="Every capability in Zinokart is carefully organized into focused domains, giving you a powerful marketplace platform that's easy to manage, extend and scale."
        />

        <div className="mb-12 flex justify-center">
          <div className="rounded-full border border-[#F3E5C6] bg-[#FFF8E8] px-5 py-2 text-sm font-semibold text-[#D98A00]">
            150+ Enterprise Features Across 12 Categories
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <FadeUp
                key={cat.title}
                delay={(index % 3) * 0.08}
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#F3E5C6] bg-[#FFFDFC] p-7 shadow-[0_20px_50px_rgba(15,23,42,.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#F5A300]/40 hover:shadow-[0_30px_70px_rgba(245,163,0,.12)]">

                  {/* Glow */}

                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#FFE8B3] opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-70" />

                  {/* Icon */}

                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F5E5BF] bg-[#FFF4DA] text-[#F5A300] transition-all duration-300 group-hover:bg-[#F5A300] group-hover:text-white">

                    <Icon size={26} />

                  </span>

                  {/* Title */}

                  <h3 className="mt-5 font-display text-xl font-bold text-ink">
                    {cat.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-[15px] leading-7 text-ink-soft">
                    {cat.description}
                  </p>

                  {/* Divider */}

                  <div className="my-6 h-px w-full bg-[#F3E5C6]" />

                  {/* Features */}

                  <ul className="space-y-3">

                    {cat.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[15px] text-ink"
                      >
                        <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF4DA]">
                          <CheckIcon
                            size={12}
                            className="text-[#F5A300]"
                          />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}

                  </ul>

                  {/* Bottom Accent */}

                  <div className="mt-auto pt-7">

                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#F5A300] to-[#FFD56A] transition-all duration-300 group-hover:w-20" />

                  </div>

                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <FadeUp delay={0.2}>
          <div className="mt-20 overflow-hidden rounded-[32px] border border-[#F3E5C6] bg-gradient-to-br from-[#FFFDF8] to-white p-8 shadow-[0_25px_70px_rgba(15,23,42,.05)] sm:p-12">

            <div className="mx-auto max-w-4xl text-center">

              <span className="inline-flex items-center rounded-full border border-[#F5E3BC] bg-[#FFF8E8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D98A00]">
                Enterprise Ready
              </span>

              <h3 className="mt-6 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Everything You Need.
                <br />
                Nothing You Don't.
              </h3>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-ink-soft">
                Zinokart combines powerful marketplace capabilities into one
                unified platform. From onboarding vendors and processing
                payments to analytics, security, localization and APIs,
                everything works together seamlessly—so you can launch faster,
                scale confidently and grow without switching between dozens of
                disconnected tools.
              </p>

            </div>

            {/* Stats */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  value: '12',
                  label: 'Feature Domains',
                },
                {
                  value: '150+',
                  label: 'Enterprise Features',
                },
                {
                  value: '3',
                  label: 'Integrated Applications',
                },
                {
                  value: '∞',
                  label: 'Marketplace Possibilities',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#F3E5C6] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F5A300]/40 hover:shadow-[0_15px_35px_rgba(245,163,0,.08)]"
                >
                  <div className="font-display text-4xl font-bold text-[#F5A300]">
                    {item.value}
                  </div>

                  <div className="mt-2 text-sm font-medium text-ink-soft">
                    {item.label}
                  </div>
                </div>
              ))}

            </div>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}