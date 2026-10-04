import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Network, Globe2, Crown, Code2, Workflow, Target, Puzzle, Award, UserPlus, Database, Cloud } from 'lucide-react';
import BorderGlow from '../Components/BorderGlow';

const Impact = () => {
    const canvasRef = useRef(null);
    // Exact user content mapping with updated icons
    const impacts = {
        technical: {
            title: "Technical Proficiency",
            desc: "Participants develop a deeper understanding of various concepts and programming languages, preparing them for internships and hackathons.",
            icon: <Code2 className="w-8 h-8 text-[#D4AF37] mb-4 relative z-20" />,
            bgIcon: <Terminal className="w-[400px] h-[400px] text-[#D4AF37]" strokeWidth={0.5} />
        },
        problem: {
            title: "Problem-Solving Skills",
            desc: "Each session includes problem-solving tasks that push students to think critically and come up with creative solutions.",
            icon: <Puzzle className="w-8 h-8 text-[#D4AF37] mb-4 relative z-20" />,
            bgIcon: <Shield className="w-[300px] h-[300px] text-[#D4AF37]" strokeWidth={0.5} />
        },
        networking: {
            title: "Networking Opportunities",
            desc: "Participants can network with speakers, mentors, and peers, building valuable connections for future career opportunities.",
            icon: <Network className="w-8 h-8 text-[#D4AF37] mb-4 relative z-20" />,
            bgIcon: <Workflow className="w-[350px] h-[350px] text-[#D4AF37]" strokeWidth={0.5} />
        },
        realworld: {
            title: "Real-World Experience",
            desc: "Bridge the gap between theory and practice by actively collaborating on practical, industry-aligned projects.",
            icon: <Globe2 className="w-8 h-8 text-[#D4AF37] mb-4 relative z-20" />,
            bgIcon: <Target className="w-[250px] h-[250px] text-[#D4AF37]" strokeWidth={0.5} />
        },
        leadership: {
            title: "Leadership & Teamwork",
            desc: "Develop crucial soft skills by collaborating in high-stakes environments, learning to lead teams effectively.",
            icon: <Crown className="w-8 h-8 text-[#D4AF37] mb-4 relative z-20" />,
            bgIcon: <Award className="w-[300px] h-[300px] text-[#D4AF37]" strokeWidth={0.5} />
        }
    };

    const cardClass = "bg-[#050505]/95 backdrop-blur-xl border border-white/5 rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] px-4 sm:px-6 lg:px-8 pt-6 sm:pt-7 lg:pt-8 pb-6 sm:pb-8 lg:pb-10 flex flex-col gap-3 sm:gap-4 lg:gap-5 relative overflow-hidden shadow-2xl transition-all duration-500 ease-out will-change-transform";

    const glowProps = {
        edgeSensitivity: 30,
        glowColor: "40 80 80",
        backgroundColor: "#060010",
        borderRadius: 28,
        glowRadius: 40,
        glowIntensity: 1.4,
        coneSpread: 25,
        animated: false,
        colors: ['#c084fc', '#f472b6', '#38bdf8'],
    };

    return (
        <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#05020c] min-h-screen">
            {/* 1. Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none opacity-80"
            />

            {/* 2. Gradient Overlay for Stacking Depth */}
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-[#05020c] via-transparent to-[#05020c]" />

            <div className="w-full px-0 sm:px-4 lg:px-[6vw] relative z-10">
                {/* Header */}
                <div className="mb-14 sm:mb-18 lg:mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/60 backdrop-blur-md mb-5 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                        <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-gray-300 uppercase">
                            IMPACT &amp; OUTCOMES // PROVEN BENCHMARKS
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight leading-tight mb-8">
                        How Hack<span className="text-gradient-gold-cyan font-black">Series</span> <br /> Transforms Builders
                    </h2>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto p-6 rounded-2xl bg-white/[0.02] border border-[#D4AF37]/25 backdrop-blur-xl">
                        <div className="text-center p-3 border-r border-white/5 last:border-none">
                            <span className="text-3xl sm:text-4xl font-black text-[#E7C159]">1,500+</span>
                            <span className="block text-xs text-gray-400 uppercase tracking-widest mt-1">Hackers Trained</span>
                        </div>
                        <div className="text-center p-3 border-r border-white/5 last:border-none">
                            <span className="text-3xl sm:text-4xl font-black text-[#00F0FF]">120+</span>
                            <span className="block text-xs text-gray-400 uppercase tracking-widest mt-1">Projects Shipped</span>
                        </div>
                        <div className="text-center p-3 border-r border-white/5 last:border-none">
                            <span className="text-3xl sm:text-4xl font-black text-[#C084FC]">40+</span>
                            <span className="block text-xs text-gray-400 uppercase tracking-widest mt-1">Tech Mentors</span>
                        </div>
                        <div className="text-center p-3">
                            <span className="text-3xl sm:text-4xl font-black text-emerald-400">94%</span>
                            <span className="block text-xs text-gray-400 uppercase tracking-widest mt-1">Internship Rate</span>
                        </div>
                    </div>
                </div>

                {/* Bento Grid: unified mosaic layout */}
                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5 relative z-20 md:grid-cols-2 lg:grid-cols-[minmax(280px,1fr)_minmax(520px,1.4fr)_minmax(280px,1fr)] md:grid-rows-3 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] items-stretch lg:min-h-[70vh]">

                    {/* Problem Solving: left top */}
                    <BorderGlow {...glowProps} className="md:col-start-1 md:row-start-1 lg:col-start-1 lg:row-start-1">
                        <div className={`${cardClass} min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] lg:h-full justify-between`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                            <div className="mt-auto relative z-20">
                                {impacts.problem.icon}
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-boldonse font-bold text-white mb-2 sm:mb-3 tracking-wide">{impacts.problem.title}</h3>
                                <p className="text-gray-400 font-light text-xs sm:text-sm lg:text-base leading-relaxed drop-shadow-md">{impacts.problem.desc}</p>
                            </div>
                        </div>
                    </BorderGlow>

                    {/* Technical Proficiency: large centered anchor */}
                    <BorderGlow {...glowProps} className="md:col-start-2 md:row-start-1 md:row-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1">
                        <div className={`${cardClass} h-full`}>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 via-[#D4AF37]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0" />
                            <div className="absolute -top-28 -right-24 opacity-[0.02] group-hover:opacity-[0.1] transition-opacity duration-[1.5s] ease-out z-0 pointer-events-none">
                                {impacts.technical.bgIcon}
                            </div>

                            <div className="w-full bg-[#0a0a0a]/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/10 p-3 sm:p-5 md:p-6 mb-auto shadow-[0_20px_50px_rgba(0,0,0,0.7)] transform transition-transform duration-500 mt-3 sm:mt-5 relative z-10 font-mono text-xs sm:text-sm md:text-base">
                                <div className="flex gap-2 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
                                </div>

                                <div className="space-y-4 md:space-y-5">
                                    <div className="flex flex-wrap gap-2 md:gap-3 items-center">
                                        <span className="text-[#D4AF37]">import</span>
                                        <span className="text-white">{' { Innovation } '}</span>
                                        <span className="text-[#D4AF37]">from</span>
                                        <span className="text-gray-400">'@hack/core'</span>;
                                    </div>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        <span className="text-[#D4AF37]">const</span>
                                        <span className="text-white">Participant</span>
                                        <span className="text-blue-400">=</span>
                                        <span className="text-purple-400">new</span>
                                        <span className="text-[#D4AF37]">Developer</span>();
                                    </div>
                                    <div className="pl-4 md:pl-6 flex flex-col gap-3 mt-4 border-l border-white/10 ml-2 md:ml-3">
                                        <div className="text-gray-500 italic">// Initialize logic circuits...</div>
                                        <div className="flex flex-wrap gap-2 md:gap-3 items-center">
                                            <span className="text-purple-400">await</span>
                                            <div>
                                                <span className="text-white">Participant.</span><span className="text-green-300">upgrade</span><span className="text-white">();</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-white">Participant.</span><span className="text-blue-300">deploy</span><span className="text-white">()</span>
                                            <span className="w-2 h-5 bg-[#D4AF37] animate-[pulse_1s_ease-in-out_infinite] shadow-[0_0_8px_#D4AF37]"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 sm:mt-6 relative z-20">
                                {impacts.technical.icon}
                                <h3 className="text-2xl sm:text-3xl md:text-5xl font-boldonse font-bold text-white mb-2 sm:mb-4 leading-tight tracking-wide">{impacts.technical.title}</h3>
                                <p className="text-gray-400 font-light text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-md">{impacts.technical.desc}</p>
                            </div>
                        </div>
                    </BorderGlow>

                    {/* Real-World Experience: right top */}
                    <BorderGlow {...glowProps} className="md:col-start-1 md:row-start-2 lg:col-start-3 lg:row-start-1">
                        <div className={`${cardClass} min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] lg:h-full justify-between`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                            <div className="mt-auto relative z-20">
                                {impacts.realworld.icon}
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-boldonse font-bold text-white mb-2 sm:mb-3 tracking-wide">{impacts.realworld.title}</h3>
                                <p className="text-gray-400 font-light text-xs sm:text-sm lg:text-base leading-relaxed drop-shadow-md">{impacts.realworld.desc}</p>
                            </div>
                        </div>
                    </BorderGlow>

                    {/* Leadership & Teamwork: left bottom */}
                    <BorderGlow {...glowProps} className="md:col-start-2 md:row-start-3 lg:col-start-1 lg:row-start-2">
                        <div className={`${cardClass} min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] lg:h-full justify-between`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                            <div className="mt-auto z-20 relative">
                                {impacts.leadership.icon}
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-boldonse font-bold text-white mb-2 sm:mb-3 tracking-wide">{impacts.leadership.title}</h3>
                                <p className="text-gray-400 font-light text-xs sm:text-sm lg:text-base leading-relaxed drop-shadow-md">{impacts.leadership.desc}</p>
                            </div>
                        </div>
                    </BorderGlow>

                    {/* Networking Opportunities: right bottom */}
                    <BorderGlow {...glowProps} className="md:col-start-1 md:row-start-3 lg:col-start-3 lg:row-start-2">
                        <div className={`${cardClass} min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] lg:h-full justify-between`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                            <div className="mt-auto z-20 relative pb-0 sm:pb-2 lg:pb-6">
                                {impacts.networking.icon}
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-boldonse font-bold text-white mb-2 sm:mb-3 tracking-wide">{impacts.networking.title}</h3>
                                <p className="text-gray-400 font-light text-xs sm:text-sm lg:text-base leading-relaxed drop-shadow-md mb-1 sm:mb-2">{impacts.networking.desc}</p>
                            </div>
                        </div>
                    </BorderGlow>
                </div>
            </div>
        </section>
    );
};

export default Impact;