import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabClasses = (active) =>
    `px-8 py-3 rounded-lg font-bold text-xl cursor-pointer transition-all duration-300 ${active
        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 shadow-lg transform scale-105"
        : "bg-white/80 text-blue-900 hover:bg-yellow-100 hover:shadow-md border border-blue-200"
    }`;

const subjectTabClasses = (active) =>
    `px-6 py-2 rounded-full font-semibold text-lg cursor-pointer transition-all duration-300 ${active
        ? "bg-gradient-to-r from-blue-900 to-blue-800 text-yellow-400 shadow-lg transform scale-105"
        : "bg-white/80 text-blue-900 hover:bg-blue-100 hover:shadow-md border border-yellow-300"
    }`;

const Notes = () => {
    const [mainTab, setMainTab] = useState("11th");
    const [subject, setSubject] = useState("Biology");
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (subject === "Biology") {
            fetch(`http://localhost:5000/api/notes/${mainTab}/${subject}`)
                .then((res) => res.json())
                .then((data) => setNotes(data || []))
                .catch((err) => {
                    console.error("Error fetching notes:", err);
                    setNotes([]);
                });
        } else {
            setNotes([]); // Clear notes if not Biology
        }
    }, [mainTab, subject]);


    const subjects = ["Biology", "Chemistry", "Physics"]; // Bio first

    return (
        <section className="max-w-4xl mx-auto pt-40 pb-12 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">Notes</h1>

            {/* Main Tabs */}
            <div className="flex justify-center gap-8 mb-8">
                {["11th", "12th"].map((tab) => (
                    <motion.button
                        key={tab}
                        className={tabClasses(mainTab === tab)}
                        onClick={() => {
                            setMainTab(tab);
                            setSubject("Biology");
                        }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Class {tab}
                    </motion.button>
                ))}
            </div>

            {/* Subject Tabs */}
            <div className="flex justify-center gap-6 mb-8">
                {subjects.map((subj) => (
                    <motion.button
                        key={subj}
                        className={subjectTabClasses(subject === subj)}
                        onClick={() => setSubject(subj)}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {subj}
                    </motion.button>
                ))}
            </div>

            {/* Notes Section */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={mainTab + subject}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center justify-center min-h-[220px]"
                >
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                        {mainTab} {subject} Notes
                    </h2>

                    {subject === "Biology" ? (
                        notes.length > 0 ? (
                            <ul className="grid gap-3 md:grid-cols-2 w-full">
                                {notes.map((note) => (
                                    <li
                                        key={note.id}
                                        className="bg-blue-50 rounded-lg px-4 py-3 text-blue-900 font-semibold shadow hover:bg-yellow-100 transition text-center"
                                    >
                                        <p className="mb-2">{note.name}</p>
                                        <div className="flex justify-center gap-3">
                                            <a
                                                href={note.webViewLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-700"
                                            >
                                                View
                                            </a>
                                            <a
                                                href={note.webContentLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-1 bg-yellow-500 text-blue-900 rounded hover:bg-yellow-400"
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600">Loading notes...</p>
                        )
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-center justify-center gap-2"
                        >
                            <span className="text-6xl mb-2">🚧</span>
                            <span className="text-xl md:text-2xl font-bold text-yellow-500">Coming Soon!</span>
                            <span className="text-base text-blue-700">
                                Notes for {subject} will be available soon.
                            </span>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default Notes;
