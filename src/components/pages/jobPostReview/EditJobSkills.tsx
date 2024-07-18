"use client";
import { setPostReviewActiveEditField } from "@/redux/features/jobpost/JobReviewSlice";
import { setJobPostRequiredSkills } from "@/redux/features/jobpost/jobPostSlice";
import { setJobPostErrors } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlusSvg from "../getStartedWithoutAi/PlusSvg";
import XmarkSVG from "../getStartedWithoutAi/XmarkSVG";
import WarningSVG from "../login/WarningSVG";
import JobReviewModalButtons from "./JobReviewModalButtons";
import JobReviewModalTitle from "./JobReviewModalTitle";
import ReviewIndustrySkills from "./ReviewIndustrySkills";
import ReviewRecruitingAndTalentSourcingSkills from "./ReviewRecruitingAndTalentSourcingSkills";

// TODO: have make this dynamic
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

const EditJobSkills = () => {
  const dispatch = useDispatch();

  // ======= REDUX STATES VALUE
  const prevSelectedJobSkills = useSelector(
    (state: RootState) => state.jobPosting.requiredSkills
  );

  // ===========job posting error
  const error = useSelector(
    (state: RootState) => state.jobPostingStages.errors
  );

  // ========STATES starts========
  const [selectedJobSkills, setSelectedJobSkills] = useState(
    prevSelectedJobSkills
  );

  // ====== filter / short / find / search functionality

  const filteredSkills: string[] = selectedJobSkills.length
    ? skills.filter((skill) => selectedJobSkills.indexOf(skill) === -1)
    : skills;

  // ========STATES ends========

  // =====  handlers =======
  const handleCloseModal = () => {
    dispatch(setPostReviewActiveEditField(null));
  };
  const handleSaveData = () => {
    dispatch(setPostReviewActiveEditField(null));
    dispatch(setJobPostRequiredSkills(selectedJobSkills));
    dispatch(setJobPostErrors(null));
  };

  const handleRemove = (skill: string) => {
    setSelectedJobSkills(selectedJobSkills.filter((item) => item !== skill));
  };

  const handleAddSkill = (skill: string) => {
    setSelectedJobSkills([...selectedJobSkills, skill]);
    // dispatch(setJobPostRequiredSkills([...prevSelectedSkills, skill]));
    // dispatch(setJobPostErrors(null));
  };
  return (
    <div className=" w-full max-w-[776px] max-h-[95%] min-h-[250px] py-[20px] h-full rounded-[20px] md:rounded-[30px] bg-white shadow-md ">
      <div className="overflow-y-auto relative px-[20px] md:px-[50px] md:pl-[32px] md:py-[30px] max-h-[100%] w-full h-full">
        <JobReviewModalTitle handler={handleCloseModal} label="Edit skills" />

        {/* =========skills select container starts 
                                    ===============*/}

        <div className="w-full mb-[40px] md:mb-[50px] lg:mb-[60px] 2xl:mb-[72px]">
          {/* ==========Review required job skills starts*/}
          <div className="w-full">
            <div className="search-bar w-full">
              <h2 className="text-22 font-normal mb-4">
                Search skills or add your own
              </h2>
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent w-full border border-gray-300 px-4 py-2 rounded-[10px] focus:outline-none focus:border-blue-500"
              />
            </div>
            {selectedJobSkills.length ? (
              <>
                <p className={`text-xl pt-[20px] md:pt-[28px] `}>
                  Selected skills
                </p>
                {/* ======= select required job skills skill buttons */}
                <div className="selected-skills flex gap-[12px] pt-[20px] flex-wrap">
                  {selectedJobSkills.map((skill) => (
                    <button
                      onClick={() => handleRemove(skill)}
                      key={skill}
                      className="skillsBtnActive"
                    >
                      <span>{skill}</span>
                      <XmarkSVG />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <></>
            )}
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
            <div className="btn-item flex gap-[12px] pt-5 flex-wrap mb-[28px]">
              {filteredSkills.map((skill) => (
                <button
                  onClick={() => handleAddSkill(skill)}
                  key={skill}
                  className={`skillsBtn hover:border-[#005AFF]`}
                >
                  <span>{skill}</span>
                  <PlusSvg />
                </button>
              ))}
            </div>
          </div>
          {/* ==========Review required job skills ends*/}
          <ReviewIndustrySkills />
          <ReviewRecruitingAndTalentSourcingSkills />
        </div>

        {/* =========skills select container starts 
                                    ===============*/}
        {/* Save & Cancel button */}
        <JobReviewModalButtons
          key="EDIT_SKILLS_FIELD"
          cancleHandler={handleCloseModal}
          saveHandler={handleSaveData}
        />
      </div>
    </div>
  );
};

export default EditJobSkills;
