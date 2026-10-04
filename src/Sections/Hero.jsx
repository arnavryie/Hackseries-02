import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Clock, Zap, Terminal, Shield, Cpu, Globe } from 'lucide-react';
import PhoenixLogo from '../assets/phoenix-vector.svg';
import DarkVeil from '../Components/DarkVeil';
import FloatingLines from '../Components/FloatingLines';
import ModelViewer from '../Components/ModelViewer';
import CyberEmbers from '../Components/CyberEmbers';
import phoenixModel from '../assets/phoenix.glb';

const Hero = () => {
    const registrationFormUrl = 'https://campusmeet.in/go.php?slug=hackseries-2';
    const [isDesktop, setIsDesktop] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [modelKey, setModelKey] = useState(0);

    // Live New Year Countdown Timer
    const [timeLeft, setTimeLeft] = useState({
        days: 14,
        hours: 8,
        minutes: 42,
        seconds: 30
    });

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 1024);
        setMounted(true);
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Force Three.js to remount AFTER DOM has fully painted
    useEffect(() => {
        if (!mounted) return;
        const t = setTimeout(() => setModelKey(1), 150);
        return () => clearTimeout(t);
    }, [mounted]);

    // Live countdown interval
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const domainChips = [
        { name: "⚡ GenAI & Agents", path: "/roadmaps/aiml", color: "hover:border-[#E7C159] hover:text-[#E7C159]" },
        { name: "🌐 Spatial Web & Three.js", path: "/roadmaps/webdev", color: "hover:border-[#00F0FF] hover:text-[#00F0FF]" },
        { name: "☁️ Cloud DevOps", path: "/roadmaps/cloud", color: "hover:border-purple-400 hover:text-purple-300" },
        { name: "🛡️ Systems & Security", path: "/roadmaps/programming", color: "hover:border-rose-400 hover:text-rose-300" },
        { name: "🚀 High-Perf DSA", path: "/roadmaps/dsa", color: "hover:border-emerald-400 hover:text-emerald-300" },
    ];

    return (
        <section id="home" className="relative min-h-screen w-full bg-[#05020c] flex items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Ambient Cyber Embers Particle Canvas */}
            <CyberEmbers />

            {/* Ambient Background Glow Mesh */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#D4AF37]/15 via-[#00F0FF]/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            {!mounted ? null : isDesktop ? (
                <div className="absolute inset-0 z-0 opacity-40">
                    <FloatingLines
                        enabledWaves={['top', 'middle', 'bottom']}
                        lineCount={3}
                        lineDistance={6}
                        bendRadius={3}
                        bendStrength={-0.3}
                        interactive={true}
                        parallax={true}
                        linesGradient={['#fff2c2', '#d4af37', '#00f0ff']}
                        mixBlendMode="screen"
                    />
                </div>
            ) : (
                <>
                    <div className="absolute -inset-10 md:-inset-20 z-0 scale-105">
                        <DarkVeil
                            hueShift={233}
                            noiseIntensity={0}
                            scanlineIntensity={0.2}
                            speed={1}
                            scanlineFrequency={0.5}
                            warpAmount={0.5}
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/55 lg:bg-transparent z-5 pointer-events-none" />
                </>
            )}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mt-8 md:mt-14 relative z-10 flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-10 lg:gap-12 min-h-[82vh]">

                {/* 3D Phoenix & Holographic Stage */}
                {!mounted ? null : isDesktop ? (
                    <div className="w-full lg:w-[48%] flex justify-center lg:justify-end relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.88 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                opacity: { duration: 1.8 },
                                scale: { duration: 1.8, ease: "easeOut" }
                            }}
                            className="relative flex items-center justify-center"
                            style={{ width: 550, height: 550 }}
                        >
                            {/* Holographic Glowing Pedestal Ring */}
                            <div className="absolute -bottom-8 w-96 h-96 rounded-full border border-[#00F0FF]/30 animate-holo-spin pointer-events-none" style={{ transform: 'rotateX(72deg)' }}>
                                <div className="absolute inset-4 rounded-full border border-dashed border-[#D4AF37]/50 animate-holo-spin-reverse" />
                                <div className="absolute inset-8 rounded-full border border-dotted border-[#00F0FF]/40" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#00F0FF]/15 to-transparent blur-xl" />
                            </div>

                            <ModelViewer
                                key={modelKey}
                                url={phoenixModel}
                                width={550}
                                height={550}
                                defaultRotationX={0}
                                defaultRotationY={90}
                                defaultZoom={0.11}
                                minZoomDistance={0.11}
                                maxZoomDistance={0.11}
                                cameraFov={45}
                                modelXOffset={0}
                                modelYOffset={0}
                                enableHoverRotation={false}
                                enableManualRotation={true}
                                autoRotate={false}
                                environmentPreset="studio"
                                ambientIntensity={0.35}
                                keyLightIntensity={0.9}
                                fillLightIntensity={0.3}
                                rimLightIntensity={1.8}
                                shadowOpacity={0.5}
                            />
                            
                            <motion.div
                                animate={{ opacity: [0.25, 0.5, 0.25] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-tr from-[#E7C159]/25 via-transparent to-[#00F0FF]/25 blur-3xl rounded-full -z-10 pointer-events-none scale-110"
                            />
                        </motion.div>
                    </div>
                ) : (
                    <div className="relative w-full flex justify-center py-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5 }}
                            className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center"
                        >
                            <img
                                src={PhoenixLogo}
                                alt="Phoenix"
                                className="w-full h-full object-contain brightness-125 contrast-125 drop-shadow-[0_0_35px_rgba(212,175,55,0.5)]"
                            />
                            <div className="absolute inset-0 bg-[#D4AF37]/15 blur-2xl rounded-full -z-10" />
                        </motion.div>
                    </div>
                )}

                {/* Left Column: Title, HUD Badge, Countdown & CTAs */}
                <div className="w-full lg:w-[52%] flex flex-col items-start text-left z-20 px-2 sm:px-4">
                    {/* Cyber HUD Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#00F0FF]/40 bg-black/60 backdrop-blur-md mb-5 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
                        </span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-200 font-bold font-mono">
                            NEW YEAR 2026 // EDITION 2.0 // REGISTRATIONS OPEN
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase text-white leading-none tracking-tight w-full mb-5 drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]"
                    >
                        HACK<span className="text-gradient-gold-cyan font-black">SERIES</span>
                    </motion.h1>

                    {/* Subtitle / Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-300 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl leading-relaxed mb-6"
                    >
                        The next-generation technical hackathon and incubation sprint hosted by ACES. 
                        Ascend from core architectures to autonomous systems, 3D spatial web, and 
                        scalable distributed systems through immersive real-world challenges.
                    </motion.p>

                    {/* Live Event Countdown Matrix */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-[#D4AF37]/25 backdrop-blur-xl mb-7 shadow-[0_0_25px_rgba(212,175,55,0.1)]"
                    >
                        <div className="flex items-center gap-2 pr-3 sm:pr-4 border-r border-white/10 text-[#E7C159]">
                            <Clock size={18} className="animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider hidden sm:inline">
                                KICKOFF IN
                            </span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 font-mono text-center">
                            <div className="flex flex-col">
                                <span className="text-lg sm:text-2xl font-black text-white">{String(timeLeft.days).padStart(2, '0')}</span>
                                <span className="text-[9px] text-gray-400 font-sans uppercase">Days</span>
                            </div>
                            <span className="text-gray-500 font-bold">:</span>
                            <div className="flex flex-col">
                                <span className="text-lg sm:text-2xl font-black text-[#E7C159]">{String(timeLeft.hours).padStart(2, '0')}</span>
                                <span className="text-[9px] text-gray-400 font-sans uppercase">Hours</span>
                            </div>
                            <span className="text-gray-500 font-bold">:</span>
                            <div className="flex flex-col">
                                <span className="text-lg sm:text-2xl font-black text-[#00F0FF]">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                <span className="text-[9px] text-gray-400 font-sans uppercase">Mins</span>
                            </div>
                            <span className="text-gray-500 font-bold">:</span>
                            <div className="flex flex-col">
                                <span className="text-lg sm:text-2xl font-black text-emerald-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                <span className="text-[9px] text-gray-400 font-sans uppercase">Secs</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 w-full sm:w-auto z-20 mb-8"
                    >
                        <a 
                            href={registrationFormUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#E7C159] hover:from-[#00F0FF] hover:to-cyan-400 text-black font-black tracking-wider text-center flex items-center justify-center gap-2 text-xs sm:text-sm rounded-full shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] hover:scale-105 transition-all duration-300 uppercase"
                        >
                            <span>REGISTER NOW</span>
                            <ArrowRight size={16} />
                        </a>

                        <a 
                            href="#timeline"
                            className="px-7 py-3.5 bg-white/[0.06] hover:bg-white/[0.12] border border-[#D4AF37]/50 hover:border-[#00F0FF] text-white font-bold tracking-wider text-center flex items-center justify-center gap-2 text-xs sm:text-sm rounded-full backdrop-blur-md hover:scale-105 transition-all duration-300 uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                        >
                            <span>VIEW SCHEDULE</span>
                        </a>
                    </motion.div>

                    {/* Interactive Domain Quick-Launch Pills */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="w-full pt-4 border-t border-white/10"
                    >
                        <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 block mb-2.5">
                            EXPLORE ROADMAP TRACKS:
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {domainChips.map((chip) => (
                                <Link
                                    key={chip.name}
                                    to={chip.path}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/[0.04] border border-white/10 text-gray-300 transition-all duration-200 ${chip.color} hover:bg-white/[0.08] hover:scale-105`}
                                >
                                    {chip.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="hidden md:block absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-5 pointer-events-none" />
        </section>
    );
};

export default Hero;
