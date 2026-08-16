import { useState, useRef, useEffect } from "react";
import {
    FaYoutube,
    FaGithub,
    FaSpotify,
    FaHeart,
    FaStepBackward,
    FaStepForward,
    FaPause,
    FaPlay,
    FaSyncAlt,
    FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import AboutParticle from "../../components/particle/AboutParticle";
import { AchievmentsMocks } from "../../../core/mocks/AchievmentsMocks";

export default function MoreAboutMe() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleLoop = () => {
        setIsLooping(!isLooping);
    };

    const handleTimeUpdate = () => {
        const current = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        if (duration) {
            setProgress((current / duration) * 100);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
    };
    return (
        <section className="relative pt-32 pb-16 px-6 overflow-hidden bg-gradient-to-b from-[#f8fbff] to-[#eef5ff]">

            {/* Blur Decoration */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto mb-20">

                {/* Heading */}
                <div className="text-center mb-20">
                    <p className="uppercase tracking-[0.3em] text-blue-400 text-sm">
                        About Me
                    </p>

                    <h2 className="text-5xl font-light text-slate-800 mt-3">
                        More About Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <div className="flex flex-col items-center lg:items-start" data-aos="fade-right">

                        {/* Photo */}
                        <div className="relative w-full max-w-sm">

                            <div className="absolute -right-8 top-10 w-20 h-20 rounded-full bg-blue-200 blur-xl" />

                            <img
                                src="/images/memusic.png"
                                alt="profile"
                                className="w-full aspect-square object-cover shadow-2xl border-4 border-white"
                            />
                        </div>

                        {/* Music Card */}
                        <div className="mt-2 w-full max-w-sm bg-blue-50/50 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-white" data-aos="fade-right">
                            <audio
                                ref={audioRef}
                                src="/music.mp3"
                                loop={isLooping}
                                onTimeUpdate={handleTimeUpdate}
                                onEnded={handleEnded}
                            />
                            <div className="flex gap-4">
                                <div>
                                    <h3 className="font-bold text-slate-800 tracking-tight">
                                        d4vd - Here With Me
                                    </h3>
                                    <p className="text-xs text-blue-500 font-medium uppercase tracking-widest mt-1">
                                        My Favorite Song
                                    </p>
                                </div>
                            </div>

                            {/* Progress */}
                            <div className="mt-6">
                                <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const clickedValue = (x / rect.width) * audioRef.current.duration;
                                    audioRef.current.currentTime = clickedValue;
                                }}>
                                    <div
                                        className="h-full bg-blue-500 rounded-full transition-all duration-100"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-center gap-7 mt-8">
                                <button
                                    onClick={toggleLoop}
                                    className={`transition-colors ${isLooping ? 'text-blue-500' : 'text-slate-400'} hover:text-blue-600`}
                                >
                                    <FaSyncAlt size={16} />
                                </button>
                                <button className="text-slate-400 hover:text-blue-500 transition-colors">
                                    <FaStepBackward size={20} />
                                </button>

                                <button
                                    onClick={togglePlay}
                                    className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-200 hover:scale-110 active:scale-95 transition-all"
                                >
                                    {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} className="ml-1" />}
                                </button>

                                <button className="text-slate-400 hover:text-blue-500 transition-colors">
                                    <FaStepForward size={20} />
                                </button>

                                <button className="text-red-400 hover:text-red-500 transition-colors">
                                    <FaHeart size={20} />
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="text-center lg:text-left" data-aos="fade-left">
                        <h3 className="text-5xl font-bold text-slate-800 leading-tight">
                            Ilhami Nando Nayaka Sunandar
                        </h3>

                        <p className="mt-6 text-slate-600 leading-8 max-w-xl">
                            Frontend Developer yang berfokus pada React, JavaScript, Laravel, dan
                            pengembangan antarmuka modern. Saya senang membangun website yang cepat,
                            responsif, dan memiliki pengalaman pengguna yang baik.
                        </p>

                        <div className="mt-10">
                            <h4 className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-5">
                                More Info
                            </h4>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <a
                                    href="https://www.youtube.com/@inayaka9386"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                                >
                                    <FaYoutube size={24} className="text-red-500" />
                                </a>

                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nandonayakaaa@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                                >
                                    <MdEmail size={24} className="text-blue-500" />
                                </a>

                                <a
                                    href="https://github.com/Nandonayaka"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                                >
                                    <FaGithub size={24} className="text-slate-800" />
                                </a>

                                <a
                                    href="https://open.spotify.com/user/mgm3b0cfyrxh7htz5i8x1xi6a?si=sHjg2qzaTc64id6oASXM0Q"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                                >
                                    <FaSpotify size={24} className="text-green-500" />
                                </a>
                                <a
                                    href="https://wa.me/6285142514522?text=Halo%20Nayaka,%20saya%20tertarik%20dengan%20jasa%20website%20Anda.%20Boleh%20konsultasi%20lebih%20lanjut?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                                >
                                    <FaWhatsapp size={24} className="text-green-500" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="italic text-slate-500">
                                "Building clean interfaces and meaningful user experiences."
                            </p>
                        </div>
                    </div>

                </div>

                {/* Certificates & Achievements */}
                <div className="mt-20">
                    <AboutParticle />
                    <h3 className="text-lg font-bold uppercase tracking-[0.3em] text-blue-400 mb-8">Sertifikat &amp; Prestasi</h3>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT — List */}
                        <ul className="space-y-2">
                            {AchievmentsMocks.map((item, i) => (
                                <li key={i} className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center shrink-0 transition-colors">
                                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-slate-800 font-bold text-sm">{item.title}</p>
                                            <p className="text-xs font-semibold text-slate-500 mt-0.5">{item.issuer}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500 bg-blue-50 group-hover:bg-white border border-blue-300 px-2.5 py-1 rounded-full shrink-0 ml-4 transition-colors font-semibold">
                                        {item.year}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* RIGHT — Blue Illustration */}
                        <div className="flex items-center justify-center">
                            <div className="relative w-full max-w-md aspect-square">
                                {/* Glow */}
                                <div className="absolute inset-0 rounded-full bg-blue-400 blur-3xl opacity-30" />

                                {/* Original Image with Blue Shadow */}
                                <img
                                    src="/images/messisleep.png"
                                    alt="Messi Sleeping"
                                    className="relative w-full h-full object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}