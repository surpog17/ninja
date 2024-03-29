import React from 'react'
import { useState, useEffect } from "react";
import Blogllist from './Blogllist';

function Home() {
   const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleDelete=(id) =>{
      const newBlog =blogs.filter(blog => blog.id !== id);
      setBlogs(newBlog);

  }
  useEffect(()=>{
    console.log(blogs);
  });
  
    return (
      <div className="home">
       <Blogllist blogs={blogs} title={"All blogs"}  handleDelete={handleDelete}/>
       <Blogllist blogs={blogs.filter((blog) => blog.author === "yoshi")} title={"Yoshi Blogs"} handleDelete={handleDelete}/>
      </div>
    )
}

export default Home
