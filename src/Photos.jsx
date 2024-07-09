import React from 'react';
import { useGetPhotosQuery } from './features/apiGet/getPhotosApi';


 

const Photos = () => {
     const { data,isLoading,isError} = useGetPhotosQuery();
    //  console.log(".........data",data);

     if(isLoading) return <div>Loading........</div>
     if(isError) return <div>Error data........</div>

    //  if(isLoading) return <div>Loading ......</div>
    //  if(error)return <div> error loading photoss</div>
    
    return (
        <div>
              <div className=' grid grid-cols-4 px-4 gap-4 mt-4'>
                  {data.slice(0,8).map((post) => (
          <div key={post.id} className='bg-green-400 hover:bg-blue-400 p-4 shadow-lg h-40 w-58 rounded-lg'>
            <img src={post.url} alt="" />
            <h1 className='text-xl text-white'>{post.title.slice(0,15)}</h1>
             
          </div>
        ))}
                  </div>
        </div>
    );
};

export default Photos;