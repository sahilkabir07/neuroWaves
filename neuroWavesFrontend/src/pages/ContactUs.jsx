import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted", formData);
        alert("Message Sent! (Frontend Only for Now)");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="min-h-screen px-4 pt-40 pb-16 md:px-20 bg-[#0f172a] text-white flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
                className="flex items-center justify-center mb-12"
            >
                <span className="text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide flex items-center gap-2">
                    C
                    <span className="inline-block align-middle">
                        <motion.div
                            initial={{ scale: 0.8, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            whileHover={{ scale: 1.12, rotate: 8 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-yellow-400 shadow-lg flex items-center justify-center bg-gradient-to-b from-[#232323] to-white"
                        >
                            <img
                                src="/neuroclasses.png"
                                alt="O"
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-contain"
                                style={{ background: "transparent" }}
                            />
                        </motion.div>
                    </span>
                    NTACT US
                </span>
            </motion.div>

            <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.2 }}
                className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center"
            >
                <div className="flex flex-col items-center gap-4 mb-10">
                    <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-2">Reach us at:</span>
                </div>
                <div className="flex flex-row flex-wrap gap-16 w-full justify-center items-center mb-6">
                    <div className="flex flex-row items-center gap-3">
                        <span className="text-lg font-bold text-blue-300">Email:</span>
                        <a href="mailto:info@neurowave.com" className="text-yellow-400 font-semibold text-lg hover:underline">info@neurowave.com</a>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="text-lg font-bold text-blue-300">Phone:</span>
                        <a href="tel:+919876543210" className="text-blue-400 font-semibold text-lg hover:underline">+91-9876543210</a>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="text-lg font-bold text-blue-300">Location:</span>
                        <span className="text-yellow-400 font-semibold text-lg">123 Main Street, City</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactUs;
