import { configureStore } from "@reduxjs/toolkit";
import stockData from "./state/USstock";

export default configureStore({
  reducer: {
    stockData: stockData.reducer,
  },
});
