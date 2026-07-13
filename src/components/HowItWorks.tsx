import { motion } from "framer-motion";
import {
    UserRound,
    Store,
    Bike,
    CircleCheckBig,
    CheckCircle2,
} from "lucide-react";

import Container from "./ui/Container";

const workflow = [
    {
        number: "01",
        title: "Customer",
        subtitle: "Customer App",
        description:
            "Customers discover nearby stores, browse products and place orders in seconds.",
        icon: UserRound,
        features: [
            "Browse nearby stores",
            "Secure checkout",
            "Live order tracking",
        ],
    },
    {
        number: "02",
        title: "Store",
        subtitle: "Store App",
        description:
            "Vendors instantly receive orders, prepare items and manage inventory.",
        icon: Store,
        features: [
            "Accept orders",
            "Manage products",
            "Prepare delivery",
        ],
    },
    {
        number: "03",
        title: "Delivery",
        subtitle: "Delivery App",
        description:
            "Delivery partners receive pickup requests and navigate efficiently.",
        icon: Bike,
        features: [
            "Pickup requests",
            "Navigation",
            "Delivery updates",
        ],
    },
    {
        number: "04",
        title: "Completed",
        subtitle: "Customer",
        description:
            "Orders are delivered successfully and customers receive instant updates.",
        icon: CircleCheckBig,
        features: [
            "Delivered",
            "Notifications",
            "Customer Review",
        ],
    },
];

export default function HowItWorks() {

    return (

        <section className="relative overflow-hidden bg-[#FFFDF9] pt-20 pb-5" id="how-it-works">

            <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#FDBA2D]/10 blur-[140px]" />

            <Container>

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >

                    <span className="inline-flex items-center rounded-full border border-[#F4DFC2] bg-[#FFF6E6] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B76B00]">

                        Marketplace Workflow

                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-[-0.05em] text-[#171717] sm:text-6xl">

                        Every order follows

                        <span className="block bg-gradient-to-r from-[#FDBA2D] to-[#F59E0B] bg-clip-text text-transparent">

                            one connected journey.

                        </span>

                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-600">

                        Every order moves effortlessly between the Customer App,
                        Store App and Delivery App. Everyone stays connected with
                        real-time updates until the order reaches the customer.

                    </p>

                </motion.div>

                {/* Workflow Stats */}

                <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-5 lg:grid-cols-4">

                    {[
                        {
                            value: "3",
                            label: "Dedicated Apps",
                        },
                        {
                            value: "100%",
                            label: "Real-Time Sync",
                        },
                        {
                            value: "24/7",
                            label: "Order Tracking",
                        },
                        {
                            value: "∞",
                            label: "Scalable Orders",
                        },
                    ].map((item) => (

                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .4 }}
                            className="rounded-3xl border border-[#EFE4D1] bg-white px-6 py-6 text-center shadow-sm"
                        >

                            <h3 className="text-3xl font-black text-[#171717]">

                                {item.value}

                            </h3>

                            <p className="mt-2 text-sm text-stone-500">

                                {item.label}

                            </p>

                        </motion.div>

                    ))}

                </div>

                {/* Workflow */}

                <div className="relative mt-24">

                    {/* Desktop Connector */}

                    <div className="absolute left-0 right-0 top-[110px] hidden lg:block">

                        <div className="mx-auto h-[3px] max-w-[82%] rounded-full bg-[#F4E3C5]" />

                        <div className="absolute left-[9%] right-[9%] top-0 h-[3px] rounded-full bg-gradient-to-r from-[#FDBA2D] via-[#F9A825] to-[#FDBA2D]" />

                    </div>

                    <div className="grid gap-8 lg:grid-cols-4">

                        {workflow.map((item, index) => (

                            <WorkflowCard
                                key={item.title}
                                item={item}
                                isLast={index === workflow.length - 1}
                            />

                        ))}

                    </div>

                </div>

            </Container>

        </section>

    );

}

interface WorkflowItem {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    icon: any;
    features: string[];
}

function WorkflowCard({
    item,
}: {
    item: WorkflowItem;
    isLast?: boolean;
}) {

    const Icon = item.icon;

    return (

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
                duration: .45,
            }}
            whileHover={{
                y: -6,
            }}
            className="relative"
        >

            <div className="rounded-[34px] border border-[#EFE4D1] bg-white p-8 shadow-[0_15px_45px_rgba(0,0,0,.05)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,.08)]">

                {/* Step */}

                <div className="flex items-center justify-between">

                    <span className="rounded-full bg-[#FFF4D8] px-3 py-1 text-xs font-bold text-[#C47A00]">

                        STEP {item.number}

                    </span>

                    <div className="h-10 w-10 rounded-full bg-[#FFF8EB]" />

                </div>

                {/* Icon */}

                <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FFF5DE]">

                    <Icon
                        size={34}
                        className="text-[#F59E0B]"
                    />

                </div>

                {/* Title */}

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#B76B00]">

                    {item.subtitle}

                </p>

                <h3 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[#171717]">

                    {item.title}

                </h3>

                {/* Description */}

                <p className="mt-4 text-[15px] leading-7 text-stone-600">

                    {item.description}

                </p>

                <div className="my-6 h-px bg-[#F4E7D6]" />

                {/* Features */}

                <div className="space-y-4">

                    {item.features.map((feature) => (

                        <div
                            key={feature}
                            className="flex items-center gap-3"
                        >

                            <CheckCircle2
                                size={18}
                                className="text-[#F9A825]"
                            />

                            <span className="text-[15px] text-stone-700">

                                {feature}

                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </motion.div>

    );

}