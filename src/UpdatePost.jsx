import { useNavigate, useParams } from "react-router-dom";
import { useGetBlogByIdQuery,  useUpdateBlogMutation,} from "./features/counters/apiSlice";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

 
const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading, error } = useGetBlogByIdQuery(id);
  const [updatePost] = useUpdateBlogMutation();
  const [updatedPost, setUpdatedPost] = useState({ title: '', body: '' });
  // console.log(updatedPost);

  useEffect(() => {
    if (post) {
      setUpdatedPost({ title: post.title, body: post.body });
    }
  }, [post]);

  const handleUpdate = async () => {
    try {
      await updatePost({ id, ...updatedPost }).unwrap();
      toast.success('Post updated successfully');
      navigate('/');
    } catch (err) {
      console.error('Failed to update the post: ', err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


    return (
        <div>
               <div className='w-[30%] mx-auto'>
                <Toaster></Toaster>
        <h2 className='text-2xl text-blue-500 font-medium my-4'>Edit Post</h2>
        <input
          className='bg-slate-300 border-sky-600'
          type="text"
          value={updatedPost.title}
          onChange={(e) => setUpdatedPost({ ...updatedPost, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          className='bg-slate-300 border-sky-600'
          value={updatedPost.body}
          onChange={(e) => setUpdatedPost({ ...updatedPost, body: e.target.value })}
          placeholder="Content"
        />
        <button onClick={handleUpdate} className='bg-green-400 font-serif px-2 py-1 rounded-lg' >Update Post</button>
      </div>
        </div>
      // <div>
      //   <h1>update datafff Aima</h1>
      // </div>
    );
};

export default UpdatePost;