"use client";
import { useEffect, useState } from "react";
import {getAllPosts} from "@/services/getPosts";
import { Posts } from "@/components/Posts";

export default  function BlogComponent() {
    const [posts, setPosts] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPosts()
        .then(setPosts)
        .finally(() => setLoading(false))
    }, [])

    return (<>
        <h1>BLOG PAGE</h1>
        {loading 
            ? 
            ( <h3>Loading...</h3> ) 
            : 
            (
                <Posts posts={posts}/>
            )}

        </>
)}