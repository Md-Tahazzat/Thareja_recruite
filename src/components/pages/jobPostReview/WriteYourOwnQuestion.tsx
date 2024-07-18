"use client";
import SquareActiveInactiveCheckboxes from "@/components/shared/checkbox/SquareActiveInactiveCheckboxes";
import { screeningQuestions } from "@/staticData/JobPost";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const WriteYourOwnQuestion = () => {
  // ======= state to mange functionality =======
  const [expand, setExpand] = useState(false);
  const [charLeft, setCharLeft] = useState("50,000");
  const [description, setDescription] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState([""]);

  //   ==== handlers ======
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    let TOTAL_CHAR = 50000;
    let remainingCH = (TOTAL_CHAR - text.length).toString();
    if (remainingCH.length > 3) {
      remainingCH = remainingCH
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    setCharLeft(remainingCH);
    setDescription(text);
  };

  const handleSelect = (item: string) => {
    if (selectedQuestions.indexOf(item) === -1) {
      setSelectedQuestions([...selectedQuestions, item]);
    } else {
      const remainingItems = selectedQuestions.filter(
        (question) => question !== item
      );
      setSelectedQuestions(remainingItems);
    }
  };

  return (
    <div className={`job-scope-dropdown !px-0 !py-0 !border-none `}>
      <button
        onClick={() => setExpand(!expand)}
        className="skillsBtnActive flex items-center gap-4 justify-between text-[#005AFF]"
      >
        <span className="text-2xl">+</span>
        <span className="text-[18px] md:text-[20px]">
          Write your own question
        </span>
      </button>
      <div
        className={` flex flex-col gap-[10px]  mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px]  mt-[18px] rounded-[20px] pt-[14px]"
        }`}
      >
        <div className="flex items-center gap-4">
          <textarea
            onChange={handleInputChange}
            placeholder="Let your coworkers know why you're inviting them?"
            className={`bg-white leading-[25px] text-[18px] w-full border border-[#0000001a] px-6 py-4 rounded-[10px] focus:outline-none focus:border-blue-500`}
            rows={8}
            value={description}
          />
          <Image
            onClick={() => setExpand(false)}
            src="/svgs/dustbin.svg"
            width={24}
            height={28}
            alt="Dustbin icon"
            className=""
          />
        </div>
        <div className="flex justify-between  gap-3 mr-[32px]">
          <button
            className={`btn border border-[#0000001a] !px-6 ${
              description ? "primary-btn" : "disable-btn"
            }`}
            onClick={() => {
              setDescription("");
              setExpand(false);
            }}
          >
            Save Question
          </button>
          <dfn className="not-italic text-end block text-[12px] ">
            {charLeft} characters left
          </dfn>
        </div>
      </div>

      <h3 className="text-[20px] md:text-[22px] my-4">Suggested</h3>
      <ul>
        {screeningQuestions.map((item) => (
          <li key={item} className="flex items-center gap-2 my-2">
            <button onClick={() => handleSelect(item)}>
              <SquareActiveInactiveCheckboxes
                active={selectedQuestions.indexOf(item) !== -1}
              />
            </button>{" "}
            <span className="text-[18px] md:text-[20px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WriteYourOwnQuestion;
