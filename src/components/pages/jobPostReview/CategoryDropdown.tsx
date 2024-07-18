import DownArrowSVG from "@/components/pages/login/DownArrowSVG";
import { setActiveCategoryDropdown } from "@/redux/features/jobpost/JobReviewSlice";
import { RootState } from "@/redux/store";
import { jobCategoryDropdownData } from "@/staticData/DropDown";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type PropsType = {
  handler: (id: number, category: string) => void;
};

const CategoryDropdown = ({ handler }: PropsType) => {
  const dispatch = useDispatch();
  const prevActiveId = useSelector(
    (state: RootState) => state.jobReviews.activeCategoryID
  );

  // CATEGORY states
  const [activeId, setActiveId] = useState(prevActiveId);

  //   active dropdown content
  const categories = jobCategoryDropdownData;

  const selectedCategory = jobCategoryDropdownData.find(
    (item) => item.id === activeId
  );

  //   active drop down state
  const activeDropDown = useSelector(
    (state: RootState) => state.jobReviews.activeCategoryDropDown
  );

  // condition to expand drop down
  const expand = activeDropDown === "CATEGORY";
  return (
    <div className="relative">
      <div
        onClick={() =>
          dispatch(
            setActiveCategoryDropdown(
              activeDropDown !== "CATEGORY" ? "CATEGORY" : null
            )
          )
        }
        className="cursor-pointer border border-[#0000001a] py-[10px] px-4 rounded-[6px] flex items-center gap-4 justify-between"
      >
        <h4 className="text-base md:text-[18px] leading-normal tracking-[0.36px]">
          {selectedCategory?.label}
        </h4>

        <DownArrowSVG className={`duration-300 ${expand && "rotate-180"}`} />
      </div>
      <ul
        className={`!bg-white w-full max-w-[380px] z-50 absolute top-[115%] left-0 flex flex-col mt-0 h-auto max-h-0 overflow-hidden ${
          expand &&
          "!max-h-[220px] !overflow-auto border border-[#0000001a] pt-[10px] pb-[11px] rounded-[20px] bg-white shadow-select-dropdown"
        }`}
      >
        {categories.map((item) => (
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

export default CategoryDropdown;
