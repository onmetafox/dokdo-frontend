import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import errorHanlder from 'src/libs/error-handler';
import { createContact } from "./contactApi";

const initialState = {
    contactdata: null,
    status: 'contact'
}

export const createContactAsync = createAsyncThunk('create/contact', createContact);

export const contactSlice = createSlice({
    name:'contact',
    initialState,
    // extraReducers: builder => {
    //     builder
    //         .addCase(createContactAsync.pending, state => {
    //             state.status = "pending";
    //         })
    //         .addCase(createContactAsync.fullfilled, (state, action) =>{
    //             state.status = action.payload.data.status;
    //             state.contactdata = action.payload.data.data;
    //         })
    // }
})


export const selectContactData = state => state.contact.contactdata;

export default contactSlice.reducer;