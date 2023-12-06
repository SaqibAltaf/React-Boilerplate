import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  articles: [],
  isFetching: false,
  isError: false
}

const slice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    request(state) {
      state.isFetching = true
    },
    success(state, action) {
      state.isFetching = false
      state.isError = false
      state.articles = action.payload
    },
    failure(state) {
      state.isFetching = false
      state.isError = true
    }
  }
})

export const { reducer } = slice

export const { request, success, failure } = slice.actions
