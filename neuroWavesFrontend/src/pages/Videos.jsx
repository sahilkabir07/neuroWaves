import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

const Videos = () => {
    const [mainTab, setMainTab] = useState("11th");
    const [subject, setSubject] = useState("Biology");
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comingSoon, setComingSoon] = useState(false);

    useEffect(() => {
        setLoading(true);
        setComingSoon(false);
        fetch(`https://neurowaves.onrender.com/api/youtube/${mainTab}/${subject}`)
            .then((res) => {
                if (res.status === 400) {
                    setVideos([]);
                    setComingSoon(true);
                    setLoading(false);
                    return [];
                }
                return res.json();
            })
            .then((data) => {
                if (data.length > 0) {
                    setVideos(data);
                    setCurrentVideo(data[0]?.videoId);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching videos:", err);
                setLoading(false);
            });
    }, [mainTab, subject]);

    return (
        <div className="bg-white/80 min-h-screen w-full text-white">
            <div className="pt-40 px-4 md:px-20">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-center mb-12 text-blue-400"
                >
                    Our YouTube Playlists
                </motion.h2>
                {/* Class Tabs */}
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
                {/* Responsive subject tabs: stack for mobile, row for md+ */}
                <div className="w-full mb-8">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {/* First row: Biology, Chemistry */}
                        {["Biology", "Chemistry"].map((subj) => (
                            <motion.button
                                key={subj}
                                className={subjectTabClasses(subject === subj) + ' min-w-[120px]'}
                                onClick={() => setSubject(subj)}
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {subj}
                            </motion.button>
                        ))}
                    </div>
                    <div className="flex justify-center gap-4 md:gap-6 mt-3">
                        {/* Second row: Physics */}
                        <motion.button
                            key="Physics"
                            className={subjectTabClasses(subject === "Physics") + ' min-w-[120px]'}
                            onClick={() => setSubject("Physics")}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Physics
                        </motion.button>
                    </div>
                </div>
                {loading ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-16">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="text-6xl"
                        >
                            ⚡
                        </motion.div>
                        <motion.p
                            className="text-center text-xl text-blue-400 font-semibold"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Loading videos...
                        </motion.p>
                    </div>
                ) : comingSoon ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-16">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-8xl mb-4"
                        >
                            🚧
                        </motion.div>
                        <motion.span
                            className="text-2xl md:text-3xl font-bold text-yellow-400 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Coming Soon!
                        </motion.span>
                        <motion.span
                            className="text-lg text-blue-300 text-center max-w-md"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Videos for {mainTab} {subject} will be available soon.
                        </motion.span>
                    </div>
                ) : videos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-16">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-8xl mb-4"
                        >
                            📹
                        </motion.div>
                        <motion.span
                            className="text-2xl font-bold text-gray-400 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            No Videos Available
                        </motion.span>
                        <motion.span
                            className="text-lg text-gray-500 text-center max-w-md"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Check back later for new content!
                        </motion.span>
                    </div>
                ) : (
                    <div>
                        {/* Main Video Player */}
                        <div className="mb-8">
                            <iframe
                                className="w-full h-96 rounded-lg"
                                src={`https://www.youtube.com/embed/${currentVideo}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        {/* Playlist Thumbnails */}
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {videos.map((video, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white/5 rounded-lg overflow-hidden cursor-pointer border border-white/10 hover:border-blue-400 transition"
                                    onClick={() => setCurrentVideo(video.videoId)}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={video.thumbnail} alt={video.title} className="w-full" />
                                    <p className="p-2 text-sm text-center">{video.title}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Videos;
