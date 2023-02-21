// import './App.css';
// import Navigation from "./Components/Navigation";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import HomePage from "./Pages/HomePage";
// import AboutUs from "./Pages/AboutUsPage";
//
// function App() {
//     return (
//         <BrowserRouter>
//             <Navigation/>
//             <Routes>
//                 <Route path="/" exact={true} element={<HomePage/>}/>
//                 <Route path="/about-us" element={<AboutUs/>}/>
//             </Routes>
//         </BrowserRouter>
//     );
// }
//
// export default App;


// import './App.css';
// import Navigation from "./Components/Navigation";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import HomePage from "./Pages/HomePage";
// import AboutUs from "./Pages/AboutUsPage";
// import Profile from "./Pages/Profile";
//
// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" exact={true} element={<HomePage/>}/>
//                 <Route path="/about-us" element={<AboutUs/>}/>
//                 <Route path="/profile" element={<Profile/>}/>
//             </Routes>
//         </BrowserRouter>
//     );
// }
//
// export default App;


// import './App.css';
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import HomePage from "./Pages/HomePage";
// import AboutUs from "./Pages/AboutUsPage";
// import Profile from "./Pages/Profile";
// import Layout from "./Layout/Layout";
//
// function App() {
//     return (
//         <BrowserRouter>
//             <Layout>
//                 <Routes>
//                     <Route path="/" exact={true} element={<HomePage/>}/>
//                     <Route path="/about-us" element={<AboutUs/>}/>
//                     <Route path="/profile" element={<Profile/>}/>
//                 </Routes>
//             </Layout>
//         </BrowserRouter>
//     );
// }
//
// export default App;


// import './App.css';
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Layout from "./Layout/Layout";
// import routes from "./routes";
//
// function App() {
//     return (
//         <BrowserRouter>
//             <Layout>
//                 <Routes>
//                     {routes.map((route)=>(
//                         <Route {...route}/>
//                     ))}
//                 </Routes>
//             </Layout>
//         </BrowserRouter>
//     );
// }
//
// export default App;

//use Outlet

// import './App.css';
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import HomePage from "./Pages/HomePage";
// import AboutUs from "./Pages/AboutUsPage";
// import Profile from "./Pages/Profile";
// import Layout from "./Layout/Layout";
// import PostPage from "./Pages/PostPage";
// import NotFoundPage from "./Pages/NotFoundPage";
// import Blog from "./Components/Blog";
// import BlogPage from "./Pages/BlogPage";
// import Dashboard from "./Components/Dashboard";
// import Downloads from "./Components/Downloads";
//
// function App() {
//     return (
//         <BrowserRouter>
//             <Layout>
//                 <Routes>
//                     <Route path="/" element={<HomePage/>}/>
//                     <Route path="/about-us" element={<AboutUs/>}/>
//                     <Route path="/blogs/:id" element={<Blog/>}/>
//                     <Route path="/blogs" element={<BlogPage/>}/>
//                     <Route path="/post/:id?" element={<PostPage/>}/>
//                     <Route path="*" element={<NotFoundPage/>}/>
//                     <Route path="/profile/*" element={<Profile/>}>
//                         <Route path="dashboard" element={<Dashboard/>}/>
//                         <Route path="download" element={<Downloads/>}/>
//                     </Route>
//                 </Routes>
//             </Layout>
//         </BrowserRouter>
//     )
//         ;
// }
//
// export default App;


//redirect to another page with Navigate


import './App.css';
import {BrowserRouter, Route, Routes ,Navigate} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUsPage";
import Profile from "./Pages/Profile";
import Layout from "./Layout/Layout";
import PostPage from "./Pages/PostPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Blog from "./Components/Blog";
import BlogPage from "./Pages/BlogPage";
import Dashboard from "./Components/Dashboard";
import Downloads from "./Components/Downloads";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/blogs"/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/blogs/:id" element={<Blog/>}/>
                    <Route path="/blogs" element={<BlogPage/>}/>
                    <Route path="/post/:id?" element={<PostPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="/profile/*" element={<Profile/>}>
                        <Route path="dashboard" element={<Dashboard/>}/>
                        <Route path="download" element={<Downloads/>}/>
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
        ;
}

export default App;