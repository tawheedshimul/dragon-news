import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";

const fetchPosts = async () => {
    try {
        const response = await fetch('https://server-tawheed-blog.vercel.app/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return { error: error.message };
    }
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: fetchPosts,
            },
            {
                path: '/news/:id',
                element: (
                    <PrivateRoute>
                        <News />
                    </PrivateRoute>
                ),
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
]);

export default router;
