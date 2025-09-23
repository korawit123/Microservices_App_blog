import { useState, useEffect } from "react";
import axios from "axios";

import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export interface Post {
    id: string,
    title: string
}


export default function PostList() {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts');
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    
    const renderedPosts = Object.values(posts).map((post: any) => {
        return (
            <div className="w-[30%] mb-[20px] border rounded-[5px] p-5" key={post.id} >
                <div>
                    <h3 className="text-2xl">{post.title}</h3>
                    <CommentList comments ={post.comments}/>
                    <CommentCreate postId={post.id}/>
                </div>
            </div>
        );
    });
    


    return (
        <>
            <div className="flex flex-wrap justify-between">
                {renderedPosts}
            </div>
        </>
    );
}