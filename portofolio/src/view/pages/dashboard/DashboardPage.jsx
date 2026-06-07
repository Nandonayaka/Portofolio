import AboutPage from "../about/AboutPage";
import GalleryPage from "../gallery/GalleryPage";
import ExperiencePage from "../experiences/ExperiencePage";

const DashboardPage = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <div className="h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center overflow-hidden relative">
                <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-12">
                        <img src="/public/images/text-dashboard.png" alt="Portfolio Text" className="max-w-[90vw] md:max-w-full" draggable="false" />
                    </div>

                    {/* Animated Scroll Arrow */}
                    <button
                        onClick={scrollToAbout}
                        className="animate-bounce cursor-pointer flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
                    >
                        <span className="text-white font-serif italic text-lg tracking-widest">SCROLL</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                        >
                            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* About Section */}
            <div id="about-section" className="">
                <AboutPage />
            </div>

            {/* Experience Section */}
            <div id="experience-section" className="">
                <ExperiencePage />
            </div>

            {/* Gallery Section */}
            <div id="gallery-section" className="">
                <GalleryPage />
            </div>
        </div>
    );
};


export default DashboardPage;


