import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#07090D] text-center">
            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-12 md:grid-cols-4">

                    {/* Logo */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Sentriq
                        </h2>

                        <p className="mt-5 leading-7 text-slate-400">
                            AI-powered predictive threat detection and automated incident
                            response built exclusively for defensive cybersecurity teams.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Product
                        </h3>

                        <ul className="mt-5 space-y-3 text-slate-400">

                            <li>
                                <Link to="/product" className="hover:text-cyan-400">
                                    Features
                                </Link>
                            </li>

                            <li>
                                <Link to="/pricing" className="hover:text-cyan-400">
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link to="/security" className="hover:text-cyan-400">
                                    Security
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Resources
                        </h3>

                        <ul className="mt-5 space-y-3 text-slate-400">

                            <li>
                                <Link to="/docs" className="hover:text-cyan-400">
                                    Documentation
                                </Link>
                            </li>

                            <li>
                                <Link to="/blog" className="hover:text-cyan-400">
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link to="/responsible-disclosure" className="hover:text-cyan-400">
                                    Responsible Disclosure
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-white">
                            Legal
                        </h3>

                        <ul className="mt-5 space-y-3 text-slate-400">

                            <li>
                                <Link to="/privacy" className="hover:text-cyan-400">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link to="/terms" className="hover:text-cyan-400">
                                    Terms of Service
                                </Link>
                            </li>

                            <li>
                                <Link to="/security" className="hover:text-cyan-400">
                                    Security
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-14 border-t border-white/10 pt-8">

                    <p className="text-center text-sm text-slate-500">
                        © 2026 Sentriq. All rights reserved.
                    </p>

                    <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-7 text-slate-500">
                        <span className="font-semibold text-slate-300">
                            Defensive Use Only.
                        </span>{" "}
                        Sentriq is designed exclusively for authorized security monitoring,
                        threat detection, and incident response. The platform must only be
                        used on systems and networks you own or are explicitly authorized
                        to protect. Unauthorized offensive activities are strictly
                        prohibited.
                    </p>

                </div>

            </div>
        </footer>
    );
}

export default Footer;