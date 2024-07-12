import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),// Adjust the base URL to match your API
   tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blogs', 
      providesTags: ["Blogs"]
    }), 
    
    getBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
    }),
    addBlog: builder.mutation({
      query: (newPost) => ({
        url: '/blogs',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags:["Blogs"]
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/blogs/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags:["Blogs"]
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:["Blogs"]
    }),
  }),
});

export const { useGetBlogsQuery , useGetBlogByIdQuery, useAddBlogMutation, useUpdateBlogMutation, useDeleteBlogMutation } = apiSlice;
