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
    const [chapters, setChapters] = useState([]);
    const [loading, setLoading] = useState(false);

    const subjects = ["Biology", "Chemistry", "Physics"]; // Bio first

    useEffect(() => {
        if (subject === "Biology" || subject === "Physics") {
            setLoading(true);
            fetch(`https://neurowaves.onrender.com/api/notes/${mainTab}/${subject}`)
                .then((res) => res.json())
                .then((data) => {
                    setChapters(data || []);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching notes:", err);
                    setChapters([]);
                    setLoading(false);
                });
        } else {
            setChapters([]);
        }
    }, [mainTab, subject]);

    return (
        <div className="bg-white/80 min-h-screen w-full">
            <section className="w-full pt-40 pb-12 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
                    Notes
                </h1>

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
                <div className="w-full mb-8">
                    <div className="bg-white/80 rounded-xl p-3 flex flex-col gap-3 items-center">
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
                            {subjects.slice(0, 2).map((subj) => (
                                <motion.button
                                    key={subj}
                                    className={
                                        subjectTabClasses(subject === subj) + " min-w-[120px]"
                                    }
                                    onClick={() => setSubject(subj)}
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {subj}
                                </motion.button>
                            ))}
                        </div>
                        <div className="flex justify-center gap-4 md:gap-6 w-full">
                            <motion.button
                                key={subjects[2]}
                                className={
                                    subjectTabClasses(subject === subjects[2]) + " min-w-[120px]"
                                }
                                onClick={() => setSubject(subjects[2])}
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {subjects[2]}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Notes Section */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={mainTab + subject}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center justify-center min-h-[220px] w-full"
                    >
                        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                            {mainTab} {subject} Notes
                        </h2>

                        {subject === "Chemistry" ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col items-center justify-center gap-2"
                            >
                                <span className="text-6xl mb-2">🚧</span>
                                <span className="text-xl md:text-2xl font-bold text-yellow-500">
                                    Coming Soon!
                                </span>
                                <span className="text-base text-blue-700">
                                    Notes for {subject} will be available soon.
                                </span>
                            </motion.div>
                        ) : loading ? (
                            <p className="text-gray-600">Loading chapters...</p>
                        ) : chapters.length > 0 ? (
                            <div className="w-full">
                                {chapters.map((chapter, chapterIdx) => (
                                    <div key={chapter.chapter || chapterIdx} className="mb-6">
                                        <h3 className="text-xl font-bold text-blue-900 mb-3">
                                            📚 {chapter.chapter || "Notes"}
                                        </h3>
                                        <ul className="grid gap-3 md:grid-cols-2">
                                            {(chapter.files || chapters).map((note, idx) => (
                                                <li
                                                    key={idx}
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
                                    </div>
                                ))}

                            </div>
                        ) : (
                            <p className="text-gray-600">No chapters found.</p>
                        )}
                    </motion.div>
                </AnimatePresence>
            </section>
        </div>
    );
};

export default Notes;
