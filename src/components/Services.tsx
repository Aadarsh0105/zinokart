import { motion } from "framer-motion";
import {
    Pizza,
    ShoppingBasket,
    ShoppingBag,
    Pill,
    Package,
    CheckCircle2,
    Car,
} from "lucide-react";

import Container from "./ui/Container";

const services = [
    {
        icon: Pizza,
        title: "Food Delivery",
        description:
            "Launch restaurants, cafés and cloud kitchens with real-time ordering.",
    },
    {
        icon: ShoppingBasket,
        title: "Grocery",
        description:
            "Sell fresh groceries and daily essentials with scheduled delivery.",
    },
    {
        icon: ShoppingBag,
        title: "Shopping",
        description:
            "Create a local marketplace for fashion, electronics and retail stores.",
    },
    {
        icon: Pill,
        title: "Pharmacy",
        description:
            "Accept medicine orders with prescription upload support.",
    },
    {
        icon: Package,
        title: "Parcel",
        description:
            "Offer same-day package and courier delivery across your city.",
    },
    {
        icon: Car,
        title: "Cab Booking",
        description:
            "Launch ride-hailing services with real-time driver tracking and instant bookings.",
    },
];

export default function Services() {

    return (

        <section className="bg-[#FFFDF9] pt-20 pb-5" id="services">

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

                        Business Modules

                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-[-0.05em] text-[#171717] sm:text-6xl">
                        Build marketplaces for

                        <span className="block bg-gradient-to-r from-[#FDBA2D] to-[#F59E0B] bg-clip-text text-transparent">
                            every local business.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-600">
                        From food delivery and grocery to pharmacy, shopping,
                        parcel logistics and cab booking, Zinokart provides
                        everything you need to launch and grow a modern
                        multi-service marketplace.
                    </p>

                </motion.div>

                {/* Services Grid */}

                <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

                    {services.map((service) => (

                        <ServiceCard
                            key={service.title}
                            service={service}
                        />

                    ))}

                </div>

                {/* Bottom Highlight */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="mt-20 rounded-[32px] border border-[#EFE4D1] bg-gradient-to-r from-[#FFF8E9] via-white to-[#FFF8E9] p-10"
                >

                    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                        <div>

                            <h3 className="text-3xl font-black tracking-[-0.03em] text-[#171717]">

                                Start with one service.

                                <span className="block text-[#F9A825]">

                                    Expand whenever you're ready.

                                </span>

                            </h3>

                            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">

                                Launch only Grocery or Food Delivery today,
                                then enable Pharmacy, Shopping or Parcel later —
                                without rebuilding your platform or creating
                                separate applications.

                            </p>

                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            {[
                                "Customer App",
                                "Store App",
                                "Delivery App",
    
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-[#EFE3D1] bg-white px-5 py-4 shadow-sm"
                                >

                                    <CheckCircle2
                                        size={18}
                                        className="text-[#F9A825]"
                                    />

                                    <span className="text-sm font-medium text-stone-700">

                                        {item}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </motion.div>

            </Container>

        </section>

    );

}

interface Service {
    icon: any;
    title: string;
    description: string;
}

function ServiceCard({
    service,
}: {
    service: Service;
}) {

    const Icon = service.icon;

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
                duration: 0.45,
            }}

            whileHover={{
                y: -6,
            }}

            className="group flex h-full flex-col rounded-[28px] border border-[#EFE4D1] bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,.05)] transition-all duration-300 hover:border-[#F9A825]/40 hover:shadow-[0_20px_45px_rgba(0,0,0,.08)]"

        >

            {/* Icon */}

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#FFF4D8] transition group-hover:bg-[#F9A825]">

                <Icon
                    size={30}
                    className="text-[#F59E0B] transition group-hover:text-white"
                />

            </div>

            {/* Title */}

            <h3 className="mt-7 text-2xl font-black tracking-[-0.03em] text-[#171717]">

                {service.title}

            </h3>

            {/* Description */}

            <p className="mt-4 flex-1 text-[15px] leading-7 text-stone-600">

                {service.description}

            </p>

        </motion.article>

    );

}
