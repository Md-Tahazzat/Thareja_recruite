const YellowWarningSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M10.9987 20.1698C16.0404 20.1698 20.1654 16.0448 20.1654 11.0031C20.1654 5.96142 16.0404 1.83643 10.9987 1.83643C5.95703 1.83643 1.83203 5.96142 1.83203 11.0031C1.83203 16.0448 5.95703 20.1698 10.9987 20.1698Z"
        stroke="#FFCC48"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 7.33643V11.9198"
        stroke="#FFCC48"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.9941 14.6636H11.0024"
        stroke="#FFCC48"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default YellowWarningSVG;
