import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import DesktopToast from "../components/DesktopToast";
import AboutPage from "../pages/about/AboutPage";
import GalleryPage from "../pages/gallery/GalleryPage";
import ExperiencePage from "../pages/experiences/ExperiencePage";
import MoreAboutMe from "../pages/moreinfo/MoreAboutMe";

const MainLayout = () => {
    const location = useLocation();
    const isHome = location.pathname === "/" || location.pathname === "/dashboard";

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#4A90FF] via-[#FDFBF7] to-[#FDFBF7]">
            <DesktopToast />
            <Navbar />
            <div className="">
                <Outlet />
            </div>

            {isHome && (
                <>
                    <div id="about-section">
                        <AboutPage />
                    </div>
                    <div id="gallery-section">
                        <GalleryPage />
                    </div>
                    <div id="experience-section">
                        <ExperiencePage />
                    </div>
                    <div id="moreinfo-section">
                        <MoreAboutMe />
                    </div>
                </>
            )}

            <Footer />
        </div>
    );
};

export default MainLayout;