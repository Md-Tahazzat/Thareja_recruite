import Image from "next/image";
import Link from "next/link";

type propsType = {
  hideHourlyRateLink?: boolean;
};
const HourlyBudgetGraph = ({ hideHourlyRateLink }: propsType) => {
  return (
    <div className="budget-chart mb-10 lg:mb-0 w-full lg:max-w-[627px] ">
      <p className="text-xl pb-20">
        Professionals tend to charge{" "}
        <span className="text-blue">$8 - $20 </span>/hour (USD) for recruiting &
        talent sourcing projects like yours. Experts may charge higher rates.{" "}
      </p>
      <Image
        className="w-full h-auto"
        src="/svgs/budget-rate-graph.svg"
        width={627}
        height={446}
        alt="Hourly budget graph"
      />
      {!hideHourlyRateLink && (
        <Link href="#" className="text-[20px] text-[#005AFF] pt-[40px] block">
          Not ready to set an hourly rate?
        </Link>
      )}
    </div>
  );
};

export default HourlyBudgetGraph;
