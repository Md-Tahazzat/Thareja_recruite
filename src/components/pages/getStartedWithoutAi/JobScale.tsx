import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { setJobPostJobScale } from "@/redux/features/jobpost/jobPostSlice";
import {
  setActiveJobScale,
  setActiveJobScope,
} from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { jobScale } from "@/staticData/JobPost";
import { useDispatch, useSelector } from "react-redux";
import ActiveCheckboxSVG from "./ActiveCheckboxSVG";
import InActiveCheckboxSVG from "./InActiveCheckboxSVG";

const JobScale = () => {
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );
  const activeJobScale = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScale
  );
  const matchedJobScale = jobScale.find((item) => item.type === activeJobScale);
  const dispatch = useDispatch();
  const expand = activeDropDown === "JOB_SCALE";
  return (
    <div className={`job-scope-dropdown ${expand && "bg-[#005aff05]"}`}>
      <div
        onClick={() => dispatch(setActiveJobScope(expand ? null : "JOB_SCALE"))}
        className="cursor-pointer flex items-center gap-4 justify-between"
      >
        <div>
          {
            <>
              <h4 className="jobpost-details-label">
                {matchedJobScale?.label}
              </h4>
              <p className="jobpost-details-des">{matchedJobScale?.des}</p>
            </>
          }
        </div>

        <DownArrowSVG className={` ${expand && "rotate-180"}`} />
      </div>
      <div
        className={`flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] pt-[28px]"
        }`}
      >
        {jobScale.map((item) => (
          <div className="flex items-center gap-[10px]" key={item.type}>
            {activeJobScale === item.type ? (
              <button>
                <ActiveCheckboxSVG />
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(setJobPostJobScale(item.label));
                  dispatch(setActiveJobScale(item.type));
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

export default JobScale;
