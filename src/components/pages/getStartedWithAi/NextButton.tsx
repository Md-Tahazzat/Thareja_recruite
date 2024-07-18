"use client";
import Alert from "@/components/shared/modal/Alert";
import {
  setJobPostErrors,
  setWithAiJobPostActiveStage,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// development purpose
// type PropsType = {
//   setShowAlert: Dispatch<SetStateAction<boolean>>;
// };
const NextButtonText = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [show, setShow] = useState(false);

  // job post details variables
  const projectType = useSelector(
    (state: RootState) => state.jobPosting.projectType
  );
  const jobBudget = useSelector(
    (state: RootState) => state.jobPosting.jobBudget
  );
  const jobDescription = useSelector(
    (state: RootState) => state.jobPosting.jobDescription
  );

  // job post stage management variables
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.withAiActiveStage
  );

  const handleNext = () => {
    // VALIDATE DESCRIPTION COMPONENT OF GET STARTED WITH AI AND CHANGE ACTIVE STAGE
    if (activeStage === "DESCRIPTION" && !jobDescription) {
      dispatch(
        setJobPostErrors({
          field: "DESCRIPTION",
          message: "Discription is required!",
        })
      );
      return;
    }

    if (activeStage === "DESCRIPTION" && jobDescription) {
      // currently show alert for development purpose
      dispatch(setWithAiJobPostActiveStage("BUDGET"));
      dispatch(setJobPostErrors(null));
    }

    // VALIDATE BUDGET COMPONENT OF GET STARTED WITH AI AND CHANGE ACTIVE STAGE
    if (activeStage === "BUDGET") {
      setShow(true);
      router.push("/job-post-review");
    }
  };

  return (
    <>
      <button className="btn primary-btn" onClick={handleNext}>
        Continue
      </button>
      {show && (
        <Alert message="Next page is under development. " hide={setShow} />
      )}
    </>
  );
};

export default NextButtonText;
