"use client";
import { setJobBudget } from "@/redux/features/jobpost/jobPostSlice";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

const HourlyBudgetInputs = () => {
  const dispatch = useDispatch();
  const [from, setFrom] = useState("4.00");
  const [to, setTo] = useState("5.00");

  const handleFromInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    console.log(val);
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;

    const hourlyBudget = `$${val[1]} - $${to}`;
    setFrom(val[1]);
    dispatch(setJobBudget(hourlyBudget));
  };

  const handleToInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value.split("$");
    if (e.target.value !== "$" && isNaN(val[1] - 1)) return;

    const hourlyBudget = `${from} - ${val[1]}`;
    setTo(val[1]);
    dispatch(setJobBudget(hourlyBudget));
  };
  return (
    <>
      <div className="budget-inputs grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
        <div className="left-input w-full">
          <label className="block hourly text-[20px] md:text-2xl tracking-[-0.72px] mb-[14px]">
            From
          </label>
          <div className="input-item flex gap-[10px] items-center">
            <input
              id="milestone-amount-1"
              type="text"
              onChange={handleFromInput}
              aria-describedby="currency-hourly-6"
              placeholder="$0.00"
              value={`$${from}`}
              className="text-[20px] w-full max-w-[140px] tracking-[-0.6px] border border-gray-300 rounded-[6px] p-[10px] focus:outline-none focus:border-[#005AFF] text-end"
            />
            <span className="text-[20px] md:text-2xl tracking-[-0.72px] inline-block">
              / hr
            </span>
          </div>
        </div>
        <div className="right-input w-full">
          <label className="block text-[20px] md:text-2xl tracking-[-0.72px] mb-[14px]">
            To
          </label>
          <div className="input-item flex gap-[10px] items-center">
            <input
              id="milestone-amount-1"
              type="text"
              onChange={handleToInput}
              aria-describedby="currency-hourly-6"
              placeholder="$0.00"
              value={`$${to}`}
              className="text-[20px] max-w-[140px] tracking-[-0.6px] border border-gray-300 rounded-[6px] p-[10px] focus:outline-none focus:border-[#005AFF] text-end"
            />
            <span className="text-[20px] md:text-2xl tracking-[-0.72px]">
              {" "}
              / hr
            </span>
          </div>
        </div>
      </div>
      <p className="text-18 pt-8">
        This is the average rate for similar projects.
      </p>
    </>
  );
};

export default HourlyBudgetInputs;
