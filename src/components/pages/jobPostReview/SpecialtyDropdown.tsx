import DownArrowSVG from "@/components/pages/login/DownArrowSVG";
import { setActiveCategoryDropdown } from "@/redux/features/jobpost/JobReviewSlice";
import { RootState } from "@/redux/store";
import { jobSpecialtyDropDown } from "@/staticData/DropDown";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type PropsType = {
  handler: (id: number, category: string) => void;
};

const SpecialtyDropdown = ({ handler }: PropsType) => {
  const dispatch = useDispatch();
  const prevActiveId = useSelector(
    (state: RootState) => state.jobReviews.activeSpecialtyID
  );

  // Specialty states
  const [activeId, setActiveId] = useState(prevActiveId);

  // Dropdown content
  const specialties = jobSpecialtyDropDown;

  const selectedSpecialty = specialties.find((item) => item.id === activeId);

  //   active drop down state
  const activeDropDown = useSelector(
    (state: RootState) => state.jobReviews.activeCategoryDropDown
  );

  // condition to expand drop down
  const expand = activeDropDown === "SPECIALTY";
  return (
    <div className="relative">
      <div
        onClick={() =>
          dispatch(
            setActiveCategoryDropdown(
              activeDropDown !== "SPECIALTY" ? "SPECIALTY" : null
            )
          )
        }
        className="cursor-pointer border border-[#0000001a] py-[10px] px-4 rounded-[6px] flex items-center gap-4 justify-between"
      >
        <h4 className="text-base md:text-[18px] leading-normal tracking-[0.36px]">
          {selectedSpecialty?.label}
        </h4>

        <DownArrowSVG className={`duration-300 ${expand && "rotate-180"}`} />
      </div>
      <ul
        className={`!bg-white w-full max-w-[380px]  z-50 absolute top-[-230px]  left-0 flex flex-col mt-0 h-auto max-h-0 overflow-hidden ${
          expand &&
          "!max-h-[220px] !overflow-auto pt-[20px] border border-[#0000001a] pb-[11px] rounded-[10px] bg-white shadow-select-dropdown"
        }`}
      >
        {specialties.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setActiveId(item.id);
              handler(item.id, item.label);
            }}
            className={`select-option ${
              activeId === item.id && "!bg-[#005aff] text-white"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialtyDropdown;
