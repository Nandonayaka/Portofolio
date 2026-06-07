import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../view/layouts/MainLayout";
import DashboardPage from "../../view/pages/dashboard/DashboardPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "dashboard",
                element: <DashboardPage />,
            },
        ],
    },
]);

export default router;