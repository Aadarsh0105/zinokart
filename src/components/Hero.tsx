import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "./ui/Container";
import { AppStoreLinks } from "./AppStoreLinks";

const customerScreen = "/1000113308.png";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-40" id="hero">

            {/* Background */}

            <div className="absolute inset-0 -z-20 bg-[#FFFDF9]" />

            {/* Orange Glow */}

            <div className="absolute left-[-15%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#FDBA2D]/20 blur-[120px]" />

            <div className="absolute right-[-15%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#F59E0B]/10 blur-[150px]" />

            {/* Grid */}

            <div className="absolute inset-0 -z-10 opacity-[0.04]">

                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

            </div>

            <Container>

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* LEFT */}

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* Small Badge */}

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#F4DFC2] bg-white px-4 py-2 shadow-sm">

                            <span className="h-2 w-2 rounded-full bg-[#F9A825]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#B36A00]">
                                Built for Modern Marketplaces
                            </span>

                        </div>

                        {/* Heading */}

                        <h1 className="mt-8 max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#171717] sm:text-6xl xl:text-7xl">

                            Build the Future
                            <br />

                            of{" "}

                            <span className="bg-gradient-to-r from-[#FDBA2D] via-[#F9A825] to-[#E58A00] bg-clip-text text-transparent">

                                Local Commerce.

                            </span>

                        </h1>

                        {/* Description */}

                        <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">

                            Launch Food Delivery, Grocery, Pharmacy,
                            Shopping and Parcel businesses from one
                            beautifully crafted multi-vendor platform
                            designed for modern cities.

                        </p>

                        {/* Trust Items */}

                        <div className="mt-10 grid grid-cols-2 gap-4">

                            {[
                                "Multi Vendor",
                                "Multi Category",
                                "Multi Country",
                                "Multi Language",
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-2"
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

                        {/* App Store */}

                        <div className="mt-10 hidden lg:block">

                            <AppStoreLinks />

                        </div>

                        {/* Small Text */}

                        <p className="mt-5 max-w-md text-sm leading-6 text-stone-500">

                            Trusted by businesses building modern
                            marketplaces across food, grocery,
                            pharmacy, shopping and parcel delivery.

                        </p>

                    </motion.div>

                    {/* RIGHT */}

                    {/* RIGHT */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex items-center justify-center"
                    >

                        {/* Background Glow */}

                        <div className="absolute h-[480px] w-[480px] rounded-full bg-[#FDBA2D]/20 blur-[100px]" />

                        {/* Decorative Ring */}

                        <div className="absolute h-[430px] w-[430px] rounded-full border border-[#F4DFC2]" />
                        {/* Phone */}

                        <motion.div className="relative z-10
w-[230px]
sm:w-[260px]
md:w-[300px]
lg:w-[320px]
overflow-hidden
rounded-[36px]
sm:rounded-[40px]
lg:rounded-[42px]
border-[8px]
sm:border-[9px]
lg:border-[10px]
border-[#171717]
bg-white
shadow-[0_35px_80px_rgba(0,0,0,.18)]
"
                        >

                            <img
                                src={customerScreen}
                                alt="Zinokart Customer App"
                                className="w-full"
                            />

                        </motion.div>
                        {/* Mobile Download Buttons */}

                    </motion.div>
                        <div className="flex justify-center lg:hidden">

                            <AppStoreLinks />

                        </div>

                </div>

            </Container>

        </section>
    );
}