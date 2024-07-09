import React from "react"
import PostService, { Post } from "../services/PostService";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";


const PostsComponent: React.FC = React.memo(() => {
    const {data: posts, error, loading } = useFetch<Post[]>(PostService.getPosts);

    if(loading){
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error}</div>
    }

    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {posts && posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>           
                    </li>
                ))}
            </ul>
        </div>
    )
});

export default PostsComponent;