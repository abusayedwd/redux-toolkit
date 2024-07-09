import { createSlice, isPending } from "@reduxjs/toolkit"


const initialState = {
    blogs : [
        {
            category: "A",
            date:"2024-07-09",
            description: "its a programming language",
            email:"ab@gmail.com",
            id:1,
            name :"abusayed",
            status:"pending",
            title:"React js"
        }
    ],
}


const addBlogs = createSlice({
    name: 'addBlogs',
    initialState,
    reducers:{
        addBlog: (state , {payload}) => {
            if(state.blogs.length === 0 ){
            state.blogs.push( {id: 1, status: 'pending',  ...payload});
        }
        else{
           const lastElement =  state.blogs.at(-1)
            state.blogs.push({id: lastElement.id + 1, status: 'pending', ...payload})
        }
    },
       removeBlog: (state , {payload}) => {
       state.blogs = state.blogs.filter(item => item.id !== payload)
       }
}
})

export const {addBlog, removeBlog} = addBlogs.actions;

export default addBlogs.reducer;