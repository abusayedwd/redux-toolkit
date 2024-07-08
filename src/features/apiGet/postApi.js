import { baseApi } from "../app/baseApi";


const postApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({
        getPost: builder.query({
            query: ()=> `/posts`,
        })
    })
})

export const {useGetPostQuery} = postApi;