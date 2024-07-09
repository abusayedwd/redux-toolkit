import React from 'react';
import { useForm } from "react-hook-form";

const PostMethod = () => {

    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    reset()
    console.log(data)
};
    return (
        <div className='w-[40%] mx-auto my-12 px-9 border-blue-500 border-2 rounded-lg pt-4'>
            <h1 className='text-blue-600 text-3xl text-center font-semibold'>DataPost Form</h1>
               <form onSubmit={handleSubmit(onSubmit)} >
                <label className='text-white' htmlFor="">User-Name</label>
      <input type='text' placeholder='User-name' {...register("firstName")} />
      <label className='text-white' htmlFor="">Email</label> 
      <input type='email' placeholder='Enter-email' {...register("firstName")} />
      
      <input className='bg-blue-500' type="submit" />
    </form>
        </div>
    );
};

export default PostMethod;