import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function WaitlistCTA({
  title = "Ready to stay ahead of tomorrow's threats?",
  description = "Join the early-access waitlist and discover how Sentriq helps security teams detect, prioritize, and respond before attacks escalate.",
}) {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-0 right-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

          <div className="px-8 py-16 text-center md:px-16">

            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Early Access Program
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              {description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                to="/waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
              >
                Request Early Access
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/pricing"
                className="rounded-full border border-white/10 px-8 py-4 font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
              >
                View Pricing
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-500">

              <span>✓ AI-Powered Detection</span>

              <span>✓ Enterprise Security</span>

              <span>✓ Priority Onboarding</span>

              <span>✓ No Commitment</span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WaitlistCTA;