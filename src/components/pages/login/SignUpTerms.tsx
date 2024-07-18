"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import MessageCheckBox from "./MessageCheckBox";
import TermsCheckBox from "./TermsCheckBox";

type PropsType = {
  agreeTerms: boolean;
  setAgreeTerms: Dispatch<SetStateAction<boolean>>;
};
const SignUpTerms = ({ agreeTerms, setAgreeTerms }: PropsType) => {
  const [sendTipsEmails, setSendTipsEmails] = useState(false);

  const toggleActiveCheckbox = (val: boolean, action: "TERMS" | "MESSAGE") => {
    if (val) {
      action === "MESSAGE" ? setSendTipsEmails(true) : setAgreeTerms(true);
    } else {
      action === "MESSAGE" ? setSendTipsEmails(false) : setAgreeTerms(false);
    }
  };
  return (
    <div className="w-full mb-[30px] md:mb-[40px]">
      <div className="flex items-center gap-[15px] mb-[24px] text-[15px] md:text-[18px] leading-normal tracking-[0.36px]">
        <MessageCheckBox
          checked={sendTipsEmails}
          setSendTipsEmails={setSendTipsEmails}
        />{" "}
        <span
        // className="cursor-pointer"
        // onClick={() => setSendTipsEmails(!sendTipsEmails)}
        >
          Send me emails with tips on how to find talent that fits my needs.
        </span>
      </div>

      <div className="flex items-start justify-start gap-[15px] text-[15px] md:text-[18px] leading-normal tracking-[0.36px]">
        <TermsCheckBox checked={agreeTerms} setAgreeTerms={setAgreeTerms} />{" "}
        <span
        // onClick={() => setAgreeTerms(!agreeTerms)}
        // className="w-auto cursor-pointer"
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

export default SignUpTerms;
