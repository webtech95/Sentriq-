import { motion } from "framer-motion";
import { Check, Zap, Building2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Waitlist from "./Waitlist";
import FadeIn from "../FadeIn";

export default function Pricing() {
    const [yearly, setYearly] = useState(false);



    const plans = [
        {
            name: "Core",
            price: yearly ? "$58" : "$6",
            unit: yearly ? "/endpoint/year" : "/endpoint/month",
            description:
                "Essential AI-powered detection and alerting for growing security teams.",
            features: [
                "AI Threat Detection",
                "Behavioral Anomaly Detection",
                "Real-Time Alerting",
                "Security Dashboard",
                "Email Support",
            ],
            button: "Start Free Trial",
            highlight: false,
        },
        {
            name: "Pro",
            badge: "Most Popular",
            price: yearly ? "$115" : "$12",
            unit: yearly ? "/endpoint/year" : "/endpoint/month",
            description:
                "Predictive threat detection with automated response for modern teams.",
            features: [
                "Everything in Core",
                "Predictive Threat Scoring",
                "Automated Response",
                "Unified Alert Graph",
                "API Access",
                "Priority Support",
                "30-Day Retention",
            ],
            button: "Request Demo",
            highlight: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            unit: "",
            description:
                "Enterprise-grade security with dedicated infrastructure and support.",
            features: [
                "Everything in Pro",
                "Advanced Playbooks",
                "Single Sign-On (SSO)",
                "Custom Integrations",
                "Unlimited Retention",
                "Dedicated Success Manager",
                "24×7 Premium Support",
            ],
            button: "Contact Sales",
            highlight: false,
        },
    ];

    return (
        <main className="relative overflow-hidden bg-[#050816] text-white pt-30">

            {/* Background */}

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[-200px] top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />
                <div className="absolute right-[-150px] top-40 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[160px]" />
            </div>

            {/* Hero */}
            <FadeIn>
                <section className="mx-auto max-w-7xl px-6 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                    >

                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                            Pricing
                        </span>

                        <h1 className="mt-8 text-5xl font-bold md:text-7xl">
                            Simple pricing
                            <br />
                            for growing
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                {" "}security teams.
                            </span>
                        </h1>

                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
                            Choose the plan that fits your organization.
                            Scale from AI-powered detection to enterprise-grade
                            predictive security.
                        </p>

                    </motion.div>

                    {/* Billing Toggle */}

                    <div className="mt-14 flex items-center justify-center gap-5">

                        <span
                            className={!yearly ? "font-semibold text-white" : "text-slate-500"}
                        >
                            Monthly
                        </span>

                        <button
                            onClick={() => setYearly(!yearly)}
                            className={`relative h-8 w-16 rounded-full transition ${yearly ? "bg-cyan-400" : "bg-slate-700"
                                }`}
                        >
                            <div
                                className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${yearly ? "left-9" : "left-1"
                                    }`}
                            />
                        </button>

                        <span
                            className={yearly ? "font-semibold text-white" : "text-slate-500"}
                        >
                            Yearly
                        </span>

                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                            Save 20%
                        </span>

                    </div>

                </section>
            </FadeIn>
            {/* Pricing Cards */}
            <FadeIn>
                <section className="mx-auto mt-24 max-w-7xl px-6">

                    <div className="grid gap-8 lg:grid-cols-3">

                        {plans.map((plan) => (

                            <motion.div
                                key={plan.name}
                                whileHover={{ y: -10 }}
                                className={`relative rounded-[34px] border p-8 backdrop-blur-xl ${plan.highlight
                                    ? "border-cyan-400 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 shadow-2xl shadow-cyan-500/20"
                                    : "border-white/10 bg-white/[0.04]"
                                    }`}
                            >

                                {plan.badge && (
                                    <span className="absolute right-8 top-8 rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-black">
                                        {plan.badge}
                                    </span>
                                )}

                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                                    {plan.name === "Enterprise" ? (
                                        <Building2 className="text-cyan-300" />
                                    ) : (
                                        <Zap className="text-cyan-300" />
                                    )}

                                </div>

                                <h2 className="text-3xl font-bold">
                                    {plan.name}
                                </h2>

                                <div className="mt-8">

                                    <span className="text-6xl font-bold">
                                        {plan.price}
                                    </span>

                                    <p className="mt-2 text-slate-400">
                                        {plan.unit}
                                    </p>

                                </div>

                                <p className="mt-8 leading-7 text-slate-400">
                                    {plan.description}
                                </p>

                                <div className="mt-10 space-y-4">

                                    {plan.features.map((feature) => (

                                        <div
                                            key={feature}
                                            className="flex items-center gap-3"
                                        >

                                            <Check
                                                size={18}
                                                className="text-cyan-300"
                                            />

                                            <span>{feature}</span>

                                        </div>

                                    ))}

                                </div>

                                <button
                                    className={`mt-12 w-full rounded-2xl py-4 font-semibold transition ${plan.highlight
                                        ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90"
                                        : "border border-white/10 hover:border-cyan-400"
                                        }`}
                                >
                                    <Link to="/Waitlist">
                                        {plan.button}
                                    </Link>
                                </button>

                            </motion.div>

                        ))}

                    </div>

                </section>
            </FadeIn>
            {/* ================================================= */}
            {/* Feature Comparison */}
            {/* ================================================= */}
            <FadeIn delay={0.3}>
                <section className="mx-auto mt-30 max-w-7xl px-6">

                    <div className="text-center">

                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                            Compare Plans
                        </span>

                        <h2 className="mt-6 text-5xl font-bold">
                            Everything you need.
                            <br />
                            Nothing you don't.
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
                            Start with Core, scale with Pro, and unlock advanced enterprise
                            capabilities as your organization grows.
                        </p>

                    </div>

                    <div className="mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">

                        <table className="w-full border-collapse">

                            <thead>

                                <tr className="border-b border-white/10">

                                    <th className="p-6 text-left text-slate-300">
                                        Features
                                    </th>

                                    <th className="p-6 text-center">
                                        Core
                                    </th>

                                    <th className="bg-cyan-500/10 p-6 text-center text-cyan-300">
                                        Pro
                                    </th>

                                    <th className="p-6 text-center">
                                        Enterprise
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {[
                                    ["Behavioral Detection", "✓", "✓", "✓"],
                                    ["Threat Alerting", "✓", "✓", "✓"],
                                    ["Predictive Threat Scoring", "—", "✓", "✓"],
                                    ["Automated Response", "—", "✓", "✓"],
                                    ["Unified Alert Graph", "—", "✓", "✓"],
                                    ["API Access", "—", "✓", "✓"],
                                    ["Advanced Playbooks", "—", "—", "✓"],
                                    ["Single Sign-On", "—", "—", "✓"],
                                    ["Dedicated Support", "—", "—", "✓"],
                                    ["Custom Integrations", "—", "—", "✓"],
                                ].map((row, index) => (

                                    <tr
                                        key={index}
                                        className="border-b border-white/5 last:border-none hover:bg-white/[0.03]"
                                    >

                                        <td className="p-6 text-slate-300">
                                            {row[0]}
                                        </td>

                                        <td className="p-6 text-center">
                                            {row[1]}
                                        </td>

                                        <td className="bg-cyan-500/5 p-6 text-center text-cyan-300">
                                            {row[2]}
                                        </td>

                                        <td className="p-6 text-center">
                                            {row[3]}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </section>
            </FadeIn>

            {/* ================================================= */}
            {/* FAQ */}
            {/* ================================================= */}
            <FadeIn delay={0.4}>
                <section className="mx-auto mt-30 max-w-4xl px-6">

                    <div className="text-center">

                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                            FAQ
                        </span>

                        <h2 className="mt-6 text-5xl font-bold">
                            Frequently Asked Questions
                        </h2>

                    </div>

                    <div className="mt-16 space-y-6">

                        {[
                            {
                                q: "How is Sentriq priced?",
                                a: "Sentriq offers flexible pricing per endpoint or per user seat depending on your deployment."
                            },
                            {
                                q: "Can I upgrade later?",
                                a: "Yes. Upgrade from Core to Pro or Enterprise at any time."
                            },
                            {
                                q: "Is there an annual discount?",
                                a: "Yes. Annual billing saves approximately 20%."
                            },
                            {
                                q: "Do you provide onboarding?",
                                a: "Every customer receives onboarding resources. Enterprise includes a dedicated success manager."
                            },
                        ].map((item, index) => (

                            <details
                                key={index}
                                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8"
                            >

                                <summary className="cursor-pointer list-none text-xl font-semibold">
                                    {item.q}
                                </summary>

                                <p className="mt-5 leading-8 text-slate-400">
                                    {item.a}
                                </p>

                            </details>

                        ))}

                    </div>

                </section>
            </FadeIn>
        </main>
    );
}