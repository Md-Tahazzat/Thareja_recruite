import {
  setActiveRequiredProfessionals,
  setPostReviewActiveEditField,
} from "@/redux/features/jobpost/JobReviewSlice";
import { setRequiredProfessionals } from "@/redux/features/jobpost/jobPostSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import ActiveCheckboxSVG from "../getStartedWithoutAi/ActiveCheckboxSVG";
import InActiveCheckboxSVG from "../getStartedWithoutAi/InActiveCheckboxSVG";
import JobReviewModalButtons from "./JobReviewModalButtons";
import JobReviewModalTitle from "./JobReviewModalTitle";

const EditJobRequiredProfessionals = () => {
  const dispatch = useDispatch();
  const activeRequiredProfessionals = useSelector(
    (state: RootState) => state.jobReviews.activeRequiredProfessionals
  );

  const handleCloseModal = () => {
    dispatch(setPostReviewActiveEditField(null));
  };
  const handleSaveData = () => {
    dispatch(setPostReviewActiveEditField(null));
  };
  return (
    <div className="w-full max-w-[774px] min-h-[250px] h-auto rounded-[20px] md:rounded-[30px] bg-white shadow-md relative p-[20px] md:p-[50px] md:pl-[32px]">
      <JobReviewModalTitle
        handler={handleCloseModal}
        label="Edit number of professionals needed (optional)"
      />

      <div className="w-full">
        <div className="flex items-center gap-[10px] mb-[30px]">
          {activeRequiredProfessionals === "ONE_PERSON" ? (
            <button>
              <ActiveCheckboxSVG />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(setActiveRequiredProfessionals("ONE_PERSON"));
                dispatch(setRequiredProfessionals("One person"));
              }}
            >
              <InActiveCheckboxSVG />
            </button>
          )}
          <h4 className="jobpost-details-label text-[18px] md:text-[20px] tracking-[0.4px] leading-normal">
            One person.
          </h4>
        </div>
        <div className="flex items-center gap-[10px]">
          {activeRequiredProfessionals === "MANY_PERSON" ? (
            <button>
              <ActiveCheckboxSVG />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(setActiveRequiredProfessionals("MANY_PERSON"));
                dispatch(setRequiredProfessionals("More than one person"));
              }}
            >
              <InActiveCheckboxSVG />
            </button>
          )}
          <h4 className="jobpost-details-label text-[18px] md:text-[20px] tracking-[0.4px] leading-normal">
            More than one person
          </h4>
        </div>
      </div>

      {/* Save & Cancel button */}
      <JobReviewModalButtons
        key="EDIT_NUMBER_OF_PROFESSIONALS_FIELD"
        cancleHandler={handleCloseModal}
        saveHandler={handleSaveData}
      />
    </div>
  );
};

export default EditJobRequiredProfessionals;
