import React, { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const blogPost = { title, content };

        try {
            const response = await axios.post('http://localhost:5000/posts', blogPost);
            if (response.status === 201) {
                setMessage('Blog post created successfully')
                setTitle('');
                setContent('');
            }
        } catch (error) {
            setMessage('Error creating blog post');
            console.error('Error creating blog post:', error);
        }
    };
    
    return (
        <div>
            <h1>Create New Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Create</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateBlog;