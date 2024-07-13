import { createBrowserRouter } from "react-router-dom";
import Main from '../main/Main'
import UpdateBlog from "../UpdateBlog";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        
    },
    {
        path: "updatepost/:id",
        element: <UpdateBlog/>,
      },
    
])


