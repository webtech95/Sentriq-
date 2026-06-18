
import { motion } from "framer-motion";
import { useCountUp } from "react-countup";
import Waitlist from "./Waitlist";
import { Link } from "react-router-dom";
import {
    ShieldCheck,
    Activity,
    Radar,
    Server,
    ChevronRight,
} from "lucide-react";
import FadeIn from "../FadeIn";

export default function Home() {
    const logos = [
        "AWS",
        "Azure",
        "Google Cloud",
        "Cloudflare",
        "Docker",
        "GitHub",
        "Kubernetes",
        "Okta",
    ];

    useCountUp({
        ref: "counter",
        end: 954,
        duration: 4,
    });

    useCountUp({
        ref: "Threat",
        end: 94,
        duration: 4,
    });

    return (
        <main className="relative overflow-hidden bg-[#050816] text-white">

            {/* Background */}

            <div className="absolute inset-0">
                <div className="absolute left-[-150px] top-[-120px] h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />
                <div className="absolute right-[-120px] top-[120px] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[140px]" />
                <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
            </div>

            {/* HERO */}
            <FadeIn>
                <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 pt-30 lg:flex-row">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="flex-1"
                    >

                        <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                            <ShieldCheck className="mr-2 h-4 w-4" />
                            AI Powered Cyber Defense
                        </span>

                        <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
                            Threat detection
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                that thinks ahead.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                            Sentriq learns normal behavior across your environment,
                            predicts emerging threats before they escalate, and runs
                            automated response playbooks—helping lean security teams stop
                            attacks before damage is done.
                        </p>

                        {/* Waitlist */}

                        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">

                            <div className="grid gap-3 lg:grid-cols-2">

                                <input
                                    placeholder="Work Email"
                                    className="rounded-2xl bg-transparent px-5 py-4 outline-none placeholder:text-slate-500"
                                />

                                <button className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-4 font-semibold transition hover:scale-[1.02]">
                                    <Link to="/waitlist">
                                        Request Access
                                    </Link>
                                </button>

                            </div>

                        </div>

                    </motion.div>

                    {/* Dashboard */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        className="flex-1"
                    >

                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-3xl">

                            <div className="grid gap-5">

                                {/* Threat */}

                                <div className="rounded-2xl border border-white/10 bg-[#0d1224] p-5">

                                    <div className="flex items-center justify-between">
                                        <p className="text-slate-400">
                                            Threat Score
                                        </p>

                                        <Activity className="text-cyan-400" />
                                    </div>

                                    <h2 className="mt-4 text-6xl font-bold text-cyan-300">
                                        92
                                    </h2>

                                    <div className="mt-4 h-2 rounded-full bg-slate-700">
                                        <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                                    </div>

                                </div>

                                <div className="grid gap-5 md:grid-cols-2">

                                    <div className="rounded-2xl border border-white/10 bg-[#0d1224] p-5">

                                        <div className="flex items-center justify-between">
                                            <p className="text-slate-400">
                                                AI Prediction
                                            </p>

                                            <Radar className="text-cyan-400" />
                                        </div>

                                        <h3 className="mt-5 text-xl font-semibold">
                                            Credential Theft
                                        </h3>

                                        <p className="mt-3 text-sm text-slate-500">
                                            Confidence 97%
                                        </p>

                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-[#0d1224] p-5">

                                        <div className="flex items-center justify-between">
                                            <p className="text-slate-400">
                                                Active Assets
                                            </p>

                                            <Server className="text-cyan-400" />
                                        </div>

                                        <h3 className="mt-5 text-4xl font-bold">
                                            <span id="counter" />
                                        </h3>

                                        <p className="mt-2 text-slate-500">
                                            Protected Endpoints
                                        </p>

                                    </div>

                                </div>

                                <div className="rounded-2xl border border-white/10 bg-[#0d1224] p-5">

                                    <p className="text-slate-400">
                                        Automated Response
                                    </p>

                                    <div className="mt-6 space-y-4">

                                        {[
                                            "Device isolated",
                                            "User disabled",
                                            "IP blocked",
                                            "SOC notified",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                                            >
                                                <span>{item}</span>

                                                <span className="text-emerald-400">
                                                    ✓
                                                </span>
                                            </div>
                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </section>
            </FadeIn>
            {/* Logo Marquee */}
            <FadeIn delay={0.2}>
                <section className="border-y border-white/10 py-10 mt-20">

                    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-12 px-6 text-lg font-semibold text-slate-500">

                        {logos.map((logo) => (
                            <span
                                key={logo}
                                className="transition hover:text-cyan-300"
                            >
                                {logo}
                            </span>
                        ))}

                    </div>

                </section>
            </FadeIn>

            <FadeIn delay={0.3}>

                <section
                    id="solutions"
                    className="mx-auto max-w-7xl px-6 py-20"
                >
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
                            The Problem
                        </span>

                        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
                            Detection after the
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                {" "}
                                breach{" "}
                            </span>
                            is already too late.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-400">
                            Mid-market companies are attacked like enterprises but defended
                            like startups. Traditional tools flood teams with alerts while
                            attackers quietly move through the environment.
                        </p>
                    </div>

                    <div className="mt-20 grid gap-8 lg:grid-cols-3">

                        {/* Card 1 */}

                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-2">

                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                                🚨
                            </div>

                            <h3 className="text-2xl font-semibold">
                                Alert Fatigue
                            </h3>

                            <p className="mt-5 leading-8 text-slate-400">
                                Thousands of daily alerts overwhelm small security teams,
                                making it easy for real threats to slip through unnoticed.
                            </p>

                        </div>

                        {/* Card 2 */}

                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-2">

                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                                ⚠️
                            </div>

                            <h3 className="text-2xl font-semibold">
                                Slow Detection
                            </h3>

                            <p className="mt-5 leading-8 text-slate-400">
                                Most attacks are discovered only after compromise, leaving
                                organizations with expensive investigations and recovery.
                            </p>

                        </div>

                        {/* Card 3 */}

                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-2">

                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">
                                🛡️
                            </div>

                            <h3 className="text-2xl font-semibold">
                                Lean Security Teams
                            </h3>

                            <p className="mt-5 leading-8 text-slate-400">
                                Most companies can't operate a 24/7 SOC but still need
                                enterprise-grade protection against modern threats.
                            </p>

                        </div>

                    </div>
                </section>
            </FadeIn>


            <FadeIn delay={0.2}>
                <section
                    id="platform"
                    className="mx-auto max-w-7xl px-6"
                >

                    <div className="text-center">

                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                            Platform Features
                        </span>

                        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
                            Built for modern
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                {" "}security teams
                            </span>
                        </h2>

                    </div>

                    <div className="mt-20 grid gap-8 lg:grid-cols-3">

                        {/* Feature */}

                        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0B1020]">

                            <div className="h-56 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 p-8">

                                <div className="rounded-2xl border border-white/10 bg-[#111827] p-5">

                                    <p className="text-slate-400">
                                        Threat Score
                                    </p>

                                    <h3 className="mt-4 text-5xl font-bold text-cyan-300">
                                        <span id="Threat" />
                                    </h3>

                                </div>

                            </div>

                            <div className="p-8">

                                <h3 className="text-2xl font-semibold">
                                    Predictive Threat Detection
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    AI continuously learns normal behavior and predicts
                                    emerging threats before they escalate.
                                </p>

                            </div>

                        </div>

                        {/* Feature */}

                        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0B1020]">

                            <div className="flex h-56 items-center justify-center bg-gradient-to-br from-cyan-600/20 to-blue-500/10">

                                <div className="space-y-3">

                                    <div className="rounded-xl bg-emerald-500/20 px-5 py-3">
                                        ✓ Device Isolated
                                    </div>

                                    <div className="rounded-xl bg-emerald-500/20 px-5 py-3">
                                        ✓ User Disabled
                                    </div>

                                    <div className="rounded-xl bg-emerald-500/20 px-5 py-3">
                                        ✓ IP Blocked
                                    </div>

                                </div>

                            </div>

                            <div className="p-8">

                                <h3 className="text-2xl font-semibold">
                                    Automated Response
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    Execute response playbooks automatically to contain threats
                                    in seconds instead of hours.
                                </p>

                            </div>

                        </div>

                        {/* Feature */}

                        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0B1020]">

                            <div className="flex h-56 items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-400/10">

                                <div className="grid grid-cols-3 gap-3">

                                    {Array.from({ length: 9 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-4 w-4 rounded-full bg-cyan-300"
                                        />
                                    ))}

                                </div>

                            </div>

                            <div className="p-8">

                                <h3 className="text-2xl font-semibold">
                                    Unified Security Graph
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    Correlate alerts, identities, assets, and incidents into a
                                    single investigation view.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>
            </FadeIn>

            <FadeIn delay={0.2}>
                <section className="mx-auto max-w-7xl px-6 py-20">

                    <div className="text-center">

                        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                            How It Works
                        </span>

                        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
                            Four simple steps
                        </h2>

                    </div>

                    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                number: "01",
                                title: "Connect",
                                text: "Connect cloud services, endpoints, email, and identity providers.",
                            },
                            {
                                number: "02",
                                title: "Learn",
                                text: "Sentriq learns baseline behavior across your environment.",
                            },
                            {
                                number: "03",
                                title: "Predict",
                                text: "AI scores anomalies before they become active threats.",
                            },
                            {
                                number: "04",
                                title: "Respond",
                                text: "Automated playbooks contain attacks at machine speed.",
                            },
                        ].map((step) => (
                            <div
                                key={step.number}
                                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
                            >
                                <span className="text-5xl font-bold text-cyan-300">
                                    {step.number}
                                </span>

                                <h3 className="mt-8 text-2xl font-semibold">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    {step.text}
                                </p>
                            </div>
                        ))}

                    </div>

                </section>
            </FadeIn>

            <FadeIn>
                <section
                    id="metrics"
                    className="mx-auto max-w-7xl px-6"
                >
                    <div className="text-center">
                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                            Security Impact
                        </span>

                        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
                            Faster detection.
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                {" "}Faster response.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
                            Sentriq helps security teams reduce detection time,
                            automate response, and focus only on meaningful threats.
                        </p>
                    </div>

                    <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                value: "72%",
                                title: "Lower MTTD",
                                desc: "Mean Time To Detect",
                            },
                            {
                                value: "81%",
                                title: "Lower MTTR",
                                desc: "Mean Time To Respond",
                            },
                            {
                                value: "24/7",
                                title: "Monitoring",
                                desc: "Continuous Protection",
                            },
                            {
                                value: "98%",
                                title: "Prediction",
                                desc: "Threat Accuracy",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl"
                            >
                                <h3 className="text-5xl font-bold text-cyan-300">
                                    {item.value}
                                </h3>

                                <p className="mt-6 text-xl font-semibold">
                                    {item.title}
                                </p>

                                <p className="mt-3 text-slate-400">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </section>
            </FadeIn>

            <FadeIn>
                <section
                    id="comparison"
                    className="mx-auto max-w-7xl px-6 py-20"
                >
                    <div className="text-center">

                        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                            Comparison
                        </span>

                        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
                            Sentriq vs Legacy SIEM
                        </h2>

                    </div>

                    <div className="mt-16 overflow-hidden rounded-[30px] border border-white/10 bg-[#0B1020] text-center">

                        <div className="grid grid-cols-2 border-b border-white/10 bg-white/5 p-6 font-semibold">
                            <div>Legacy SIEM</div>
                            <div>Sentriq</div>
                        </div>

                        {[
                            ["Reactive alerts", "Predictive AI"],
                            ["Manual investigation", "Automated response"],
                            ["Alert overload", "Risk prioritization"],
                            ["Slow response", "Machine-speed containment"],
                            ["Complex dashboards", "Unified threat graph"],
                        ].map((row, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-2 border-b border-white/5 p-6 last:border-none"
                            >
                                <div className="text-slate-400">
                                    {row[0]}
                                </div>

                                <div className="font-medium text-cyan-300">
                                    {row[1]}
                                </div>
                            </div>
                        ))}

                    </div>

                </section>
            </FadeIn>

        </main>
    );
}
