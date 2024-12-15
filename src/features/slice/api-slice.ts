import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://api.themoviedb.org/3", 
    prepareHeaders: (headers) => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2ZjMzc4NjZlNjc0ZTE3ZDJlZTkyNjllMjk3Nzk1NSIsIm5iZiI6MTczMzUxNzYxMS44NSwic3ViIjoiNjc1MzYxMmJiMWVhYTVjODkxZGIwYmE1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4p0kjWVtSWXN-7UR-n_MiqrYJyZOn9-PWYo2WPjwLwQ'; // Replace with a dynamic method for token management
        headers.set('Authorization', `Bearer ${token}`);
        headers.set('accept', 'application/json');
        return headers;
      },
}),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    }),
    getGenreList: builder.query({
      query: () => 'genre/movie/list?language=en'
    }),
    getMovieList: builder.query({
      query: () => '/account/21673961/lists?page=1'
  }),
  createSession: builder.mutation({
    query: (body) => ({
      url: 'account/session/new',
      method: 'POST',
      body,
    })
  })
  }),
});

export const { useGetMoviesQuery,useGetMovieListQuery, useGetGenreListQuery } = apiSlice;