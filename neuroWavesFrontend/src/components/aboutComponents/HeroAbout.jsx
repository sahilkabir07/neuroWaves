import React from "react";
import { motion } from "framer-motion";


const HeroAbout = () => (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-400 pt-40 pb-8">
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
            <motion.blockquote
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, textShadow: "0 4px 32px #ffe066, 0 2px 8px #2563eb" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="cursor-pointer text-2xl md:text-4xl font-bold text-white leading-tight md:leading-snug"
            >
                "Unlock your true potential with
                <span className="inline-block bg-yellow-400/80 text-blue-900 px-3 py-1 mx-2 rounded-lg font-extrabold text-3xl md:text-5xl shadow-md">Neuro Wave</span>
                —where learning meets innovation."
            </motion.blockquote>
        </div>
    </section>
);

export default HeroAbout;