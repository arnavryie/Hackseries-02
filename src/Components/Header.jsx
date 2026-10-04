import React, { useState } from 'react';
import PhoenixLogo from '../assets/logo (1).png';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const registrationFormUrl = 'https://campusmeet.in/go.php?slug=hackseries-2';

    const goToHomeHero = (e) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== '/') {
            navigate('/#home');
            return;
        }

        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'auto', block: 'start' });
            window.history.replaceState(null, '', '/#home');
        }
    };

    const navLinks = [
        { name: 'HOME', href: '/#home' },
        { name: 'TIMELINE', href: '/#timeline' },
        { name: 'GALLERY', href: '/gallery' },
        { name: 'CONTACT US', href: '/contact' },
    ];

    return (
        <>
            <div className="fixed top-4 w-full z-40 px-3 sm:px-6 md:px-8 flex justify-center pointer-events-none">
                <nav className="pointer-events-auto w-full max-w-6xl bg-[#080314]/85 backdrop-blur-xl text-white px-5 sm:px-7 py-3 border border-[#D4AF37]/30 rounded-2xl md:rounded-full transition-all shadow-[0_4px_30px_rgba(0,0,0,0.6)] hover:border-[#00F0FF]/40">
                    <div className="flex items-center justify-between">

                        <a href="/#home" onClick={goToHomeHero} className="flex items-center gap-3 cursor-pointer group" aria-label="Go to home section">
                            <div className="relative">
                                <img
                                    src={PhoenixLogo}
                                    alt="Logo"
                                    className="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-[#00F0FF]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-1.5">
                                    HACK<span className="text-gradient-gold-cyan font-black">SERIES</span>
                                </h1>
                                <span className="text-[9px] font-bold tracking-[0.25em] text-[#00F0FF] -mt-1 hidden sm:block">
                                    2026 EDITION
                                </span>
                            </div>
                        </a>

                        <ul className="hidden lg:flex flex-1 justify-end mr-6 gap-5 xl:gap-7 items-center text-xs xl:text-sm font-semibold tracking-wider whitespace-nowrap">
                            {navLinks.map((link) => (
                                <li key={link.name} className="hover:text-[#00F0FF] transition-colors cursor-pointer relative group py-1 flex items-center gap-1.5">
                                    {link.href.startsWith('/#') ? (
                                        <a href={link.href} className="block">{link.name}</a>
                                    ) : (
                                        <Link to={link.href} className="block">{link.name}</Link>
                                    )}
                                    {link.badge && (
                                        <span className="px-1.5 py-0.5 text-[9px] font-black rounded bg-gradient-to-r from-[#D4AF37] to-[#00F0FF] text-black tracking-widest uppercase">
                                            {link.badge}
                                        </span>
                                    )}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#00F0FF] group-hover:w-full transition-all duration-300 rounded-full" />
                                </li>
                            ))}
                        </ul>

                        <div className="hidden lg:flex items-center justify-end">
                            <a 
                                href={registrationFormUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-5 py-2 bg-gradient-to-r from-[#D4AF37] to-[#E7C159] hover:from-[#00F0FF] hover:to-cyan-400 text-black text-xs font-black tracking-wider transition-all uppercase rounded-full whitespace-nowrap block text-center shadow-[0_0_15px_rgba(212,175,55,0.35)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] hover:scale-105"
                            >
                                REGISTER NOW
                            </a>
                        </div>

                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-[#D4AF37] hover:text-[#00F0FF] transition-colors p-1" aria-label="Toggle menu">
                                <Menu size={26} />
                            </button>
                        </div>

                    </div>
                </nav>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 transition-transform duration-500 lg:hidden pointer-events-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center gap-2">
                        <img src={PhoenixLogo} alt="Logo" className="w-8 h-8 object-contain" />
                        <span className="font-bold text-lg text-white">HACKSERIES <span className="text-[#00F0FF] text-xs font-mono">2026</span></span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={30} />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-8 text-lg font-bold tracking-widest px-6">
                    {navLinks.map((link) => (
                        <div key={link.name} onClick={() => setIsOpen(false)} className="hover:text-[#00F0FF] cursor-pointer text-center">
                            {link.href.startsWith('/#') ? (
                                <a href={link.href} className="block py-2">{link.name}</a>
                            ) : (
                                <Link to={link.href} className="block py-2">{link.name}</Link>
                            )}
                        </div>
                    ))}
                    <a 
                        href={registrationFormUrl} 
                        onClick={() => setIsOpen(false)} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-6 w-full max-w-xs py-4 bg-gradient-to-r from-[#D4AF37] to-[#00F0FF] text-black font-black text-center text-sm rounded-full tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                    >
                        REGISTER NOW
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
