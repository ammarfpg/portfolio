import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },

  {
    id: "contact",
    title: "Contact",
  },
];
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Finexus Sdn Bhd ( March 2023 - August 2023 )",
    content: `
    Involved in the Retail Payment Platform 2nd Phase and assisted in web service testing for FINEXUS and FINEXUS - MUFG.
    Provided support in fixing communication services for PayNet BPEL and WSDL, and debugged MUFG issues for Recurring Data.
    Implemented change requests for both Creditor and Debtor sides.
    Actively participated in the RENTAS MX Migration and conducted testing for Kuwait Finance House Bank.
  `,
  },
  {
    id: "feature-2",
    icon: star,
    title: "First Pavillion Global ( Oct 2023 - Jan 2023 )",
    content: `
    Full Stack Developer at First Pavillion Global with expertise in Go, ReactJS, and Git.
    Successfully contributed to various projects, including:
    
    - FPG Capital (Back End Developer):
      - Integrated 3rd-party News API.
      - Implemented CRUD APIs for funds and news.

    - PrimaPro CRM (Full Stack Developer):
      - Enhanced back end with Redis cache and action logs.
      - Implemented front-end changes, including new UI elements and features.
      - Intermediate in React concepts and Tailwind CSS.
  `,
  },
];
export const projects = [
  {
    id: 1,
    title: "FACE Children Management System",
    img: star,
    content:
      "Web application Managing all the nursery children information, allowing for preschool teacher to conduct assessment for all the children above 5 years. Mobile application Recording attendance for all the children using the tag on their bag.",
  },
  {
    id: 2,
    title: "Inventory Management System",
    img: star,
    content:
      "System Associated with Universiti Putra Malaysia with Collaboration with industry, Neksom Sdn Bhd in development of an ERP system focusing more on inventory management for their business need. Helps on inventory restock through barcode scan ,inventory quantity tracker alert, product packaging report and inventory inspections",
  },
  {
    id: 3,
    img: send,
    title: "Geo Location Express Api ",
    content:
      "Learn on how to create an api that implement CRUD and also integrate 3rd party api into it ",
  },
];

export const feedback = [
  {
    id: 1,
    content:
      "Web application Managing all the nursery children information, allowing for preschool teacher to conduct assessment for all the children above 5 years. Mobile application Recording attendance for all the children using the tag on their bag.",
    name: "FACE UPM",
    title: "FACE Children Management System",
    img: people01,
    urllink: "https://github.com/ammarzaqwan/FACE",
  },
  {
    id: 2,
    content:
      "System Associated with Universiti Putra Malaysia with Collaboration with industry, Neksom Sdn Bhd in development of an ERP system focusing more on warehouse management for their business need. Helps on inventory restock through barcode scan ,inventory quantity tracker alert, product packaging report and inventory inspections",
    name: "NekSom Sdn Bhd",
    title: "Inventory Management System",
    img: people02,
    urllink: "https://github.com/ammarzaqwan/ftrsb_mobile",
  },
  {
    id: 3,
    content:
      "Learn on how to create an api that implement CRUD and also integrate 3rd party api into it. Use Express JS  ",
    name: "Self Project",
    title: "Geo Location Express Api ",
    img: people03,
    urllink: "https://github.com/ammarzaqwan/GeoExpressApi",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
