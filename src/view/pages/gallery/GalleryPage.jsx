import { useState } from "react";
import { originalWorks } from "../../../core/mocks/GalleryMocks";
import {
  FaGithub,
  FaTimes,
  FaExternalLinkAlt,
  FaYoutube,
  FaGlobe,
  FaLink,
} from "react-icons/fa";

const GalleryPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
    <div className="w-full min-h-screen py-16 px-4 sm:px-8 lg:px-16 font-sans relative text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div
          className="flex items-center justify-between mb-12 pt-8 border-b border-blue-200/60 pb-6"
          data-aos="fade-down"
        >
          <div>
            <img
              src="/images/text-projects.png"
              alt="Projects"
              className="w-48 sm:w-60 md:w-72 mb-2"
              draggable="false"
            />
            <p className="text-xs md:text-sm text-blue-500 uppercase tracking-[0.3em] font-mono">
              / Featured Recent Projects /
            </p>
          </div>
        </div>

        {/* Recent Projects Cards List */}
        <div className="flex flex-col gap-8 md:gap-10">
          {originalWorks.map((work, index) => (
            <div
              key={work.id}
              onClick={() => setSelectedProject(work)}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group relative bg-white/90 backdrop-blur-md hover:bg-white border border-blue-100/80 hover:border-blue-300 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 cursor-pointer"
            >
              {/* Left Column: Info & Links */}
              <div className="flex-1 flex flex-col justify-between h-full w-full">
                <div>
                  {/* Top Action Icons (Github & Live Link) */}
                  <div className="flex items-center gap-3">
                    {work.github && (
                      <a
                        href={work.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="View GitHub Repository"
                        className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md hover:bg-blue-600 hover:scale-110 transition-all duration-200"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {work.demo && (
                      <a
                        href={work.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="Live Demo"
                        className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 hover:scale-110 transition-all duration-200"
                      >
                        <FaLink size={16} />
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-blue-950 tracking-tight mt-6 mb-3 group-hover:text-blue-600 transition-colors">
                    {work.title}
                  </h2>

                  {/* Short Description */}
                  <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-md">
                    {work.desc}
                  </p>
                </div>

                {/* Tech Stack */}
                {work.techStack && (
                  <div className="text-xs font-mono text-blue-600/80 font-medium tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1">
                    {work.techStack.map((tech, i) => (
                      <span key={i} className="flex items-center gap-2">
                        <span>{tech}</span>
                        {i < work.techStack.length - 1 && (
                          <span className="text-blue-300">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Project Preview Mockup */}
              <div className="w-full md:w-[460px] lg:w-[520px] aspect-[16/10] rounded-2xl overflow-hidden bg-blue-50 border border-blue-100 shadow-lg relative flex-shrink-0 group/img">
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-xs font-bold shadow-xl tracking-wider uppercase">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-blue-950/40 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          <div
            className="relative w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[90vh] bg-white text-slate-900 rounded-2xl md:rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col md:flex-row z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Image Gallery / Video */}
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
                    className="w-full object-cover border-b border-slate-200"
                  />
                ))}
              </div>
            </div>

            {/* Right: Info */}
            <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col overflow-y-auto bg-white">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all z-[110]"
              >
                <FaTimes />
              </button>

              <p className="text-xs uppercase tracking-[0.25em] text-blue-500 font-bold mb-2">
                {selectedProject.desc}
              </p>

              <h2 className="text-2xl md:text-3xl font-bold font-serif text-blue-950 tracking-tight mb-4">
                {selectedProject.title}
              </h2>

              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-mono font-bold">
                  {selectedProject.year}
                </span>
                <div className="h-px flex-1 bg-slate-100" />
              </div>

              <p className="text-slate-600 leading-relaxed mb-8 text-xs md:text-sm">
                {selectedProject.longDesc ||
                  "Explore the creative process and execution behind this featured work."}
              </p>

              <div className="mt-auto space-y-3 w-full">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-xl text-xs md:text-sm font-bold hover:bg-blue-700 transition-all shadow-md"
                  >
                    <FaExternalLinkAlt size={12} />
                    LIVE DEMO
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl text-xs md:text-sm font-bold hover:bg-blue-600 transition-all"
                  >
                    <FaGithub size={14} />
                    VIEW ON GITHUB
                  </a>
                )}

                {selectedProject.youtube && (
                  <a
                    href={selectedProject.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 text-white rounded-xl text-xs md:text-sm font-bold hover:bg-red-700 transition-all"
                  >
                    <FaYoutube size={14} />
                    WATCH ON YOUTUBE
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs md:text-sm font-bold hover:bg-slate-50 transition-all"
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
