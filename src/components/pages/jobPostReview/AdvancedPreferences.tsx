"use client";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownArrowSVG from "../login/DownArrowSVG";
import AmountEarned from "./AmountEarned";
import EnglishLevel from "./EnglishLevel";
import HireDate from "./HireDate";
import HoursPerWeek from "./HoursPerWeek";
import Location from "./Location";
import NumberOfProfessionalsNeeded from "./NumberOfProfessionalsNeeded";
import TalentType from "./TalentType";

const AdvancedPreferences = () => {
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
            Advanced preferences (optional)
          </h4>
          <p className="jobpost-details-des">
            Hours per week, hire date, and more
          </p>
        </div>
        <DownArrowSVG className={`duration-300  ${expand && "rotate-180"}`} />
      </div>
      <div
        className={`flex flex-col-reverse gap-5 lg:flex-row 2xl:gap-10 mt-0 h-auto max-h-0 overflow-hidden ${
          expand &&
          "!max-h-[9999px] border border-[#005aff1a] mt-[18px] rounded-[20px] bg-[#005aff05] p-4 md:p-5 2xl:p-[30px]"
        }`}
      >
        <div className="w-full gap-5 2xl:max-w-[927.33px] flex flex-wrap 2xl:flex-row justify-start xl:gap5  2xl:gap-10">
          <EnglishLevel />
          <HireDate />
          <HoursPerWeek />
          <div className="flex 2xl:mt-[-30px] flex-col gap-[18px] w-full lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[465px] ">
            <TalentType />
            <Location />
          </div>
        </div>
        <div className="flex flex-col 2xl:flex-col items-start gap-[22px]  w-full 2xl:max-w-[382px] ml-auto">
          <NumberOfProfessionalsNeeded />
          <AmountEarned />
        </div>
      </div>
    </div>
  );
};

export default AdvancedPreferences;
