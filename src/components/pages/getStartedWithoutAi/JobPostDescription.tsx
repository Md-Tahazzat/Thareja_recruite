import JobDescriptionMessage from "./JobDescriptionMessage";
import JobFileUploadInput from "./JobFileUploadInput";

const JobPostDescription = () => {
  return (
    <div className="w-full max-w-[1302px] mx-auto block lg:flex gap-10 justify-between">
      <div className="left-job-content ">
        <div className="w-full lg:w-[120px] flex justify-between pb-4">
          <span className="text-[18px]">5/5</span>
          <p className="text-[18px]">Job post</p>
        </div>
        <h1 className="leading-none text-[35px] md:text-10 tracking-[-1.2px] mb-5 w-full">
          Start the conversation..
        </h1>
        <p className="text-base md:text-[18px] leading-[25px] tracking-[0.4px] mb-3">
          Talent are looking for:
        </p>

        <ul className="w-full list-disc ml-8 ">
          <li className="text-[18px]">
            Clear expectations about your task or deliverables
          </li>
          <li className="text-[18px]">
            The skills required for your work Good communication
          </li>
          <li className="text-[18px]">
            Details about how you or your team like to work
          </li>
        </ul>
      </div>

      <div className="right-item w-full lg:w-[600px] mt-5 lg:mt-0">
        <JobDescriptionMessage />
        <JobFileUploadInput />
      </div>
    </div>
  );
};

export default JobPostDescription;
