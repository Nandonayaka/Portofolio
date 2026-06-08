import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaYoutube, FaSpotify, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-white pt-24 pb-12 px-6 overflow-hidden w-full relative">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* BIG TEXT AT TOP */}
                <div className="mb-20 w-full text-center">
                    <h1 className="text-[10vw] font-black text-slate-900 leading-none tracking-tighter select-none opacity-5 inline-block">
                        NANDONAYAKA
                    </h1>
                </div>

                {/* Info Grid - Narrower for better centering */}
                <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 border-t border-slate-100 pt-20">
                    {/* Brand Info */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 px-4">
                        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
                            Nando<span className="text-blue-500">.</span>
                        </h2>
                        <p className="text-slate-500 max-w-xs leading-relaxed font-medium">
                            Building digital experiences with passion and precision.
                            Focused on React, JavaScript, and modern web aesthetics.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/Nandonayaka" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.youtube.com/@inayaka9386" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                                <FaYoutube size={20} />
                            </a>
                            <a href="https://open.spotify.com/user/mgm3b0cfyrxh7htz5i8x1xi6a?si=sHjg2qzaTc64id6oASXM0Q" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-green-500 hover:text-white transition-all shadow-sm">
                                <FaSpotify size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left px-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 border-b-2 border-blue-500 pb-1">Navigation</h4>
                        <ul className="space-y-4 font-semibold">
                            <li><Link to="/dashboard" className="text-slate-500 hover:text-blue-500 transition-colors">Dashboard</Link></li>
                            <li><Link to="/about" className="text-slate-500 hover:text-blue-500 transition-colors">About Me</Link></li>
                            <li><Link to="/moreinfo" className="text-slate-500 hover:text-blue-500 transition-colors">Achievements</Link></li>
                            <li><Link to="/gallery" className="text-slate-500 hover:text-blue-500 transition-colors">Gallery</Link></li>
                            <li><Link to="/experience" className="text-slate-500 hover:text-blue-500 transition-colors">Experiences</Link></li>
                        </ul>
                    </div>

                    {/* Services/Focus */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left px-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 border-b-2 border-blue-500 pb-1">Focus</h4>
                        <ul className="space-y-4 text-slate-500 font-bold">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                Frontend Dev
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                UI/UX Design
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                Performance
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left px-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 border-b-2 border-blue-500 pb-1">Contact</h4>
                        <div className="space-y-4">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nandonayakaaa@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center lg:items-start gap-2 group">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
                                    <MdEmail size={24} />
                                </div>
                                <span className="text-slate-700 font-bold text-sm tracking-tight">nandonayakaaa@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-sm font-medium">
                        © {new Date().getFullYear()} Nando Nayaka. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                        <p>Made with</p>
                        <span className="text-red-500 animate-pulse">❤</span>
                        <p>in Indonesia</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
