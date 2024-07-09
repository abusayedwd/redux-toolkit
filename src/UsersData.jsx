import React from 'react';
import {useGetUsersQuery } from './features/apiGet/usersApi';
 
 

const UsersData = () => {

    const {isLoading, data} = useGetUsersQuery();
    
    
    if(isLoading) return <div>Loading........</div>
// console.log("users data >>>>>>>",data);

    return (
        <div>
           <div className=' grid grid-cols-4 px-4 gap-4 mt-4'>
                  {data.slice(0,8).map((user) => (
          <div key={user.id} className='bg-green-400 hover:bg-blue-400 p-4 shadow-lg h-40 w-58 rounded-lg'>
            <img src={user.usersname} alt="" />
            <h1 className='text-xl text-white'>{user.email}</h1>

            <div className='mt-8 flex items-center justify-between text-button'>
                <button className='bg-red-500 px-3 py-1 rounded'>Detete</button>
                <button className='bg-green-400 px-3 py-1 rounded'>Edit</button>
            </div>
             
          </div>
        ))}
                  </div>
        </div>
    );
};

export default UsersData;