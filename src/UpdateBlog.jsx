import { useNavigate, useParams } from "react-router-dom";
import { useGetBlogByIdQuery,  useUpdateBlogMutation,} from "./features/counters/apiSlice";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

 
const updateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data:  blog, isLoading, error } = useGetBlogByIdQuery(id);
  console.log(blog?.image?.publicFileUrl);
  const [updateBlog] = useUpdateBlogMutation();
  const [blogUpdate, setblogUpdate] = useState({ title: '', body: '' });
  console.log(blogUpdate);
 const [image, setImage] = useState(null)

  useEffect(() => {
    if ( blog) {
      setblogUpdate({ title:  blog.title, body:  blog.body, image: blog?.image?.publicFileUrl});
    }
  }, [ blog]);

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    // console.log(file);
  
    setImage(file)
  
   }

  const handleUpdate = async () => {
    const formData = new FormData();
    console.log("===============>",blogUpdate);
    console.log("",image);

    formData.append("title", blogUpdate?.title);
    formData.append("body", blogUpdate?.body);
    formData.append("image", image);
    console.log(formData);
    try {
      await updateBlog({ id,formData}).unwrap();
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
        name="image"
        type = 'file' 
        onChange={handleChangeImage}
        file = {`http://localhost:5000/${blogUpdate.image}`}
        />
        <input
          className='bg-slate-300 border-sky-600'
          type="text"
          value={blogUpdate.title}
          onChange={(e) => setblogUpdate({ ...blogUpdate, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          className='bg-slate-300 border-sky-600'
          value={blogUpdate.body}
          onChange={(e) => setblogUpdate({ ...blogUpdate, body: e.target.value })}
          placeholder="Content"
        />
        <button onClick={handleUpdate} className='bg-green-400 font-serif px-2 py-1 rounded-lg' >Update Blog</button>
      </div>
        </div>
      // <div>
      //   <h1>update datafff Aima</h1>
      // </div>
    );
};

export default updateBlog;