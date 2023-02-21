// import React from "react";
// import Layout from "../Layout/Layout";
//
// const Profile = (props) => {
//     return (
//         <Layout>
//             <p>Welcome Back ! dear Badiei</p>
//         </Layout>
//     )
// }
//
// export default Profile;


// import React from "react";
//
// const Profile = (props) => {
//     return (
//         <p>Welcome Back ! dear Badiei</p>
//     )
// }
//
// export default Profile;


// import React from "react";
// import SideBar from "../Components/SideBar";
// import Dashboard from "../Components/Dashboard";
// import Downloads from "../Components/Downloads";
// import {Route , Routes} from "react-router-dom";
//
// const Profile = (props) => {
//     return (
//         <>
//             <p>Welcome Back ! dear Badiei</p>
//             <SideBar/>
//             <Routes>
//                 <Route path="dashboard" element={<Dashboard/>}/>
//                 <Route path="download" element={<Downloads/>}/>
//             </Routes>
//         </>
//     )
// }
//
// export default Profile;


//use Outlet


import React from "react";
import SideBar from "../Components/SideBar";
import {Outlet} from "react-router-dom"

const Profile = (props) => {
    return (
        <>
            <p>Welcome Back ! dear Badiei</p>
            <SideBar/>
            <Outlet/>
        </>
    )
}

export default Profile;