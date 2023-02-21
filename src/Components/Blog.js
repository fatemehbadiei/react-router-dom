// import {Link, useParams} from "react-router-dom";
//
// const Blog = (props) => {
//     const {id} = useParams();
//
//     return (
//       <>
//           <h2>Blog detail - {id}</h2>
//           <Link to="/blogs">Go to BlogPage</Link>
//       </>
// )
// }
//
// export default Blog;



// import {Link, useParams} from "react-router-dom";
//
// const Blog = (props) => {
//     const {id} = useParams();
//
//     return (
//         <>
//             <h2>Blog detail - {id}</h2>
//             <Link to={`/blogs/${parseInt(id) + 1}`}>Go To Next Page</Link>
//         </>
//     )
// }
//
// export default Blog;


//use useSearchParams


// import {Link, useParams} from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';
//
// const Blog = (props) => {
//     const {id} = useParams();
//     const [searchParams] = useSearchParams();
//     console.log(searchParams);
//     return (
//         <>
//             <h2>Blog detail - {id}</h2>
//             <Link to={`/blogs/${parseInt(id) + 1}`}>Go To Next Page</Link>
//         </>
//     )
// }
//
// export default Blog;


// import {Link, useParams} from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';
//
// const Blog = (props) => {
//     const {id} = useParams();
//     const [searchParams] = useSearchParams();
//     console.log(searchParams.get('sort'));
//     return (
//         <>
//             <h2>Blog detail - {id}</h2>
//             <Link to={`/blogs/${parseInt(id) + 1}`}>Go To Next Page</Link>
//         </>
//     )
// }
//
// export default Blog;


// import {Link, useParams} from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';
//
// const Blog = (props) => {
//     const {id} = useParams();
//     const [searchParams] = useSearchParams();
//     console.log(searchParams.entries());
//     return (
//         <>
//             <h2>Blog detail - {id}</h2>
//             <Link to={`/blogs/${parseInt(id) + 1}`}>Go To Next Page</Link>
//         </>
//     )
// }
//
// export default Blog;



// import {Link, useParams} from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';
//
// const Blog = (props) => {
//     const {id} = useParams();
//     const [searchParams] = useSearchParams();
//     for (const entry of searchParams.entries()) {
//         console.log(entry);
//     }
//     return (
//         <>
//             <h2>Blog detail - {id}</h2>
//             <Link to={`/blogs/${parseInt(id) + 1}`}>Go To Next Page</Link>
//         </>
//     )
// }
//
// export default Blog;


// import {Link, useParams} from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';
//
// const Blog = (props) => {
//     const {id} = useParams();
//     const [searchParams] = useSearchParams();
//     console.log([...searchParams]);
//     return (
//         <>
//             <h2>Blog detail - {id}</h2>
//             <Link to={`/blogs/${parseInt(id) + 1}`}>Go To Next Page</Link>
//         </>
//     )
// }
//
// export default Blog;


import {Link, useParams} from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

const Blog = (props) => {
    const {id} = useParams();
    const [searchParams] = useSearchParams();
    console.log(Object.fromEntries([...searchParams]));
    return (
        <>
            <h2>Blog detail - {id}</h2>
            <Link to={`/blogs/${parseInt(id) + 1}`}>Go To Next Page</Link>
        </>
    )
}

export default Blog;


// import {useEffect} from "react";
// import {Link, useParams} from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';
//
// const Blog = (props) => {
//     const {id} = useParams();
//     const [searchParams] = useSearchParams();
//
//     useEffect(() => {
//         const currentParams = Object.fromEntries([...searchParams]);
//         console.log(currentParams); // get new values onchange
//     }, [searchParams]);
//
//     return (
//         <>
//             <h2>Blog detail - {id}</h2>
//             <Link to={`/blogs/${parseInt(id) + 1}`}>Go To Next Page</Link>
//         </>
//     )
// }
//
// export default Blog;

//use query string

// import {Link, useParams} from "react-router-dom";
// import queryString from 'query-string';
//
// const Blog = (props) => {
//
//     const {id} = useParams();
//
//     const parsed = queryString.parse(props.location.search);
//     console.log(parsed);
//
//     return (
//         <>
//             <h2>Blog detail - {id}</h2>
//             <Link to={`/blogs/${parseInt(id) + 1}`}>Go To Next Page</Link>
//         </>
//     )
// }
//
// export default Blog;