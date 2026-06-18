
import { motion } from "framer-motion";
import { useCountUp } from "react-countup";
import {
    ArrowRight,
    Building2,
    Cloud,
    ShieldCheck,
    Activity,
} from "lucide-react";
import FadeIn from "../FadeIn";

export default function Solutions() {
    useCountUp({
        ref: "Count",
        end: "94",
        duration: "2"
    })
    return (
        <main className="relative overflow-hidden bg-[#050816] text-white pt-32">

            {/* Background */}

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[-180px] top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[150px]" />
                <div className="absolute right-[-120px] top-[250px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-[140px]" />
            </div>

            {/* ================= HERO ================= */}
            <FadeIn>
                <section className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* Left */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                        >

                            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                                Solutions
                            </span>

                            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
                                Security built
                                <br />
                                for the way
                                <br />
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    modern teams work.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                                Whether you're a lean security team managing hundreds
                                of endpoints or a cloud-native company growing rapidly,
                                Sentriq helps detect, prioritize, and stop threats before
                                they become incidents.
                            </p>

                            <button className="mt-10 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-semibold">
                                Request Access
                                <ArrowRight size={18} />
                            </button>

                        </motion.div>

                        {/* Right Dashboard */}

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                            className="rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
                        >

                            <div className="rounded-3xl border border-white/10 bg-[#0B1020] p-6">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-slate-400">
                                            Live Threat Score
                                        </p>

                                        <h2 className="mt-4 text-6xl font-bold text-cyan-300">
                                            <span id="Count" />
                                        </h2>

                                    </div>

                                    <ShieldCheck className="h-10 w-10 text-cyan-300" />

                                </div>

                                <div className="mt-8 h-2 rounded-full bg-slate-700">

                                    <div className="h-2 w-[94%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

                                </div>

                            </div>

                            <div className="mt-6 grid gap-5 md:grid-cols-2">

                                <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-5">

                                    <Activity className="text-cyan-300" />

                                    <h3 className="mt-4 text-xl font-semibold">
                                        AI Detection
                                    </h3>

                                    <p className="mt-2 text-slate-400">
                                        Behavioral anomaly identified.
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-5">

                                    <Cloud className="text-cyan-300" />

                                    <h3 className="mt-4 text-xl font-semibold">
                                        Cloud Risk
                                    </h3>

                                    <p className="mt-2 text-slate-400">
                                        Active monitoring across workloads.
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </section>
            </FadeIn>
            {/* ============================
          Mid-Market Security Teams
      ============================ */}
            <FadeIn delay={0.2}>
                <section className="mx-auto mt-20 max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* Text */}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                        >

                            <span className="text-cyan-300 font-medium">
                                01
                            </span>

                            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                                Mid-Market
                                <br />
                                Security Teams
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-slate-400">
                                Your team may consist of only a few security professionals,
                                yet you're expected to protect hundreds or thousands of users,
                                devices, identities, and cloud resources every day.
                            </p>

                            <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">

                                <h3 className="text-lg font-semibold">
                                    Outcome
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    Sentriq reduces alert fatigue by predicting which threats
                                    matter most and automatically containing attacks before
                                    they escalate.
                                </p>

                            </div>

                            <div className="mt-10 grid gap-5">

                                {[
                                    "Reduce alert fatigue",
                                    "Prioritize high-risk threats",
                                    "Automate incident response",
                                    "Accelerate investigations",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-4"
                                    >

                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">
                                            ✓
                                        </div>

                                        <span className="text-slate-300">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </motion.div>

                        {/* Dashboard */}

                        <motion.div
                            initial={{ opacity: 0, scale: .95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                            className="rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
                        >

                            <div className="rounded-3xl border border-white/10 bg-[#0B1020] p-6">

                                <div className="flex items-center gap-4">

                                    <Building2 className="text-cyan-300" />

                                    <h3 className="text-xl font-semibold">
                                        Threat Queue
                                    </h3>

                                </div>

                                <div className="mt-8 space-y-4">

                                    {[
                                        "Credential Abuse",
                                        "Suspicious Login",
                                        "Lateral Movement",
                                        "Privilege Escalation",
                                    ].map((item) => (

                                        <div
                                            key={item}
                                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111827] px-5 py-4"
                                        >

                                            <span>{item}</span>

                                            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                                                AI Priority
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </section>
            </FadeIn>
            {/* ========================================= */}
            {/* Cloud-Native Environments */}
            {/* ========================================= */}
            <FadeIn delay={0.3}>
                <section className="mx-auto mt-20 max-w-7xl px-6 mb-10">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* Dashboard */}

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="order-2 rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl lg:order-1"
                        >

                            <div className="rounded-3xl border border-white/10 bg-[#0B1020] p-6">

                                <div className="flex items-center justify-between">

                                    <h3 className="text-xl font-semibold">
                                        Cloud Activity
                                    </h3>

                                    <Cloud className="text-cyan-300" />

                                </div>

                                <div className="mt-8 space-y-4">

                                    {[
                                        "Cloud Workloads",
                                        "Containers",
                                        "Identity",
                                        "API Traffic",
                                        "Threat Blocked",
                                    ].map((item) => (

                                        <div
                                            key={item}
                                            className="rounded-2xl border border-white/10 bg-[#111827] px-5 py-4"
                                        >
                                            {item}
                                        </div>

                                    ))}

                                </div>

                            </div>

                        </motion.div>

                        {/* Text */}

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >

                            <span className="text-cyan-300 font-medium">
                                02
                            </span>

                            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                                Cloud-Native
                                <br />
                                Environments
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-slate-400">
                                Cloud infrastructure changes constantly.
                                Sentriq continuously learns behavior across
                                workloads, containers, APIs, and identities
                                to detect emerging threats before attackers
                                gain persistence.
                            </p>

                            <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">

                                <h3 className="font-semibold">
                                    Outcome
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    Gain complete visibility across your cloud
                                    environment with AI-powered monitoring and
                                    predictive threat detection.
                                </p>

                            </div>

                            <div className="mt-10 grid gap-5">

                                {[
                                    "Continuous monitoring",
                                    "Identity protection",
                                    "Cloud workload security",
                                    "API visibility",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-4"
                                    >

                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">
                                            ✓
                                        </div>

                                        <span className="text-slate-300">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </motion.div>

                    </div>

                </section>
            </FadeIn>

        </main>
    );
}

