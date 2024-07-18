import { resetJobPost } from "@/redux/features/jobpost/jobPostSlice";
import {
  resetActiveState,
  setActiveJobDetailsAccordion,
  setJobPostErrors,
  setWithAiJobPostActiveStage,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const PreviousButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // job post stage management variables
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.withAiActiveStage
  );
  const handlePrev = () => {
    switch (activeStage) {
      case "JOB_DETAILS":
        // have to reset everything
        dispatch(setJobPostErrors(null));
        dispatch(resetJobPost("RESET"));
        dispatch(resetActiveState("RESET"));
        router.push("/");
      case "DESCRIPTION":
        dispatch(setWithAiJobPostActiveStage("JOB_DETAILS"));
        dispatch(setActiveJobDetailsAccordion(null));
        return;
      case "BUDGET":
        dispatch(setWithAiJobPostActiveStage("DESCRIPTION"));
        return;
      default:
        return;
    }
  };
  return (
    <button
      className="btn bg-transparent hover:bg-transparent text-[#005AFF]"
      onClick={handlePrev}
    >
      Back
    </button>
  );
};

export default PreviousButton;
