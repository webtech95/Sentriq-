
import { motion } from "framer-motion";
import {
    Brain,
    ShieldCheck,
    Activity,
    Network,
    ArrowRight,
} from "lucide-react";
import { useCountUp } from "react-countup";
import { Link } from "react-router-dom";
import Waitlist from "./Waitlist";
import FadeIn from "../FadeIn";

export default function Platform() {

    useCountUp({
        ref: "Counter",
        end: 94,
        duration: 2,
    }

    )
    return (
        <main className="relative overflow-hidden bg-[#050816] text-white pt-32">

            {/* Background Glow */}

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[-180px] top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[150px]" />
                <div className="absolute right-[-120px] top-[200px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-[140px]" />
            </div>

            {/* HERO */}
            <FadeIn>
                <section className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* Left */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                        >
                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                                Platform
                            </span>

                            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
                                AI-powered security
                                <br />
                                built to
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    {" "}predict,
                                </span>
                                <br />
                                not just detect.
                            </h1>

                            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                                Sentriq continuously learns normal behavior across users,
                                endpoints, cloud workloads, and identities to detect
                                suspicious activity before it becomes a breach.
                            </p>

                            <button className="mt-10 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-4 font-semibold">
                                <Link to="/Waitlist">
                                    Request Access
                                </Link>

                            </button>

                        </motion.div>

                        {/* Dashboard */}

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                            className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                        >

                            <div className="rounded-3xl border border-white/10 bg-[#0B1020] p-6">

                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-slate-400">
                                            Threat Score
                                        </p>

                                        <h2 className="mt-3 text-6xl font-bold text-cyan-300">
                                            <span id="Counter" />
                                        </h2>
                                    </div>

                                    <ShieldCheck className="h-10 w-10 text-cyan-400" />

                                </div>

                                <div className="mt-8 h-2 rounded-full bg-slate-700">

                                    <div className="h-2 w-[94%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

                                </div>

                            </div>

                            <div className="mt-6 grid gap-5 md:grid-cols-2">

                                <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-5">
                                    <Activity className="text-cyan-400" />
                                    <h3 className="mt-4 text-xl font-semibold">
                                        Credential Theft
                                    </h3>
                                    <p className="mt-2 text-slate-400">
                                        Confidence 97%
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-5">
                                    <Brain className="text-cyan-400" />
                                    <h3 className="mt-4 text-xl font-semibold">
                                        AI Prediction
                                    </h3>
                                    <p className="mt-2 text-slate-400">
                                        Escalation Risk: High
                                    </p>
                                </div>

                            </div>

                        </motion.div>

                    </div>

                </section>
            </FadeIn>
            {/* ========================= */}
            {/* Behavioral Detection */}
            {/* ========================= */}
            <FadeIn delay={0.2}>
                <section className="mx-auto mt-36 max-w-7xl px-6">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        <div>

                            <span className="text-cyan-300">
                                01
                            </span>

                            <h2 className="mt-4 text-4xl font-bold">
                                Behavioral Anomaly Detection
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-400">
                                Sentriq continuously builds a baseline of normal activity
                                across users, devices, cloud services, and identities.
                                Any unusual behavior is immediately highlighted before
                                attackers can move laterally.
                            </p>

                        </div>

                        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

                            <div className="space-y-4">

                                {[
                                    "Normal Login",
                                    "Impossible Travel",
                                    "Privilege Escalation",
                                    "High Risk",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl border border-white/10 bg-[#111827] px-5 py-4"
                                    >
                                        {item}
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </section>
            </FadeIn>
            {/* ========================= */}
            {/* Predictive Threat Scoring */}
            {/* ========================= */}
            <FadeIn delay={0.3}>
                <section className="mx-auto mt-36 max-w-7xl px-6">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        <div className="order-2 lg:order-1 rounded-[30px] border border-white/10 bg-white/[0.04] p-8">

                            <div className="grid gap-5">

                                <div className="rounded-2xl bg-[#111827] p-6">
                                    <p className="text-slate-400">
                                        Threat Score
                                    </p>

                                    <h3 className="mt-4 text-5xl font-bold text-cyan-300">
                                        92
                                    </h3>
                                </div>

                                <div className="rounded-2xl bg-[#111827] p-6">
                                    <p className="text-slate-400">
                                        Confidence
                                    </p>

                                    <h3 className="mt-3 text-4xl font-bold">
                                        97%
                                    </h3>
                                </div>

                            </div>

                        </div>

                        <div className="order-1 lg:order-2">

                            <span className="text-cyan-300">
                                02
                            </span>

                            <h2 className="mt-4 text-4xl font-bold">
                                Predictive Threat Scoring
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-400">
                                Instead of overwhelming your team with alerts, Sentriq
                                predicts which anomalies are most likely to become active
                                threats and prioritizes them using AI-powered scoring.
                            </p>

                        </div>

                    </div>

                </section>
            </FadeIn>

            {/* ================================================= */}
            {/* Automated Response Playbooks */}
            {/* ================================================= */}
            <FadeIn delay={0.4}>
                <section className="mx-auto mt-36 max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* Left */}

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                        >

                            <span className="text-cyan-300 font-medium">
                                03
                            </span>

                            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                                Automated Response
                                <br />
                                Playbooks
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-slate-400">
                                Once a threat reaches your configured confidence threshold,
                                Sentriq automatically executes predefined response playbooks
                                to contain attacks before they spread across your environment.
                            </p>

                            <ul className="mt-10 space-y-5">

                                {[
                                    "Disable compromised user accounts",
                                    "Block malicious IP addresses",
                                    "Isolate infected endpoints",
                                    "Notify security teams instantly",
                                ].map((item) => (

                                    <li
                                        key={item}
                                        className="flex items-center gap-4"
                                    >

                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
                                            ✓
                                        </div>

                                        <span className="text-slate-300">
                                            {item}
                                        </span>

                                    </li>

                                ))}

                            </ul>

                        </motion.div>

                        {/* Right */}

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                            className="rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
                        >

                            <div className="space-y-5">

                                <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-5">
                                    Threat Detected
                                </div>

                                <div className="flex justify-center text-cyan-300">
                                    ↓
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-5">
                                    Disable Account
                                </div>

                                <div className="flex justify-center text-cyan-300">
                                    ↓
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-5">
                                    Isolate Device
                                </div>

                                <div className="flex justify-center text-cyan-300">
                                    ↓
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-5">
                                    Notify Security Team
                                </div>

                            </div>

                        </motion.div>

                    </div>

                </section>
            </FadeIn>
            {/* ================================================= */}
            {/* Unified Alert Graph */}
            {/* ================================================= */}

            <section className="mx-auto mt-20 max-w-7xl px-6">
                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Graph */}

                    <motion.div
                        initial={{ opacity: 0, scale: .95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="rounded-[34px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl"
                    >

                        <div className="grid grid-cols-3 gap-8">

                            {[
                                "User",
                                "Identity",
                                "Endpoint",
                                "Email",
                                "Cloud",
                                "Threat",
                                "Server",
                                "SOC",
                                "Incident",
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1020]"
                                >
                                    {item}
                                </div>

                            ))}

                        </div>

                    </motion.div>

                    {/* Text */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                    >

                        <span className="text-cyan-300">
                            04
                        </span>

                        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                            Unified Alert
                            <br />
                            Graph
                        </h2>

                        <p className="mt-8 text-lg leading-8 text-slate-400">
                            Every alert, identity, endpoint, application, and cloud
                            workload is connected into a single investigation graph,
                            helping analysts understand attack paths in seconds instead
                            of hours.
                        </p>

                    </motion.div>

                </div>
            </section>





        </main>
    );
}

