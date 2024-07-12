 
  import React from 'react';
  import { Link} from 'react-router-dom';
import { useDeleteBlogMutation } from './features/counters/apiSlice';
import toast, { Toaster } from 'react-hot-toast';
 


 const BlogData = ({blog}) => {

  // console.log(blog);
  const [deleteBlog] = useDeleteBlogMutation()
  

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id).unwrap();
      toast.success('Post deleted successfully');
    } catch (err) {
      console.error('Failed to delete the post: ', err);
    }
  };
 
    return (

        <div className="flex items-center justify-center">
           <Toaster />
      <div className="card rounded overflow-hidden shadow-lg h-48  bg-slate-500 p-6 transform transition-transform duration-300 hover:scale-105">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-sky-500"> 
            {blog.title} 
          </h2>
        </div>
        <p className="text-gray-700 text-base mb-4">
            {blog.body}
         </p>
        <div className="flex justify-end space-x-4">
          <Link to= {`/updatepost/${blog._id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Edit
          </button>
          </Link>
          <button onClick={() => handleDelete(blog._id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
            Delete
          </button>
         
        </div>
      </div>
    </div>
    );
 };
 
 export default BlogData;



 
