 
 
 const PostData = ({post}) => {
   
    return (
        <div className="flex items-center justify-center">
      <div className="card rounded overflow-hidden shadow-lg h-48  bg-slate-500 p-6 transform transition-transform duration-300 hover:scale-105">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-sky-500"> 
            {post.title}
          </h2>
        </div>
        <p className="text-gray-700 text-base mb-4">
            {post.body.slice(0, 20)}
         </p>
        <div className="flex justify-end space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
            Delete
          </button>
        </div>
      </div>
    </div>
    );
 };
 
 export default PostData;

 import React from 'react';

 
