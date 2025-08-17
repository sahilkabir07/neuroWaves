import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-black/80 backdrop-blur-lg border-t-4 border-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400"
        >
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-8 text-base text-neutral-200">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-stretch w-full justify-between gap-12"
                >
                    {/* Left: Logo + Title + Address (more space) */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10 flex-[3] w-full min-w-0 py-4 px-2 md:px-8">
                        <span className="flex items-center justify-center rounded-full bg-gradient-to-b from-[#1A1A1A] to-white shadow-xl p-1 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                            <img
                                src="/neuroclasses.png"
                                alt="Neuro Wave Logo"
                                className="rounded-full object-contain w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                                style={{ aspectRatio: '1 / 1' }}
                            />
                        </span>
                        <div className="flex flex-col items-center sm:items-start gap-2 sm:ml-2 text-center sm:text-left">
                            <span className="font-bold text-yellow-400 text-2xl sm:text-3xl md:text-4xl leading-tight">Neuro Wave Classes</span>
                            <div className="flex flex-col text-sm sm:text-base text-neutral-300 gap-2 mt-2 break-words leading-6">
                                <span>
                                    Friends Colony,<br />
                                    Near Katra School,<br />
                                    Near Dr Zakir Hussain Public School,<br />
                                    Patna - 800006
                                </span>
                                <span>Phone: 9142214117</span>
                                <span>Email: neurowaveclasses@gmail.com</span>
                                {/* Add more info here if needed */}
                            </div>
                        </div>
                    </div>
                    {/* Divider for large screens */}
                    <div className="hidden md:block h-32 w-px bg-gradient-to-b from-yellow-400 via-blue-400 to-yellow-400 mx-8 opacity-40" />
                    {/* Center: Navigation vertical and centered */}
                    <nav className="flex flex-col gap-3 sm:gap-4 items-center justify-center flex-1 mt-4 md:mt-0">
                        <motion.a whileHover={{ scale: 1.08, color: '#facc15' }} href="/" className="font-semibold transition">Home</motion.a>
                        <motion.a whileHover={{ scale: 1.08, color: '#facc15' }} href="/about" className="font-semibold transition">About</motion.a>
                        <motion.a whileHover={{ scale: 1.08, color: '#facc15' }} href="/notes" className="font-semibold transition">Notes</motion.a>
                        <motion.a whileHover={{ scale: 1.08, color: '#facc15' }} href="/videos" className="font-semibold transition">Videos</motion.a>
                        <motion.a whileHover={{ scale: 1.08, color: '#facc15' }} href="/contact" className="font-semibold transition">Contact</motion.a>
                    </nav>
                    {/* Divider for large screens */}
                    <div className="hidden md:block h-32 w-px bg-gradient-to-b from-yellow-400 via-blue-400 to-yellow-400 mx-8 opacity-40" />
                    {/* Right: Zystra link */}
                    <div className="flex flex-col items-center md:items-end justify-center flex-1 mt-4 md:mt-0">
                        <a
                            href="https://zystrawebtech.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold relative overflow-hidden animate-shimmer bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent text-lg mt-4 md:mt-0"
                        >
                            Powered by Zystra WebTech
                        </a>
                    </div>
                </motion.div>
            </div>
            <style>{`
            @keyframes shimmer {
                0% { background-position: -200px 0; }
                100% { background-position: 200px 0; }
            }
            .animate-shimmer {
                background-size: 400px 100%;
                animation: shimmer 2s linear infinite;
            }
        `}</style>
        </motion.footer>
    );
}

export default Footer;
