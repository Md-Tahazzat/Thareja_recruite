import XMarkBlack from "@/components/shared/icons/XMarkBlack";
type PropsType = {
  handler: () => void;
  label: string;
};
const JobReviewModalTitle = ({ handler, label }: PropsType) => {
  return (
    <div className="bg-[#005aff08] mb-5 md:mb-[28px] rounded-[12px] py-[10px] px-4 md:px-[18px] w-full flex items-center justify-between">
      <h3 className="text-[22px] md:text-[25px] lg:text-[27px] leading-[30px] md:leading-[40px]">
        {label}
      </h3>
      <button onClick={handler}>
        <XMarkBlack />
      </button>
    </div>
  );
};

export default JobReviewModalTitle;
