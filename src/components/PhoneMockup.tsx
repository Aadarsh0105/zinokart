import {
  BellIcon,
  ChevronRightIcon,
  Clock3Icon,
  MapPinIcon,
  PackageCheckIcon,
  SearchIcon,
  ShoppingBagIcon,
  StoreIcon,
  WalletCardsIcon } from
'lucide-react';
export type PhoneVariant = 'customer' | 'vendor' | 'delivery';
type PhoneMockupProps = {
  variant: PhoneVariant;
  className?: string;
};
type ScreenContent = {
  eyebrow: string;
  title: string;
};
const variantContent: Record<PhoneVariant, ScreenContent> = {
  customer: {
    eyebrow: 'Good morning, Maya',
    title: 'Fresh picks for you'
  },
  vendor: {
    eyebrow: 'Zino Store',
    title: 'Today at a glance'
  },
  delivery: {
    eyebrow: 'Delivery partner',
    title: 'Your next drop'
  }
};
export function PhoneMockup({ variant, className = '' }: PhoneMockupProps) {
  const content = variantContent[variant];
  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-[2.15rem] border-[7px] border-[#1a1a1a] bg-white p-3 shadow-[0_28px_55px_rgba(110,75,10,0.22)]">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-[#1a1a1a]" />
        <div className="min-h-[350px] rounded-[1.45rem] bg-[#fffdf8] px-3 pt-9 text-[#1a1a1a] sm:min-h-[400px]">
          {variant === 'customer' && <CustomerScreen content={content} />}
          {variant === 'vendor' && <VendorScreen content={content} />}
          {variant === 'delivery' && <DeliveryScreen content={content} />}
        </div>
      </div>
    </div>);

}
function CustomerScreen({ content }: {content: ScreenContent;}) {
  return (
    <>
      <div className="flex items-center justify-between text-[8px] font-semibold">
        <span>{content.eyebrow}</span>
        <BellIcon size={13} aria-hidden="true" />
      </div>
      <h3 className="mt-3 text-lg font-bold tracking-tight">{content.title}</h3>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-white p-2 text-[8px] text-stone-400 shadow-sm">
        <SearchIcon size={12} aria-hidden="true" /> Search food, stores & more
      </div>
      <div className="mt-4 h-24 rounded-2xl bg-[#f9a825] p-3">
        <span className="text-[8px] font-bold uppercase tracking-wider">
          Weekend offer
        </span>
        <p className="mt-1 text-sm font-bold leading-none">
          20% off your
          <br />
          first order
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[9px] font-bold">Popular near you</span>
        <ChevronRightIcon size={13} aria-hidden="true" />
      </div>
      <div className="mt-2 flex gap-2">
        {['Fresh bowl', 'Daily mart'].map((item, index) =>
        <div key={item} className="w-1/2 rounded-xl bg-white p-2 shadow-sm">
            <div
            className={`h-11 rounded-lg ${index ? 'bg-orange-100' : 'bg-lime-100'}`} />
          
            <p className="mt-2 text-[8px] font-bold">{item}</p>
            <p className="text-[7px] text-stone-400">25–35 min</p>
          </div>
        )}
      </div>
    </>);

}
function VendorScreen({ content }: {content: ScreenContent;}) {
  return (
    <>
      <div className="flex items-center justify-between text-[8px] font-semibold">
        <span>{content.eyebrow}</span>
        <BellIcon size={13} aria-hidden="true" />
      </div>
      <h3 className="mt-3 text-lg font-bold tracking-tight">{content.title}</h3>
      <div className="mt-4 rounded-2xl bg-[#1a1a1a] p-3 text-white">
        <p className="text-[8px] text-stone-300">Today’s sales</p>
        <p className="mt-1 text-xl font-bold">
          $2,840 <span className="text-[9px] text-[#f9a825]">+18%</span>
        </p>
        <div className="mt-3 flex h-8 items-end gap-1">
          {[35, 55, 40, 70, 48, 85, 65].map((height, index) =>
          <span
            key={index}
            className="w-full rounded-t bg-[#f9a825]"
            style={{
              height: `${height}%`
            }} />

          )}
        </div>
      </div>
      <p className="mt-4 text-[9px] font-bold">
        Live orders{' '}
        <span className="ml-1 rounded-full bg-orange-100 px-1.5 py-0.5 text-[#b76800]">
          12
        </span>
      </p>
      {['Avocado toast × 2', 'Family grocery box'].map((order) =>
      <div
        key={order}
        className="mt-2 flex items-center gap-2 rounded-xl bg-white p-2 shadow-sm">
        
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-orange-50">
            <ShoppingBagIcon
            size={11}
            className="text-[#d88900]"
            aria-hidden="true" />
          
          </span>
          <span className="flex-1 text-[8px] font-semibold">{order}</span>
          <ChevronRightIcon size={11} aria-hidden="true" />
        </div>
      )}
    </>);

}
function DeliveryScreen({ content }: {content: ScreenContent;}) {
  return (
    <>
      <div className="flex items-center justify-between text-[8px] font-semibold">
        <span>{content.eyebrow}</span>
        <WalletCardsIcon size={13} aria-hidden="true" />
      </div>
      <div className="mt-4 rounded-2xl bg-[#f9a825] p-3">
        <p className="text-[8px] font-semibold">Earnings today</p>
        <p className="mt-1 text-xl font-bold">$86.40</p>
        <p className="mt-1 text-[7px]">6 completed deliveries</p>
      </div>
      <h3 className="mt-4 text-sm font-bold tracking-tight">{content.title}</h3>
      <div className="mt-2 rounded-2xl bg-white p-2.5 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-orange-50">
            <StoreIcon
              size={12}
              className="text-[#d88900]"
              aria-hidden="true" />
            
          </span>
          <span className="text-[8px] font-bold">Sunrise Grocers</span>
        </div>
        <div className="my-2 border-l border-dashed border-stone-300 pl-3 text-[7px] text-stone-500">
          <MapPinIcon
            size={9}
            className="mr-1 inline text-[#f9a825]"
            aria-hidden="true" />
          
          184 Mason Street
        </div>
        <div className="flex items-center justify-between border-t border-stone-100 pt-2 text-[8px]">
          <span className="font-bold">$9.50</span>
          <span className="flex items-center gap-1 text-stone-400">
            <Clock3Icon size={9} aria-hidden="true" /> 12 min
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#1a1a1a] p-2 text-[8px] font-bold text-white">
        <PackageCheckIcon
          size={11}
          className="text-[#f9a825]"
          aria-hidden="true" />
        
        Tap to start delivery
      </div>
    </>);

}