import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUsPage";
import Profile from "./Pages/Profile";
import NotFoundPage from "./Pages/NotFoundPage";
import BlogPage from "./Pages/BlogPage";
import Blog from "./Components/Blog";
import PostPage from "./Pages/PostPage";

const routes = [
    {path:"/" , element:<HomePage/>},
    {path:"/about-us" , element:<AboutUs/>},
    {path:"/profile/*" , element:<Profile/>},
    {path:"/blogs" , element:<BlogPage/>},
    {path:"/blogs/:id" , element:<Blog/>},
    {path:"/post/:id?" , element:<PostPage/>},
    {path:"*" , element:<NotFoundPage/>},
]

export default routes;
//([0-9]+)
//([A-Za-z]+)