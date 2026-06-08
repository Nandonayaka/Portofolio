import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../view/layouts/MainLayout";
import DashboardPage from "../../view/pages/dashboard/DashboardPage";
import AboutPage from "../../view/pages/about/AboutPage";
import GalleryPage from "../../view/pages/gallery/GalleryPage";
import ExperiencePage from "../../view/pages/experiences/ExperiencePage";
import MoreAboutMe from "../../view/pages/moreinfo/MoreAboutMe";

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
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "gallery",
                element: <GalleryPage />,
            },
            {
                path: "experience",
                element: <ExperiencePage />,
            },
            {
                path: "moreinfo",
                element: <MoreAboutMe />,
            },
        ],
    },
]);

export default router;