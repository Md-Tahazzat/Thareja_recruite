import SquareActiveInactiveCheckboxes from "@/components/shared/checkbox/SquareActiveInactiveCheckboxes";
import { useState } from "react";

const AddCoWorkers = () => {
  // ======= states =========
  const [expand, setExpand] = useState(false);
  const [givePermission, setGivePermission] = useState(false);
  return expand ? (
    <div>
      {/*===== Email field */}
      <div className="w-full mb-5">
        <h4 className="jobpost-details-label">Email addresses</h4>
        <input
          className="w-full outline-none focus:outline-none border border-[#005aff1a] mt-[10px] rounded-[10px] py-[14px] px-6 text-[18px] md:text-[20px]"
          type="text"
          placeholder="Comma - sepreted emails"
        />
      </div>
      {/*===== message field */}
      <div className="w-full mb-5">
        <h4 className="jobpost-details-label">
          Add a personal message (optional)
        </h4>
        <textarea
          className="w-full outline-none focus:outline-none border border-[#005aff1a] mt-[10px] rounded-[10px] py-[14px] px-6 text-[18px] md:text-[20px]"
          placeholder="Let your coworkers know why you're inviting them"
          rows={8}
        ></textarea>
      </div>
      <p className="text-[18px] md:text-[20px] flex items-center gap-[15px]">
        <button onClick={() => setGivePermission(!givePermission)}>
          <SquareActiveInactiveCheckboxes active={givePermission} />
        </button>{" "}
        <span>
          Also allow these coworkers to hire and pay with this account.
        </span>
      </p>
    </div>
  ) : (
    <div>
      <p className="text-[18px] md:text-[20px] mb-[18px]">
        Share with coworkers
      </p>
      <button
        onClick={() => setExpand(!expand)}
        className="skillsBtnActive flex items-center gap-4 justify-between text-[#005AFF]"
      >
        <span className="text-2xl">+</span>
        <span className="text-[20px] tracking-[0.4px]">Add coworkers</span>
      </button>
    </div>
  );
};

export default AddCoWorkers;
