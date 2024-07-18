type PropsType = {
  className?: string;
};
const InActiveCheckboxSVG = ({ className }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <circle cx="12" cy="12.5" r="10.85" stroke="#005AFF" stroke-width="2.3" />
    </svg>
  );
};

export default InActiveCheckboxSVG;
