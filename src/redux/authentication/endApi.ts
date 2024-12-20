import { baseApi } from './baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (userInfo) => ({
        url: '/register',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // login route here
    login: build.mutation({
      query: (userInfo) => ({
        url: '/login',
        method: 'POST',
        body: userInfo,
      }),
    }),

    addPost: build.mutation({
      query: (postInfo) => ({
        url: '/post',
        method: 'POST',
        body: postInfo,
      }),
      invalidatesTags: ['todo'],
    }),


    // get all post route here
    getAllpost: build.query({
      query: (priority) => ({
        url: '/post',
        method: 'GET',
        params: { priority: priority },
        timeout: 1000
      }),
      providesTags: ['todo'],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useAddPostMutation,
  useGetAllpostQuery,
} = authApi;
