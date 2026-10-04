import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sound } from '../utils/audioFX';

const ASCII_BANNER = `
  _    _          _____ _  ______ ______ _____  _____ ______  _____ 
 | |  | |   /\\   / ____| |/ / ___|  ____|  __ \\|_   _|  ____|/ ____|
 | |__| |  /  \\ | |    | ' / (___ | |__  | |__) | | | | |__  | (___  
 |  __  | / /\\ \\| |    |  < \\___ \\|  __| |  _  /  | | |  __|  \\___ \\ 
 | |  | |/ ____ \\ |____| . \\____) | |____| | \\ \\ _| |_| |____ ____) |
 |_|  |_/_/    \\_\\_____|_|\\_\\_____/|______|_|  \\_\\_____|______|_____/ 
                    >> EDITION 2.0 // 2026 <<
`;

const HackerTerminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [inputVal, setInputVal] = useState('');
    const [history, setHistory] = useState([
        { type: 'banner', content: ASCII_BANNER },
        { type: 'system', content: "SYSTEM BOOT OK // HACKSERIES KERNEL v2.6.0-x86_64" },
        { type: 'system', content: "Type 'help' to inspect command directory, or 'pass' to claim 3D badge." }
    ]);

    const navigate = useNavigate();
    const terminalEndRef = useRef(null);
    const inputRef = useRef(null);

    // Global shortcut `~` or `Ctrl+K`
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '`' || (e.ctrlKey && e.key === 'k')) {
                e.preventDefault();
                setIsOpen(prev => !prev);
                sound.playClick();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleToggleMute = () => {
        const muted = sound.toggleMute();
        setIsMuted(muted);
    };

    const handleCommand = (e) => {
        e.preventDefault();
        const cmd = inputVal.trim().toLowerCase();
        if (!cmd) return;

        sound.playKeystroke();

        const newEntries = [{ type: 'user', content: `> ${inputVal}` }];

        switch (cmd) {
            case 'help':
                newEntries.push({
                    type: 'system',
                    content: `AVAILABLE SYSTEM COMMANDS:
  help       - Display this command matrix
  tracks     - List 2026 hackathon domains and prize bounties
  pass       - Launch 3D Holographic Hacker Badge Studio (/pass)
  ideate     - Open AI Project Synthesizer & Team Finder (/ideator)
  schedule   - View 3-day hackathon sprint timeline (/schedule)
  matrix     - Trigger cybernetic data stream simulation
  stats      - Display live hacker metrics and infrastructure
  audio      - Toggle UI sound synthesis FX
  easteregg  - Unlock classified Phoenix transmission
  clear      - Clear the console buffer`
                });
                break;

            case 'tracks':
                newEntries.push({
                    type: 'system',
                    content: `HACKSERIES 2026 TRACK DIRECTORY:
  [01] Generative AI & Autonomous Agents (₹50k + $2,500 Cloud Credits)
  [02] Spatial Web & 3D WebGL (₹40k + Tech Gear)
  [03] Cloud-Native Systems & DevOps (₹35k + Vouchers)
  [04] High-Performance Algorithms & DSA (₹30k + Mentorship)
  [05] Systems, Security & Embedded Edge (₹35k + Hardware)
Type 'goto tracks' or navigate to /tracks for full details.`
                });
                break;

            case 'pass':
                newEntries.push({ type: 'success', content: "ROUTING TO HACKER PASS STUDIO..." });
                sound.playSuccess();
                setTimeout(() => {
                    setIsOpen(false);
                    navigate('/pass');
                }, 600);
                break;

            case 'ideate':
                newEntries.push({ type: 'success', content: "ROUTING TO HACK IDEA MATRIX..." });
                sound.playSuccess();
                setTimeout(() => {
                    setIsOpen(false);
                    navigate('/ideator');
                }, 600);
                break;

            case 'schedule':
                newEntries.push({ type: 'success', content: "ROUTING TO SCHEDULE CHRONICLES..." });
                sound.playSuccess();
                setTimeout(() => {
                    setIsOpen(false);
                    navigate('/schedule');
                }, 600);
                break;

            case 'matrix':
                newEntries.push({
                    type: 'success',
                    content: `01001000 01000001 01000011 01001011 01010011 01000101 01010010 01001001 01000101 01010011
[+] CYBER CORE SYNCED: 100%
[+] DUAL-BRAIN ORCHESTRATION: ONLINE
[+] RTX 4060 LOCAL GPU: 53.0°C (STABLE)
[+] 1,500+ BUILDERS READY`
                });
                sound.playHolo();
                break;

            case 'stats':
                newEntries.push({
                    type: 'system',
                    content: `LIVE SYSTEM BENCHMARKS:
  Hacker Community : 1,500+ Active Builders
  Total Prize Pool : ₹2,00,000+
  Verified Mentors : 40+ Industry Staff Engineers
  Sprint Duration  : 36 Hours Continuous Build`
                });
                break;

            case 'audio':
                handleToggleMute();
                newEntries.push({
                    type: 'system',
                    content: `AUDIO FX: ${!isMuted ? "MUTED [OFF]" : "ACTIVE [ON]"}`
                });
                break;

            case 'easteregg':
                newEntries.push({
                    type: 'easteregg',
                    content: `
       .---.
      /     \\   PHOENIX RISEN // 2026 EDITION
     | () () |  "Great builders do not wait for the future;
      \\  ^  /    they write the code that brings it into reality."
       |||||    - ACES Hackseries Protocol
    `
                });
                sound.playSuccess();
                break;

            case 'clear':
                setHistory([]);
                setInputVal('');
                return;

            default:
                newEntries.push({
                    type: 'error',
                    content: `Command not recognized: '${cmd}'. Type 'help' for directory.`
                });
                break;
        }

        setHistory(prev => [...prev, ...newEntries]);
        setInputVal('');
    };

    return (
        <>
            {/* Global Floating Trigger Button (Bottom Right) */}
            <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
                {/* Audio Mute/Unmute Pill */}
                <button
                    onClick={handleToggleMute}
                    className="p-3 rounded-full bg-black/80 border border-white/20 text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 backdrop-blur-xl shadow-xl transition-all hover:scale-105"
                    title={isMuted ? "Unmute Audio FX" : "Mute Audio FX"}
                >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-[#00F0FF]" />}
                </button>

                {/* Terminal Launcher */}
                <button
                    onClick={() => {
                        setIsOpen(true);
                        sound.playClick();
                    }}
                    className="px-4 py-3 rounded-full bg-black/90 border border-[#00F0FF]/40 text-white font-mono text-xs font-bold tracking-wider hover:bg-[#00F0FF]/15 hover:border-[#00F0FF] backdrop-blur-xl shadow-[0_0_25px_rgba(0,240,255,0.25)] transition-all flex items-center gap-2 hover:scale-105"
                >
                    <TerminalIcon size={16} className="text-[#00F0FF]" />
                    <span className="hidden sm:inline">&gt;_ CLI CONSOLE</span>
                    <span className="text-[10px] text-gray-400 font-normal px-1.5 py-0.5 rounded bg-white/10 hidden sm:inline">`</span>
                </button>
            </div>

            {/* Modal Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="w-full max-w-3xl h-[520px] rounded-2xl bg-[#080410]/95 border border-[#00F0FF]/40 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden font-mono"
                        >
                            {/* Terminal Top Window Chrome */}
                            <div className="flex items-center justify-between px-4 py-3 bg-black/80 border-b border-white/10 select-none">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 cursor-pointer" onClick={() => setIsOpen(false)} />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                    <span className="text-xs text-gray-400 font-bold ml-2 flex items-center gap-1.5">
                                        <TerminalIcon size={14} className="text-[#00F0FF]" />
                                        hackseries@2026:~
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-400">
                                    <span className="text-[10px] text-gray-500 hidden sm:inline">Press ESC to exit</span>
                                    <button onClick={() => setIsOpen(false)} className="hover:text-white p-1">
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Terminal Buffer Scroll Area */}
                            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3 text-xs sm:text-sm font-mono text-gray-300">
                                {history.map((entry, idx) => {
                                    if (entry.type === 'banner') {
                                        return (
                                            <pre key={idx} className="text-[#E7C159] text-[9px] sm:text-[11px] leading-tight select-none overflow-x-auto">
                                                {entry.content}
                                            </pre>
                                        );
                                    }
                                    if (entry.type === 'user') {
                                        return (
                                            <div key={idx} className="text-white font-bold flex items-center gap-2">
                                                <span className="text-[#00F0FF]">&gt;</span>
                                                <span>{entry.content.replace(/^>\s*/, '')}</span>
                                            </div>
                                        );
                                    }
                                    if (entry.type === 'success') {
                                        return (
                                            <div key={idx} className="text-[#00F0FF] whitespace-pre-wrap">
                                                {entry.content}
                                            </div>
                                        );
                                    }
                                    if (entry.type === 'error') {
                                        return (
                                            <div key={idx} className="text-rose-400 whitespace-pre-wrap">
                                                {entry.content}
                                            </div>
                                        );
                                    }
                                    if (entry.type === 'easteregg') {
                                        return (
                                            <pre key={idx} className="text-[#E7C159] whitespace-pre-wrap">
                                                {entry.content}
                                            </pre>
                                        );
                                    }
                                    return (
                                        <div key={idx} className="text-gray-300 whitespace-pre-wrap">
                                            {entry.content}
                                        </div>
                                    );
                                })}
                                <div ref={terminalEndRef} />
                            </div>

                            {/* Command Input Field */}
                            <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-black/60 border-t border-white/10">
                                <span className="text-[#00F0FF] font-bold mr-2">&gt;</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputVal}
                                    onChange={e => setInputVal(e.target.value)}
                                    placeholder="type 'help', 'pass', 'tracks', or 'ideate'..."
                                    className="flex-1 bg-transparent text-white text-xs sm:text-sm outline-none placeholder:text-gray-600 font-mono"
                                />
                                <button type="submit" className="text-gray-400 hover:text-[#00F0FF] p-1">
                                    <CornerDownLeft size={16} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HackerTerminal;
