// @/components/pages/ai/AiPage1.jsx

import JobTitleInput from "./JobTitleInput";

const JobTitle = () => {
  return (
    <div className="w-full max-w-[1302px] mx-auto block lg:flex gap-10 justify-between">
      <div className="left-job-content ">
        <div className="w-full lg:w-[120px] flex justify-between pb-4">
          <span className="text-[18px]">1/5</span>
          <p className="text-[18px]">Job post</p>
        </div>
        <h1 className="leading-none text-[35px] md:text-10 tracking-[-1.2px] mb-4 w-full">
          Let&apos;s start with a strong title.
        </h1>
        <p className="text-base md:text-[18px] leading-[25px] tracking-[0.4px]">
          This helps your job post stand out to the right candidates. It’s the
          first thing they’ll see, so make it count!
        </p>
      </div>

      <div className="right-item w-full lg:w-[600px]">
        {/* Search Bar Section */}
        <div className="search-bar w-full">
          <h2 className="text-22 font-normal mb-4">
            Write a title for your job post
          </h2>
          <JobTitleInput />
        </div>
        {/* Order List Section */}
        <div className="order-list pt-4">
          <h4 className="text-[18px]">Example titles</h4>
          <ul className=" w-full py-4 list-disc px-5">
            <li className="text-[18px]">
              Build responsive WordPress site with booking/payment functionality
            </li>
            <li className="text-[18px]">
              {" "}
              Graphic designer needed to design ad creative for multiple
              campaigns
            </li>
            <li className="text-[18px]">
              {" "}
              Facebook ad specialist needed for product launch
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
