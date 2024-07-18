"use client";

import { setJobPostRequiredSkills } from "@/redux/features/jobpost/jobPostSlice";
import { setJobPostErrors } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import WarningSVG from "../login/WarningSVG";
import PlusSvg from "./PlusSvg";
import SelectedSkills from "./SelectedSkills";
import StarSvg from "./StarSvg";
import styles from "./getStartedWithoutAi.module.css";

const JobPostRequiredSkills = () => {
  const dispatch = useDispatch();
  const prevSelectedSkills = useSelector(
    (state: RootState) => state.jobPosting.requiredSkills
  );
  const error = useSelector(
    (state: RootState) => state.jobPostingStages.errors
  );

  // TODO: have to add more skills and it should be
  // skills for selected job title
  const skills = [
    "Wireframing",
    "User Experience Design",
    "Web Design",
    "Prototyping",
    "Mockup",
    "User Flow",
    "User Interface Design",
    "Mobile App Design",
    "Interaction Design",
    "Responsive Design",
    "Flinto",
    "Framer",
    "IPhone UI Design",
  ];

  const filteredSkills: string[] = prevSelectedSkills
    ? skills.filter((skill) => prevSelectedSkills.indexOf(skill) === -1)
    : skills;

  const handleAddSkill = (skill: string) => {
    dispatch(setJobPostRequiredSkills([...prevSelectedSkills, skill]));
    dispatch(setJobPostErrors(null));
  };
  return (
    <div className="block max-w-[1302px] mx-auto lg:flex gap-10 justify-between">
      <div className="left-job-content ">
        <div className="w-full lg:w-[120px] flex justify-between pb-4">
          <span className="text-18">2/5</span>
          <p className="text-18">Job post</p>
        </div>
        <h1 className="leading-none text-[35px] md:text-10 tracking-[-1.2px] mb-4 w-full">
          What are the main skills required for your work?
        </h1>
      </div>
      <div className="right-item my-14 w-full lg:w-[694px]">
        {/* Search Bar Section */}
        <div className="search-bar w-full">
          {/* Title above the search bar */}
          <h2 className="text-22 font-normal mb-4">
            Search skills or add your own
          </h2>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full border border-gray-300 px-4 py-2 rounded-[10px] focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Order List Section */}
        <div className="order-list pt-4">
          <h4 className="text-18 flex gap-2">
            <StarSvg /> For the best results, add 3-5 skills
          </h4>
          <SelectedSkills />
          {
            // Render error if no skill selected
            error?.field === "SKILLS" && (
              <p className="text-[#FF0000] flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
                <WarningSVG />
                {error.message}
              </p>
            )
          }

          <p className="text-xl pt-[24px] md:pt-[34px]">
            Popular skills for UX/UI Design
          </p>
          <div className="btn-item flex gap-[12px] pt-5 flex-wrap">
            {filteredSkills.map((skill) => (
              <button
                onClick={() => handleAddSkill(skill)}
                key={skill}
                className={`${styles.skillsBtn} hover:border-[#005AFF]`}
              >
                <span>{skill}</span>
                <PlusSvg />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostRequiredSkills;
