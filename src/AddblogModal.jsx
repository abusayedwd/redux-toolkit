 
import CardModal from "./CardModal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./index.css";
import { useDispatch } from "react-redux";
import { addBlog } from "./features/addBlogSlice/addBlogSlice";
 

const AddblogModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()
     
    const onSubmit = (data) => {
         
        setIsOpen(false)
      dispatch(addBlog(data))
      
        
    };
    const onCencel = () => { 
      setIsOpen(false)
    };
    const resectForm = () => {
      reset();
    }
    
    
    

  return (
    <div>
      <CardModal isOpen={isOpen} setIsOpen={setIsOpen} title="AddBlog Post">
       
        

      <form onSubmit={handleSubmit(onSubmit)}>
       
      <input type="text" required {...register("name")} placeholder="First name" />
      <input type="email" required {...register("email")} placeholder="Email" />
      <input type="text" required {...register("title")} placeholder="Title" />
      <input type="date" required {...register("date")} placeholder="date" />
      <select required {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        <option value="B">Option C</option>
      </select>
      <textarea  required {...register("description")} placeholder="description" />
      <button className="mb-5 py-1 px-2 bg-red-400 text-slate-50 rounded-lg" onClick={resectForm}>Reset..</button>
      
      <button onClick={onCencel} className="text-white font-medium bg-red-500 py-2 rounded-md w-full">Cencel</button>
      <input type="submit" />
    </form>

      </CardModal>
    </div>
  );
};

export default AddblogModal;
