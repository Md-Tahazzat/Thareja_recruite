import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { useState } from "react";

const data: string[] = ["No preference", "Independent", "Agency"];
const TalentType = () => {
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState<string | null>("No preference");
  return (
    <div className="w-full max-w-[248px]">
      <h4 className="jobpost-details-label">Talent type</h4>
      <div
        onClick={() => setExpand(!expand)}
        className="bg-white border rounded-[8px] py-2 px-2 border-[#0000001a] cursor-pointer flex items-center gap-4 justify-between"
      >
        {
          <h5 className="text-base w-[80%]">
            {selected ? selected : "Select"}
          </h5>
        }
        <DownArrowSVG
          className={`duration-300 !w-[24px] ${expand && "rotate-180"}`}
        />
      </div>
      <ul
        className={`bg-white rounded-[10px] overflow-hidden border border-[#0000001a]  mt-0 h-auto max-h-0 ${
          expand && "!max-h-[9999px] my-5 shadow"
        }`}
      >
        {data.map((item) => (
          <li
            className={`cursor-pointer py-1.5 px-5 block my-0.5 ${
              selected === item && "bg-[#005AFF] text-white"
            }`}
            onClick={() => setSelected(item)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TalentType;
