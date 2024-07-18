type PropsType = {
  cancleHandler: () => void;
  saveHandler: () => void;
};
const JobReviewModalButtons = ({ cancleHandler, saveHandler }: PropsType) => {
  return (
    <div className="w-full flex items-center justify-end ">
      <button
        className="btn bg-transparent hover:bg-transparent text-[#005AFF]"
        onClick={cancleHandler}
      >
        Back
      </button>
      <button className="btn primary-btn" onClick={saveHandler}>
        Save
      </button>
    </div>
  );
};

export default JobReviewModalButtons;
