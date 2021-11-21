import { configureStore } from "@reduxjs/toolkit";
/* When you create a slice, import it here */
// import countReducer from '../features/TestCounterSlice.js'
import { setupListeners } from '@reduxjs/toolkit/query'
import appApi from "../service/appApi";


export const store = configureStore({
  reducer: {
    baskit:appApi
       
  
  },
  
});

setupListeners(store.dispatch)
