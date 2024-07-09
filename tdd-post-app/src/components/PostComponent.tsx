import React, { useEffect, useState } from "react";
import { getPostById, Post } from "../services/PostService";

interface PostProps {
    postId: number;
}

const PostComponent: React.FC<PostProps> = ({ postId }) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPostById(postId);
                setPost(data);
            } catch (error) {
                console.error('Error fetching post: ', error);
            }finally{
                setLoading(false);
            }
        }
        fetchPost();
    }, [postId])

    if(loading){
        return <div>Loading...</div>
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

export default PostComponent;