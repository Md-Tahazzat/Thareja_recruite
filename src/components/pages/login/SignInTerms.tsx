"use client";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import TermsCheckBox from "./TermsCheckBox";

type PropsType = {
  agreeTerms: boolean;
  setAgreeTerms: Dispatch<SetStateAction<boolean>>;
};
const SignInTerms = ({ agreeTerms, setAgreeTerms }: PropsType) => {
  return (
    <div className="w-full mb-[30px] md:mb-[40px]">
      <div className="flex items-start justify-start gap-[15px] text-[15px] md:text-[18px] leading-normal tracking-[0.36px]">
        <TermsCheckBox checked={agreeTerms} setAgreeTerms={setAgreeTerms} />{" "}
        <span
        //   onClick={() => setAgreeTerms(!agreeTerms)}
        //   className="cursor-pointer bg-red-300"
        >
          Yes, Understand and agree to the{" "}
          <Link
            href="/terms-of-service"
            className="underline hover:no-underline text-[#005AFF]"
          >
            Recruit Terms of Service
          </Link>{" "}
          . including the{" "}
          <Link
            href="/user-agreement"
            className="underline hover:no-underline text-[#005AFF]"
          >
            User Agreement
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="underline hover:no-underline text-[#005AFF]"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </div>
    </div>
  );
};

export default SignInTerms;
