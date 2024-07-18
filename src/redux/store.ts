import { configureStore } from "@reduxjs/toolkit";
import MainHeaderSlice from "./features/hambergerMenuSlice.ts/mainHeaderSlice";
import jobReviewStepsSlice from "./features/jobpost/JobReviewSlice";
import jobPostingSlice from "./features/jobpost/jobPostSlice";
import jobPostingStepsSlice from "./features/jobpost/jobPostSteps";

export const store = configureStore({
  reducer: {
    jobPosting: jobPostingSlice.reducer,
    jobPostingStages: jobPostingStepsSlice.reducer,
    jobReviews: jobReviewStepsSlice.reducer,
    headerMenus: MainHeaderSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
