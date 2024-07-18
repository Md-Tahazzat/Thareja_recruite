"use client";
import {
  setJobPostActiveStage,
  setJobPostErrors,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

// development purpose
// type PropsType = {
//   setShowAlert: Dispatch<SetStateAction<boolean>>;
// };
const NextButtonText = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // job post details variables
  const jobTitle = useSelector((state: RootState) => state.jobPosting.title);
  const jobRequiredSkills = useSelector(
    (state: RootState) => state.jobPosting.requiredSkills
  );
  const jobBudget = useSelector(
    (state: RootState) => state.jobPosting.jobBudget
  );
  const jobDescription = useSelector(
    (state: RootState) => state.jobPosting.jobDescription
  );

  // job post stage management variables
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.activeStage
  );

  const handleNext = () => {
    // VALIDATE TITLE COMPONENT AND CHANGE ACTIVE STAGE
    if (activeStage === "TITLE_COMPONENT" && !jobTitle) {
      dispatch(
        setJobPostErrors({ field: "TITLE", message: "Job title is required" })
      );
      return;
    }

    if (activeStage === "TITLE_COMPONENT" && jobTitle) {
      dispatch(setJobPostActiveStage("SKILLS_COMPONENT"));
      dispatch(setJobPostErrors(null));
    }

    // VALIDATE SKILL COMPONENT AND CHANGE ACTIVE STAGE
    if (activeStage === "SKILLS_COMPONENT" && !jobRequiredSkills.length) {
      dispatch(
        setJobPostErrors({
          field: "SKILLS",
          message: "Please select at least one skill",
        })
      );
      return;
    }

    if (activeStage === "SKILLS_COMPONENT" && jobRequiredSkills.length) {
      // currently show alert for development purpose
      dispatch(setJobPostActiveStage("WORK_DETAILS_COMPONENT"));
      dispatch(setJobPostErrors(null));
    }

    // VALIDATE WORK DETAILS COMPONENT COMPONENT AND CHANGE ACTIVE STAGE
    if (activeStage === "WORK_DETAILS_COMPONENT") {
      dispatch(setJobPostActiveStage("BUDGET_COMPONENT"));
    }

    // VALIDATE BUDGET COMPONENT AND CHANGE ACTIVE STAGE
    // if (activeStage === "BUDGET_COMPONENT" && !jobBudget) {
    //   dispatch(
    //     setJobPostErrors({ field: "BUDGET", message: "Budget is required" })
    //   );
    // }
    // if (activeStage === "BUDGET_COMPONENT" && jobBudget) {
    if (activeStage === "BUDGET_COMPONENT") {
      dispatch(setJobPostActiveStage("DESCRIPTION_COMPONENT"));
      dispatch(setJobPostErrors(null));
    }

    // VALIDATE DESCRIPTION COMPONENT COMPONENT AND CHANGE ACTIVE STAGE
    if (activeStage === "DESCRIPTION_COMPONENT" && !jobDescription) {
      dispatch(
        setJobPostErrors({
          field: "DESCRIPTION",
          message: "Description is required",
        })
      );
    }
    if (activeStage === "DESCRIPTION_COMPONENT" && jobDescription) {
      // it is the last stage so redirect to the review job post page
      router.push("/job-post-review");
    }
  };

  const buttonText =
    activeStage === "TITLE_COMPONENT"
      ? "Next: Skills "
      : activeStage === "SKILLS_COMPONENT"
      ? "Next: Scoop"
      : activeStage === "WORK_DETAILS_COMPONENT"
      ? "Next: Budget"
      : activeStage === "BUDGET_COMPONENT"
      ? "Next: Description"
      : activeStage === "DESCRIPTION_COMPONENT"
      ? "Next: Job Post"
      : "";

  return (
    <button className="btn primary-btn" onClick={handleNext}>
      {buttonText}
    </button>
  );
};

export default NextButtonText;
