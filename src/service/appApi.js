import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
      
  

};

const appApi = createSlice({
  name: "baskit",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addToBasket } = appApi.actions;
export default appApi.reducer;
