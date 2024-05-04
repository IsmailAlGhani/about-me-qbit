import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface StudyType {
  nameSchool: string;
  startStudy: number;
  endStudy: number;
}
interface OrganizationType {
  nameOrganization: string;
  organitationPosition: string;
  year: number;
}
interface WorkType {
  companyName: string;
  role: string;
  duration: string;
  descriptions: string[];
}

interface AboutType {
  name: string;
  age: string;
  desc: string;
  address: string;
  study: StudyType[];
  organization: OrganizationType[];
  work: WorkType[];
}

const initialState: AboutType = {
  name: "Ismail Al Ghani",
  age: "27 Years Old",
  desc: "I am a front-end software engineer with 3+ years of experience in engineering roles. Interested inbuilding magical web/mobile experiences that engage users and drive business success.",
  address: "Jakarta Selatan",
  study: [
    {
      nameSchool: "SD Sumbangsih",
      startStudy: 2002,
      endStudy: 2008,
    },
    {
      nameSchool: "SMPN 41 Jakarta",
      startStudy: 2008,
      endStudy: 2011,
    },
    {
      nameSchool: "SMAN 6 Jakarta",
      startStudy: 2011,
      endStudy: 2014,
    },
    {
      nameSchool: "Universitas Indonesia",
      startStudy: 2016,
      endStudy: 2020,
    },
  ],
  organization: [
    {
      nameOrganization: "Forum Ukhuwah & Kajian Islam FASILKOM UI",
      organitationPosition: "Kepala Departemen Sosial & Politik",
      year: 2017,
    },
  ],
  work: [
    {
      companyName: "PT. Astra Graphia Information Technology (AGIT)",
      role: "Frontend Developer",
      duration: "July 2023 - January 2024",
      descriptions: [
        "Developed website for Client AGIT.",
        "Developed CRM web and handled Product, Account, and Rating Billing Invoice modules.",
        "Mentoring Junior Frontend Developer.",
        "Lead squad Product Module.",
        "Tech Stack uses React JS, Redux, Tailwind CSS, Ant Design, and GIT.",
      ],
    },
    {
      companyName: "Sayurbox",
      role: "Software Development Engineer - Frontend",
      duration: "June 2022 - May 2023",
      descriptions: [
        "Developed website and mobile app Sayurbox.",
        "Developed the Refund feature and achieved the goal of simplifying the refund process and adding the optionto refund cash instead of using a voucher for refund compensation.",
        "Developed the Loyalty Tiering feature which aims to increase retention and acquisition of new users withmore benefi ts when reaching a certain tier level.",
        "Developed the push notifi cation push template which has a good impression. The number of clicksincreases 2x when using the push template variant.",
        "Improve the push notifi cation and increase the number of push notifi cations received.",
        "Tech Stack uses React Native, React JS, Redux, GraphQL, Svelte JS, CleverTap, and GIT.",
      ],
    },
    {
      companyName: "Amartha",
      role: "Software Engineer Analyst - Frontend",
      duration: "March 2021 - June 2022",
      descriptions: [
        "Developed website Admin Panel Amartha Plus.",
        "The website functions to control integration with third parties, determine credit limit changes, displaydashboard data from Amartha's business partners, etc.",
        "The website Tech Stack uses React JS, Redux, and GIT.",
      ],
    },
    {
      companyName: "PT. Gema Inovasi Teknologi",
      role: "Frontend Developer",
      duration: "October 2020 - March 2021",
      descriptions: [
        "Developed HRIS website for internal HR who subscribe to my product. The website has a function tomaintain from the recruitment process until payroll. For Tech Stack using Angular.",
        "Developed HRIS mobile app for companies who subscribe to my product. The app has a function to requesttime off, reimbursement, live attendance, etc. For Tech Stack using Ionic 5 and Angular.",
      ],
    },
  ],
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
});

export const selectAbout = (state: RootState) => state.about;

const { reducer } = aboutSlice;
export default reducer;
