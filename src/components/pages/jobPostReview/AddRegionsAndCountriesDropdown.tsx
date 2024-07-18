import { useState } from "react";
import DownArrowSVG from "../login/DownArrowSVG";

const AddRegionsAndCountriesDropdown = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className={`mb-5 md:mb-[23px] relative`}>
      <div
        onClick={() => setExpand(!expand)}
        className="rounded-[6px] cursor-pointer border border-[#0000001a] flex items-center gap-4 justify-between py-1.5 px-[14px]"
      >
        <h4 className="text-[18px] md:text-[20px] leading-normal font-normal tracking-[0.4px]">
          Add regions and countries
        </h4>

        <DownArrowSVG className={`duration-300 ${expand && "rotate-180"}`} />
      </div>
      <ul
        className={` !bg-white rounded-[6px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand &&
          "!max-h-[250px] overflow-auto py-[10px] mt-2 shadow-select-dropdown absolute border border-[#0000001a] left-0 top-[-260px] w-full"
        }`}
      >
        <li onClick={() => setExpand(false)} className="select-option">
          item-1
        </li>
        <li onClick={() => setExpand(false)} className="select-option">
          item-1
        </li>
        <li onClick={() => setExpand(false)} className="select-option">
          item-1
        </li>
        <li onClick={() => setExpand(false)} className="select-option">
          item-1
        </li>
        <li onClick={() => setExpand(false)} className="select-option">
          item-1
        </li>
        <li onClick={() => setExpand(false)} className="select-option">
          item-2
        </li>
      </ul>
    </div>
  );
};

export default AddRegionsAndCountriesDropdown;
