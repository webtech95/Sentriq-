import { useEffect, useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import Waitlist from "./pages/Waitlist";


const links = [
    { name: "Home", href: "/" },
    { name: "Platform", href: "/platform" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/waitlist" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "border-b border-white/10 bg-[#07090D]/80 backdrop-blur-xl"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}

                <motion.a
                    href="/"
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.04 }}
                >
                    <img
                        src="/Sentriq-Logo1.png"
                        alt="Sentriq Logo"
                        className="h-11 w-11 rounded-xl object-contain"
                    />

                    {/* <div>
                        <h2 className="text-xl font-bold tracking-wide text-white">
                            Sentriq
                        </h2>

                        <p className="-mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-400">
                            AI Security
                        </p>
                    </div> */}
                </motion.a>
                {/* Desktop */}

                <nav className="lg:flex hidden items-center gap-2 backdrop-blur-xl">
                    {links.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                                `relative overflow-hidden rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${isActive
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span className="relative z-10">{item.name}</span>

                                    {/* Bottom Gradient */}
                                    <span
                                        className={`absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-all duration-500 ${isActive ? "w-full" : ""
                                            }`}
                                    />

                                    {/* Hover Glow */}
                                    <span
                                        className={`absolute inset-0 rounded-full transition duration-300 ${isActive
                                            ? "bg-white/[0.04]"
                                            : "hover:bg-white/[0.03]"
                                            }`}
                                    />
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Right */}

                <div className="hidden items-center gap-4 lg:flex">

                    <button className="rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30">
                        <Link to="/Waitlist">
                            Request Demo
                        </Link>
                    </button>
                </div>

                {/* Mobile */}

                <button
                    onClick={() => setOpen(!open)}
                    className="text-white lg:hidden"
                >
                    {open ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden border-t border-white/10 bg-[#07090D]/95 backdrop-blur-2xl"
                    >
                        <div className="flex flex-col px-6 py-6 text-center">

                            {links.map((item) => (
                                <NavLink key={item.name} to={item.href} onClick={() => setOpen(false)}>
                                    {({ isActive }) => (
                                        <div
                                            className={`relative py-4 border-b border-white/5 transition-colors duration-300 ${isActive ? "text-white" : "text-slate-300 hover:text-cyan-400"
                                                }`}
                                        >
                                            <span>{item.name}</span>

                                            {/* Active Bottom Border */}
                                            <span
                                                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-all duration-300 ${isActive ? "w-full" : "w-0"
                                                    }`}
                                            />
                                        </div>
                                    )}
                                </NavLink>
                            ))}

                            <button className="mt-6 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 py-3 font-semibold text-black transition hover:scale-[1.02]">
                                <Link to="/Waitlist">
                                    Request Demo
                                </Link>
                            </button>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}