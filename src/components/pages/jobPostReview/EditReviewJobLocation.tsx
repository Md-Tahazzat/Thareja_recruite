"use client";
import ActiveInActiveCheckboxes from "@/components/shared/checkbox/ActiveInActiveCheckboxes";
import GlobeSVG from "@/components/shared/icons/GlobeSVG";
import LocationSVG from "@/components/shared/icons/LocationSVG";
import XMarkBlack from "@/components/shared/icons/XMarkBlack";
import {
  setActiveJobLocation,
  setPostReviewActiveEditField,
} from "@/redux/features/jobpost/JobReviewSlice";
import { setJobPostJobLocation } from "@/redux/features/jobpost/jobPostSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddRegionsAndCountriesDropdown from "./AddRegionsAndCountriesDropdown";
import JobReviewModalButtons from "./JobReviewModalButtons";

// type starts
type SelectedJobLocation = {
  type: "US_ONLY" | "WORLD_WIDE";
  label: string | null;
};
const EditReviewJobLocation = () => {
  const dispatch = useDispatch();

  const activeJobLocation = useSelector(
    (state: RootState) => state.jobReviews.activeJobLocation
  );

  const [selectedLocation, setSelectedLocation] = useState<SelectedJobLocation>(
    {
      type: activeJobLocation,
      label: null,
    }
  );

  // ======= Handlers ===========
  const handleCloseModal = () => {
    dispatch(setPostReviewActiveEditField(null));
  };
  const handleSaveData = () => {
    if (selectedLocation.label) {
      dispatch(setActiveJobLocation(selectedLocation.type));
      dispatch(setJobPostJobLocation(selectedLocation.label));
    }
    dispatch(setPostReviewActiveEditField(null));
  };
  return (
    <div className=" w-full max-w-[776px] max-h-[95%] min-h-[250px] py-[20px] h-auto rounded-[20px] md:rounded-[30px] bg-white shadow-md ">
      <div className="overflow-y-auto relative px-[20px] md:px-[50px] md:pl-[32px] md:py-[30px] max-h-[100%] w-full h-full">
        <div className="mb-5 md:mb-[28px] rounded-[12px] py-[10px] px-4 md:px-[18px] w-full flex justify-end">
          <button onClick={handleCloseModal}>
            <XMarkBlack />
          </button>
        </div>

        {/* ============LOCATION SELECT CONTAINER STARTS============ */}
        <div className="w-full md:grid md:grid-cols-2 md:gap-[26px] mb-7 lg:mb-10">
          {/* ====== card left ======= */}
          <div
            onClick={() => {
              setSelectedLocation({ type: "US_ONLY", label: "U.S. only" });
            }}
            className="job-review-gradient-container  gradient-border"
          >
            <div className="location-gradient-card ">
              <div className="logo-container  mb-2 flex items-start justify-between">
                <LocationSVG />
                <ActiveInActiveCheckboxes
                  className="!w-[34.45px] !h-[34.45px]"
                  active={selectedLocation.type === "US_ONLY"}
                />
              </div>
              <h3 className="text-[18px] md:text-[26px] lg:text-[30px] xl:text-[32px] mb-5 lg:mb-[24px] font-normal">
                U.S. only
              </h3>
              <p className="text-base md:text-[18px] leading-normal">
                Only talent in the United States can submit proposals
              </p>
            </div>
          </div>

          {/* ====== card right ======= */}
          <div
            onClick={() => {
              setSelectedLocation({ type: "WORLD_WIDE", label: "WorldWide" });
            }}
            className="job-review-gradient-container gradient-border "
          >
            <div className="location-gradient-card">
              <div className="logo-container flex items-start justify-between">
                <GlobeSVG />
                <ActiveInActiveCheckboxes
                  className="!w-[34.45px] !h-[34.45px]"
                  active={selectedLocation.type === "WORLD_WIDE"}
                />
              </div>
              <h3 className="text-[18px] md:text-[26px] lg:text-[30px] xl:text-[32px] mb-5 lg:mb-[24px] font-normal">
                Worldwide
              </h3>
              <p className="text-base md:text-[18px] leading-normal">
                Talent in any location can submit proposals.
              </p>
            </div>
          </div>
        </div>
        {/* ============LOCATION SELECT CONTAINER ENDS============ */}
        <div className="w-full mt-5 md:mt-0">
          <p className="mb-5 m-[1px] md:mb-[23px] text-[18px] md:text-[20px] leading-normal tracking-[0.4px]">
            Region or country preferences (optional)
          </p>
          <AddRegionsAndCountriesDropdown />
          <p className="text-base md:text-[18px] font-light leading-[25px] mb-5 lg:mb-[30px]">
            These location preferences will be displayed to all candidates. but
            anyone can submit proposals.{" "}
          </p>
        </div>
        {/* Save & Cancel button */}
        <JobReviewModalButtons
          key="EDIT_REVIEW_BUDGET"
          cancleHandler={handleCloseModal}
          saveHandler={handleSaveData}
        />
      </div>
    </div>
  );
};

export default EditReviewJobLocation;
