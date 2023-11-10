import * as authApi from '../api/authApi'
import { createAsyncThunk} from '@reduxjs/toolkit'

export const register = createAsyncThunk('auth/register', async ({firstName, lastName, password, email, username}) =>{
    try{
        const response = await authApi.signUp({firstName, lastName, email, password, username})
        return response.data
    }
    catch(error){
       throw new Error(error.response.data.message)
    }
})

export const signin = createAsyncThunk('auth/signin', async(formData) =>{
    try{
        const response = await authApi.signIn(formData)
        return response.data
    }
    catch(error){
        throw new Error('Problem with login ')
    }
})

export const signout = createAsyncThunk('auth/singout', async()=>{
    try{
        const response = await authApi.signOut()
        return response.data
    }
    catch(error){
        throw new Error('Problem while logging out')
    }
})

