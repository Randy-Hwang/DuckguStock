import { createSlice } from "@reduxjs/toolkit";

const stockState = createSlice({
  name: "stockState",
  initialState: [
    {
      ticker: "appl",
      name: "애플 / APPL",
      content: [],
    },
    {
      ticker: "tsla",
      name: "테슬라 / TSLA",
      content: [],
    },
    {
      ticker: "googl",
      name: "구글 / GOOGL",
      content: [],
    },
    {
      ticker: "nvda",
      name: "엔비디아 / NVDA",
      content: [],
    },
    {
      ticker: "msft",
      name: "마이크로소프트 / MSFT",
      content: [],
    },
    {
      ticker: "jnj",
      name: "존슨앤존슨 / JNJ",
      content: [],
    },
    {
      ticker: "o",
      name: "리얼티인컴 / O",
      content: [],
    },
    {
      ticker: "samsung",
      name: "삼성전자",
      content: [],
    },
    {
      ticker: "naver",
      name: "NAVER",
      content: [],
    },
  ],
  reducers: {
    addContent(state, idx) {},
  },
});

export const { addContent } = stockState.actions;
export default stockState;
