import { setJobPostBudgetType } from "@/redux/features/jobpost/jobPostSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import BudgetCheckBox from "./BudgetCheckBox";
import FixedPriceInfo from "./FixedPriceInfo";
import HourlyBudgetGraph from "./HourlyBudgetGraph";
import HourlyBudgetInputs from "./HourlyBudgetInputs";

const JobPostWithoutAiJobBudget = () => {
  const budgetType = useSelector(
    (state: RootState) => state.jobPosting.jobBudgetType
  );
  const dispatch = useDispatch();
  return (
    <div className="w-full max-w-[1487px] mx-auto block ">
      <div className="left-job-content mb-[52px] !w-full">
        <div className="w-full lg:w-[120px] flex justify-between pb-4">
          <span className="text-18">4/5</span>
          <p className="text-18">Job post</p>
        </div>
        <h1 className="leading-none text-[35px] md:text-10 tracking-[-1.2px] mb-4 w-full">
          Tell us your budget or your best guess.
        </h1>
        <p className="text-base md:text-18 leading-[25px] tracking-[0.4px]">
          Consider the size of your project and the time it will take.
        </p>
      </div>

      <div className="pt-[1px] right-item flex flex-col-reverse lg:flex-row lg:gap-[28px] justify-between !w-full">
        <div className="budget-rate w-full lg:max-w-[790px] ">
          <div className="card-container grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[30px] xl:gap-[50px] mb-[34px]">
            {/* Hourly Card */}
            <div
              onClick={() => {
                dispatch(setJobPostBudgetType("HOURLY"));
              }}
              className="flex items-center justify-center gap-[1px] p-[1px] gradient-border cursor-pointer w-full rounded-[20px] h-auto"
            >
              <div className="card min-h-full h-full border border-transparent rounded-[20px] bg-white w-full px-5 py-3  md:px-[25px]  xl:px-[42px] md:py-[15px] xl:py-[29px]">
                <div className="logo-container  mb-[15px] xl:mb-[30px] flex items-start justify-between">
                  {/* client logo */}
                  <Image
                    alt="Client logo"
                    src="/svgs/hourly-clock.svg"
                    width={60}
                    height={60}
                    className="w-[50px] h-[50px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
                  />
                  <BudgetCheckBox key={"HOURLY"} target={"HOURLY"} />
                </div>
                <h3 className="text-[18px] md:text-[26px] lg:text-[30px] xl:text-[32px] font-normal tracking-[-0.96px]">
                  Hourly rate
                </h3>
              </div>
            </div>

            {/* Fixed price */}
            <div
              onClick={() => dispatch(setJobPostBudgetType("FIXED"))}
              className="flex items-center justify-center gap-[1px] p-[1px] gradient-border cursor-pointer w-full rounded-[20px] h-auto"
            >
              <div className="card min-h-full h-full rounded-[20px] bg-white w-full px-5 py-3  md:px-[25px]  xl:px-[42px] md:py-[15px] xl:py-[29px]">
                <div className="logo-container  mb-[15px] xl:mb-[30px] flex items-start justify-between">
                  {/* client logo */}
                  <Image
                    alt="Clock"
                    src="/svgs/fixed-price-token.svg"
                    width={60}
                    height={60}
                    className="w-[50px] h-[50px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
                  />
                  <BudgetCheckBox key={"FIXED"} target={"FIXED"} />
                </div>
                <h3 className="text-[18px] md:text-[26px] lg:text-[30px] xl:text-[32px] font-normal tracking-[-0.96px]">
                  Fixed price
                </h3>
              </div>
            </div>
          </div>
          {budgetType === "HOURLY" && <HourlyBudgetInputs />}
        </div>
        {budgetType === "HOURLY" ? <HourlyBudgetGraph /> : <FixedPriceInfo />}
      </div>
    </div>
  );
};

export default JobPostWithoutAiJobBudget;
