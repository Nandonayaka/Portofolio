import {
    FaYoutube,
    FaGithub,
    FaSpotify,
    FaHeart,
    FaStepBackward,
    FaStepForward,
    FaPause,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function MoreAboutMe() {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-[#f8fbff] to-[#eef5ff]">

            {/* Blur Decoration */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto">

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
                    <div className="flex flex-col items-center lg:items-start">

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
                        <div className="mt-2 w-full max-w-sm bg-blur-xl  p-5">

                            <div className="flex gap-4">
                                <div>
                                    <h3 className="font-semibold text-slate-800">
                                        Hallo World
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        My Favorite Song
                                    </p>
                                </div>

                            </div>

                            {/* Progress */}
                            <div className="mt-5">
                                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                                    <div className="w-1/3 h-full bg-blue-500 rounded-full" />
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-center gap-6 mt-6">

                                <button>
                                    <FaStepBackward size={22} />
                                </button>

                                <button className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg">
                                    <FaPause />
                                </button>

                                <button>
                                    <FaStepForward size={22} />
                                </button>

                                <button>
                                    <FaHeart size={20} />
                                </button>

                            </div>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="text-center lg:text-left">
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
                                    href="#"
                                    className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                                >
                                    <FaYoutube size={24} className="text-red-500" />
                                </a>

                                <a
                                    href="#"
                                    className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                                >
                                    <MdEmail size={24} className="text-blue-500" />
                                </a>

                                <a
                                    href="#"
                                    className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                                >
                                    <FaGithub size={24} className="text-slate-800" />
                                </a>

                                <a
                                    href="#"
                                    className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
                                >
                                    <FaSpotify size={24} className="text-green-500" />
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
            </div>

        </section>
    );
}