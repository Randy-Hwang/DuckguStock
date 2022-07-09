import { configureStore } from "@reduxjs/toolkit";
import stockState from "./state/stockState";

export default configureStore({
  reducer: {
    stockState: stockState.reducer,
  },
});
