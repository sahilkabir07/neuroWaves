import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};


import logo from "/neuroclasses.png";

const HeroSection = () => (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-36 bg-gradient-to-br from-black via-blue-900 to-yellow-400 relative overflow-hidden">
        <div className="flex flex-col items-center gap-4 z-10">
            <motion.img
                src={logo}
                alt="Neuro Wave Logo"
                className="h-36 w-auto drop-shadow-2xl mb-2 bg-gradient-to-b from-[#1A1A1A] to-white rounded-[100%] p-2"
                initial={{ scale: 0.7, opacity: 0, y: -40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1, duration: 1.1 }}
                style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
            />
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
                className="text-5xl md:text-6xl font-extrabold mb-2 text-yellow-400 bg-clip-text drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] relative"
            >
                <motion.span
                    initial={{ backgroundPosition: "-200px 0" }}
                    animate={{ backgroundPosition: "200px 0" }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    style={{
                        background: "linear-gradient(90deg, #facc15 0%, #3b82f6 50%, #facc15 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        backgroundSize: "400px 100%"
                    }}
                >
                    Neuro Wave
                </motion.span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.8 }}
                className="text-xl max-w-xl text-white/90"
            >
                Empowering students with quality education and personal growth.
            </motion.p>
        </div>
        {/* Decorative blurred circles for theme */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400 opacity-30 rounded-full blur-3xl z-0"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-800 opacity-30 rounded-full blur-3xl z-0"></div>
    </section>
);

export default HeroSection;
