export type JobScale = {
  type: "LARGE" | "MEDIUM" | "SMALL";
  label: string;
  des: string;
};
export const jobScale: JobScale[] = [
  {
    type: "LARGE",
    label: "Large",
    des: "Longer term or complex initiatives (ex. design and build a full website)",
  },
  {
    type: "MEDIUM",
    label: "Medium",
    des: "Well-defined projects (ex. a landing page)",
  },
  {
    type: "SMALL",
    label: "Small",
    des: "Quick and straightforward tasks (ex. update text and images on a webpage)",
  },
];

export type JobDuration = {
  type: "LONG" | "MEDIUM" | "SHORT";
  label: string;
};

export const jobDuration: JobDuration[] = [
  {
    type: "LONG",
    label: "3 to 6 months",
  },
  {
    type: "MEDIUM",
    label: "1 to 3 months",
  },
  {
    type: "SHORT",
    label: "Less than 1 month",
  },
];

export type JobExperience = {
  type: "ENTRY" | "INTERMEDIATE" | "EXPERT";
  label: string;
  des: string;
};

export const jobExperience: JobExperience[] = [
  {
    type: "ENTRY",
    label: "Entry",
    des: "Looking for someone relatively new to this field",
  },
  {
    type: "INTERMEDIATE",
    label: "Intermediate",
    des: "Looking for someone relatively new to this field",
  },
  {
    type: "EXPERT",
    label: "Expert",
    des: "Looking for comprehensive and deep expertise in this field",
  },
];

type WorkingSchedule = {
  type: "FULL_TIME" | "CONTRACTUAL";
  label: string;
};
export const workingSchedule: WorkingSchedule[] = [
  {
    type: "FULL_TIME",
    label:
      "After a trial period, you can pay a one-time fee to convert the contract.",
  },
  { type: "CONTRACTUAL", label: "No, not at this time" },
];

// static data have to change it
export const screeningQuestions: string[] = [
  "Describe your recent experience with similiar projects",
  "Please list any certifications related to this project",
  "Include a link to your GitHub profile and /or website",
  "What freameworks have you worked with?",
  "Describe your approach to testing and improving QA",
];
