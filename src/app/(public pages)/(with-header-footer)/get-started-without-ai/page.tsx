"use client";
// @/components/pages/ai/AiPage1.jsx

import JobPostDescription from "@/components/pages/getStartedWithoutAi/JobPostDescription";
import JobPostRequiredSkills from "@/components/pages/getStartedWithoutAi/JobPostRequiredSkills";
import JobPostScope from "@/components/pages/getStartedWithoutAi/JobPostScope";
import JobPostWithoutAiJobBudget from "@/components/pages/getStartedWithoutAi/JobPostWithoutAiJobBudget";
import JobTitle from "@/components/pages/getStartedWithoutAi/JobTitle";
import NextButtonText from "@/components/pages/getStartedWithoutAi/NextButton";
import PreviousButton from "@/components/pages/getStartedWithoutAi/PreviousButton";
import TopWarning from "@/components/shared/common/topWarning"; // Assuming correct import path
import Container from "@/components/shared/wrapper/Container";
import { resetJobPost } from "@/redux/features/jobpost/jobPostSlice";
import { resetActiveState } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./custom.css";
// import { RootState } from "@reduxjs/toolkit/query";

const GetStartedWithoutAiPage = () => {
  // job post stage management variables
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.activeStage
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetJobPost("RESET"));
    dispatch(resetActiveState("RESET"));
  }, []);

  // PROGRESS BAR STYLE
  const progressBarStyle =
    activeStage === "TITLE_COMPONENT"
      ? "!w-[20%]"
      : activeStage === "SKILLS_COMPONENT"
      ? "!w-[40%]"
      : activeStage === "WORK_DETAILS_COMPONENT"
      ? "!w-[60%]"
      : activeStage === "BUDGET_COMPONENT"
      ? "!w-[80%]"
      : activeStage === "DESCRIPTION_COMPONENT"
      ? "!w-[100%]"
      : "";

  return (
    <main className="relative w-full h-[100%] pb-[50px] md:pb-[100px] 2xl:pb-[178px] pt-[130px] lg:pt-[149px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]">
      <Container className="w-full ai-page min-h-[100%] mx-auto">
        <TopWarning
          className="pb-[50px] md:pb-[60px] lg:pb-[80px]"
          warning="As part of our continued efforts to remain compliant with tax laws globally, please enter your Tax Identification Number here."
        />
        <div className="w-full pb-[60px]">
          {activeStage === "TITLE_COMPONENT" ? (
            <JobTitle />
          ) : activeStage === "SKILLS_COMPONENT" ? (
            <JobPostRequiredSkills />
          ) : activeStage === "WORK_DETAILS_COMPONENT" ? (
            <JobPostScope />
          ) : activeStage === "BUDGET_COMPONENT" ? (
            <JobPostWithoutAiJobBudget />
          ) : activeStage === "DESCRIPTION_COMPONENT" ? (
            <JobPostDescription />
          ) : (
            <p className="text-center">ERROR: Loading Component</p>
          )}
        </div>
      </Container>
      <div className="progress-bar bg-white fixed bottom-0 left-0 w-full pt-[30px] pb-[30px] md:pb-[40px] 2xl:pb-[62px]">
        <span
          className={` duration-300 progress-bar-active absolute top-0 left-0 h-1 bg-[#005AFF] z-[2] w-[20%] 
         ${progressBarStyle}
        `}
        ></span>
        <span className="progress-bar w-full absolute top-0 left-0 h-1 bg-[#DDE3E7] z-[1]"></span>

        {/* next and prev buttons */}

        <div className=" w-full flex items-center justify-between px-5 md:px-[30px] lg:px-[35px] xl:px-[40px] 2xl:px-[47px]">
          <PreviousButton />
          <NextButtonText />
        </div>
      </div>
    </main>
  );
};

export default GetStartedWithoutAiPage;
