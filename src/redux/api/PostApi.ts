import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({})
})

