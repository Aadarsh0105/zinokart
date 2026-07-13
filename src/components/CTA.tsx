import { motion } from "framer-motion";
import {
    Smartphone,
    Store,
    Bike,
    CheckCircle2,
} from "lucide-react";

import Container from "./ui/Container";
import Button from "./ui/Button";

const apps = [
    {
        title: "Customer App",
        description: "Browse, order and track every purchase in one seamless marketplace.",
        icon: Smartphone,
    },
    {
        title: "Store App",
        description: "Manage products, orders and earnings from one intuitive dashboard.",
        icon: Store,
    },
    {
        title: "Delivery App",
        description: "Accept deliveries, navigate efficiently and complete every order.",
        icon: Bike,
    },
];

const highlights = [
    "Android & iOS",
    "Multi-Country Ready",
    "Source Code Included",
    "Fully Customizable",
    "Lifetime Updates",
    "Technical Support",
];

export default function CTA() {

    return (

        <section className="relative overflow-hidden bg-[#171717] py-32" id="cta">

            {/* Background Glow */}

            <div className="absolute left-[-10%] top-[-15%] h-[450px] w-[450px] rounded-full bg-[#FDBA2D]/20 blur-[140px]" />

            <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-[#F59E0B]/15 blur-[160px]" />

            <Container>

                {/* Heading */}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    transition={{
                        duration: .6,
                    }}

                    className="mx-auto max-w-4xl text-center"

                >

                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FDBA2D]">

                        Ready To Launch?

                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl">

                        Build your complete

                        <span className="block text-[#FDBA2D]">

                            marketplace ecosystem.

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-300">

                        Launch Customer, Store and Delivery applications
                        together with one powerful admin platform designed
                        for modern multi-vendor businesses.

                    </p>

                </motion.div>

                {/* Three Apps */}

                <div className="mx-auto mt-20 grid max-w-6xl gap-6 lg:grid-cols-3">

                    {apps.map((app) => {

                        const Icon = app.icon;

                        return (

                            <motion.div

                                key={app.title}

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
                                }}

                                whileHover={{
                                    y: -6,
                                }}

                                className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#FDBA2D]/40 hover:bg-white/[0.08]"

                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FDBA2D]/15">

                                    <Icon
                                        size={30}
                                        className="text-[#FDBA2D]"
                                    />

                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-white">

                                    {app.title}

                                </h3>

                                <p className="mt-4 leading-7 text-stone-300">

                                    {app.description}

                                </p>

                                <div className="mt-8 space-y-3">

                                    <div className="flex items-center gap-3">

                                        <CheckCircle2
                                            size={17}
                                            className="text-[#FDBA2D]"
                                        />

                                        <span className="text-sm text-stone-300">

                                            Production Ready

                                        </span>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <CheckCircle2
                                            size={17}
                                            className="text-[#FDBA2D]"
                                        />

                                        <span className="text-sm text-stone-300">

                                            Flutter Based

                                        </span>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <CheckCircle2
                                            size={17}
                                            className="text-[#FDBA2D]"
                                        />

                                        <span className="text-sm text-stone-300">

                                            Fully Customizable

                                        </span>

                                    </div>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

                {/* Trust Badges */}

                <div className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-4">

                    {highlights.map((item) => (

                        <div
                            key={item}
                            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
                        >

                            <CheckCircle2
                                size={16}
                                className="text-[#FDBA2D]"
                            />

                            <span className="text-sm font-medium text-stone-200">

                                {item}

                            </span>

                        </div>

                    ))}

                </div>

                {/* Action Buttons */}

                <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">

                    <Button
                        variant="secondary"
                        className="min-w-[220px] border-white/15 bg-white/5 text-white/100 hover:bg-white hover:text-[#171717]"
                    >
                        Download Apps
                    </Button>

                </div>

                {/* Divider */}

                <div className="mx-auto mt-16 h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Bottom Section */}

                <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center gap-8">

                    <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">

                        Perfect for Every Local Marketplace

                    </p>

                    <div className="flex flex-wrap justify-center gap-4">

                        {[
                            "Food Delivery",
                            "Grocery",
                            "hopping",
                            "Pharmacy",
                            "Parcel",
                            "Cab Booking",
                        ].map((item) => (

                            <div
                                key={item}
                                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-stone-200 backdrop-blur-xl transition hover:border-[#FDBA2D]/40 hover:bg-white/10"
                            >

                                {item}

                            </div>

                        ))}

                    </div>

                    {/* Small Trust Text */}

                    <p className="max-w-3xl text-center text-base leading-8 text-stone-400">

                        Whether you're building a food delivery platform,
                        grocery marketplace, pharmacy solution, shopping app,
                        parcel logistics or cab booking service,
                        Zinokart provides everything required to launch,
                        manage and scale your business from a single platform.

                    </p>

                </div>

            </Container>

        </section>

    );

}