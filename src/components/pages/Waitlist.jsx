import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useCountUp } from "react-countup";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import FadeIn from '../FadeIn';

function Waitlist() {

    useCountUp({
        ref: "counter",
        end: 1248,
        duration: 6,
    });

    const [formData, setFormData] = useState({
        email: '',
        company: '',
        size: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here (e.g., API call)
        alert(`Thank you for joining! We'll contact you at ${formData.email}`);
        setFormData({ email: '', company: '', size: '' });
    };

    return (
        <main className="relative overflow-hidden bg-[#050816] text-white pt-32">

            {/* Background */}

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[-200px] top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[160px]" />
                <div className="absolute right-[-180px] top-40 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[160px]" />
            </div>

            {/* Hero */}
            <FadeIn>
                <section className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* Left */}

                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .6 }}
                        >

                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                                Early Access
                            </span>

                            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
                                Get early access
                                <br />
                                to predictive
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    {" "}cybersecurity.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                                Join security teams already evaluating Sentriq.
                                Be among the first to experience AI-powered
                                threat detection and automated response.
                            </p>

                            {/* Live Counter */}

                            <div className="mt-10 flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">

                                <div>

                                    <h2 className="text-5xl font-bold text-cyan-300">
                                        <span id="counter"></span>

                                    </h2>

                                    <p className="mt-2 text-slate-400">
                                        Organizations Already Waiting
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                        {/* Form */}

                        <motion.div
                            initial={{ opacity: 0, x: 35 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
                        >

                            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                                <ShieldCheck
                                    size={30}
                                    className="text-cyan-300"
                                />

                            </div>

                            <h2 className="text-3xl font-bold">
                                Request Early Access
                            </h2>

                            <p className="mt-3 text-slate-400">
                                Reserve your place in the beta program.
                            </p>

                            <form className="mt-10 space-y-5" onSubmit={handleSubmit}>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Work Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-[#0B1020] px-5 py-4 outline-none placeholder:text-slate-500"
                                />

                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-[#0B1020] px-5 py-4 outline-none placeholder:text-slate-500"
                                />

                                <select
                                    name="size"
                                    value={formData.size}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-[#0B1020] px-5 py-4 outline-none"
                                >

                                    <option value="">
                                        Company Size
                                    </option>

                                    <option value="1-50">
                                        1–50 Employees
                                    </option>

                                    <option value="51-200">
                                        51–200 Employees
                                    </option>

                                    <option value="201-500">
                                        201–500 Employees
                                    </option>

                                    <option value="500+">
                                        500+ Employees
                                    </option>

                                </select>

                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 py-4 font-semibold transition hover:scale-[1.02]"
                                >
                                    Request Early Access

                                    <ArrowRight size={18} />

                                </button>

                            </form>

                            <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">

                                <Sparkles
                                    size={18}
                                    className="text-cyan-300"
                                />

                                No spam. We'll only contact you about early access.

                            </div>

                        </motion.div>

                    </div>

                </section>
            </FadeIn>
            {/* ================================================= */}
            {/* What Early Access Includes */}
            {/* ================================================= */}

            <FadeIn delay={0.2}>
                <section className="mx-auto mt-25 max-w-7xl px-6">

                    <div className="text-center">

                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                            Early Access Benefits
                        </span>

                        <h2 className="mt-8 text-5xl font-bold md:text-6xl">
                            More than just
                            <br />
                            beta access.
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                            Early customers get direct access to the Sentriq team and help
                            shape the future of predictive cybersecurity.
                        </p>

                    </div>

                    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                title: "Priority Access",
                                text: "Be among the first organizations to use Sentriq before public launch.",
                            },
                            {
                                title: "Guided Onboarding",
                                text: "Work directly with our team for deployment and setup.",
                            },
                            {
                                title: "Influence Roadmap",
                                text: "Share feedback and help prioritize future platform features.",
                            },
                            {
                                title: "Dedicated Support",
                                text: "Receive direct assistance throughout the early-access program.",
                            },
                        ].map((item) => (

                            <motion.div
                                key={item.title}
                                whileHover={{ y: -8 }}
                                className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
                            >

                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">

                                    <ShieldCheck className="text-cyan-300" />

                                </div>

                                <h3 className="text-2xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-5 leading-8 text-slate-400">
                                    {item.text}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </section>
            </FadeIn>
            {/* ================================================= */}
            {/* FAQ */}
            {/* ================================================= */}

            <FadeIn delay={0.3}>
                <section className="mx-auto mt-25 max-w-4xl px-6">

                    <div className="text-center">

                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                            FAQ
                        </span>

                        <h2 className="mt-8 text-5xl font-bold">
                            Frequently Asked Questions
                        </h2>

                    </div>

                    <div className="mt-16 space-y-6">

                        {[
                            {
                                q: "Who is early access for?",
                                a: "Sentriq is designed for mid-market security and IT teams looking for predictive threat detection and automated response.",
                            },
                            {
                                q: "Is there any cost to join the waitlist?",
                                a: "No. Joining the waitlist is free and secures your place for early access updates.",
                            },
                            {
                                q: "Will I receive onboarding support?",
                                a: "Yes. Early-access participants receive guided onboarding and direct communication with our team.",
                            },
                            {
                                q: "Can multiple team members join?",
                                a: "Absolutely. You can invite additional team members once your organization is accepted.",
                            },
                        ].map((faq) => (

                            <details
                                key={faq.q}
                                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
                            >

                                <summary className="cursor-pointer list-none text-xl font-semibold">
                                    {faq.q}
                                </summary>

                                <p className="mt-5 leading-8 text-slate-400">
                                    {faq.a}
                                </p>

                            </details>

                        ))}

                    </div>

                </section>
            </FadeIn>
        </main>
    );
}

export default Waitlist;