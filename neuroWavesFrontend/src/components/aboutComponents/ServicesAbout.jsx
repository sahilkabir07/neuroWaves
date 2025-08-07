import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Expert Faculty",
        desc: "Learn from top educators with years of proven results.",
        img: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Live Doubt Solving",
        desc: "Instant help and personal attention, anytime, anywhere.",
        img: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        title: "Tech-Enabled Classes",
        desc: "Blending technology and expert guidance for a smarter, more interactive experience.",
        img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Personalized Mentorship",
        desc: "Guidance tailored to each student’s strengths and goals.",
        img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
    }
];

const cardVariants = {
    left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } }
};

const ServicesAbout = () => (
    <section className="py-16 px-4 md:px-8 bg-white/80">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">Meet Us For</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
                <motion.div
                    key={service.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={i % 2 === 0 ? cardVariants.left : cardVariants.right}
                    transition={{ duration: 0.35, type: 'spring', stiffness: 400, damping: 22, delay: i * 0.15, ease: "easeOut" }}
                    whileHover={{ y: -12, scale: 1.08 }}
                    className="relative rounded-xl shadow-lg overflow-hidden flex flex-col justify-center min-h-[260px] border bg-white cursor-pointer"
                    style={{ backgroundImage: `url(${service.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 p-8 flex flex-col items-center justify-center text-center h-full">
                        <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-3 drop-shadow-md text-center">{service.title}</h3>
                        <p className="text-lg md:text-xl text-white drop-shadow font-medium text-center">{service.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

export default ServicesAbout;