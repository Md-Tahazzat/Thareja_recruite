import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { setJobPostJobExperienceLevel } from "@/redux/features/jobpost/jobPostSlice";
import {
  setActiveExperienceLavel,
  setActiveJobScope,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { jobExperience } from "@/staticData/JobPost";
import { useDispatch, useSelector } from "react-redux";
import ActiveCheckboxSVG from "./ActiveCheckboxSVG";
import InActiveCheckboxSVG from "./InActiveCheckboxSVG";
const JobExperienceLavel = () => {
  const activeJobExperience = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobExperience
  );
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );

  const filteredItem = jobExperience.find(
    (item) => item.type === activeJobExperience
  );
  const dispatch = useDispatch();
  const expand = activeDropDown === "JOB_EXPERIENCE";
  return (
    <div className={`job-scope-dropdown ${expand && "bg-[#005aff05]"}`}>
      <div
        onClick={() =>
          dispatch(setActiveJobScope(expand ? null : "JOB_EXPERIENCE"))
        }
        className="cursor-pointer flex items-center gap-1 justify-between"
      >
        <div>
          {expand ? (
            <>
              <h4 className="jobpost-details-label">
                What level of experience will it need?
              </h4>
              <p className="jobpost-details-des">
                This won&apos;t restrict any proposals, but helps match
                expertise to your budget.
              </p>
            </>
          ) : (
            <h4 className="jobpost-details-label">{filteredItem?.label}</h4>
          )}
        </div>
        <DownArrowSVG className={` ${expand && "rotate-180"}`} />
      </div>
      <div
        className={`flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] pt-[28px]"
        }`}
      >
        {jobExperience.map((item) => (
          <div className="flex items-center gap-[10px]" key={item.type}>
            {activeJobExperience === item.type ? (
              <button>
                <ActiveCheckboxSVG />
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(setJobPostJobExperienceLevel(item.label));
                  dispatch(setActiveExperienceLavel(item.type));
                }}
              >
                <InActiveCheckboxSVG />
              </button>
            )}
            <div>
              <h4 className="jobpost-details-label">{item.label}</h4>
              <p className="jobpost-details-des">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobExperienceLavel;
