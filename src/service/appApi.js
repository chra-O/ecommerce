import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart")) || [],
  user: {
    username: " ",
    email: " ",
    password: "",
  },

  userLogin: {
    useremail: " ",
    userpassword: "",
  },
};

const appApi = createSlice({
  name: "baskit",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let newProducts = [...state.value, action.payload];
      state.value = newProducts;
      localStorage.setItem("cart", JSON.stringify(newProducts));
      console.log(localStorage.getItem("cart"));
    },
    deleteToBasket: (state, action) => {
      state.value.splice(action.payload, 1);
     localStorage.setItem("cart", JSON.stringify(state.value));
    },
    login: (state, action) => {
      state.user.username = action.payload.username;
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
    userlogin:( state , action)=>{
      state.userLogin.useremail = action.payload.email;
      state.userLogin.userpassword = action.payload.password;
      if(state.userLogin.useremail === state.user.email && state.userLogin.userpassword ===state.user.password  ) {
                  
        
      }

    },
  },
});

export const { addToBasket, deleteToBasket, login } = appApi.actions;
export default appApi.reducer;
