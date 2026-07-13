import { motion } from "framer-motion";

import {
    Rocket,
    Globe2,
    Store,
    BarChart3,
    CreditCard,
    Users,
    CheckCircle2,
} from "lucide-react";

import Container from "./ui/Container";

const benefits = [
    {
        title: "Launch Faster",
        description:
            "Skip months of development and launch your marketplace with production-ready mobile apps and powerful admin tools.",
        icon: Rocket,
    },
    {
        title: "Scale Your Business",
        description:
            "Expand across multiple cities, vendors and thousands of daily orders without changing your platform.",
        icon: Globe2,
    },
    {
        title: "Vendor Management",
        description:
            "Manage vendors, commissions, products and store approvals from one centralized system.",
        icon: Store,
    },
    {
        title: "Business Analytics",
        description:
            "Track revenue, sales, customer growth and order performance with actionable insights.",
        icon: BarChart3,
    },
    {
        title: "Flexible Payments",
        description:
            "Support wallets, online payments, cash on delivery and multiple payment gateways.",
        icon: CreditCard,
    },
    {
        title: "Customer Engagement",
        description:
            "Increase customer retention with offers, notifications, loyalty rewards and personalized promotions.",
        icon: Users,
    },
];

export default function WhyBusinesses() {

    return (

        <section className="relative overflow-hidden bg-[#FFF8F1] pt-20 pb-5" id="why-businesses">

            {/* Background */}

            <div className="absolute left-[-10%] top-10 h-[420px] w-[420px] rounded-full bg-[#FDBA2D]/10 blur-[120px]" />

            <div className="absolute right-[-10%] bottom-0 h-[420px] w-[420px] rounded-full bg-[#F59E0B]/10 blur-[120px]" />

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

                        Why Businesses Choose Zinokart

                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-[-0.05em] text-[#171717] sm:text-6xl">

                        Built to launch.

                        <span className="block bg-gradient-to-r from-[#FDBA2D] to-[#F59E0B] bg-clip-text text-transparent">

                            Built to scale.

                        </span>

                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-600">

                        Zinokart is designed for entrepreneurs and businesses that
                        want to launch modern multi-vendor marketplaces quickly,
                        manage operations efficiently and scale confidently across
                        multiple cities and categories.

                    </p>

                </motion.div>

                {/* Benefits Grid */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {benefits.map((benefit, index) => (

                        <BenefitCard
                            key={benefit.title}
                            benefit={benefit}
                            delay={index * 0.08}
                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}

interface Benefit {
    title: string;
    description: string;
    icon: any;
}

function BenefitCard({
    benefit,
    delay,
}: {
    benefit: Benefit;
    delay: number;
}) {

    const Icon = benefit.icon;

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 25,
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
                delay,
            }}

            whileHover={{
                y: -5,
            }}

            className="group rounded-[32px] border border-[#EFE3D1] bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,.05)] transition-all duration-300 hover:border-[#F9A825]/30 hover:shadow-[0_22px_55px_rgba(0,0,0,.08)]"

        >

            {/* Icon */}

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF5DD] transition-all group-hover:bg-[#FDE8B5]">

                <Icon
                    size={30}
                    className="text-[#F59E0B]"
                />

            </div>

            {/* Title */}

            <h3 className="mt-8 text-2xl font-black tracking-[-0.03em] text-[#171717]">

                {benefit.title}

            </h3>

            {/* Description */}

            <p className="mt-4 text-[15px] leading-7 text-stone-600">

                {benefit.description}

            </p>

            {/* Divider */}

            <div className="my-6 h-px bg-[#F3E7D4]" />

            {/* Highlights */}

            <div className="space-y-3">

                <FeatureItem text="Easy to configure" />

                <FeatureItem text="Enterprise ready" />

                <FeatureItem text="Built for growth" />

            </div>

        </motion.div>

    );

}

function FeatureItem({
    text,
}: {
    text: string;
}) {

    return (

        <div className="flex items-center gap-3">

            <CheckCircle2
                size={17}
                className="text-[#F9A825]"
            />

            <span className="text-sm text-stone-700">

                {text}

            </span>

        </div>

    );

}