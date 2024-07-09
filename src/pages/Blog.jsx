import React from 'react'
import blog from '../assets/blog.png'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:3050/blog'); // Adjust URL as per your backend setup
                setBlogs(response.data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);
  return (
    <>
    <img className='pr-[160px] pl-[160px]' src={blog} />
    <div>
            <h1>Blog Posts</h1>
            <ul className=''>
                {blogs.map((blog) => (
                    <li key={blog._id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                        <p>Author: {blog.author}</p>
                        <p>Date:{blog.date}</p>
                        <img src={blog.image} alt={blog.title} style={{ maxWidth: '100px' }} />
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Blog