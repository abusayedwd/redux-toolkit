import { createBrowserRouter } from "react-router-dom";
import Main from '../main/Main'
import UpdatePost from "../UpdatePost";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        
    },
    {
        path: "updatepost/:id",
        element: <UpdatePost/>,
      },
    
])


