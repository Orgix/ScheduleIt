import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import { apiSlice } from '../api/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})