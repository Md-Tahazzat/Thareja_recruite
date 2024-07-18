"use client";

import UserActiveCheckBox from "@/components/pages/onboarding/UserActiveCheckBox";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type OnboardingUserType = "CLIENT" | "FREELANCER" | null;
const OnboardingPage = () => {
  const [userType, setUserType] = useState<OnboardingUserType>(null);
  useEffect(() => {
    if (userType) {
      localStorage.setItem("userType", userType);
    }
  }, [userType]);
  return (
    <div className="min-w-[100%] min-h-[100%] pt-[50px] md:pt-[60px] xl:pt-[102px] pb-[50px] md:pb-[60px] xl:pb-[102px] px-5 md:px-[40px]">
      <div className="flex flex-col gap-6 md:gap-[30px] xl:gap-[48px] h-auto w-full  max-w-[950px] rounded-[20px] mx-auto border border-[#DDE3E7] px-[30px] py-[26px] md:px-[44px] md:py-[36px] xl:px-[64px] xl:py-[52px]">
        <h2 className="text-center text-[22px] md:text-[28px] lg:text-[30px] xl:text-[40px] lg:tracking-[-1.2px]">
          Join as a client or freelancer
        </h2>

        {/* card component */}
        <div className="w-full md:flex md:gap-[30px] xl:gap-[50px]">
          <div
            onClick={() => setUserType("CLIENT")}
            className="gradient-border mb-[30px] md:mb-0 cursor-pointer w-full md:w-3/6 p-0.5 rounded-[20px] h-auto"
          >
            <div className="card min-h-full bg-white h-full  rounded-[20px] w-full px-5 md:px-[25px] py-3  xl:px-[50px] md:py-[15px] xl:py-[30px]">
              <div className="logo-container  mb-[15px] xl:mb-[30px] flex items-start justify-between">
                {/* client logo */}
                <Image
                  alt="Client logo"
                  src="/svgs/client.svg"
                  width={120}
                  height={120}
                  className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"
                />
                <UserActiveCheckBox
                  target="CLIENT"
                  key={"CLIENT"}
                  userType={userType}
                />
              </div>
              <h3 className="text-[18px] md:text-[26px] lg:text-[30px] xl:text-[32px] font-normal">
                I’m a client, Hiring for a project
              </h3>
            </div>
          </div>
          <div
            onClick={() => setUserType("FREELANCER")}
            className="gradient-border cursor-pointer w-full md:w-3/6 p-0.5 rounded-[20px] h-auto"
          >
            <div className="card min-h-full h-full rounded-[20px] bg-white w-full px-5 py-3  md:px-[25px]  xl:px-[50px] md:py-[15px] xl:py-[30px]">
              <div className="logo-container  mb-[15px] xl:mb-[30px] flex items-start justify-between">
                {/* client logo */}
                <Image
                  alt="Client logo"
                  src="/svgs/freelancher.svg"
                  width={120}
                  height={120}
                  className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"
                />
                <UserActiveCheckBox
                  target="FREELANCER"
                  key={"FREELANCER"}
                  userType={userType}
                />
              </div>
              <h3 className="text-[18px] md:text-[26px] lg:text-[30px] xl:text-[32px] font-normal">
                I’m a freelancer, looking for work
              </h3>
            </div>
          </div>
        </div>

        {/* action buttons */}
        <div className="w-full flex flex-col justify-center items-center">
          <Link
            href="/sign-up"
            className={`duration-300 mb-3 xl:mb-5 px-[25px] py-[8px] md:px-[30px] xl:px-[40px] md:py-3 xl:py-4  rounded-[100px] text-[15px] md:text-[16px] xl:text-[20px] md:leading-[18px]  xl:leading-[25px] 
                ${
                  userType !== null
                    ? "bg-[#005AFF] text-white"
                    : "bg-[#dde3e766] text-[#525966cc] pointer-events-none"
                }
                `}
          >
            Join as a {userType === "FREELANCER" ? "freelancer" : "client"}
          </Link>
          <p className="text-[15px] md:text-[16px] xl:text-[20px] md:leading-[18px]  xl:leading-[25px]">
            Already have an acount?{" "}
            <Link
              href="/sign-in"
              className="underline hover:no-underline text-[#005AFF]"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
