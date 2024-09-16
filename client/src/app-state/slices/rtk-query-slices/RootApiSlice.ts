import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({ 
    baseUrl: 'http://localhost:8080',
})

const rootApiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery,
    endpoints: builder => ({ })
})

export default rootApiSlice