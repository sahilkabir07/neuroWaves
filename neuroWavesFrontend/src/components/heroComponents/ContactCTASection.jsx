import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};


const ContactCTASection = () => (
    <section className="bg-gradient-to-br from-yellow-200 via-blue-200 to-white text-blue-900 py-16 px-6 text-center relative overflow-hidden">
        {/* Decorative icon */}
        <div className="flex justify-center mb-2">
            <span className="text-5xl">🚀</span>
        </div>
        <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
            className="text-3xl font-bold mb-4 drop-shadow-lg"
        >
            Ready to Get Started?
        </motion.h2>
        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
            className="mb-8 text-lg text-blue-800"
        >
            Join our growing family of successful students and experience the Neuro Wave revolution!
        </motion.p>
        <motion.a
            href="/contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            custom={2}
            whileHover={{ scale: 1.08, boxShadow: "0 0 24px #facc15" }}
            className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-400 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:from-yellow-300 hover:to-blue-300 transition text-lg"
        >
            Contact Us
        </motion.a>
        {/* Decorative blurred circles for theme */}
        <div className="absolute -top-16 -left-16 w-60 h-60 bg-yellow-300 opacity-20 rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 opacity-20 rounded-full blur-2xl z-0"></div>
    </section>
);

export default ContactCTASection;
