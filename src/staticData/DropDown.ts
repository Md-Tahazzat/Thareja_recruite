export type DropDownType = {
  label: string;
  activeIdentity: "JOB" | "REPORT" | "TALENT";
  dropdownItems: {
    label: string;
    href: string;
  }[];
};

// TODO: have to modify this data based on requirements.
export const dropDownMenuData: DropDownType[] = [
  {
    label: "Job",
    activeIdentity: "JOB",
    dropdownItems: [
      {
        label: "Web Design",
        href: "#",
      },
      {
        label: "Web Development",
        href: "#",
      },
      {
        label: "CMS Development",
        href: "#",
      },
    ],
  },
  {
    label: "Talent",
    activeIdentity: "TALENT",
    dropdownItems: [
      {
        label: "Item 1",
        href: "#",
      },
      {
        label: "Item 2",
        href: "#",
      },
      {
        label: "Item 3",
        href: "#",
      },
    ],
  },
  {
    label: "Report",
    activeIdentity: "REPORT",
    dropdownItems: [
      {
        label: "Item 1",
        href: "#",
      },
      {
        label: "Item 2",
        href: "#",
      },
      {
        label: "Item 3",
        href: "#",
      },
    ],
  },
];

export type SearchingDropDown = {
  label: string;
  activeIdentity: "JOB" | "REPORT" | "TALENT";
};

export const searchingDropdownData: SearchingDropDown[] = [
  {
    label: "Talent",
    activeIdentity: "TALENT",
  },
  {
    label: "Report",
    activeIdentity: "REPORT",
  },
  {
    label: "Job",
    activeIdentity: "JOB",
  },
];

export type JobCategoryDropDown = {
  label: string;
  id: number;
};

export const jobCategoryDropdownData: JobCategoryDropDown[] = [
  {
    id: 21,
    label: "Accounting & Consulting",
  },
  {
    id: 22,
    label: "Admin Support",
  },
  {
    id: 23,
    label: "Customer Service",
  },
  {
    id: 24,
    label: "Data Science & Analytics",
  },
  {
    id: 25,
    label: "Design & Creative",
  },
  {
    id: 26,
    label: "Engineering & Architecture",
  },
  {
    id: 27,
    label: "IT & Networking",
  },
  {
    id: 28,
    label: "IT & Networking",
  },
  {
    id: 29,
    label: "Sales & Marketing",
  },

  // More job category goes here.
];

export type JobSpecialtyDropDown = {
  label: string;
  id: number;
};

export const jobSpecialtyDropDown: JobSpecialtyDropDown[] = [
  {
    id: 201,
    label: "Ecommerce Website Development",
  },
  {
    id: 202,
    label: "Ecommerce Website Development",
  },
  {
    id: 203,
    label: "Scripting & Automation",
  },
  {
    id: 204,
    label: "Manual Testing",
  },
  {
    id: 205,
    label: "Automation Testing",
  },
  {
    id: 206,
    label: "AI Chatbot Development",
  },
  {
    id: 207,
    label: "AI Integration",
  },
  {
    id: 208,
    label: "Prototyping selected",
  },
  {
    id: 209,
    label: "Mobile Design",
  },
  {
    id: 210,
    label: "Web Design",
  },
  {
    id: 211,
    label: "UX/UI Design",
  },
  {
    id: 212,
    label: "Mobile App Development",
  },
  {
    id: 213,
    label: "Mobile Game Development",
  },

  // More job category goes here.
];
