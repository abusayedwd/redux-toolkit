import React from 'react';
import { useGetPostQuery, useUpdatePostMutation } from './features/counters/apiSlice';

const UpdatePost = () => {

    // const [selectedPostId, setSelectedPostId] = useState(null);
    const { data: selectedPost } = useGetPostQuery();
    console.log(selectedPost);
    const [upDatePost] = useUpdatePostMutation()
    const [editPost, setEditPost] = useState({ id: '', title: '', body: '' });

    const handleUpdatePost = async () => {
        try {
          await upDatePost(editPost).unwrap();
          setEditPost({ id: '', title: '', body: '' });
        } catch (err) {
          console.error('Failed to update post: ', err);
        }
      };
    return (
        <div>
               <div className='w-[30%] mx-auto'>
        <h2 className='text-2xl text-blue-500 font-medium my-4'>Edit Post</h2>
        <input
          className='bg-slate-300 border-sky-600'
          type="text"
          value={editPost.title}
          onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          className='bg-slate-300 border-sky-600'
          value={editPost.body}
          onChange={(e) => setEditPost({ ...editPost, body: e.target.value })}
          placeholder="Content"
        />
        <button className='bg-green-400 font-serif px-2 py-1 rounded-lg' onClick={handleUpdatePost}>Update Post</button>
      </div>
        </div>
    );
};

export default UpdatePost;