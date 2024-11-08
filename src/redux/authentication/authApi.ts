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
      invalidatesTags:['todo']
    }),

    getAllpost: build.query({
      query: (priority) => ({
        url: '/post',
        method: 'GET',
        params: {'priority': priority}
      }),
      providesTags:['todo']
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useAddPostMutation,
  useGetAllpostQuery,
} = authApi;
