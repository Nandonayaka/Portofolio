import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#4A90FF] via-[#FDFBF7] to-[#FDFBF7]">
            <Navbar />
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;