import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const navItems = [
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

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const [active, setActive] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);

            const sections = navItems.map((i) =>
                document.querySelector(i.href)
            );

            let current = "";

            sections.forEach((section, index) => {
                if (!section) return;

                const top =
                    (section as HTMLElement).offsetTop - 120;

                if (window.scrollY >= top) {
                    current = navItems[index].href;
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    return (
        <>
            <header className="fixed inset-x-0 top-5 z-50">

                <Container>

                    <motion.div
                        initial={{
                            y: -60,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            scale: scrolled ? 0.985 : 1,
                        }}
                        transition={{
                            duration: 0.45,
                        }}
                        className={`
              mx-auto
              flex
              items-center
              justify-between
              rounded-full
              border
              px-6
              transition-all
              duration-300
              ${scrolled
                                ? "h-[66px] bg-white/85 backdrop-blur-2xl border-[#ECE7DF] shadow-[0_18px_45px_rgba(0,0,0,.08)]"
                                : "h-[72px] bg-white/70 backdrop-blur-xl border-white/60 shadow-[0_12px_35px_rgba(0,0,0,.05)]"
                            }
            `}
                    >
                        <Logo />

                        {/* Desktop */}

                        <nav className="hidden items-center gap-9 lg:flex">

                            {navItems.map((item) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    whileHover={{
                                        y: -2,
                                    }}
                                    className="relative text-[15px] font-medium text-stone-600 transition hover:text-[#171717]"
                                >
                                    {item.label}

                                    <span
                                        className={`
                      absolute
                      left-0
                      -bottom-3
                      h-[2px]
                      rounded-full
                      bg-[#F9A825]
                      transition-all
                      duration-300
                      ${active === item.href
                                                ? "w-full"
                                                : "w-0"
                                            }
                    `}
                                    />
                                </motion.a>
                            ))}
                        </nav>

                        {/* Desktop Buttons */}

                        <div className="hidden items-center gap-3 lg:flex">

                            <Button
                                variant="secondary"
                                href="#apps"
                            >
                                Download
                            </Button>
                        </div>

                        {/* Mobile */}

                        <button
                            onClick={() =>
                                setMenuOpen(true)
                            }
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF8E8] transition hover:bg-[#FFE7B5] lg:hidden"
                        >
                            <Menu size={20} />
                        </button>

                    </motion.div>

                </Container>

            </header>

            <MobileMenu
                open={menuOpen}
                onClose={() =>
                    setMenuOpen(false)
                }
            />
        </>
    );
}