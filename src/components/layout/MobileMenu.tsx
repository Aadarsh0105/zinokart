import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, Download } from "lucide-react";
import Button from "../ui/Button";

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
}

const links = [
    {
        label: "Solutions",
        href: "#solutions",
    },
    {
        label: "Apps",
        href: "#apps",
    },
    {
        label: "Marketplace",
        href: "#marketplace",
    },
    {
        label: "Testimonials",
        href: "#testimonials",
    },
    {
        label: "FAQ",
        href: "#faq",
    },
];
export default function MobileMenu({
    open,
    onClose,
}: MobileMenuProps) {
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKey);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKey);
        };
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}

                    <motion.div
                        className="fixed inset-0 z-40 bg-black/35 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Drawer */}

                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 28,
                        }}
                        className="fixed right-0 top-0 z-50 flex h-screen w-[340px] max-w-[90%] flex-col border-l border-white/30 bg-white/90 backdrop-blur-2xl"
                    >
                        {/* Header */}

                        <div className="flex items-center justify-between border-b border-stone-100 px-6 py-5">

                            <div>
                                <h3 className="text-lg font-bold">
                                    Zinokart
                                </h3>

                                <p className="text-xs text-stone-500">
                                    Marketplace Platform
                                </p>
                            </div>

                            <button
                                onClick={onClose}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 transition hover:bg-orange-50"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Navigation */}

                        <nav className="flex-1 px-6 py-8">

                            <div className="space-y-2">

                                {links.map((item, index) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        onClick={onClose}
                                        initial={{
                                            opacity: 0,
                                            x: 25,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay: index * 0.08,
                                        }}
                                        className="group flex items-center justify-between rounded-2xl px-4 py-4 text-[15px] font-medium text-stone-700 transition hover:bg-[#FFF8E8] hover:text-[#F59E0B]"
                                    >
                                        {item.label}

                                        <ArrowRight
                                            size={16}
                                            className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                                        />
                                    </motion.a>
                                ))}
                            </div>

                            {/* CTA */}

                            <div className="mt-10 space-y-4">

                                <Button
                                    variant="secondary"
                                    href="#apps"
                                    icon={<Download size={16} />}
                                    className="w-full justify-center"
                                    onClick={onClose}
                                >
                                    Download Apps
                                </Button>


                            </div>
                        </nav>

                        {/* Footer */}

                        <div className="border-t border-stone-100 px-6 py-5">

                            <p className="text-xs leading-6 text-stone-500">
                                Launch Food Delivery, Grocery, Pharmacy,
                                Shopping and Parcel marketplaces from one
                                powerful platform.
                            </p>

                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}