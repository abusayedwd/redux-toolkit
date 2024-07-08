import { baseApi } from "../app/baseApi";


const getPhotosApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getPhotos:builder.query({
            query:()=>`/photos`,
        })
    })
})

export const {useGetPhotosQuery} = getPhotosApi;


 
  