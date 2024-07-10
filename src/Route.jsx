 
import UpdatePost from "./UpdatePost";
import Main from '../src/main/Main'
import { createBrowserRouter } from "react-router-dom";
 

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
          {
              path: '/updatepost',
              element: <UpdatePost></UpdatePost>
          }
      ]
  }
])