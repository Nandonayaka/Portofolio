import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h1 className="border-b-2 border-gray-200">MainLayout</h1>
            <div className="border border-gray-200 mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;