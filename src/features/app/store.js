import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './baseApi'
import addBlogSlice from '../addBlogSlice/addBlogSlice'
import countersSlice from '../counters/countersSlice'

// import loginSlice from './apiSlices/authentication/loginSlice'


export const store = configureStore({
  reducer: {
    counters : countersSlice,
    blogsSlice: addBlogSlice,
    [baseApi.reducerPath]:baseApi.reducer,

  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(baseApi.middleware)
  }
})


// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { postsApi } from '../apiGet/getPostApi';
 
 

// export const store = configureStore({
//   reducer: {
//     counters : countersSlice,
//     [postsApi.reducerPath]: postsApi.reducer,
   
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(postsApi.middleware),
  
// });



