import { resetJobPost } from "@/redux/features/jobpost/jobPostSlice";
import {
  resetActiveState,
  setActiveJobScope,
  setJobPostActiveStage,
  setJobPostErrors,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const PreviousButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // job post stage management variables
  const activeStage = useSelector(
    (state: RootState) => state.jobPostingStages.activeStage
  );
  const handlePrev = () => {
    switch (activeStage) {
      case "DESCRIPTION_COMPONENT":
        dispatch(setJobPostActiveStage("BUDGET_COMPONENT"));
        return;
      case "BUDGET_COMPONENT":
        dispatch(setJobPostActiveStage("WORK_DETAILS_COMPONENT"));
        dispatch(setActiveJobScope(null));
        return;
      case "WORK_DETAILS_COMPONENT":
        dispatch(setJobPostActiveStage("SKILLS_COMPONENT"));
        return;
      case "SKILLS_COMPONENT":
        dispatch(setJobPostActiveStage("TITLE_COMPONENT"));
        return;
      case "TITLE_COMPONENT":
        dispatch(resetJobPost("RESET"));
        dispatch(resetActiveState("RESET"));
        dispatch(setJobPostErrors(null));
        router.push("/");
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
