import { useState } from "react";
import { motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    Star,
} from "lucide-react";

import Container from "./ui/Container";

const testimonials = [
    {
        name: "Ahmed Khan",
        company: "FreshMart",
        country: "United Arab Emirates",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        review:
            "Launching our marketplace was surprisingly fast. The customer, vendor and delivery apps worked together seamlessly from day one. Our team was able to onboard stores quickly and customers immediately appreciated the smooth experience.",
    },
    {
        name: "Sarah Johnson",
        company: "Urban Grocery",
        country: "Canada",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        review:
            "The UI feels premium and our vendors adapted instantly. Managing products, inventory and customer orders has never been easier. The overall workflow saved us a huge amount of time every day.",
    },
    {
        name: "David Wilson",
        company: "QuickEats",
        country: "United Kingdom",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
        review:
            "Real-time tracking and notifications completely transformed our delivery experience. Customers love being able to follow every step of their order and our support requests dropped significantly.",
    },
    {
        name: "Mohammed Ali",
        company: "City Pharmacy",
        country: "Saudi Arabia",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
        review:
            "Exactly the solution we were looking for. Food, pharmacy and grocery are now managed from one ecosystem, making operations easier for both our staff and customers.",
    },
    {
        name: "Emily Brown",
        company: "Daily Basket",
        country: "Australia",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        review:
            "The Flutter apps are smooth, modern and beautifully designed. Customers loved the experience immediately and our merchants quickly became comfortable with the platform.",
    },
    {
        name: "Carlos Mendes",
        company: "GoMarket",
        country: "Brazil",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        review:
            "Professional architecture, clean interface and excellent scalability. Zinokart gave us a strong foundation to launch our marketplace confidently without unnecessary complexity.",
    },
];

export default function Testimonials() {

    const [current, setCurrent] = useState(0);

    return (

        <section className="relative overflow-hidden bg-[#FFFDF9] pt-20 pb-5" id="testimonials">

            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FDBA2D]/10 blur-[140px]" />

            <Container>

                {/* Section Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >

                    <span className="inline-flex items-center rounded-full border border-[#F4DFC2] bg-[#FFF6E6] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B76B00]">

                        Testimonials

                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-[-0.05em] text-[#171717] sm:text-6xl">

                        Trusted by businesses

                        <span className="block bg-gradient-to-r from-[#FDBA2D] to-[#F59E0B] bg-clip-text text-transparent">

                            around the world.

                        </span>

                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-600">

                        Entrepreneurs, startups and enterprises trust Zinokart to launch
                        scalable multi-vendor marketplaces with exceptional customer
                        experiences.

                    </p>

                </motion.div>

                {/* Slider */}

                <div className="relative mt-20 overflow-hidden">

                    <motion.div
                        animate={{
                            x: `-${Math.floor(current / 3) * 100}%`,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                        className="flex"
                    >
                        {Array.from({
                            length: Math.ceil(testimonials.length / 3),
                        }).map((_, pageIndex) => (

                            <div
                                key={pageIndex}
                                className="grid w-full shrink-0 gap-8 lg:grid-cols-3"
                            >
                                {testimonials
                                    .slice(pageIndex * 3, pageIndex * 3 + 3)
                                    .map((testimonial) => (
                                        <TestimonialCard
                                            key={testimonial.name}
                                            testimonial={testimonial}
                                        />
                                    ))}
                            </div>

                        ))}
                    </motion.div>

                </div>

                {/* Navigation */}

                <div className="mt-10 flex items-center justify-center gap-4">

                    <button

                        onClick={() =>
                            setCurrent((prev) =>
                                prev < 3
                                    ? testimonials.length - 3
                                    : prev - 3
                            )
                        }

                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EFE3D1] bg-white transition hover:border-[#F9A825]"

                    >

                        <ChevronLeft size={20} />

                    </button>

                    <div className="flex gap-3">

                        {testimonials.map((_, index) => (

                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${current === index
                                    ? "w-8 bg-[#F9A825]"
                                    : "w-2.5 bg-[#E6D7C2]"
                                    }`}
                            />

                        ))}

                    </div>

                    <button

                        onClick={() =>
                            setCurrent((prev) =>
                                prev >= testimonials.length - 3
                                    ? 0
                                    : prev + 3
                            )
                        }

                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EFE3D1] bg-white transition hover:border-[#F9A825]"

                    >

                        <ChevronRight size={20} />

                    </button>

                </div>

            </Container>

        </section>

    );

}

interface Testimonial {
    name: string;
    company: string;
    country: string;
    image: string;
    review: string;
}

function TestimonialCard({
    testimonial,
}: {
    testimonial: Testimonial;
}) {

    return (

        <motion.article

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
                duration: .5,
            }}

            className="rounded-[36px] border border-[#EFE4D1] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.06)]"

        >

            {/* Rating */}

            <div className="flex items-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                        key={star}
                        size={20}
                        fill="#F9A825"
                        className="text-[#F9A825]"
                    />

                ))}

            </div>

            {/* Review */}

            <p
                className="mt-8 text-lg leading-8 text-stone-700 line-clamp-5 min-h-[10rem]"
            >
                "{testimonial.review}"
            </p>

            {/* Divider */}

            <div className="my-10 h-px bg-[#F3E7D4]" />

            {/* User */}

            <div className="flex items-center gap-5">

                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-[72px] w-[72px] rounded-full border-2 border-[#F4DFC2] object-cover shadow-sm"
                />

                <div>

                    <h3 className="text-lg font-bold text-[#171717]">

                        {testimonial.name}

                    </h3>

                    <div className="mt-2 inline-flex rounded-full bg-[#FFF7EA] px-3 py-1 text-xs font-medium text-[#B76B00]">
                        {testimonial.company}
                    </div>

                    <p className="mt-2 text-sm text-stone-500">
                        {testimonial.country}
                    </p>

                </div>

            </div>

        </motion.article>

    );

}