import React, { useState } from 'react';
import { useAddBlogMutation, useGetBlogsQuery } from './features/counters/apiSlice';

import BlogData from './BlogData';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
 

const Posts = () => {
const { register, handleSubmit, reset } = useForm();

const [image, setIamge] = useState(null)
 
  const { data: blogs, isLoading, error } = useGetBlogsQuery();
  //  const [deletePost] = useDeletePostMutation()
  // const [selectedPostId, setSelectedPostId] = useState(null);
  // const { data: selectedPost } = useGetPostQuery(selectedPostId, { skip: !selectedPostId });
  const [addPost] = useAddBlogMutation();


  

 const handleChangeImage = (e) => {
  const file = e.target.files[0];
  console.log(file);

  setIamge(file)

 }
 
 
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
 
  const onSubmit = async (data) => { 
    const image = data?.profile[0].name;
     console.log(image)
    

    
    

    try {
      const formData = new FormData();

    formData.append("title", data?.title);
    formData.append("body", data?.body);
    formData.append("image", image);
    console.log(formData);
          await addPost(formData).unwrap();
          
          toast.success('add post success')
        } catch (err) {
          console.error('Failed to add post: ', err);
        }
};


  return (
    <div>
      <h1>Blog</h1>
      <div className='w-[30%] mx-auto'>
        <h2 className='text-2xl text-blue-500 font-medium my-4'>Add New Post</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
       
      <input type="file" 
      name='profile'
      required {...register("profile")} 
      onChange={handleChangeImage} 
      />
      <input type="text" required {...register("title")} placeholder="title" />
      <textarea  required {...register("body")} placeholder="body" />
       
       <input type="submit" />
    </form>
     
      </div>


      <div className='grid grid-cols-4 p-2 gap-4 pb-12'>
        {blogs?.map((blog) => (
          // console.log(post),
          <BlogData key={blog.id} blog={blog}>
          </BlogData>

        ))}
    
      </div>
    </div>
  );
};

export default Posts;
