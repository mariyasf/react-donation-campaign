import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Donation from "../Components/Donation/Donation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/donation',
                element: <Donation />
            },
            {
                path: '/statistics',
                element: <h1>statistics</h1>
            },
            {
                path: "/donation-details/:id",
                element: <DonationDetails />
            }
        ]
    },


]);

export default router;