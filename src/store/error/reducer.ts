import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  error: false,
  message: ''
}

const slice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload.error
      state.message = action.payload.message
    },
    resetError: () => initialState
  }
})

export const { reducer } = slice

export const { setError, resetError } = slice.actions
