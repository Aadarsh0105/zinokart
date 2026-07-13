import { motion } from "framer-motion";

import {
    Smartphone,
    Store,
    Bike,
    CheckCircle2,
} from "lucide-react";

import Container from "./ui/Container";
import { AppStoreLinks } from "./AppStoreLinks";

const apps = [
    {
        title: "Customer App",
        subtitle:
            "Discover, shop and track every order from one seamless marketplace.",
        image: "/1000113308.png",
        icon: Smartphone,
        features: [
            "Discover nearby stores",
            "Real-time order tracking",
            "Wallet & exclusive offers",
        ],
    },
    {
        title: "Store App",
        subtitle:
            "Manage your store, products and customer orders with complete confidence.",
        image: "/1000113308.png",
        icon: Store,
        features: [
            "Accept & manage orders",
            "Product & inventory control",
            "Sales insights & earnings",
        ],
    },
    {
        title: "Delivery App",
        subtitle:
            "Deliver orders faster using smart navigation and live delivery updates.",
        image: "/1000113308.png",
        icon: Bike,
        features: [
            "Pickup & delivery requests",
            "GPS navigation support",
            "Daily earnings overview",
        ],
    },
];

export default function ThreeApps() {

    return (

        <section className="bg-white pt-20 pb-5" id="three-apps">

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

                        The Zinokart Ecosystem

                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-[-0.05em] text-[#171717] sm:text-6xl">

                        One Marketplace.

                        <span className="block bg-gradient-to-r from-[#FDBA2D] to-[#F59E0B] bg-clip-text text-transparent">

                            Three Purpose-Built Apps.

                        </span>

                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-600">

                        Every participant in your marketplace gets
                        an experience designed specifically for
                        their role. Customers shop effortlessly,
                        stores manage operations efficiently,
                        and delivery partners complete orders
                        with confidence.

                    </p>

                </motion.div>

                {/* Quick Stats */}

                <div className="mx-auto mt-14 flex max-w-5xl flex-wrap items-center justify-center gap-5">

                    {[
                        {
                            value: "3",
                            label: "Dedicated Apps",
                        },

                        {
                            value: "25+",
                            label: "Business Modules",
                        },

                        {
                            value: "Multi",
                            label: "Country Ready",
                        },
                        {
                            value: "Multi",
                            label: "Language Ready",
                        },
                    ].map((item) => (

                        <div
                            key={item.label}
                            className="rounded-2xl border border-[#EFE3D1] bg-[#FFFDF9] px-7 py-5 shadow-sm"
                        >

                            <h3 className="text-3xl font-black text-[#171717]">

                                {item.value}

                            </h3>

                            <p className="mt-1 text-sm text-stone-500">

                                {item.label}

                            </p>

                        </div>

                    ))}

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    {apps.map((app) => (

                        <AppCard
                            key={app.title}
                            app={app}
                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}

interface App {
    title: string;
    subtitle: string;
    image: string;
    icon: any;
    features: string[];
}

function AppCard({
    app,
}: {
    app: App;
    featured?: boolean;
}) {

    const Icon = app.icon;

    return (

        <motion.article

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
                duration: .5,
            }}

            whileHover={{
                y: -6,
            }}

            className={`relative overflow-hidden rounded-[36px] border bg-white transition-all duration-300
border-[#EFE4D1] shadow-[0_20px_50px_rgba(0,0,0,.05)]

                }`}

        >
            <div className="p-8">

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#FFF4D7]">

                    <Icon
                        size={30}
                        className="text-[#F59E0B]"
                    />

                </div>

                <h3 className="mt-8 text-3xl font-black tracking-[-0.03em]">

                    {app.title}

                </h3>

                <p className="mt-4 text-[15px] leading-7 text-stone-600">

                    {app.subtitle}

                </p>

                {/* Features */}

                <div className="mt-8 space-y-4">

                    {app.features.map((feature) => (

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

                {/* Divider */}

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#EFE4D1] to-transparent" />

                {/* App Preview */}

                <div className="relative flex justify-center">

                    {/* Glow */}

                    <div className="absolute bottom-0 h-32 w-44 rounded-full bg-[#FDBA2D]/20 blur-3xl" />

                    <div
                        className={`relative overflow-hidden rounded-[34px] border-[8px] border-[#171717] bg-white shadow-[0_25px_60px_rgba(0,0,0,.12)] w-[220px]
                            }`}
                    >

                        <img
                            src={app.image}
                            alt={app.title}
                            className="w-full"
                        />

                    </div>

                </div>
                <div className="mt-8 flex justify-center">
                    <AppStoreLinks />
                </div>
            </div>

        </motion.article>

    );

}