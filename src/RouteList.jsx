import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import BlogHome from './BlogHome';
import NewBlogForm from './NewBlogForm';
import Post from './Post';

const RoutesList = () => {
    return (
        <> 
            <Routes>
                <Route path="/" element={<Home />}>Home</Route>
                <Route path="/about" element={<About />}>About</Route>
                <Route path="/contact" element={<Contact />}>Contact</Route>
                <Route path="/blog" element={<BlogHome />}>BlogHome</Route>
                <Route path="/blog/new" element={<NewBlogForm />}>NewBlogForm</Route>
                <Route path="/blog/:slug" element={<Post />}>Post</Route>
            </Routes>
        </>
    );
};

export default RoutesList;
