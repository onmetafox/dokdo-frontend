import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createContact } from "./contactApi";

const initialState = {
    contactdata: null,
    status: 'contact',
    msg: ''
}

export const createContactAsync = createAsyncThunk('create/contact', createContact);

export const contactSlice = createSlice({
    name:'contact',
    initialState, 
    reducers: {
        setData : (state, action) => {
            state.contact = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(createContactAsync.pending, state => {
                state.status = "pending";
            })
            .addCase(createContactAsync.fulfilled, (state, action) =>{
                state.status = action.payload.status;
                state.contactdata = action.payload.data;
                state.msg = "We will contat you as soon as possible";
            })
    }
})


export const selectContactData = state => state.contact.contactdata;
export const selectStatus = state => state.contact.status;
export const selectMsg = state => state.contact.msg

export default contactSlice.reducer;