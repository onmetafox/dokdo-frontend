import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import errorHanlder from 'src/libs/error-handler';
import { createSubscribe } from "./subscribeApi";

const initialState = {
    subscribeData: null,
    status: 'subscribe'
}

export const createSubscribeAsync = createAsyncThunk('create/subscribe', createSubscribe);

export const subscribeSlice = createSlice({
    name:'subscribe',
    initialState, 
    reducers: {
        setData : (state, action) => {
            state.subscribe = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(createSubscribeAsync.pending, state => {
                state.status = "pending";
            })
            .addCase(createSubscribeAsync.fulfilled, (state, action) =>{
                state.status = action.payload.status;
                state.subscribedata = action.payload.data;
            })
    }
})


export const selectSubscribeData = state => state.subscribe.subscribedata;
export const selectStatus = state => state.subscribe.status;

export default subscribeSlice.reducer;