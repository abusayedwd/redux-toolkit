import React from 'react'; 
import { useGetPostQuery } from './features/apiGet/postApi';
 
 
 
const PostData = () => { 
 
  const {data, isLoading} = useGetPostQuery();

  console.log('post data', data);
 

    if (isLoading) return <div>Loading...</div>;
   
    
    return (
        <div>
                  <div className=' grid grid-cols-6 px-4 gap-4 mt-4'>
                  {data.slice(0,18).map((post) => (
          <div key={post.id} className='bg-green-400 hover:bg-blue-400 p-4 shadow-lg h-48 w-58 rounded-lg'>
            {/* <h1 className='text-2xl text-white'>{post.name}</h1>
            <p> {post.email}</p> */}
            <h1 className='text-2xl text-white'>{post.title.slice(0,15)}</h1>
            <p> {post.body.slice(0,65)}</p>
          </div>
        ))}
                  </div>
        </div>
    );
};

export default PostData;