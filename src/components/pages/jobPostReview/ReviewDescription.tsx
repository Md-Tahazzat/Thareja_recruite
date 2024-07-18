"use client";
import { setPostReviewActiveEditField } from "@/redux/features/jobpost/JobReviewSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import EditDescriptionField from "./EditDescriptionField";
import EditPenSVG from "./EditPenSVG";
import ReviewPostFieldModal from "./ReviewPostFieldModal";

const ReviewDescription = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.jobReviews.reviewActiveEditField
  );
  const description = useSelector(
    (state: RootState) => state.jobPosting.jobDescription
  );
  return (
    <>
      <div className="px-3 md:px-12 flex items-center justify-between flex-wrap gap-6">
        <div className="text-[18px] flex-1 whitespace-pre-wrap max-w-[80%]">
          {description ? description : "Add description"}
        </div>

        <button
          onClick={() => {
            dispatch(setPostReviewActiveEditField("DESCRIPTION"));
          }}
          className="text-[#005AFF] border border-[#005AFF] rounded-full flex items-center justify-center w-10 h-10"
        >
          <EditPenSVG />
        </button>
      </div>

      {activeModal === "DESCRIPTION" && (
        <ReviewPostFieldModal>
          <EditDescriptionField />
        </ReviewPostFieldModal>
      )}
    </>
  );
};

export default ReviewDescription;
