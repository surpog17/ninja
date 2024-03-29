import React from 'react'

function Blogllist({blogs,title, handleDelete}) {
    return (
        
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p> written by {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}> Delete blogs</button>
            </div>
        
        ))} 
        </div>
    )
}

export default Blogllist
