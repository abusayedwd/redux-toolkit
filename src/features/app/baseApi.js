import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com',
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("token")}`,
        },
         
    }),
    tagTypes:[],
    endpoints:()=>({
        // getUser:builder.query({
        //     query:()=>'/users'
        // })
    })
})
