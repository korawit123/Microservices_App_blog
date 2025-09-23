import { useState } from "react";
import PostCreate from "@/component/PostCreate";
import PostList from "@/component/PostList";


export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl my-10">Create Post</h1>
      <PostCreate/>
      <hr />  
      <h1 className="text-4xl my-5 ">Post List</h1>
      <PostList/>
    </div>  
    

  );
}
