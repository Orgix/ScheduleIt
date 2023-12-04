import { createSlice} from '@reduxjs/toolkit'
import { signin, register,signout, } from "../actions/auth";
import { selectClasses } from '@mui/material';


const initialState = {
    token:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials: (state,action) =>{
            const {accessToken } = action.payload
            state.token = accessToken;
        },
        logout:(state,action) =>{
            state.token = null
        }
    },
})
export const {setCredentials, logout} = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state) => state.auth.token