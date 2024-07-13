 
  import React from 'react';
  // import { Link} from 'react-router-dom';
import { useDeleteBlogMutation } from './features/counters/apiSlice';
import toast, { Toaster } from 'react-hot-toast';
import './BlogData.css'
import { Link } from 'react-router-dom';


 const BlogData = ({blog}) => {

  // console.log(blog.image.publicFileUrl);
  // const imageUrl = blog.image.publicFileUrl;
  const [deleteBlog] = useDeleteBlogMutation()

  
  // const imageFilename = data.image.filename;
  // const imageUrl = `${data.image.destination}/${imageFilename}`;
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
      <div className="card">
      <img  src={`http://localhost:5000/${blog?.image?.publicFileUrl}`} alt="Card" className="card-image h-52" />
      <div className="card-content">
        <h2 className="card-title">{blog.title}</h2>
        <p className="card-body">{blog.body}</p>
        <div className=" flex justify-between items-center">
          <button className="bg-green-500 text-white  px-4 py-2 rounded text-right">
            <Link to ={`updatepost/${blog._id}`}>Edit</Link>
      </button>
          <button className=" text-white  px-4 py-2 rounded text-right bg-red-600" onClick={() => handleDelete(blog._id)}>Delete</button>
        </div>
      </div>
    </div>
    </div>
    );
 };
 
 export default BlogData;



 
