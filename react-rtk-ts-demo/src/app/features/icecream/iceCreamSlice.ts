// const { cakeActions } = require("../cake/cakeSlice");
import { ordered as cakeOrdered } from "../cake/cakeSlice";

// const createSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfIceCreams: number;
};

const initialState: InitialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state, action) => {
  //       state.numOfIceCreams--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIceCreams--;
    });
  },
});

// module.exports = iceCreamSlice.reducer;
export default iceCreamSlice.reducer;
// module.exports.iceCreamActions = iceCreamSlice.actions;
export const { ordered, restocked } = iceCreamSlice.actions;
