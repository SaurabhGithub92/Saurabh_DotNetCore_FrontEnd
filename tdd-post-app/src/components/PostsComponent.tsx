import React from "react"
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
import { Post } from "../models/Post";
import { IPostService } from "../services/IPostService";

interface PostsComponentProps {
    postService: IPostService;
}

const PostsComponent: React.FC<PostsComponentProps> = ({postService}) => {
    const {data: posts, error, loading } = useFetch<Post[]>(postService.getPosts);

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
}

export default React.memo(PostsComponent);