import { useLocation } from 'react-router-dom';


const Blog = () => {
    const { state: blog } = useLocation();
    console.log(blog);
    

    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-2xl font-bold mb-2'>blog Details</h1>
            <p className='text-gray-700'><strong>ID:</strong> {blog.id}</p>
            <p className='text-gray-700'><strong>Title:</strong> {blog.title}</p>
            <p className='text-gray-700'><strong>Image:</strong> {blog.image}</p>
            <p className='text-gray-700'><strong>Author:</strong> {blog.author}</p>
            <p className='text-gray-700'><strong>Language:</strong> {blog.language}</p>
            <p className='text-gray-700'><strong>Description:</strong> {blog.description}</p>
            <p className='text-gray-700'><strong>Date:</strong> {blog.date}</p>
            <img src={blog.image} alt={blog.title} className='w-full' />
        </div>
    );
};

export default Blog;