import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhoenixLogo from '../assets/logo (1).png';
import { Clock, CheckCircle2 } from 'lucide-react';

const timelineEvents = [
    {
        eventNumber: 1,
        dayBadge: "DAY 01",
        title: "Kickoff & System Ideation",
        duration: "Duration - 09:00 AM to 06:00 PM",
        description: "Inauguration ceremony, problem statements drop, mentor-led domain architecture masterclasses, and initial system design sign-off.",
        highlights: ["Inauguration Keynotes", "Problem Statements Drop", "Architecture Sign-off"],
        className: "top-[4%] left-[2%] xs:left-[3%] lg:top-[10%] lg:left-[6%] xl:left-[11%]",
        accent: "#00F0FF"
    },
    {
        eventNumber: 2,
        dayBadge: "DAY 02",
        title: "24H Continuous Build Sprint",
        duration: "Duration - 10:00 AM to Late Night (Non-Stop)",
        description: "Non-stop building sprint, 1-on-1 industry mentorship clinics, mid-checkpoint evaluation, midnight fuel drop, and live cyber trivia.",
        highlights: ["Continuous Engineering", "1-on-1 Mentor Clinics", "Midnight Fuel Drops"],
        className: "top-[36%] right-[2%] xs:right-[3%] lg:top-[38%] lg:right-[4%] xl:right-[8%]",
        accent: "#00F0FF"
    },
    {
        eventNumber: 3,
        dayBadge: "DAY 03",
        title: "Demo Day & Grand Finale",
        duration: "Duration - 09:00 AM to 05:00 PM",
        description: "Hard code freeze, top 15 finalist teams pitching live before founder and VC jury, followed by ₹2,00,000+ cash prizes & awards gala.",
        highlights: ["Code Freeze 09:00 AM", "Top 15 Live Stage Pitches", "Grand Awards Gala"],
        className: "top-[68%] left-[2%] xs:left-[3%] lg:top-[68%] lg:left-[5%] xl:left-[9%]",
        accent: "#00F0FF"
    }
];

function TimelineCard({ event, isLgScreen }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start 85%', 'center 50%'],
    });

    const numberColor = useTransform(
        scrollYProgress,
        [0, 0.5],
        ['#544e63', '#F5EFE6']
    );

    const numberGlow = useTransform(
        scrollYProgress,
        [0, 0.5],
        ['none', '0 0 25px rgba(245, 239, 230, 0.45)']
    );

    return (
        <div
            ref={cardRef}
            className={`absolute flex flex-row items-start gap-2.5 xs:gap-3.5 lg:gap-6 w-[86%] xs:w-[82%] sm:w-[68%] max-w-[295px] xs:max-w-[335px] sm:max-w-[420px] lg:max-w-[480px] xl:max-w-[540px] z-20 p-2.5 xs:p-3 sm:p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/[0.06] shadow-[0_4px_25px_rgba(0,0,0,0.5)] lg:bg-transparent lg:border-none lg:shadow-none lg:p-0 ${event.className}`}
        >
            {/* Sketch Number (Sketch_Block.ttf) */}
            <div className="shrink-0 select-none pt-0.5 sm:pt-0">
                <motion.span
                    style={{ 
                        color: numberColor,
                        textShadow: numberGlow,
                        fontFamily: 'SketchBlock, serif'
                    }}
                    className="text-[52px] xs:text-[65px] sm:text-[95px] md:text-[120px] xl:text-[150px] leading-none block font-normal tracking-[2px] sm:tracking-[5px] transition-colors"
                >
                    {event.eventNumber}
                </motion.span>
            </div>

            {/* Event Details Box */}
            <div className="flex flex-col py-0.5 w-full">
                {/* Day Badge & Duration */}
                <div className="flex items-center gap-1.5 xs:gap-2 mb-1">
                    <span className="px-1.5 xs:px-2 py-0.5 rounded text-[9px] xs:text-[10px] font-mono font-bold tracking-widest uppercase border border-[#00F0FF]/40 text-[#00F0FF] bg-[#00F0FF]/10 backdrop-blur-md">
                        {event.dayBadge}
                    </span>
                    <span className="text-[10px] xs:text-[11px] sm:text-xs font-mono text-gray-400 flex items-center gap-1 truncate">
                        <Clock size={11} className="text-[#00F0FF] shrink-0" />
                        {event.duration.replace('Duration - ', '')}
                    </span>
                </div>

                {/* Sky Blue / Cyan Title */}
                <h3 className="text-sm xs:text-base sm:text-xl lg:text-2xl font-bold text-[#38BDF8] tracking-tight leading-snug mb-1 font-sans drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]">
                    {event.title}
                </h3>

                {/* Hand-drawn divider from HackNITR */}
                <img
                    src="/timeline/border.svg"
                    alt="divider"
                    className="w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[340px] my-1 opacity-70 filter brightness-150 contrast-125"
                />

                {/* Duration subtitle (Bold White as seen in PC) */}
                <div className="text-[11px] xs:text-xs sm:text-base font-semibold text-white mt-0.5 mb-1 font-sans">
                    {event.duration}
                </div>

                {/* Description */}
                <p className="text-[11px] xs:text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-2.5">
                    {event.description}
                </p>

                {/* Highlights chips */}
                <div className="flex flex-wrap gap-1 xs:gap-1.5">
                    {event.highlights.map((h, idx) => (
                        <span
                            key={idx}
                            className="px-1.5 xs:px-2 py-0.5 rounded text-[9px] xs:text-[10px] bg-white/[0.04] border border-white/10 text-gray-300 flex items-center gap-1"
                        >
                            <CheckCircle2 size={9} className="text-[#00F0FF] shrink-0" />
                            {h}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function CurvedTimeline() {
    const containerRef = useRef(null);
    const [pathElement, setPathElement] = useState(null);
    const [isLgScreen, setIsLgScreen] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsLgScreen(window.innerWidth >= 1024);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Smooth path transformation mapped across the scroll journey
    const pathLengthValue = useTransform(scrollYProgress, [0.10, 0.88], [0, 1]);

    const getPointAtLength = (progress) => {
        if (!pathElement) return { x: 9, y: 4 };
        const totalLength = pathElement.getTotalLength();
        const clampedProgress = Math.max(0, Math.min(1, progress));
        return pathElement.getPointAtLength(totalLength * clampedProgress);
    };

    const tipX = useTransform(pathLengthValue, (p) => getPointAtLength(p).x);
    const tipY = useTransform(pathLengthValue, (p) => getPointAtLength(p).y);

    return (
        <section
            id="timeline"
            ref={containerRef}
            className="relative py-20 sm:py-28 lg:py-32 px-2 sm:px-6 lg:px-8 bg-[#05020c] overflow-hidden min-h-screen"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#00F0FF]/10 via-[#D4AF37]/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-purple-600/10 via-[#00F0FF]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

            {/* Header Section */}
            <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16 relative z-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00F0FF]/30 bg-black/60 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                    <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-gray-300 uppercase">
                        HACKSERIES 2026 // SCHEDULE CHRONICLES
                    </span>
                </div>

                {/* Exact WC_RoughTrad textured TIMELINE font with electric blue color from screenshot */}
                <h2 
                    style={{ fontFamily: 'WCRoughTrad, serif' }}
                    className="text-[clamp(3.5rem,8vw,7.5rem)] tracking-wider text-[#2BA6FF] drop-shadow-[0_0_35px_rgba(43,166,255,0.6)] leading-none mb-3 uppercase"
                >
                    TIMELINE
                </h2>

                <p className="text-gray-400 text-xs sm:text-base max-w-lg font-light px-4">
                    Follow the snaking path through 3 intensive days of building, mentorship, and celebration.
                </p>
            </div>

            {/* Timeline Canvas & Events Container - Exact Zigzag Anatomy on Desktop & Mobile */}
            <div className="relative max-w-7xl mx-auto h-[1400px] xs:h-[1460px] sm:h-[1520px] lg:h-[1350px] w-full">
                {/* Snaking SVG Path & Interactive Pencil / Mascot */}
                <div className="absolute inset-0 pointer-events-none z-10 mx-auto w-full max-w-[1240px]">
                    {/* Pencil / Stylus at top-left start */}
                    <img
                        src="/timeline/pencil.svg"
                        alt="pencil"
                        className="absolute -top-7 -left-3 xs:-top-10 xs:-left-4 lg:-top-12 lg:-left-6 w-20 h-20 xs:w-28 xs:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 -rotate-12 filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    />

                    {/* Robot Mascot at bottom-right end */}
                    <img
                        src="/timeline/robot.svg"
                        alt="mascot"
                        className="absolute bottom-2 right-1 xs:bottom-6 xs:right-2 lg:bottom-16 lg:right-4 xl:right-10 w-28 xs:w-36 sm:w-42 lg:w-48 xl:w-56 h-auto filter drop-shadow-[0_0_30px_rgba(0,240,255,0.35)]"
                    />

                    {/* Exact SVG Curved Path */}
                    <svg
                        viewBox="-25 -25 1240 1090"
                        preserveAspectRatio={isLgScreen ? "xMidYMid meet" : "none"}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full lg:h-auto"
                    >
                        <defs>
                            <linearGradient id="cyberTimelineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#D4AF37" />
                                <stop offset="50%" stopColor="#00F0FF" />
                                <stop offset="100%" stopColor="#2BA6FF" />
                            </linearGradient>

                            <filter id="pathGlow">
                                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>

                            <filter id="circularLogoGlow" x="-100%" y="-100%" width="300%" height="300%">
                                <feGaussianBlur stdDeviation="6" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>

                            <clipPath id="phoenixBadgeClip">
                                <circle cx="0" cy="0" r="23" />
                            </clipPath>
                        </defs>

                        {/* Base Sketched Dashed Line */}
                        <path
                            d="M9.00101 3.99977C9.00101 3.99977 -15.1548 65.4995 50.5004 133.499C116.155 201.499 229.557 204.076 294.5 296.499C352.121 378.502 348.348 441.21 440.5 511.999C550.5 596.499 710.501 479.853 862.001 535.003C985.501 579.959 1058.43 986.896 1184.5 1033.5"
                            stroke="#423d50"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="16 16"
                            vectorEffect="non-scaling-stroke"
                            fill="none"
                        />

                        {/* Animated Glowing Path Driven by Scroll */}
                        <motion.path
                            ref={setPathElement}
                            d="M9.00101 3.99977C9.00101 3.99977 -15.1548 65.4995 50.5004 133.499C116.155 201.499 229.557 204.076 294.5 296.499C352.121 378.502 348.348 441.21 440.5 511.999C550.5 596.499 710.501 479.853 862.001 535.003C985.501 579.959 1058.43 986.896 1184.5 1033.5"
                            stroke="url(#cyberTimelineGrad)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="16 16"
                            vectorEffect="non-scaling-stroke"
                            fill="none"
                            filter="url(#pathGlow)"
                            style={{
                                pathLength: pathLengthValue,
                            }}
                        />

                        {/* Moving Tracking Emblem following the line */}
                        <motion.g
                            style={{
                                x: tipX,
                                y: tipY,
                                transformOrigin: 'center'
                            }}
                        >
                            <circle
                                cx="0"
                                cy="0"
                                r="36"
                                fill="#00F0FF"
                                fillOpacity="0.12"
                            />

                            <circle
                                cx="0"
                                cy="0"
                                r="28"
                                fill="none"
                                stroke="#00F0FF"
                                strokeWidth="4"
                                strokeOpacity="0.6"
                                filter="url(#circularLogoGlow)"
                            />

                            <circle
                                cx="0"
                                cy="0"
                                r="28"
                                fill="#05020c"
                                stroke="#00F0FF"
                                strokeWidth="2.5"
                            />

                            <circle
                                cx="0"
                                cy="0"
                                r="24.5"
                                fill="none"
                                stroke="#D4AF37"
                                strokeWidth="1"
                                strokeOpacity="0.45"
                            />

                            <image
                                href={PhoenixLogo}
                                xlinkHref={PhoenixLogo}
                                x="-18"
                                y="-18"
                                width="36"
                                height="36"
                                preserveAspectRatio="xMidYMid meet"
                                clipPath="url(#phoenixBadgeClip)"
                            />
                        </motion.g>
                    </svg>
                </div>

                {/* Event Milestones List (Exact Zigzag Positioning) */}
                <div className="relative w-full h-full">
                    {timelineEvents.map((ev) => (
                        <TimelineCard
                            key={ev.eventNumber}
                            event={ev}
                            isLgScreen={isLgScreen}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
