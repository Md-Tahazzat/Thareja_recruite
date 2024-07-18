import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { setJobPostWorkingSchedule } from "@/redux/features/jobpost/jobPostSlice";
import {
  setActiveJobScope,
  setActiveWorkingSchedule,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { workingSchedule } from "@/staticData/JobPost";
import { useDispatch, useSelector } from "react-redux";
import ActiveCheckboxSVG from "./ActiveCheckboxSVG";
import InActiveCheckboxSVG from "./InActiveCheckboxSVG";

const JobWorkSchedule = () => {
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );
  const activeWorkingSchedule = useSelector(
    (state: RootState) => state.jobPostingStages.activeWorkingSchedule
  );
  const dispatch = useDispatch();
  const expand = activeDropDown === "JOB_WORKING_SCHEDULE";
  return (
    <div className={`job-scope-dropdown ${expand && "bg-[#005aff05]"}`}>
      <div
        onClick={() =>
          dispatch(setActiveJobScope(expand ? null : "JOB_WORKING_SCHEDULE"))
        }
        className="cursor-pointer flex items-center gap-4 justify-between"
      >
        {expand ? (
          <>
            <div>
              <h4 className="jobpost-details-label">
                Is this job a contract-to-hire opportunity?
              </h4>
              <p className="jobpost-details-des">
                This helps set expectations with talent and won&apos;t restrict
                who can submit proposals.
              </p>
            </div>
          </>
        ) : (
          <h4 className="jobpost-details-label">
            Contract-to-hire opportunity
          </h4>
        )}

        <DownArrowSVG className={`  ${expand && "rotate-180"}`} />
      </div>
      <div
        className={` flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] pt-[28px]"
        }`}
      >
        {workingSchedule.map((item) => (
          <div className="flex items-center gap-[10px]" key={item.type}>
            {activeWorkingSchedule === item.type ? (
              <button>
                <ActiveCheckboxSVG />
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(setJobPostWorkingSchedule(item.label));
                  dispatch(setActiveWorkingSchedule(item.type));
                }}
              >
                <InActiveCheckboxSVG />
              </button>
            )}
            <h5 className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px]">
              {item.label}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobWorkSchedule;
