// import { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   QuoteIcon,
//   StarIcon
// } from
//   'lucide-react';
// import { SectionHeading } from './primitives';
// type Testimonial = {
//   name: string;
//   company: string;
//   country: string;
//   category: string;
//   review: string;
//   avatar: string;
// };
// const TESTIMONIALS: Testimonial[] = [
//   {
//     name: 'Priya Nair',
//     company: 'FreshBasket',
//     country: 'India',
//     category: 'Grocery',
//     review:
//       'We launched our grocery marketplace in weeks, not months. The three apps worked together flawlessly from day one, and owning the full source code meant we could brand and customize everything exactly the way we wanted. Our vendors manage themselves entirely through the Store App.',
//     avatar: "/3a8909f3-cbc5-4941-b10a-75759cca6938.jpg"

//   },
//   {
//     name: 'Omar Al-Farsi',
//     company: 'RapidCourier',
//     country: 'UAE',
//     category: 'Parcel Delivery',
//     review:
//       'The Delivery App is genuinely production-grade — OTP verification and proof of delivery cut our disputes to almost zero. Real-time tracking across the connected platform gives our customers confidence, and the architecture has scaled cleanly as we expanded across the region.',
//     avatar: "/a313f671-b635-4878-81bd-1bd5dfff9a60.jpg"

//   },
//   {
//     name: 'Daniel Okafor',
//     company: 'CityEats',
//     country: 'Nigeria',
//     category: 'Food Delivery',
//     review:
//       'Zinokart let us compete with the big delivery brands under our own identity. Orders, payments and notifications stay perfectly in sync, and the Flutter apps feel fast and premium. The documentation made onboarding our dev team surprisingly painless.',
//     avatar: "/01f5f498-0d5b-4baf-8f83-dbccd6f29f16.jpg"

//   },
//   {
//     name: 'Mei Lin',
//     company: 'UrbanCart',
//     country: 'Singapore',
//     category: 'Shopping',
//     review:
//       "What sold us was the ecosystem thinking — this isn't three disconnected apps, it's one marketplace infrastructure. Multi-language and multi-currency support let us go regional immediately, and the clean codebase makes every customization straightforward.",
//     avatar: "/840682a6-3ad4-4f1d-ab78-639eacac2f2d.jpg"

//   }];

// export function Testimonials() {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const desktopPages = [];

//   for (let i = 0; i < TESTIMONIALS.length; i += 3) {
//     desktopPages.push(TESTIMONIALS.slice(i, i + 3));
//   }

//   const activeTestimonial = TESTIMONIALS[index];

//   const desktopIndex = Math.floor(index / 3);
//   const go = (step: number) => {
//     setDirection(step);

//     if (window.innerWidth >= 1024) {
//       setIndex((current) => {
//         const next = current + step * 3;

//         if (next < 0)
//           return (desktopPages.length - 1) * 3;

//         if (next >= TESTIMONIALS.length)
//           return 0;

//         return next;
//       });
//     } else {
//       setIndex((current) =>
//         (current + step + TESTIMONIALS.length) %
//         TESTIMONIALS.length
//       );
//     }
//   };
//   const renderContent = (testimonial: Testimonial, compact = false) =>
//     <>
//       <QuoteIcon
//         size={compact ? 30 : 40}
//         className="text-brand-indigo/20"
//         aria-hidden="true" />

//       <div className="mt-3 flex gap-1" aria-label="5 out of 5 stars">
//         {Array.from({
//           length: 5
//         }).map((_, star) =>
//           <StarIcon
//             key={star}
//             size={compact ? 14 : 18}
//             className="fill-amber-400 text-amber-400"
//             aria-hidden="true" />

//         )}
//       </div>
//       <blockquote
//         className={`mt-4 leading-relaxed text-ink ${compact ? 'text-sm' : 'text-lg sm:text-xl'}`}>

//         “{testimonial.review}”
//       </blockquote>
//       <div
//         className={`flex items-center gap-3 ${compact ? 'mt-6' : 'mt-8 gap-4'}`}>

//         <img
//           src={testimonial.avatar}
//           alt={testimonial.name}
//           className={`${compact ? 'h-11 w-11' : 'h-14 w-14'} rounded-full object-cover ring-2 ring-brand-indigo/20`}
//           loading="lazy" />

//         <div>
//           <p className="font-display text-sm font-bold text-ink">
//             {testimonial.name}
//           </p>
//           <p className="text-xs text-ink-soft">
//             {testimonial.company} · {testimonial.country}
//           </p>
//           <span className="mt-1 inline-block rounded-full bg-brand-indigo/10 px-2 py-0.5 text-[10px] font-semibold text-brand-indigo">
//             {testimonial.category}
//           </span>
//         </div>
//       </div>
//     </>;

//   return (
//     <section className="relative overflow-hidden py-24 sm:py-32">
//       <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-indigo/10 blur-[130px]" />
//       <div className="mx-auto max-w-6xl px-6">
//         <SectionHeading
//           eyebrow="Testimonials"
//           title={
//             <>
//               Trusted by operators{' '}
//               <span className="zk-gradient-text">around the world.</span>
//             </>
//           }
//           description="Marketplace builders across categories and countries are launching on Zinokart." />


//         <div className="relative mt-14 hidden overflow-hidden lg:block">

//           <motion.div
//             animate={{
//               x: `-${desktopIndex * 100}%`,
//             }}
//             transition={{
//               duration: .5,
//               ease: "easeInOut",
//             }}
//             className="flex"
//           >

//             {desktopPages.map((page, pageIndex) => (

//               <div
//                 key={pageIndex}
//                 className="grid w-full shrink-0 grid-cols-3 gap-5"
//               >

//                 {page.map((testimonial, cardIndex) => (

//                   <motion.article
//                     key={testimonial.name}
//                     initial={{
//                       opacity: 0,
//                       y: 18,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                     transition={{
//                       duration: .45,
//                       delay: cardIndex * .08,
//                     }}
//                     className="flex h-full flex-col rounded-3xl border border-surface-border bg-white p-6 shadow-soft"
//                   >

//                     {renderContent(testimonial, true)}

//                   </motion.article>

//                 ))}

//               </div>

//             ))}

//           </motion.div>

//         </div>

//         <div className="relative mt-14 lg:hidden">
//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.article
//               key={index}
//               custom={direction}
//               initial={{
//                 opacity: 0,
//                 x: direction >= 0 ? 60 : -60
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0
//               }}
//               exit={{
//                 opacity: 0,
//                 x: direction >= 0 ? -60 : 60
//               }}
//               transition={{
//                 duration: 0.45,
//                 ease: [0.22, 1, 0.36, 1]
//               }}
//               className="rounded-3xl border border-surface-border bg-white p-8 shadow-card sm:p-12">

//               {renderContent(activeTestimonial)}
//             </motion.article>
//           </AnimatePresence>

//           <div className="mt-10 flex items-center justify-center gap-4">

//             <button
//               onClick={() => go(-1)}
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-white shadow-soft transition hover:border-brand-indigo"
//             >
//               <ChevronLeftIcon size={18} />
//             </button>

//             <div className="flex gap-2">

//               {(window.innerWidth >= 1024
//                 ? desktopPages
//                 : TESTIMONIALS
//               ).map((_, i) => (

//                 <button
//                   key={i}
//                   onClick={() => {
//                     setDirection(i > (window.innerWidth >= 1024 ? desktopIndex : index) ? 1 : -1);

//                     setIndex(window.innerWidth >= 1024 ? i * 3 : i);
//                   }}
//                   className={`h-2 rounded-full transition-all duration-300 ${(
//                       window.innerWidth >= 1024
//                         ? desktopIndex === i
//                         : index === i
//                     )
//                       ? "w-8 bg-brand-indigo"
//                       : "w-2 bg-surface-border"
//                     }`}
//                 />

//               ))}

//             </div>

//             <button
//               onClick={() => go(1)}
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-white shadow-soft transition hover:border-brand-indigo"
//             >
//               <ChevronRightIcon size={18} />
//             </button>

//           </div>
//         </div>
//       </div>
//     </section>);

// }

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  QuoteIcon,
  StarIcon,
} from "lucide-react";
import { SectionHeading } from "./primitives";

type Testimonial = {
  name: string;
  company: string;
  country: string;
  category: string;
  review: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Nair",
    company: "FreshBasket",
    country: "India",
    category: "Grocery",
    review:
      "We launched our grocery marketplace in weeks, not months. The three apps worked together flawlessly from day one, and our vendors manage themselves entirely through the Store App.",
    avatar: "/3a8909f3-cbc5-4941-b10a-75759cca6938.jpg",
  },
  {
    name: "Omar Al-Farsi",
    company: "RapidCourier",
    country: "UAE",
    category: "Parcel Delivery",
    review:
      "The Delivery App is production-ready. Real-time tracking and proof of delivery significantly improved customer confidence while helping us expand across the region.",
    avatar: "/a313f671-b635-4878-81bd-1bd5dfff9a60.jpg",
  },
  {
    name: "Daniel Okafor",
    company: "CityEats",
    country: "Nigeria",
    category: "Food Delivery",
    review:
      "Zinokart helped us launch under our own brand. Orders, payments and notifications remain perfectly synchronized across the entire marketplace.",
    avatar: "/01f5f498-0d5b-4baf-8f83-dbccd6f29f16.jpg",
  },
  {
    name: "Mei Lin",
    company: "UrbanCart",
    country: "Singapore",
    category: "Shopping",
    review:
      "The connected marketplace approach made scaling incredibly simple. Multi-language support and the smooth customer experience exceeded our expectations.",
    avatar: "/840682a6-3ad4-4f1d-ab78-639eacac2f2d.jpg",
  },
  {
    name: "James Walker",
    company: "GoMart",
    country: "Australia",
    category: "Marketplace",
    review:
      "Everything from vendor onboarding to order fulfillment works seamlessly. Our launch was faster than expected and customers love the polished apps.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Fatima Hassan",
    company: "CityExpress",
    country: "Qatar",
    category: "Delivery",
    review:
      "Real-time order tracking and delivery management completely transformed our operations. The ecosystem feels like one unified platform.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export function Testimonials() {
  const [desktopPage, setDesktopPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const desktopPages = useMemo(() => {
    const pages: Testimonial[][] = [];

    for (let i = 0; i < TESTIMONIALS.length; i += 3) {
      pages.push(TESTIMONIALS.slice(i, i + 3));
    }

    return pages;
  }, []);

  const nextDesktop = () => {
    setDirection(1);

    setDesktopPage((prev) =>
      prev === desktopPages.length - 1 ? 0 : prev + 1
    );
  };

  const prevDesktop = () => {
    setDirection(-1);

    setDesktopPage((prev) =>
      prev === 0 ? desktopPages.length - 1 : prev - 1
    );
  };

  const nextMobile = () => {
    setDirection(1);

    setMobileIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const prevMobile = () => {
    setDirection(-1);

    setMobileIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const renderContent = (
    testimonial: Testimonial,
    compact = false
  ) => (
    <>
      <QuoteIcon
        size={compact ? 28 : 40}
        className="text-brand-indigo/20"
      />

      <div className="mt-3 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            size={compact ? 14 : 18}
            className="fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      <blockquote
        className={`mt-4 leading-8 text-ink ${compact ? "line-clamp-6 text-sm" : "text-lg"
          }`}
      >
        “{testimonial.review}”
      </blockquote>

      <div
        className={`flex items-center ${compact ? "mt-6 gap-3" : "mt-8 gap-4"
          }`}
      >
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className={`${compact ? "h-11 w-11" : "h-14 w-14"
            } rounded-full object-cover ring-2 ring-brand-indigo/20`}
        />

        <div>
          <h4 className="font-display text-sm font-bold text-ink">
            {testimonial.name}
          </h4>

          <p className="text-xs text-ink-soft">
            {testimonial.company} · {testimonial.country}
          </p>

          <span className="mt-1 inline-block rounded-full bg-brand-indigo/10 px-2 py-1 text-[10px] font-semibold text-brand-indigo">
            {testimonial.category}
          </span>
        </div>
      </div>
    </>
  );
  return (
    <section className="relative overflow-hidden py-8 sm:py-10">

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-indigo/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl px-6">

        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by operators{" "}
              <span className="zk-gradient-text">
                around the world.
              </span>
            </>
          }
          description="Marketplace builders across different industries trust Zinokart to launch and grow their marketplace businesses."
        />

        {/* ---------------- Desktop Slider ---------------- */}

        <div className="relative mt-16 hidden overflow-hidden lg:block">

          <motion.div
            animate={{
              x: `-${desktopPage * 100}%`,
            }}
            transition={{
              duration: .55,
              ease: "easeInOut",
            }}
            className="flex"
          >

            {desktopPages.map((page, pageIndex) => (

              <div
                key={pageIndex}
                className="grid w-full shrink-0 grid-cols-3 gap-5"
              >

                {page.map((testimonial, cardIndex) => (

                  <motion.article
                    key={testimonial.name}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: .45,
                      delay: cardIndex * .08,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="flex h-full flex-col rounded-3xl border border-surface-border bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
                  >

                    {renderContent(
                      testimonial,
                      true
                    )}

                  </motion.article>

                ))}

              </div>

            ))}

          </motion.div>

        </div>

        {/* ---------------- Mobile Slider ---------------- */}

        <div className="relative mt-16 lg:hidden">

          <AnimatePresence
            mode="wait"
            custom={direction}
          >

            <motion.article
              key={mobileIndex}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 70 : -70,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -70 : 70,
              }}
              transition={{
                duration: .45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-3xl border border-surface-border bg-white p-8 shadow-card"
            >

              {renderContent(
                TESTIMONIALS[mobileIndex]
              )}

            </motion.article>

          </AnimatePresence>

        </div>
        {/* ---------------- Navigation ---------------- */}

        <div className="mt-10 flex items-center justify-center gap-5">

          {/* Previous */}

          <button
            onClick={() => {
              if (window.innerWidth >= 1024) {
                prevDesktop();
              } else {
                prevMobile();
              }
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-white shadow-soft transition-all hover:border-brand-indigo hover:text-brand-indigo"
          >
            <ChevronLeftIcon size={18} />
          </button>

          {/* Desktop Indicators */}

          <div className="hidden items-center gap-2 lg:flex">

            {desktopPages.map((_, i) => (

              <button
                key={i}
                onClick={() => {
                  setDirection(i > desktopPage ? 1 : -1);
                  setDesktopPage(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${desktopPage === i
                    ? "w-8 bg-brand-indigo"
                    : "w-2 bg-surface-border"
                  }`}
              />

            ))}

          </div>

          {/* Mobile Indicators */}

          <div className="flex items-center gap-2 lg:hidden">

            {TESTIMONIALS.map((_, i) => (

              <button
                key={i}
                onClick={() => {
                  setDirection(i > mobileIndex ? 1 : -1);
                  setMobileIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${mobileIndex === i
                    ? "w-8 bg-brand-indigo"
                    : "w-2 bg-surface-border"
                  }`}
              />

            ))}

          </div>

          {/* Next */}

          <button
            onClick={() => {
              if (window.innerWidth >= 1024) {
                nextDesktop();
              } else {
                nextMobile();
              }
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-white shadow-soft transition-all hover:border-brand-indigo hover:text-brand-indigo"
          >
            <ChevronRightIcon size={18} />
          </button>

        </div>

      </div>

    </section>
  );
}