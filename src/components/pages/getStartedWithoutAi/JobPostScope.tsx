import JobDuration from "./JobDuration";
import JobExperienceLavel from "./JobExperienceLavel";
import JobScale from "./JobScale";
import JobWorkSchedule from "./JobWorkSchedule";

const JobPostScope = () => {
  return (
    <div className="w-full max-w-[1302px] mx-auto block lg:flex gap-10 justify-between">
      <div className="left-job-content mb-10">
        <div className="w-full lg:w-[120px] flex justify-between pb-4">
          <span className="text-18">3/5</span>
          <p className="text-18">Job post</p>
        </div>
        <h1 className="leading-none text-[35px] md:text-10 tracking-[-1.2px] mb-4 w-full">
          Next, estimate the scope of your work.
        </h1>
        <p className="text-base md:text-18 leading-[25px] tracking-[0.4px]">
          Consider the size of your project and the time it will take.
        </p>
      </div>

      <div className="right-item flex flex-col gap-[28px] w-full lg:w-[600px]">
        <JobScale />
        <JobDuration />
        <JobExperienceLavel />
        <JobWorkSchedule />
      </div>
    </div>
  );
};

export default JobPostScope;
