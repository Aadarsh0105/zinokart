import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import Container from "./ui/Container";

const faqs = [
    {
        question: "How long does it take to launch a marketplace?",
        answer:
            "Most businesses can launch within a few days after customization, configuration and deployment.",
    },
    {
        question: "Can I customize the design and features?",
        answer:
            "Yes. Zinokart can be customized to match your branding, workflows and business requirements.",
    },
    {
        question: "Is Zinokart ready for multiple countries?",
        answer:
            "Yes. The platform supports multiple countries, currencies, languages and location-based services.",
    },
    {
        question: "Can I launch only one business category?",
        answer:
            "Absolutely. You can start with Food Delivery, Grocery, Pharmacy, Shopping, Parcel or Cab Booking and enable more categories whenever you need.",
    },
    {
        question: "Are Android and iOS apps included?",
        answer:
            "Yes. Customer, Store and Delivery applications are available for both Android and iOS.",
    },
    {
        question: "Do you provide installation and technical support?",
        answer:
            "Yes. We help with installation, deployment, updates and ongoing technical support.",
    },
];

export default function FAQ() {

    const [open, setOpen] = useState(0);

    return (

        <section className="bg-white pt-20 pb-5" id="faq">

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

                        Frequently Asked Questions

                    </span>

                    <h2 className="mt-8 text-5xl font-black leading-[1.05] tracking-[-0.05em] text-[#171717] sm:text-6xl">

                        Everything you need

                        <span className="block bg-gradient-to-r from-[#FDBA2D] to-[#F59E0B] bg-clip-text text-transparent">

                            before getting started.

                        </span>

                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-600">

                        Here are answers to the most common questions about
                        launching, customizing and growing your marketplace
                        with Zinokart.

                    </p>

                </motion.div>

                {/* FAQ List */}

                <div className="mx-auto mt-20 max-w-4xl space-y-5">

                    {faqs.map((faq, index) => (

                        <FAQItem
                            key={faq.question}
                            faq={faq}
                            open={open === index}
                            onClick={() =>
                                setOpen(open === index ? -1 : index)
                            }
                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}

interface FAQ {
    question: string;
    answer: string;
}

function FAQItem({
    faq,
    open,
    onClick,
}: {
    faq: FAQ;
    open: boolean;
    onClick: () => void;
}) {

    return (

        <motion.div
            layout
            transition={{
                duration: 0.3,
            }}
            className="overflow-hidden rounded-[28px] border border-[#EFE4D1] bg-white shadow-[0_10px_35px_rgba(0,0,0,.04)]"
        >

            {/* Question */}

            <button
                onClick={onClick}
                className="flex w-full items-center justify-between px-8 py-7 text-left transition hover:bg-[#FFFBF5]"
            >

                <h3 className="pr-6 text-lg font-bold leading-7 text-[#171717]">

                    {faq.question}

                </h3>

                <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                        open
                            ? "bg-[#F9A825] text-white"
                            : "bg-[#FFF4D8] text-[#F59E0B]"
                    }`}
                >

                    {open ? (
                        <Minus size={18} />
                    ) : (
                        <Plus size={18} />
                    )}

                </div>

            </button>

            {/* Answer */}

            <motion.div
                initial={false}
                animate={{
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                }}
                transition={{
                    duration: 0.3,
                }}
                className="overflow-hidden"
            >

                <div className="border-t border-[#F3E7D4] px-8 py-6">

                    <p className="text-[15px] leading-8 text-stone-600">

                        {faq.answer}

                    </p>

                </div>

            </motion.div>

        </motion.div>

    );

}