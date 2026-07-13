import { motion } from "framer-motion";

import Container from "./ui/Container";


export default function CustomerExperience() {
    return (
        <section className="relative overflow-hidden bg-[#FFFDF8] pt-20 pb-5" id="one-app">

            <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#FDBA2D]/10 blur-[130px]" />

            <Container>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mx-auto max-w-3xl text-center"
                >

                    <span className="rounded-full bg-[#FFF3D5] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B76B00]">

                        One App • Everyday Needs

                    </span>

                    <h2 className="mt-6 text-5xl font-black leading-tight tracking-[-0.04em] text-[#171717]">

                        Everything your customers expect.

                        <span className="block text-[#F9A825]">

                            One beautiful experience.

                        </span>

                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-600">

                        Instead of downloading separate apps for food delivery,
                        grocery shopping, pharmacies or parcel services,
                        customers enjoy everything inside one familiar,
                        beautifully connected experience.

                    </p>

                </motion.div>
            </Container>
        </section>
    )
}