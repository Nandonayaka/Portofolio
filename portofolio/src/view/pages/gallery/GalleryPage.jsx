import { originalWorks } from "../../../core/mocks/GalleryMocks";
import { useGalleryScroll } from "../../../core/hooks/GalleryHooks";

const GalleryPage = () => {
    // Duplikasi data 4 kali biar infinite scroll bisa 
    const works = [...originalWorks, ...originalWorks, ...originalWorks, ...originalWorks];

    const { sliderRef, setIsHovered, scroll } = useGalleryScroll(3000);

    return (
        <div className="w-full px-6 md:px-12 text-black relative group/section pb-20">
            {/* Header Atas */}
            <div className="flex flex-col border-b border-blue-200 pb-6 mb-12">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-blue-900 uppercase">
                    Projects
                </h2>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-xs md:text-sm text-blue-400 uppercase tracking-[0.3em] font-medium">
                        / Featured Works 2024-2026 /
                    </p>
                    <div className="hidden md:block w-32 h-px bg-blue-100"></div>
                </div>
            </div>

            {/* Container Utama Slider dengan Arrow di Kanan Kiri */}
            <div className="relative">
                {/* Tombol Navigasi Kiri */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-blue-100 flex items-center justify-center text-blue-600 shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 opacity-0 group-hover/section:opacity-100"
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* Tombol Navigasi Kanan */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-blue-100 flex items-center justify-center text-blue-600 shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 opacity-0 group-hover/section:opacity-100"
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Wrapper Slider */}
                <div
                    ref={sliderRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full px-2"
                >
                    {works.map((work, index) => (
                        <div
                            key={`${work.id}-${index}`}
                            className="w-[70%] sm:w-[45%] md:w-[calc(20%-12.8px)] snap-start flex-shrink-0 flex flex-col group"
                        >
                            {/* Wadah Foto */}
                            <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-stone-200 shadow-sm mb-3">
                                <img
                                    src={work.src}
                                    alt={work.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    draggable="false"
                                />
                            </div>

                            {/* Info Teks */}
                            <div className="flex flex-col px-1">
                                <h3 className="text-[10px] font-bold text-blue-950 uppercase tracking-tighter truncate">
                                    {work.title}
                                </h3>
                                <div className="flex justify-between items-center mt-0.5">
                                    <p className="text-[9px] text-blue-600/70 truncate">
                                        {work.desc}
                                    </p>
                                    <span className="text-[8px] font-medium text-blue-300/80 font-mono">
                                        {work.year}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;