
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

const aboutPoints = [
    {
        img: "https://plus.unsplash.com/premium_photo-1663075847012-c781e0d194ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // learning
        title: "Revolutionary Learning",
        desc: "Blending technology and expert guidance for a smarter, more interactive experience."
    },
    {
        img: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // faculty
        title: "Expert Faculty",
        desc: "Learn from top educators with years of proven results."
    },
    {
        img: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // doubt solving
        title: "Live Doubt Solving",
        desc: "Instant help and personal attention, anytime, anywhere."
    },
    {
        img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // flexibility
        title: "Modern & Flexible",
        desc: "Online, accessible, and tailored to your pace and goals."
    }
];


const bgImage = "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80";

const AboutSection = () => (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-blue-50 to-white opacity-20 z-0" />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUp}
                custom={0}
                className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900 drop-shadow-lg bg-white/40 rounded-xl px-4 py-2 mx-auto"
                style={{ width: 'fit-content' }}
            >
                Why Neuro Wave?
            </motion.h2>
            {/* Motivational Quote */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUp}
                custom={1}
                className="max-w-2xl mx-auto mb-8 p-6 rounded-xl bg-white/80 shadow text-center border-l-4 border-yellow-400"
            >
                <span className="text-xl italic text-blue-800 font-semibold drop-shadow-md">
                    "Empowering every student to reach their true potential—anytime, anywhere."
                </span>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-6 w-full">
                {aboutPoints.map((point, i) => (
                    <motion.div
                        key={point.title}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeUp}
                        custom={i}
                        whileHover={{ y: -10, scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 350, damping: 22 }}
                        className="relative rounded-xl shadow-lg overflow-hidden flex flex-col justify-end items-center text-center min-h-[260px] border cursor-pointer"
                        style={{ backgroundImage: `url(${point.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 p-6 w-full">
                            <h3 className="text-lg font-semibold mb-1 text-yellow-300 drop-shadow-md">{point.title}</h3>
                            <p className="text-white text-sm drop-shadow">{point.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <Link to="/about" className="inline-block bg-yellow-400 text-black font-bold px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition">
                    Learn More
                </Link>
            </div>
        </div>
        {/* Decorative background shape */}
        <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-blue-200 opacity-20 rounded-full blur-2xl z-0"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 opacity-20 rounded-full blur-2xl z-0"></div>
    </section>
);

export default AboutSection;
