import { useState } from "react";
import { originalWorks } from "../../../core/mocks/GalleryMocks";
import { useGalleryScroll } from "../../../core/hooks/GalleryHooks";
import { FaGithub, FaTimes, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

const GalleryPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const works = [...originalWorks, ...originalWorks, ...originalWorks, ...originalWorks];
    const { sliderRef, setIsHovered, scroll } = useGalleryScroll(3000);

    const getYouTubeEmbedUrl = (url) => {
        if (!url) return null;
        let videoId = "";
        if (url.includes("v=")) {
            videoId = url.split("v=")[1].split("&")[0];
        } else if (url.includes("youtu.be/")) {
            videoId = url.split("youtu.be/")[1].split("?")[0];
        } else if (url.includes("embed/")) {
            videoId = url.split("embed/")[1].split("?")[0];
        } else if (url.includes("youtube.com/shorts/")) {
            videoId = url.split("shorts/")[1].split("?")[0];
        }
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}` : null;
    };

    return (
        <div className="w-full px-4 md:px-12 text-black relative group/section pb-24">
            
            {/* Header Sederhana */}
            <div className="flex flex-col border-b border-blue-100 pb-6 mb-12" data-aos="fade-right">
                <div className="flex justify-center md:justify-start">
                    <img
                        src="/images/text-projects.png"
                        alt="Portfolio Text"
                        className="w-44 md:w-52 object-contain"
                        draggable="false"
                    />
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p className="text-[11px] text-blue-600 uppercase tracking-widest font-semibold">
                        / Featured Works /
                    </p>
                </div>
            </div>

            {/* Section 1: Best 3 Projects */}
            <div className="mb-24">
                <h2 className="text-lg font-bold text-slate-800 tracking-tight uppercase mb-8" data-aos="fade-up">
                    The Best Three
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {originalWorks.slice(0, 3).map((work, idx) => (
                        <div
                            key={work.id}
                            onClick={() => setSelectedProject(work)}
                            className="group flex flex-col cursor-pointer"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            {/* Card Image Minimalis */}
                            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-slate-50 border border-slate-100 transition-all duration-300 group-hover:border-blue-500 shadow-sm">
                                <img
                                    src={work.src}
                                    alt={work.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Detail teks bawah card */}
                            <div className="flex justify-between items-start px-1">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                                        {work.title}
                                    </h4>
                                    <p className="text-xs text-blue-500 font-medium mt-0.5">
                                        {work.desc}
                                    </p>
                                </div>
                                <span className="text-xs font-mono text-slate-400 font-medium">
                                    '{work.year.slice(-2)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 2: All Projects Slider */}
            <div className="relative">
                <h2 className="text-lg font-bold text-slate-800 tracking-tight uppercase mb-6">
                    All Projects
                </h2>

                {/* Tombol Navigasi Slider */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-[-15px] top-[55%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white text-blue-600 border border-slate-200 flex items-center justify-center shadow-md cursor-pointer transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 opacity-0 group-hover/section:opacity-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-[-15px] top-[55%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white text-blue-600 border border-slate-200 flex items-center justify-center shadow-md cursor-pointer transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 opacity-0 group-hover/section:opacity-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                <div
                    ref={sliderRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="-mx-4 px-4 flex gap-6 overflow-x-auto md:mx-0 md:px-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full py-2"
                >
                    {works.map((work, index) => (
                        <div
                            key={`${work.id}-${index}`}
                            onClick={() => setSelectedProject(work)}
                            className="w-[75%] sm:w-[45%] md:w-[28%] lg:w-[22%] snap-center flex-shrink-0 flex flex-col group cursor-pointer bg-white border border-slate-100 hover:border-blue-500 p-2.5 rounded-xl transition-all duration-300 shadow-sm"
                        >
                            <div className="w-full aspect-[16/10] rounded-lg overflow-hidden bg-slate-50 mb-3">
                                <img
                                    src={work.src}
                                    alt={work.title}
                                    className="w-full h-full object-cover"
                                    draggable="false"
                                />
                            </div>
                            <div className="flex flex-col px-1">
                                <h3 className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                                    {work.title}
                                </h3>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-[11px] text-slate-500 truncate max-w-[75%]">
                                        {work.desc}
                                    </p>
                                    <span className="text-[10px] text-slate-400 font-mono">
                                        {work.year}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>

                    <div
                        className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Media Section (Kiri) */}
                        <div className="w-full md:w-3/5 h-56 md:h-auto bg-slate-950 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-r border-slate-100">
                            {selectedProject.youtube ? (
                                <div className="relative aspect-video w-full bg-black h-full flex items-center">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={getYouTubeEmbedUrl(selectedProject.youtube)}
                                        title={selectedProject.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <div className="flex flex-col">
                                    {selectedProject.images?.map((img, i) => (
                                        <img key={i} src={img} alt={`${selectedProject.title} ${i}`} className="w-full object-cover border-b border-slate-100" />
                                    )) || <img src={selectedProject.src} alt={selectedProject.title} className="w-full h-full object-cover" />}
                                </div>
                            )}
                        </div>

                        {/* Info Section (Kanan) */}
                        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col overflow-y-auto bg-white justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-0.5">
                                            {selectedProject.desc}
                                        </p>
                                        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                                            {selectedProject.title}
                                        </h2>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="text-slate-400 hover:text-slate-600 p-1 transition-colors"
                                    >
                                        <FaTimes size={16} />
                                    </button>
                                </div>

                                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                                    {selectedProject.longDesc || "Explore the creative process and engineering implementation behind this work."}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-2 pt-4 border-t border-slate-100">
                                {selectedProject.demo && (
                                    <a
                                        href={selectedProject.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-xs tracking-wide hover:bg-blue-700 transition-colors shadow-sm"
                                    >
                                        <FaExternalLinkAlt size={10} />
                                        LIVE DEMO
                                    </a>
                                )}

                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-semibold text-xs tracking-wide hover:bg-slate-50 transition-colors"
                                >
                                    <FaGithub size={12} />
                                    VIEW GITHUB
                                </a>

                                {selectedProject.youtube && (
                                    <a
                                        href={selectedProject.youtube}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-red-600 text-white rounded-lg font-semibold text-xs tracking-wide hover:bg-red-700 transition-colors"
                                    >
                                        <FaYoutube size={12} />
                                        WATCH VIDEO
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;