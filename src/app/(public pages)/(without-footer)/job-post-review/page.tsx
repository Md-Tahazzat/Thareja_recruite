import AdvancedPreferences from "@/components/pages/jobPostReview/AdvancedPreferences";
import ContactToHireOpportunity from "@/components/pages/jobPostReview/ContactToHireOpportunity";
import InviteTalent from "@/components/pages/jobPostReview/InviteTalent";
import JobPostPreferences from "@/components/pages/jobPostReview/JobPostPreferences";
import ReviewBudget from "@/components/pages/jobPostReview/ReviewBudget";
import ReviewDescription from "@/components/pages/jobPostReview/ReviewDescription";
import ReviewJobCategory from "@/components/pages/jobPostReview/ReviewJobCategory";
import ReviewJobLocation from "@/components/pages/jobPostReview/ReviewJobLocation";
import ReviewJobRequiredProfessionals from "@/components/pages/jobPostReview/ReviewJobRequiredProfessionals";
import ReviewJobScope from "@/components/pages/jobPostReview/ReviewJobScope";
import ReviewJobSkills from "@/components/pages/jobPostReview/ReviewJobSkills";
import ReviewScreeningQuestions from "@/components/pages/jobPostReview/ReviewScreeningQuestions";
import ReviewTitle from "@/components/pages/jobPostReview/ReviewTitle";
import TopWarning from "@/components/shared/common/topWarning";
import Container from "@/components/shared/wrapper/Container";
import Image from "next/image";
import Link from "next/link";
const JobPostReviewPage = () => {
  return (
    <div className="px-5 md:px-[40px] relative pb-[50px] md:pb-[100px] 2xl:pb-[178px] pt-[130px] lg:pt-[149px]">
      <Container className="mx-auto">
        <TopWarning
          className="pb-[50px] md:pb-[60px] lg:pb-[80px]"
          warning="We’re updated our Terms of Service with changes to our contract initiation fee."
        />

        <Image src="/svgs/logo-line.svg" width={58} height={58} alt="" />

        {/* job post button */}
        <div className="flex items-center justify-between flex-wrap mt-3 gap-5">
          <h1 className="text-[40px] lg:text-[50px] text-6xl tracking-[-1.8px]">
            Congrats, your job is ready to review!
          </h1>
          <button className={`  btn primary-btn`}>Post this Job</button>
        </div>

        {/*  ==========    JOB REVIEW DETAILS STARTS 
                                      ================      */}
        <div className="flex flex-col my-10 py-8 md:py-12  gap-6 md:gap-9   border border-[#00000024] rounded-[20px]">
          <ReviewTitle />
          <hr />

          <ReviewDescription />
          <hr />
          <div className="px-3 md:px-12 flex flex-col gap-6 md:gap-8">
            <ReviewJobCategory />
            <ReviewJobSkills />
            <ReviewJobScope />
            <ReviewJobLocation />
            <ReviewBudget />
            <ReviewJobRequiredProfessionals />
          </div>
          <hr />
          <div className="px-3 md:px-12 flex flex-col gap-6 md:gap-8">
            <ReviewScreeningQuestions />
          </div>
          <hr />
          <div className="px-3 md:px-12 flex flex-col gap-6 md:gap-8">
            <AdvancedPreferences />
          </div>
          <hr />
          <div className="px-3 md:px-12 flex flex-col gap-6 md:gap-8">
            <JobPostPreferences />
          </div>
          <hr />
          <div className="px-3 md:px-12 flex flex-col gap-6 md:gap-8">
            <InviteTalent />
          </div>
          <hr />
          <div className="px-3 md:px-12 flex flex-col gap-6 md:gap-8">
            <ContactToHireOpportunity />
          </div>
          <hr />

          {/* ==========    JOB REVIEW DETAILS ENDS 
                                      ================   
                                      
           ==========    JOB REVIEW  ACCORDIONS START 
                                      ================ */}

          {/* action button */}
          <div className="px-8 md:px-12 flex items-center justify-between gap-6 mt-10">
            <Link
              // onClick={}
              href="/"
              className="text-[#005AFF] text-xl font-light"
            >
              Cancel
            </Link>
            <Link
              href="/save-job-post"
              className={` bg-[#005AFF] text-white text-xl font-light py-2 px-6 rounded-full `}
            >
              Continue
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JobPostReviewPage;
