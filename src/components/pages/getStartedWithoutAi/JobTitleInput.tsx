"use client";
import { setJobPostJobTitle } from "@/redux/features/jobpost/jobPostSlice";
import { setJobPostErrors } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import WarningSVG from "../login/WarningSVG";

const JobTitleInput = () => {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.jobPosting.title);
  const error = useSelector(
    (state: RootState) => state.jobPostingStages.errors
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setJobPostJobTitle(e.target.value));
    if (error) {
      dispatch(setJobPostErrors(null));
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Ex: UX/UI Designer"
        className="w-full bg-transparent border border-gray-300 px-4 py-2 rounded-[10px] focus:outline-none focus:border-blue-500"
        onChange={handleInputChange}
        value={title}
      />
      {error?.field === "TITLE" && (
        <p className="text-[#FF0000] flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
          <WarningSVG /> {error.message}
        </p>
      )}
    </>
  );
};

export default JobTitleInput;
