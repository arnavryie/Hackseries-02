import React, { useState, useEffect } from 'react';

const reasons = [
    {
        id: "01",
        label: "Foundations",
        whiteText: "BUILD",
        yellowText: "FOUNDATIONS",
        desc: "Master the core logic of programming languages from the ground up to ensure a solid start."
    },
    {
        id: "02",
        label: "Hands-on",
        whiteText: "HANDS-ON",
        yellowText: "LEARNING",
        desc: "Theory is a ghost without practice. Apply concepts in real-world scenarios through intense projects."
    },
    {
        id: "03",
        label: "Career",
        whiteText: "CAREER",
        yellowText: "ORIENTED",
        desc: "Focus on high-demand domains, ensuring you stay updated with the latest tools and industry trends."
    },
    {
        id: "04",
        label: "Community",
        whiteText: "PEER",
        yellowText: "LEARNING",
        desc: "Experience collaborative and exponential growth in a competitive student-led environment."
    }
];

const Why = () => {
    // Determine the stacking order of cards. The first element is the front-most card.
    const [stack, setStack] = useState([0, 1, 2, 3]);
    const [animateOut, setAnimateOut] = useState(null);

    // Auto-play the stack interval (Story mode)
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000); // 5 seconds per card
        return () => clearInterval(timer);
    }, [stack]);

    const handleNext = () => {
        if (animateOut !== null) return; // Prevent double taps

        // 1. Trigger the fly-out animation for the current top card
        setAnimateOut(stack[0]);

        // 2. Wait for fly-out transition to complete, then update the array
        setTimeout(() => {
            setStack(prev => {
                const newStack = [...prev];
                const top = newStack.shift();
                newStack.push(top);
                return newStack;
            });
            setAnimateOut(null);
        }, 400); // matches the animation timing
    };

    return (
        <section className="relative bg-[#05020c] py-24 px-4 md:px-10 min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
            {/* Embedded styles for the Story progress bar */}
            <style>{`
                @keyframes fillStoryBar {
                    0% { transform: scaleX(0); }
                    100% { transform: scaleX(1); }
                }
            `}</style>

            {/* Ambient Cyan & Gold Glow Background */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1)_0%,_rgba(0,240,255,0.06)_40%,_transparent_70%)]" />

            <div className="relative z-10 w-full flex flex-col items-center">
                {/* Badge Header */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/60 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    <span className="w-2 h-2 rounded-full bg-[#E7C159] animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-gray-300 uppercase">
                        CORE PILLARS // 2026 EDITION
                    </span>
                </div>

                {/* Title */}
                <div className="flex flex-col items-center mb-8 md:mb-12">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-none text-center">
                        <span className="text-white">Why </span>
                        <span className="text-gradient-gold-cyan font-black">
                            HackSeries?
                        </span>
                    </h2>
                </div>

                {/* Cyber Progress Bars */}
                <div className="flex gap-2 w-full max-w-[340px] md:max-w-[450px] mb-8">
                    {reasons.map((_, originalIndex) => {
                        const isActive = stack[0] === originalIndex;

                        return (
                            <div key={originalIndex} className="h-1 md:h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden relative">
                                {isActive && !animateOut && (
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#00F0FF] origin-left"
                                        style={{ animation: 'fillStoryBar 5s linear forwards' }}
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* The Interactive 3D Stack Deck */}
                <div
                    className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] h-[480px] md:h-[500px]"
                    style={{ perspective: '1200px' }}
                >
                    {reasons.map((r, originalIndex) => {
                        const position = stack.indexOf(originalIndex);
                        const isAnimatingOut = animateOut === originalIndex;
                        const isFront = position === 0 && !isAnimatingOut;

                        // Calculate pure CSS 3D Transforms based on array index position to create a staggering deck
                        const getStyles = () => {
                            if (isAnimatingOut) {
                                return {
                                    zIndex: 50,
                                    opacity: 0,
                                    transform: 'translateX(120%) rotate(15deg) scale(0.9)',
                                    transition: 'all 0.4s ease-out'
                                };
                            }
                            if (position === 3) { // Front, Behind 1, Behind 2, Hidden (3)
                                return {
                                    zIndex: 10,
                                    opacity: 0,
                                    transform: `translateY(80px) scale(0.8)`,
                                    transition: 'none' // Snap instantly to back invisibly
                                };
                            }
                            return {
                                zIndex: 40 - position * 10,
                                opacity: 1 - position * 0.25,
                                transform: `translateY(${position * 25}px) scale(${1 - position * 0.05})`,
                                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                                cursor: isFront ? 'pointer' : 'default',
                                pointerEvents: isFront ? 'auto' : 'none'
                            };
                        };

                        return (
                            <div
                                key={r.id}
                                onClick={isFront ? handleNext : undefined}
                                className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-gradient-to-br from-[#141414] via-[#0a0a0a] to-[#050505] border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between p-8 md:p-10"
                                style={getStyles()}
                            >
                                {/* Massive Background Number Watermark */}
                                <div className="absolute -right-4 -bottom-4 md:-right-6 md:-bottom-6 opacity-20 pointer-events-none select-none">
                                    <span className="text-[12rem] md:text-[16rem] font-boldonse font-black leading-none tracking-tighter"
                                        style={{ WebkitTextStroke: "2px rgba(212, 175, 55, 0.8)", color: "transparent" }}>
                                        {r.id}
                                    </span>
                                </div>

                                {/* Golden Ambient Sweep */}
                                <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-tr from-transparent via-[#D4AF37]/5 to-transparent -rotate-45 pointer-events-none" />

                                <div className="relative z-10 flex flex-col">
                                    <span className="text-[#D4AF37] font-boldonse text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold bg-[#D4AF37]/10 w-fit px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-6 backdrop-blur-md">
                                        Reason {r.id}
                                    </span>

                                    <h2 className="text-4xl md:text-5xl font-boldonse font-bold text-white leading-tight tracking-tighter uppercase drop-shadow-xl select-none">
                                        {r.whiteText} <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#e6d083]">
                                            {r.yellowText}
                                        </span>
                                    </h2>
                                </div>

                                <div className="relative z-10 mb-4 md:mb-0">
                                    <p className="text-gray-300 text-sm md:text-base font-light tracking-wide leading-relaxed uppercase select-none">
                                        {r.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile Tap Hint */}
                {/*<div className="mt-12 text-gray-500 text-xs md:text-sm font-light tracking-[0.3em] uppercase animate-pulse">
                    Tap card to view next
                </div>*/}
            </div>
        </section>
    );
};

export default Why;