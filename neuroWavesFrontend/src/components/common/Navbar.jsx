import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/neuroclasses.png";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Notes", path: "/notes" },
    { name: "Videos", path: "/videos" },
    { name: "Contact", path: "/contact" },

];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [longPressTimer, setLongPressTimer] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();


    const handleTouchStart = () => {
        const timer = setTimeout(() => {
            navigate("/admin/login");
        }, 1000);
        setLongPressTimer(timer);
    };

    const handleTouchEnd = () => clearTimeout(longPressTimer);


    const handleLogoClick = (e) => {
        if (e.altKey) {
            navigate("/admin/login");
        }
    };


    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);


    useEffect(() => {
        if (!document.getElementById('ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.innerHTML = `
              .ripple-effect {
                filter: url(#ripple-filter);
                animation: rippleAnim 1.2s linear infinite;
              }
              @keyframes rippleAnim {
                0% { filter: url(#ripple-filter); }
                100% { filter: url(#ripple-filter); }
              }
            `;
            document.head.appendChild(style);
        }
        if (!document.getElementById('ripple-svg-filter')) {
            const svgNS = 'http://www.w3.org/2000/svg';
            const svg = document.createElementNS(svgNS, 'svg');
            svg.setAttribute('style', 'position: absolute; width: 0; height: 0;');
            svg.setAttribute('id', 'ripple-svg-filter');
            svg.innerHTML = `
                <filter id="ripple-filter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.02 0.03" numOctaves="2" result="turb" seed="2"/>
                  <feDisplacementMap in2="turb" in="SourceGraphic" scale="12" xChannelSelector="R" yChannelSelector="G"/>
                </filter>
            `;
            document.body.appendChild(svg);
        }
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="fixed top-0 left-0 w-full z-[9999] bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-32 text-white relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-yellow-400/30 pointer-events-none"></div>
                <div
                    className="flex items-center gap-5 cursor-pointer select-none h-full relative z-10"
                    onClick={handleLogoClick}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="relative flex items-center gap-5 h-full">
                        <div className="bg-gradient-to-b from-[#1A1A1A] to-white rounded-full p-2 flex items-center justify-center shadow-lg h-28 w-28">
                            <motion.img
                                src={logo}
                                alt="Neuro Wave Logo"
                                className="h-24 w-24 drop-shadow-xl object-contain"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.12, rotate: -2 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            />
                        </div>
                        <div className="relative flex flex-col items-center justify-center h-full">
                            <motion.svg
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
                                viewBox="0 0 200 40"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                animate={{
                                    y: [0, 4, -4, 4, -4, 0],
                                    transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                                }}
                                style={{ zIndex: 0 }}
                            >
                                <motion.path
                                    d="M0 20 Q 50 40 100 20 T 200 20"
                                    fill="none"
                                    stroke="#facc15"
                                    strokeWidth="6"
                                    initial={{ pathLength: 0.8 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                                />
                            </motion.svg>
                            <motion.span
                                className="font-extrabold text-4xl md:text-5xl tracking-wide text-yellow-400 drop-shadow-lg relative z-10 leading-tight text-center"
                                style={{ background: "transparent" }}
                                whileHover={{
                                    scale: 1.07,
                                    textShadow: "0 0 8px #facc15"
                                }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                Neuro Wave
                                <br />
                                <span className="block text-2xl font-bold text-blue-300 tracking-wider mt-1">Classes</span>
                            </motion.span>
                        </div>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 font-semibold relative z-10">
                    {navLinks.map((link) => (
                        <motion.div
                            key={link.path}
                            whileHover={{ scale: 1.14, y: -3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link
                                to={link.path}
                                className={`px-5 py-2 rounded-lg transition-all duration-200
                                    ${location.pathname === link.path
                                        ? "bg-yellow-400 text-black shadow font-bold"
                                        : "hover:bg-yellow-300/20 hover:text-yellow-300"}
                                `}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden relative z-10">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Open Menu" className="text-white hover:text-yellow-400 transition-colors">
                        <span className="text-3xl">&#9776;</span>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-4 text-white space-y-2 shadow-lg"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2 rounded-lg transition-all duration-200
                                ${location.pathname === link.path
                                    ? "bg-yellow-400 text-black shadow font-bold"
                                    : "hover:bg-yellow-300/20 hover:text-yellow-300"}
                            `}
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};



export default Navbar;
