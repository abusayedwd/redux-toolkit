import React, { useState } from 'react';
import { useGetPostsQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation, useGetTodosQuery } from './features/counters/apiSlice';
import { useGetPostQuery } from './features/apiGet/postApi';
import PostData from './PostData';

const Posts = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  // const [selectedPostId, setSelectedPostId] = useState(null);
  // const { data: selectedPost } = useGetPostQuery(selectedPostId, { skip: !selectedPostId });
  const [addPost] = useAddPostMutation();
 
  
  const [deletePost] = useDeletePostMutation();
  const { data: todos, } = useGetTodosQuery();
 

  const [newPost, setNewPost] = useState({ title: '', body: '' });
  // const [editPost, setEditPost] = useState({ id: '', title: '', body: '' });
  // console.log(newPost);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleAddPost = async () => {
    try {
      await addPost(newPost).unwrap();
      setNewPost({ title: '', body: '' });
    } catch (err) {
      console.error('Failed to add post: ', err);
    }
  };

 

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id).unwrap();
    } catch (err) {
      console.error('Failed to delete post: ', err);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <div className='w-[30%] mx-auto'>
        <h2 className='text-2xl text-blue-500 font-medium my-4'>Add New Post</h2>
        <input
          className='bg-slate-300 border-sky-600'
          type="text"
          name='title'
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          className='bg-slate-300 border-sky-600'
          value={newPost.body}
          name='body'
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          placeholder="body"
        />
        <button className='bg-green-400 font-serif px-2 py-1 rounded-lg' onClick={handleAddPost}>
          Add Post
          </button>
      </div> 

  
        <div className='grid grid-cols-4 p-2 gap-4 pb-12'>
          {posts.map((post) => (
            <PostData key={post.id} post ={post}> 
            </PostData>
          ))}
          {

          }
        </div> 
    </div>
  );
};

export default Posts;
