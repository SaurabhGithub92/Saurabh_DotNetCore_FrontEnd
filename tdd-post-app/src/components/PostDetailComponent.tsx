import React from "react";
import PostService from "../services/PostService";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { Post } from "../models/Post";

const PostDetailComponent: React.FC = () => {
    let postService: PostService;
    const {id} = useParams<{id: string}>();
    const postId = id ? parseInt(id, 10): undefined;
    const {data: post, error, loading} = useFetch<Post>(() => {
        if(postId === undefined)
            throw new Error('Post ID is not defined');
        return postService.getPost(postId);
    });

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>;
    }

    if(!post){
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetailComponent;