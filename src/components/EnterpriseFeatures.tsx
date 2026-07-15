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
  PlugIcon } from
'lucide-react';
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
  'Run the whole marketplace as one connected system, not a patchwork of tools.',
  features: [
  'Multi-category configuration',
  'Commission & fee rules',
  'Zone & region control',
  'Content & catalog governance']

},
{
  title: 'Vendor Management',
  icon: UsersIcon,
  description:
  'Onboard, verify and empower stores to run themselves at scale.',
  features: [
  'Self-serve vendor onboarding',
  'Approval & verification flows',
  'Per-vendor storefronts',
  'Payouts & settlements']

},
{
  title: 'Customer Experience',
  icon: HeartIcon,
  description: 'Every touchpoint tuned for conversion and loyalty.',
  features: [
  'Personalized discovery',
  'Wishlist & wallet',
  'Ratings & reviews',
  'In-app support']

},
{
  title: 'Orders',
  icon: ClipboardListIcon,
  description: 'A single order lifecycle shared across all three apps.',
  features: [
  'Real-time order routing',
  'Live status sync',
  'Order history & re-order',
  'Cancellations & refunds']

},
{
  title: 'Payments',
  icon: CreditCardIcon,
  description: 'Flexible, multi-party money movement built in.',
  features: [
  'Multiple payment methods',
  'In-app wallet',
  'Split payouts to vendors',
  'Secure transactions']

},
{
  title: 'Marketing',
  icon: MegaphoneIcon,
  description: 'Grow demand with tools your vendors and you can wield.',
  features: [
  'Offers & coupons',
  'Promotions & campaigns',
  'Referrals',
  'Featured placements']

},
{
  title: 'Analytics',
  icon: BarChart3Icon,
  description: 'Turn marketplace activity into decisions.',
  features: [
  'Sales & earnings insights',
  'Vendor performance',
  'Order & delivery metrics',
  'Exportable reports']

},
{
  title: 'Localization',
  icon: GlobeIcon,
  description: 'Launch anywhere, in any language and currency.',
  features: [
  'Multi-language support',
  'Multi-currency',
  'Regional formats',
  'Country-level rollout']

},
{
  title: 'Notifications',
  icon: BellIcon,
  description: 'Keep everyone informed at exactly the right moment.',
  features: [
  'Push notifications',
  'Order & delivery alerts',
  'Promotional messaging',
  'Real-time updates']

},
{
  title: 'Security',
  icon: ShieldCheckIcon,
  description: 'Protect users, data and every transaction.',
  features: [
  'OTP verification',
  'Secure authentication',
  'Role-based access',
  'Data protection']

},
{
  title: 'Performance',
  icon: GaugeIcon,
  description: 'Built to stay fast as your marketplace grows.',
  features: [
  'Optimized Flutter apps',
  'Scalable architecture',
  'Efficient data sync',
  'High availability']

},
{
  title: 'APIs',
  icon: PlugIcon,
  description: 'A clean REST API layer to extend and integrate.',
  features: [
  'Documented REST APIs',
  'Third-party integrations',
  'Extensible endpoints',
  'Developer-friendly structure']

}];

export function EnterpriseFeatures() {
  return (
    <section id="features" className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Enterprise Platform Features"
          title={
          <>
              A complete feature set,{' '}
              <span className="zk-gradient-text">
                organized the way you think.
              </span>
            </>
          }
          description="Instead of an overwhelming wall of feature cards, Zinokart's capabilities are grouped into twelve focused domains — each with the depth an enterprise marketplace demands." />
        

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <FadeUp key={cat.title} delay={i % 3 * 0.08}>
                <div className="group h-full rounded-2xl border border-surface-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo transition-colors group-hover:bg-brand-indigo group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-soft">
                    {cat.description}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-surface-border pt-4">
                    {cat.features.map((f) =>
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-ink">
                      
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                        {f}
                      </li>
                    )}
                  </ul>
                </div>
              </FadeUp>);

          })}
        </div>
      </div>
    </section>);

}