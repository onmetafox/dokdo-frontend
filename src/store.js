import  { configureStore } from '@reduxjs/toolkit';
import contactReducer from './features/contact/contactSlice';

const store = configureStore({
    reducer:{
        contact: contactReducer
    }
})

export default store;