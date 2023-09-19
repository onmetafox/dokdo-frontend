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
            })
    }
})


export const selectContactData = state => state.contact.contactdata;
export const selectStatus = state => state.contact.status;

export default contactSlice.reducer;