import { setPostReviewActiveEditField } from "@/redux/features/jobpost/JobReviewSlice";
import { setJobPostJobTitle } from "@/redux/features/jobpost/jobPostSlice";
import { setJobPostErrors } from "@/redux/features/jobpost/jobPostSteps";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WarningSVG from "../login/WarningSVG";
import JobReviewModalButtons from "./JobReviewModalButtons";
import JobReviewModalTitle from "./JobReviewModalTitle";

const EditTitleField = () => {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.jobPosting.title);
  const error = useSelector(
    (state: RootState) => state.jobPostingStages.errors
  );

  const [val, setVal] = useState(title);

  const handleCloseModal = () => {
    dispatch(setPostReviewActiveEditField(null));
  };
  const handleSaveData = () => {
    if (!val) {
      dispatch(
        setJobPostErrors({ field: "TITLE", message: "Title is required" })
      );
      return;
    }

    dispatch(setJobPostJobTitle(val));
    if (error) {
      dispatch(setJobPostErrors(null));
    }
    dispatch(setPostReviewActiveEditField(null));
  };
  return (
    <div className="w-full max-w-[774px] min-h-[250px] h-auto rounded-[20px] md:rounded-[30px] bg-white shadow-md relative p-[20px] md:p-[50px] md:pl-[32px]">
      <JobReviewModalTitle handler={handleCloseModal} label="Edit title" />
      {/* Search Bar Section */}
      <div className="search-bar w-full">
        <h2 className="text-22 font-normal mb-4">
          Write a title for your job post
        </h2>
        <input
          type="text"
          placeholder="Ex: UX/UI Designer"
          className="w-full bg-transparent border border-gray-300 px-4 py-2 rounded-[10px] focus:outline-none focus:border-blue-500"
          onChange={(e) => {
            if (error) {
              dispatch(setJobPostErrors(null));
            }
            setVal(e.target.value);
          }}
          value={val}
        />
        {error?.field === "TITLE" && (
          <p className="text-[#FF0000] flex items-center gap-[6px] mt-[7px] md:mt-[10px]">
            <WarningSVG /> {error.message}
          </p>
        )}
      </div>
      {/* Order List Section */}
      <div className="order-list pt-4 mb-[40px] md:mb-[50px] lg:mb-[60px] 2xl:mb-[72px]">
        <h4 className="text-[18px]">Example titles</h4>
        <ul className=" w-full py-4 list-disc px-5">
          <li className="text-[18px]">
            Build responsive WordPress site with booking/payment functionality
          </li>
          <li className="text-[18px]">
            {" "}
            Graphic designer needed to design ad creative for multiple campaigns
          </li>
          <li className="text-[18px]">
            {" "}
            Facebook ad specialist needed for product launch
          </li>
        </ul>
      </div>

      {/* Save & Cancel button */}
      <JobReviewModalButtons
        key="EDIT_TITLE_FIELD"
        cancleHandler={handleCloseModal}
        saveHandler={handleSaveData}
      />
    </div>
  );
};

export default EditTitleField;
