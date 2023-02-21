// import {Link} from "react-router-dom";
//
// const Navigation = (props) => {
//   console.log(props)
//   return(
//       <header>
//           <nav>
//               <ul>
//                   <li>
//                       <Link to="/">Home</Link>
//                   </li>
//                   <li>
//                       <Link to="/about-us">About Us</Link>
//                   </li>
//               </ul>
//           </nav>
//       </header>
//   )
// }
//
// export default Navigation;


// import {Link ,withRouter} from "react-router-dom";
//
// const Navigation = (props) => {
//     console.log(props)
//     return(
//         <header>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/about-us">About Us</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }
//
// export default withRouter(Navigation);


import {NavLink} from "react-router-dom";

const items = [
    {name: "Home", to: "/"},
    {name: "About us", to: "/about-us"},
    {name: "Profile", to: "/profile"},
    {name: "Blogs", to: "/blogs"},
    {name: "Post", to: "/post"},
]

const Navigation = ({location}) => {

    return (
        <nav>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.to}>
                            <NavLink to={item.to} className={(navData) => navData.isActive ? "activeLink" : ""}>
                                {item.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navigation;