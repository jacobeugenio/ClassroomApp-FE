import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import { apiSlice } from "./redux/apiSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, logger),
  devTools: true,
});

export default store;
