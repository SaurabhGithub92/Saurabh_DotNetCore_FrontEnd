import React, { useEffect, useState } from "react"
import { getPosts, Post } from "../services/PostService"


const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPosts();
                setPosts(data);
            } catch (error) {
                console.log("Error fetching posts:", error);
            }finally{
                setLoading(false);
            }
        }
        fetchPosts();
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    return(
        <>
        <div>
            <h1>Posts</h1>
            <ul>
                {posts && posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default PostList;