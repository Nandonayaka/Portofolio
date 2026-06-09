import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import DesktopToast from "../components/DesktopToast";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#4A90FF] via-[#FDFBF7] to-[#FDFBF7] overflow-x-hidden">
            <DesktopToast />
            <Navbar />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;