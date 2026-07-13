import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
} from "lucide-react";

import Container from "../ui/Container";
import Logo from "../layout/Logo";

export default function Footer() {

    return (

        <footer className="border-t border-[#EFE3D1] bg-white">

            <Container>

                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

                    {/* Company */}

                    <div>

                        <Logo />

                        <p className="mt-5 max-w-xs text-[15px] leading-7 text-stone-600">

                            Zinokart helps businesses launch Food Delivery,
                            Grocery, Shopping, Pharmacy, Parcel and Cab
                            Booking marketplaces with one complete
                            multi-vendor ecosystem.

                        </p>

                    </div>

                    {/* Company */}

                    <FooterColumn
                        title="Company"
                        links={[
                            { label: "Home", href: "#hero" },
                            { label: "Three Apps", href: "#three-apps" },
                            { label: "Services", href: "#services" },
                            { label: "Testimonials", href: "#testimonials" },
                            { label: "FAQ", href: "#faq" },
                        ]}
                    />

                    {/* Solutions */}

                    <FooterColumn
                        title="Services"
                        links={[
                            { label: "Food Delivery", href: "#services" },
                            { label: "Grocery", href: "#services" },
                            { label: "Shopping", href: "#services" },
                            { label: "Pharmacy", href: "#services" },
                            { label: "Parcel", href: "#services" },
                            { label: "Cab Booking", href: "#services" },
                        ]}
                    />

                    {/* Contact */}

                    <div>

                        <h3 className="text-lg font-bold text-[#171717]">

                            Contact

                        </h3>

                        <div className="mt-6 space-y-4">

                            <div className="flex items-center gap-3 text-[15px] text-stone-600">

                                <Mail
                                    size={18}
                                    className="text-[#F9A825]"
                                />

                                hello@zinokart.com

                            </div>

                            <div className="flex items-center gap-3 text-[15px] text-stone-600">

                                <Phone
                                    size={18}
                                    className="text-[#F9A825]"
                                />

                                +91 98765 43210

                            </div>

                            <div className="flex items-center gap-3 text-[15px] text-stone-600">

                                <MapPin
                                    size={18}
                                    className="text-[#F9A825]"
                                />

                                Ahmedabad, India

                            </div>

                        </div>

                        {/* Social */}

                        <div className="mt-7 flex gap-3">

                            {[
                                Facebook,
                                Instagram,
                                Linkedin,
                                Twitter,
                            ].map((Icon, index) => (

                                <a
                                    key={index}
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#EFE3D1] bg-[#FFFDF8] transition-all duration-300 hover:border-[#F9A825] hover:bg-[#FFF4D8]"
                                >

                                    <Icon
                                        size={18}
                                        className="text-stone-700"
                                    />

                                </a>

                            ))}

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="flex flex-col items-center justify-between gap-5 border-t border-[#EFE3D1] py-6 text-sm text-stone-500 md:flex-row">

                    <p>

                        © {new Date().getFullYear()} Zinokart. All rights reserved.

                    </p>

                    <div className="flex flex-wrap items-center gap-6">

                        <a
                            href="#"
                            className="transition hover:text-[#F9A825]"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-[#F9A825]"
                        >
                            Terms & Conditions
                        </a>

                        <a
                            href="#top"
                            className="flex items-center gap-2 font-medium text-[#171717] transition hover:text-[#F9A825]"
                        >

                            Back to Top

                            <ArrowUpRight size={16} />

                        </a>

                    </div>

                </div>

            </Container>

        </footer>

    );

}

interface FooterLink {
    label: string;
    href: string;
}

interface FooterColumnProps {
    title: string;
    links: FooterLink[];
}

function FooterColumn({
    title,
    links,
}: FooterColumnProps) {

    return (

        <div>

            <h3 className="text-lg font-bold text-[#171717]">
                {title}
            </h3>

            <ul className="mt-6 space-y-4">

                {links.map((link) => (

                    <li key={link.label}>

                        <a
                            href={link.href}
                            className="text-[15px] text-stone-600 transition hover:text-[#F9A825]"
                        >
                            {link.label}
                        </a>

                    </li>

                ))}

            </ul>

        </div>

    );

}