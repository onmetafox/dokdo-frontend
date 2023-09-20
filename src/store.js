import  { configureStore } from '@reduxjs/toolkit';
import contactReducer from './features/contact/contactSlice';
import subscribeSlice from './features/contact/subscribeSlice';

const store = configureStore({
    reducer:{
        contact: contactReducer,
        subscribe: subscribeSlice
    }
})

export default store;