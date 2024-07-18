"use client";
import { setJobBudget } from "@/redux/features/jobpost/jobPostSlice";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

const FixedPriceInfo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;

    const hourlyBudget = `$${val[1]}`;
    setValue(val[1]);
    dispatch(setJobBudget(hourlyBudget));
  };
  return (
    <div className="budget-chart mb-10 lg:mb-0 w-full lg:max-w-[627px] ">
      <p className="text-[22px] mb-[28px] md:mb-[38px] leading-normal">
        Set a price for the project and pay at the end, or you can divide the
        project into milestones and pay as each milestone is completed.
      </p>

      <h4 className="mb-[18px] text-[20px] md:text-[23px] leading-[30px] md:leading-[40px] lg:text-[25px] xl:text-[27px] font-normal tracking-[-0.96px]">
        What is the best cost estimate for your project?
      </h4>
      <p className="text-[22px] mb-[28px] leading-normal">
        You can negotiate this cost and create milestones when you chat with
        your freelancer.
      </p>

      <input
        id="milestone-amount-1"
        type="text"
        onChange={handleInput}
        aria-describedby="currency-hourly-6"
        placeholder="$"
        value={`$${value}`}
        className="text-[20px] block  w-full max-w-[145px] tracking-[-0.6px] border border-gray-300 rounded-[6px] p-[10px] focus:outline-none focus:border-[#005AFF] text-end"
      />

      <Link href="#" className="block text-[20px] text-[#005AFF] pt-[38px]">
        Not ready to set a budget?
      </Link>
    </div>
  );
};

export default FixedPriceInfo;
