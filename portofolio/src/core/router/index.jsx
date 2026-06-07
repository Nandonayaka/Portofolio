import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MainLayout from "../../view/layouts/MainLayout";
import DashboardPages from "../../view/pages/dashboard/DashboardPages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <DashboardPages />,
                    },
                    {
                        path: "dashboard",
                        element: <DashboardPages />,
                    },
                ],
            },
        ],
    },
]);

export default router;