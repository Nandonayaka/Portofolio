import {
    FaYoutube,
    FaGithub,
    FaSpotify,
    FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import AboutParticle from "../../components/particle/AboutParticle";
import { AchievmentsMocks } from "../../../core/mocks/AchievmentsMocks";

export default function MoreAboutMe() {
    return (
        <section className="relative pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-16 overflow-x-clip bg-gradient-to-b from-[#f8fbff] to-[#eef5ff]">

            {/* Blur Decoration */}
            <div className="absolute top-20 left-4 sm:left-20 w-44 sm:w-72 h-44 sm:h-72 bg-blue-300/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-4 sm:right-20 w-56 sm:w-96 h-56 sm:h-96 bg-blue-200/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto mb-12 sm:mb-20">

                {/* Heading */}
                <div className="text-center mb-10 sm:mb-16">
                    <p className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-blue-400 text-xs sm:text-sm font-semibold">
                        About Me
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-800 mt-2 sm:mt-3 break-words">
                        More About Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

                    {/* LEFT: STATIC CLEAN IMAGE CARD */}
                    <div className="flex justify-center items-center w-[200px] sm:w-[320px] lg:w-[380px] max-w-full mx-auto" data-aos="fade-right">
                        <div className="relative w-full aspect-[0.718] rounded-[24px] overflow-hidden shadow-2xl border border-blue-100/60 bg-slate-900 group transition-transform duration-300 hover:scale-[1.02]">
                            {/* Subtle Blue Glow */}
                            <div className="absolute inset-0 bg-blue-500/10 blur-xl pointer-events-none" />

                            {/* Clean Avatar Image */}
                            <img
                                src="/images/memusic.png"
                                alt="Ilhami Nando Avatar"
                                className="w-full h-full object-cover relative z-10"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="text-center lg:text-left mt-6 lg:mt-0" data-aos="fade-left">
                        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-snug sm:leading-tight break-words">
                            Ilhami Nando Nayaka Sunandar
                        </h3>

                        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-600 leading-relaxed sm:leading-8 max-w-xl mx-auto lg:mx-0 break-words">
                            Frontend Developer yang berfokus pada React, JavaScript, Laravel, dan
                            pengembangan antarmuka modern. Saya senang membangun website yang cepat,
                            responsif, dan memiliki pengalaman pengguna yang baik.
                        </p>

                        <div className="mt-8 sm:mt-10">
                            <h4 className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-blue-400 mb-4 sm:mb-5 font-semibold">
                                More Info
                            </h4>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                                <a
                                    href="https://www.youtube.com/@inayaka9386"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube Channel"
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:-translate-y-1 transition duration-200"
                                >
                                    <FaYoutube className="text-red-500 text-xl sm:text-2xl" />
                                </a>

                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nandonayakaaa@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Send Email"
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:-translate-y-1 transition duration-200"
                                >
                                    <MdEmail className="text-blue-500 text-xl sm:text-2xl" />
                                </a>

                                <a
                                    href="https://github.com/Nandonayaka"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:-translate-y-1 transition duration-200"
                                >
                                    <FaGithub className="text-slate-800 text-xl sm:text-2xl" />
                                </a>

                                <a
                                    href="https://open.spotify.com/user/mgm3b0cfyrxh7htz5i8x1xi6a?si=sHjg2qzaTc64id6oASXM0Q"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Spotify Profile"
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:-translate-y-1 transition duration-200"
                                >
                                    <FaSpotify className="text-green-500 text-xl sm:text-2xl" />
                                </a>

                                <a
                                    href="https://wa.me/6285142514522?text=Halo%20Nayaka,%20saya%20tertarik%20dengan%20jasa%20website%20Anda.%20Boleh%20konsultasi%20lebih%20lanjut?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp Contact"
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:-translate-y-1 transition duration-200"
                                >
                                    <FaWhatsapp className="text-green-500 text-xl sm:text-2xl" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 sm:mt-12">
                            <p className="italic text-xs sm:text-sm text-slate-500">
                                "Building clean interfaces and meaningful user experiences."
                            </p>
                        </div>
                    </div>

                </div>

                {/* Certificates & Achievements */}
                <div className="mt-14 sm:mt-20">
                    <AboutParticle />
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-blue-400 mb-6 sm:mb-8 text-center lg:text-left">
                        Sertifikat &amp; Prestasi
                    </h3>

                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">

                        {/* LEFT — List */}
                        <ul className="space-y-2">
                            {AchievmentsMocks.map((item, i) => (
                                <li key={i} className="flex flex-row items-center justify-between px-3 sm:px-4 py-3 rounded-xl hover:bg-blue-50/80 transition-colors duration-200 group border border-transparent hover:border-blue-100 gap-2 sm:gap-4">
                                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                                        <div className="w-8 h-8 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center shrink-0 transition-colors">
                                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-slate-800 font-bold text-xs sm:text-sm break-words leading-snug">{item.title}</p>
                                            <p className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5 break-words leading-tight">{item.issuer}</p>
                                        </div>
                                    </div>
                                    <span className="text-[11px] sm:text-xs font-semibold text-blue-500 bg-blue-50 group-hover:bg-white border border-blue-300 px-2.5 py-1 rounded-full shrink-0 ml-2 sm:ml-4 transition-colors">
                                        {item.year}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* RIGHT — Blue Illustration (Smaller on Mobile) */}
                        <div className="flex items-center justify-center mt-6 lg:mt-0">
                            <div className="relative w-[180px] sm:w-[280px] lg:w-[380px] max-w-full aspect-square mx-auto">
                                {/* Glow */}
                                <div className="absolute inset-0 rounded-full bg-blue-400 blur-2xl sm:blur-3xl opacity-30 pointer-events-none" />

                                {/* Original Image with Blue Shadow */}
                                <img
                                    src="/images/messisleep.png"
                                    alt="Messi Sleeping"
                                    loading="lazy"
                                    decoding="async"
                                    className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}