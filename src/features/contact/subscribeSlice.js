import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import errorHanlder from 'src/libs/error-handler';
import { createSubscribe } from "./subscribeApi";

const initialState = {
    subscribeData: null,
    status: 'pending',
    msg: ''
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
                if(action.payload.status === "Success"){
                    state.status = action.payload.status;
                    state.subscribedata = action.payload.data;
                    state.msg = "Subscription Successful <br /> You have successfully subscribed to our newsletter. Stay tuned for the updates and news"
                }
                if(action.payload.status==="Failure" && action.payload.errorCode === 29){
                    state.msg = "This email address is already subscribed";
                    state.status = "Failure";
                }
            })
            .addCase(createSubscribeAsync.rejected, (state, action) => {
                state.msg = "Subscription Failed Oops! Something went wrong with your subscription. Please try again later.";
            })
    }
})


export const selectSubscribeData = state => state.subscribe.subscribedata;
export const selectStatus = state => state.subscribe.status;
export const selectMsg = state => state.subscribe.msg;

export default subscribeSlice.reducer;