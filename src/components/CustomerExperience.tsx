import { motion } from "framer-motion";
import {
    Pizza,
    ShoppingBasket,
    ShoppingBag,
    Pill,
    Package,
} from "lucide-react";

import Container from "./ui/Container";

const services = [
    {
        title: "Food Delivery",
        description:
            "Restaurants, cafés and cloud kitchens in one beautiful ordering experience.",
        icon: Pizza,
    },
    {
        title: "Grocery",
        description:
            "Fresh vegetables, dairy, beverages and daily essentials delivered fast.",
        icon: ShoppingBasket,
    },
    {
        title: "Shopping",
        description:
            "Fashion, electronics and nearby local stores with one checkout.",
        icon: ShoppingBag,
    },
    {
        title: "Pharmacy",
        description:
            "Order medicines or upload prescriptions from trusted pharmacies.",
        icon: Pill,
    },
    {
        title: "Parcel",
        description:
            "Send documents and packages with real-time delivery tracking.",
        icon: Package,
    },
];

export default function CustomerExperience() {
    return (
        <section className="relative overflow-hidden bg-[#FFF9F2] py-32">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-[#FDBA2D]/15 blur-[120px]" />

                <div className="absolute right-[-10%] bottom-0 h-[420px] w-[420px] rounded-full bg-[#F59E0B]/10 blur-[120px]" />

            </div>

            <Container>

                <motion.div

                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}

                    className="relative z-10 text-center"

                >

                    <span className="rounded-full bg-[#FFF1CF] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B76B00]">

                        Customer Experience

                    </span>

                    <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-tight tracking-[-0.05em] text-[#171717]">

                        One destination for
                        <span className="block text-[#F9A825]">

                            every daily need.

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-600">

                        Customers don't need five different apps.
                        Zinokart brings food, groceries, shopping,
                        pharmacy and parcel delivery together inside
                        one seamless experience.

                    </p>

                </motion.div>

                {/* Marketplace Hub */}

                <div className="relative mt-24 flex items-center justify-center">

                    {/* Orbit */}

                    <div className="absolute h-[520px] w-[520px] rounded-full border border-[#F3DFC2]" />

                    <div className="absolute h-[380px] w-[380px] rounded-full border border-[#F6EAD6]" />

                    {/* Center Circle */}

                    <motion.div
                        animate={{
                            scale: [1, 1.03, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                        }}
                        className="relative z-20 flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-[#FDBA2D] to-[#F59E0B] text-white shadow-[0_30px_80px_rgba(249,168,37,.35)]"
                    >
                        <div className="text-center">

                            <h3 className="text-3xl font-black">

                                Zinokart

                            </h3>

                            <p className="mt-1 text-sm text-white/90">

                                Multi-Vendor Platform

                            </p>

                        </div>
                    </motion.div>

                    <div className="mx-auto mt-16 max-w-5xl">

                        <div className="grid gap-6 md:grid-cols-2">

                            {services.slice(0, 4).map((service) => (

                                <ServiceCard
                                    key={service.title}
                                    service={service}
                                />

                            ))}

                        </div>

                        <div className="mt-6 flex justify-center">

                            <div className="w-full md:w-[420px]">

                                <ServiceCard
                                    service={services[4]}
                                />

                            </div>

                        </div>

                    </div>

                    <div className="mt-14 flex flex-wrap justify-center gap-3">

                        {[
                            "One App",
                            "One Wallet",
                            "Live Tracking",
                            "Nearby Stores",
                            "Smart Search",
                            "Secure Payments",
                        ].map((item) => (

                            <div
                                key={item}
                                className="rounded-full border border-[#F0E3CD] bg-white px-5 py-3 text-sm font-medium text-stone-600 shadow-sm"
                            >
                                {item}
                            </div>

                        ))}

                    </div>

                </div>

            </Container>

        </section>
    );
}

interface Service {
    title: string;
    description: string;
    icon: React.ElementType;
}

function ServiceCard({
    service,
}: {
    service: Service;
}) {

    const Icon = service.icon;

    return (

        <motion.div

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
                duration: .4,
            }}

            whileHover={{
                y: -4,
            }}

            className="group rounded-3xl border border-[#EFE4D1] bg-white p-7 transition-all hover:border-[#F9A825]/30 hover:shadow-xl"

        >

            <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4D8]">

                    <Icon
                        size={24}
                        className="text-[#F59E0B]"
                    />

                </div>

                <div>

                    <h3 className="text-xl font-bold">

                        {service.title}

                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-stone-600">

                        {service.description}

                    </p>

                </div>

            </div>

        </motion.div>

    );

}