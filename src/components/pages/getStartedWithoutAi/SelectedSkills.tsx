"use client";
import { setJobPostRequiredSkills } from "@/redux/features/jobpost/jobPostSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import XmarkSVG from "./XmarkSVG";
import styles from "./getStartedWithoutAi.module.css";

type PropsType = {
  labelStyle?: string;
  containerStyle?: string;
};
const SelectedSkills = ({ labelStyle, containerStyle }: PropsType) => {
  const dispatch = useDispatch();
  const selectedSkills = useSelector(
    (state: RootState) => state.jobPosting.requiredSkills
  );
  const prevSelectedSkills = useSelector(
    (state: RootState) => state.jobPosting.requiredSkills
  );
  const handleRemove = (skill: string) => {
    dispatch(
      setJobPostRequiredSkills(
        prevSelectedSkills.filter((item) => item !== skill)
      )
    );
  };

  if (!selectedSkills.length) return <></>;
  return (
    <>
      <p className={`text-xl pt-[24px] md:pt-[34px] ${labelStyle}`}>
        Selected skills
      </p>
      <div className="selected-skills flex gap-[12px] pt-[20px] flex-wrap">
        {selectedSkills.map((skill) => (
          <button
            onClick={() => handleRemove(skill)}
            key={skill}
            className={styles.skillsBtnActive}
          >
            <span>{skill}</span>
            <XmarkSVG />
          </button>
        ))}
      </div>
    </>
  );
};

export default SelectedSkills;
