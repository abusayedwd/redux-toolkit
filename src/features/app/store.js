// import { configureStore } from '@reduxjs/toolkit'
// import { baseApi } from './baseApi'
// import addBlogSlice from '../addBlogSlice/addBlogSlice'
// import countersSlice from '../counters/countersSlice'

// // import loginSlice from './apiSlices/authentication/loginSlice'


// export const store = configureStore({
//   reducer: {
//     counters : countersSlice,
//     blogsSlice: addBlogSlice,
//     [baseApi.reducerPath]:baseApi.reducer,

//   },
//   middleware:(getDefaultMiddleware)=>{
//     return getDefaultMiddleware().concat(baseApi.middleware)
//   }
// })


import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../counters/apiSlice';
 

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;



 





