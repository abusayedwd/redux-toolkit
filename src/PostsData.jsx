import React from 'react';
import { useGetPostQuery } from './features/apiGet/postApi';

const PostsData = () => {

    const {isLoading, data} = useGetPostQuery();
    if(isLoading) return <div>Loading.......</div>
    console.log("post data",data);
    return (
        <div>
            <div className=' grid grid-cols-4 px-4 gap-4 mt-4'>
                  {data.slice(0,8).map((post) => (
          <div key={post.id} className='bg-green-400 hover:bg-blue-400 p-4 shadow-lg h-40 w-58 rounded-lg'>
            
            <h1 className='text-xl text-white'>{post.title.slice(0, 12)}</h1>
            <h1 className='text-xl text-white'>{post.body.slice(0, 60)}</h1>
        
            <div className='flex items-center justify-between text-button'>
                <button className='bg-red-500 px-3 py-1 rounded'>Detete</button>
                <button className='bg-green-400 px-3 py-1 rounded'>Edit</button>
            </div>
          </div>
        ))}
                  </div>
        </div>
    );
};

export default PostsData;