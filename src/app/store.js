import { configureStore } from "@reduxjs/toolkit";

// import { setupListeners } from "@reduxjs/toolkit/query";
import appApi from "../service/appApi";
import { ecommerceApi } from "../cart/api";

export const store = configureStore({
  reducer: {
    baskit: appApi,

    api: ecommerceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ecommerceApi.middleware);
  },
});
// 
// setupListeners(store.dispatch);
