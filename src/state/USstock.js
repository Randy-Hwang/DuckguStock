import { createSlice } from "@reduxjs/toolkit";

const USstock = createSlice({
  name: "USstock",
  initialState: [
    {
      id: 0,
      name: "appl",
      content: [],
    },
    {
      id: 1,
      name: "tsla",
      content: [],
    },
    {
      id: 2,
      name: "googl",
      content: [],
    },
    {
      id: 3,
      name: "nvda",
      content: [],
    },
    {
      id: 4,
      name: "msft",
      content: [],
    },
    {
      id: 5,
      name: "jnj",
      content: [],
    },
    {
      id: 6,
      name: "o",
      content: [],
    },
  ],
  reducers: {
    addContent(state, idx) {},
  },
});

export const { addContent } = USstock.actions;
export default USstock;
