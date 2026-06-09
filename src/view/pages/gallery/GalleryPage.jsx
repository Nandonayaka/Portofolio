import { useState } from "react";
import { originalWorks } from "../../../core/mocks/GalleryMocks";
import { useGalleryScroll } from "../../../core/hooks/GalleryHooks";
import {
  FaGithub,
  FaTimes,
  FaExternalLinkAlt,
  FaYoutube,
} from "react-icons/fa";

const GalleryPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const works = [
    ...originalWorks,
    ...originalWorks,
    ...originalWorks,
    ...originalWorks,
  ];
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
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`
      : null;
  };

  return (
    <div className="w-full px-6 md:px-12 text-black relative group/section pb-20">
      {/* Header Atas */}
      <div
        className="flex flex-col border-b border-blue-200 pb-6 mb-12 mt-50"
        data-aos="fade-right"
      >
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/text-projects.png"
            alt="Portfolio Text"
            className="w-48 md:w-64"
            draggable="false"
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs md:text-sm text-blue-400 uppercase tracking-[0.3em] font-medium">
            / Featured Works 2024-2026 /
          </p>
          <div className="hidden md:block w-32 h-px bg-blue-100"></div>
        </div>
      </div>

      {/* Section: Best 3 Projects */}
      <div className="mt-12 mb-32">
        <div className="flex items-center gap-4 mb-10" data-aos="fade-up">
          <div className="h-px flex-1 bg-blue-100"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 tracking-tighter uppercase italic">
            The Best Three
          </h2>
          <div className="h-px flex-1 bg-blue-100"></div>
        </div>

        <div className="-mx-6 px-6 flex overflow-x-auto md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-8 pb-8 md:pb-0 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {originalWorks.slice(0, 3).map((work, idx) => (
            <div
              key={work.id}
              onClick={() => setSelectedProject(work)}
              className="group relative flex flex-col cursor-pointer flex-shrink-0 w-[85%] md:w-auto snap-center"
              data-aos={idx % 2 === 0 ? "fade-up" : "fade-up"}
              data-aos-delay={idx * 100}
            >
              <span className="absolute -top-6 -left-2 text-7xl font-black text-blue-50/50 z-0 pointer-events-none group-hover:text-blue-100/50 transition-colors duration-500">
                0{idx + 1}
              </span>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl z-10 mb-6 bg-blue-50">
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 text-white text-left">
                  <p className="text-[10px] uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-75 font-medium text-blue-200">
                    {work.desc}
                  </p>
                  <h4 className="text-2xl font-black tracking-tighter opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-150 mb-4">
                    {work.title}
                  </h4>

                  {work.demo && (
                    <a
                      href={work.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white text-blue-600 px-4 py-2 rounded-xl text-[10px] font-bold shadow-2xl flex items-center gap-2 w-fit transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 hover:bg-blue-600 hover:text-white border border-white"
                    >
                      <FaExternalLinkAlt size={10} />
                      LIVE DEMO
                    </a>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-end border-b border-blue-50 pb-4 group-hover:border-blue-200 transition-colors duration-500 px-2">
                <div>
                  <h4 className="text-lg font-bold text-blue-950 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                    {work.title}
                  </h4>
                  <p className="text-xs text-blue-400 uppercase tracking-widest font-medium">
                    / {work.desc}
                  </p>
                </div>
                <span className="text-sm font-mono text-blue-200 group-hover:text-blue-400 transition-colors duration-300 font-bold">
                  '{work.year.slice(-2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

   {/* Section: All Projects Slider */}
<div className="relative">
    <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 tracking-tighter uppercase text-center md:text-left w-full md:w-auto">
            All Projects
        </h2>
        <div className="hidden md:block h-px flex-1 bg-blue-100"></div>
    </div>

    {/* Desktop Navigation */}
    <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-blue-100 items-center justify-center text-blue-600 shadow-xl hover:scale-110 transition-all"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
            />
        </svg>
    </button>

    <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-blue-100 items-center justify-center text-blue-600 shadow-xl hover:scale-110 transition-all"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
        </svg>
    </button>

    <div
        ref={sliderRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-3 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-0 md:px-2 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
        {works.map((work, index) => (
            <div
                key={`${work.id}-${index}`}
                onClick={() => setSelectedProject(work)}
                className="w-[72vw] sm:w-[50%] md:w-[35%] lg:w-[22%] snap-center flex-shrink-0 flex flex-col group cursor-pointer"
            >
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-stone-200 shadow-sm mb-3 relative">
                    <img
                        src={work.src}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        draggable="false"
                    />

                    <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold shadow-lg">
                            VIEW DETAIL
                        </span>
                    </div>
                </div>

                <div className="flex flex-col px-1">
                    <h3 className="text-[11px] font-bold text-blue-950 uppercase tracking-tighter truncate">
                        {work.title}
                    </h3>

                    <div className="flex justify-between items-center mt-0.5">
                        <p className="text-[10px] text-blue-600/70 truncate">
                            {work.desc}
                        </p>

                        <span className="text-[10px] font-medium text-blue-300/80 font-mono">
                            {work.year}
                        </span>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-blue-950/40 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          <div
            className="relative w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[90vh] bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Image Gallery */}
            <div className="w-full md:w-3/5 h-[35vh] md:h-auto bg-slate-100 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col">
                {selectedProject.youtube && (
                  <div className="relative aspect-video w-full bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={getYouTubeEmbedUrl(selectedProject.youtube)}
                      title={selectedProject.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                {selectedProject.images?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selectedProject.title} ${i}`}
                    className="w-full object-cover border-b border-white"
                  />
                ))}
              </div>
            </div>

            {/* Right: Info */}
            <div className="w-full md:w-2/5 p-5 md:p-12 flex flex-col overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 backdrop-blur-sm md:bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all z-[110]"
              >
                <FaTimes />
              </button>

              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-blue-500 font-bold mb-3">
                {selectedProject.desc}
              </p>

              <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter leading-tight mb-4 md:mb-6">
                {selectedProject.title}
              </h2>

              <div className="flex items-center gap-4 mb-4 md:mb-8">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] md:text-xs font-bold text-slate-500">
                  {selectedProject.year}
                </span>
                <div className="h-px flex-1 bg-slate-100" />
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 md:mb-10 text-xs md:text-sm">
                {selectedProject.longDesc ||
                  "Explore the creative process and execution behind this featured work."}
              </p>

              <div className="mt-auto space-y-3 w-full">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 md:py-4 bg-blue-600 text-white rounded-xl md:rounded-2xl text-xs md:text-base font-bold hover:bg-blue-700 transition-all"
                  >
                    <FaExternalLinkAlt size={14} />
                    LIVE DEMO
                  </a>
                )}

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 md:py-4 bg-slate-900 text-white rounded-xl md:rounded-2xl text-xs md:text-base font-bold hover:bg-blue-600 transition-all"
                >
                  <FaGithub size={14} />
                  VIEW ON GITHUB
                </a>

                {selectedProject.youtube && (
                  <a
                    href={selectedProject.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 md:py-4 bg-red-600 text-white rounded-xl md:rounded-2xl text-xs md:text-base font-bold hover:bg-red-700 transition-all"
                  >
                    <FaYoutube size={14} />
                    WATCH ON YOUTUBE
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center justify-center gap-2 w-full py-3 md:py-4 bg-white border border-slate-200 text-slate-600 rounded-xl md:rounded-2xl text-xs md:text-base font-bold hover:bg-slate-50 transition-all"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
