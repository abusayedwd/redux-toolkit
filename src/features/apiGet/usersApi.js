import { baseApi } from "../app/baseApi"; 

 const getUsersApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getUsers:builder.query({
            query:()=>`/users`,
        })
    })
})

export const {useGetUsersQuery} = getUsersApi;
