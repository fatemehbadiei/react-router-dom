import {useParams} from "react-router-dom";

const PostPage = (props) => {
    let {id = 1} = useParams();
    return (
        <div>
            <h2>Post detail - {id} </h2>
            <div>{JSON.stringify(useParams())}</div>
        </div>
    )
}

export default PostPage;