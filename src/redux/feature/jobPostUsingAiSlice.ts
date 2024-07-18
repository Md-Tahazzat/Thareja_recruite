import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectType: "",
  projectDescription: "",
  projectPriceType: "",
  projectPrice: "",
  currentStep: 0,
};

const jobPostUsingAiSlice = createSlice({
  name: "jobPostUsingAi",
  initialState,
  reducers: {
    projectType: (state, action) => {
      state.projectType = action.payload;
      state.currentStep = 1;
    },
    projectDescription: (state, action) => {
      state.projectDescription = action.payload;
      state.currentStep = 2;
    },
    projectPriceType: (state, action) => {
      state.projectPriceType = action.payload;
      state.currentStep = 3;
    },
    projectPrice: (state, action) => {
      state.projectPrice = action.payload;
      state.currentStep = 4;
    },
  },
});

export const {
  projectType,
  projectDescription,
  projectPriceType,
  projectPrice,
} = jobPostUsingAiSlice.actions;

export default jobPostUsingAiSlice.reducer;
