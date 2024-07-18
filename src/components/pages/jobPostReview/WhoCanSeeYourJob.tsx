import RoundActiveInactiveCheckbox from "@/components/shared/checkbox/RoundActiveInactiveCheckbox";
import { useState } from "react";
const data: string[] = [
  "Anyone including search engines",
  "Only Recruit users",
  "Invite only",
];

const WhoCanSeeYourJob = () => {
  const [selected, setSelected] = useState<string | null>(null);

  //   Handlers
  const handleSelect = (item: string) => {
    setSelected(item);
  };
  return (
    <div className="w-full md:max-w-[400px] py-4 px-5 2xl:py-[20px] 2xl:px-[28px] bg-white border border-[#005aff1a] rounded-[10px]">
      <h4 className="jobpost-details-label">Who can see your job?</h4>
      <ul>
        {data.map((item) => (
          <li
            onClick={() => handleSelect(item)}
            className=" cursor-pointer flex items-center gap-2 my-2"
            key={item}
          >
            <button>
              <RoundActiveInactiveCheckbox active={item === selected} />
            </button>
            <span className="text-[18px] md:text-[20px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhoCanSeeYourJob;
