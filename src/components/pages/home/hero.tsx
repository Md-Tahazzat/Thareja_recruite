"use client";
import Alert from "@/components/shared/modal/Alert";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HowItWorks from "./HowItWorks";

const Hero = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="flex flex-col gap-7 lg:gap-10  w-full">
      <Image
        alt="home hero"
        src="/home/home-hero.svg"
        width={104}
        height={114.78}
      />

      <div className="w-full">
        <h1 className="mb-5 max-w-[612px] w-full text-[35px] md:text-[45px] lg:text-[55px] 2xl:text-6xl leading-normal tracking-[-1.8px] ">
          Welcome, Dhiraj! Let’s start with your first job post.
        </h1>
        <p className="mb-7 lg:mb-[50px] text-xl leading-normal tracking-[0.4px] max-w-[390px] w-full">
          It’s the fastest way to meet top talent. Get help from AI and be done
          in no time.
        </p>
        <div className="inline-flex flex-col">
          {/* TODO: have make this link component when co-responding pages are available. */}
          <Link
          href={'/get-started-using-ai'}
            // onClick={() => setShowAlert(true)}
            className="text-lg text-white bg-[#005AFF]  rounded-full py-3 px-6 mb-5"
          >
            Get started using AI
          </Link>
          {showAlert && (
            <Alert
              hide={setShowAlert}
              message="This pages are not available yet."
            />
          )}
          <Link
            href="/get-started-without-ai"
            className="inline text-xl  text-[#005AFF] "
          >
            I’ll do it without AI
          </Link>
        </div>
        <HowItWorks />
      </div>
    </div>
  );
};

export default Hero;
