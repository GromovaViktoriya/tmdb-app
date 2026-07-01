import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ['Movie'],
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BASE_URL,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
        })(args, api, extraOptions)

        return result
    },
    endpoints: () => ({}),
})