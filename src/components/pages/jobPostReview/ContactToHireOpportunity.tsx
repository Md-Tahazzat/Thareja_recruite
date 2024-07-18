"use client";
import { setJobPostWorkingSchedule } from "@/redux/features/jobpost/jobPostSlice";
import { setActiveWorkingSchedule } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { workingSchedule } from "@/staticData/JobPost";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActiveCheckboxSVG from "../getStartedWithoutAi/ActiveCheckboxSVG";
import InActiveCheckboxSVG from "../getStartedWithoutAi/InActiveCheckboxSVG";
import DownArrowSVG from "../login/DownArrowSVG";

const ContactToHireOpportunity = () => {
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );
  const activeWorkingSchedule = useSelector(
    (state: RootState) => state.jobPostingStages.activeWorkingSchedule
  );
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);

  return (
    <div className={`job-scope-dropdown !px-0 !py-0 !border-none `}>
      <div
        onClick={() => setExpand(!expand)}
        className="cursor-pointer flex items-center gap-4 justify-between"
      >
        <div className="w-[80%]">
          <h4 className="jobpost-details-label">
            Contract-to-hire opportunity (optional)
          </h4>
          <p className="jobpost-details-des">
            Let talent know this job could become a full-time role
          </p>
        </div>
        <DownArrowSVG className={`duration-300  ${expand && "rotate-180"}`} />
      </div>
      <div
        className={` flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand &&
          "!max-h-[9999px] border border-[#005aff1a] mt-[18px] rounded-[20px] bg-[#005aff05] p-4 md:p-5 2xl:p-[30px]"
        }`}
      >
        <div>
          <h4 className="jobpost-details-label">
            Is this job a contract-to-hire opportunity?
          </h4>
          <p className="jobpost-details-des">
            This helps set expectations with talent and won&apos;t restrict who
            can submit proposals.
          </p>
        </div>

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

export default ContactToHireOpportunity;
