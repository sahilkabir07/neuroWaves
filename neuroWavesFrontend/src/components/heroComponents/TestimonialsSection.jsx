import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};


const testimonials = [
    {
        name: "Chandan Kumar",
        text: "Neuro Wave's live doubt sessions made all the difference! I finally understood concepts that confused me for months.",
    },
    {
        name: "Poonam Kumari",
        text: "The notes and video lectures are so clear and easy to follow. My scores improved and I feel confident for my exams!",
    },
    {
        name: "Ravi Kumar",
        text: "Personalized progress tracking helped me stay motivated. The teachers are super supportive!",
    },
    {
        name: "Kamran Khan",
        text: "Best coaching experience! Flexible timings and instant help whenever I needed it.",
    },
];

const TestimonialsSection = () => (
    <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
            className="text-4xl font-bold text-center mb-10 text-blue-900"
        >
            What Students Say
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((t, i) => (
                <motion.div
                    key={t.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={fadeUp}
                    custom={i}
                    whileHover={{ scale: 1.06, y: -4, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.15)" }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-gradient-to-br from-yellow-100 via-white to-blue-100 p-6 rounded-2xl shadow-lg border flex flex-col items-center text-center"
                >
                    {/* Removed avatar image for realism */}
                    <p className="italic text-gray-700 mb-2">“{t.text}”</p>
                    <p className="font-semibold text-blue-800">— {t.name}</p>
                </motion.div>
            ))}
        </div>
    </section>
);

export default TestimonialsSection;
