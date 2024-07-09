import React from 'react';
import { MdOutlineDateRange } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { removeBlog } from './features/addBlogSlice/addBlogSlice';
 

const BlogCard = () => {

    const  {blogs} = useSelector((state) => state.blogsSlice)
    // console.log(blogs);
    const dispatch = useDispatch()
     
    return (
        <div>
            <h1 className='text-center text-2xl text-orange-400 font-semibold font-serif py-4'>Blog Section</h1>
           <div  className='grid grid-cols-5 rounded-lg'>
           {
            blogs.map(blog => 
                <div key={blog.id} className='bg-slate-600 shadow-xl w-60 p-4 border my-3 border-orange-500'>
                <h1 className='text-2xl font-bold'>{blog.title}</h1>
                <h1>{blog.name}</h1>
                <h1 className='text-orange-400 font-sans'>{blog.email}</h1>
                <h1>{blog.category}</h1>
                <h1>{blog.description}</h1>
                <p className='flex gap-1 items-center'> <MdOutlineDateRange />{blog.date}</p>
                 <div className='felx items-center justify-around'>
                <button onClick={() => dispatch(removeBlog(blog.id))} className=''>
                <RiDeleteBin5Line  className='text-red-800 h-10 w-6' />
                </button>
                <button></button>
                </div>
            </div>
            )
           }
           </div>
        </div>
    );
};

export default BlogCard;