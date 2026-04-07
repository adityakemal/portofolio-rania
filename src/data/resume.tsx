import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rania Nisrina Muazis",
  initials: "RNM",
  url: "https://ranianisrina.vercel.app/",
  location: "Bandung",
  locationLink: "https://www.google.com/maps/place/bandung",
  description:
    "I am a data-focused Tax Auditor, currently working toward becoming a professional Data Analyst.",
  summary: `I am passionate about turning complex numbers into meaningful insights. With a background in financial analysis and tax audits, I have gained my technical [skills](/#skills) by joining several [courses](/#certificates) related to data science and completing a data analytics [bootcamp](/#projects). I am a detail-oriented person who enjoys solving problems and finding patterns in data. Currently, I am transitioning into data analysis to continue making an impact through smarter decisions, and I am excited to bring my skills to new challenges.`,
  avatarUrl: "/me.jpeg",
  avatarUrlCartoon: "/ava.jpeg",
  skills: [
    "SQL",
    "Python",
    "Pandas",
    "Microsoft Power BI",
    "Numpy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "Tableau",
    "Statistic",
    "Spreadsheet",
    "Tax",
    "Accounting",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+6282119926262",
    social: {
      // GitHub: {
      //   name: "GitHub",
      //   url: "https://dub.sh/dillion-github",
      //   icon: Icons.github,
      //   navbar: true,
      // },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://linkedin.com/in/rania-nisrina-88883a201",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/6282119926262?text=I'm%20interested%20in%20your%20portofolio%20for%20hiring",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nisrinaraniam@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance-Self Employed",
      href: "",
      badges: [],
      location: "Bandung",
      title: "Data Analyst",
      logoUrl: "",
      start: "Jan 2025",
      end: "Present",
      description: `<li>Analyzed business processes and gathered requirements to optimize workflows and improve efficiency.</li>
<li>Built automated dashboards and reports using Power BI and Tableau for better decision-making.</li>
<li>Performed trend, segmentation, funnel analysis, and forecasting to generate strategic insights.</li>
<li>Developed data models and automation using SQL, Python, and VBA for reporting needs.</li>
<li>Collaborated with stakeholders to define requirements and manage process dependencies.</li>`,
    },
    {
      company: "Directorate General of Taxes",
      href: "https://www.pajak.go.id/",
      badges: [],
      location: "Jambi",
      title: "Tax Auditor",
      logoUrl: "/djp.png",
      start: "Oct 2021",
      end: "Dec 2022",
      description: `<li>Conducted audits and uncovered significant tax discrepancies, improving compliance and recovering tax revenue.</li>
	<li>Delivered comprehensive audit reports with actionable recommendations to enhance tax reporting accuracy.</li>`,
    },
    {
      company: "Directorate General of Taxes",
      href: "https://www.pajak.go.id/",
      badges: [],
      location: "Bandung",
      title: "Secretary",
      logoUrl: "/djp.png",
      start: "Aug 2020",
      end: "Sep 2021",
      description: `<li>Streamlined correspondence and communication processes, enhancing office efficiency.</li>
<li>Assisted in event planning and improved follow-ups on key tasks.</li>`,
    },
    {
      company: "Directorate General of Taxes",
      href: "https://www.pajak.go.id/",
      badges: [],
      location: "Bandung",
      title: "Administration Staff",
      logoUrl: "/djp.png",
      start: "Dec 2017",
      end: "Jul 2020",
      description: `<li>Analyzed and prepared performance reports to aid in decision-making and resource allocation.</li>
<li>Developed taxpayer segmentation reports to optimize audit planning.</li>`,
    },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "RevoU",
      href: "https://revou.co/",
      degree: "Full Stack Data Analyst (Score: 96.97/100.00)",
      logoUrl: "/revou.svg",
      start: "May 2024",
      end: "Sep 2024",
      description: `
      Learned about business understanding, statistics in spreadsheets (including correlation, A/B testing, and linear regression),
customer segmentation (such as RFM and K-Means clustering), dashboards, and data communication.`,
    },
    {
      school: "Politeknik Keuangan Negara STAN",
      href: "https://pknstan.ac.id/",
      degree: "Diploma in Accounting (GPA: 3.60/4.00)",
      logoUrl: "/stan.jpeg",
      start: "Apr 2014",
      end: "Oct 2017",
      description: `
      Data Analyst related subjects: 
      <li>Statistics (A-)</li>
      <li>Computer (A-)</li>
      <li>Accounting Information Systems (A-)</li>
      <li>Financial Auditing (B)</li>
      <li>Computer Assisted Audited (B+)</li>`,
    },
  ],
  projects: [
    {
      title: "Financial Modeling for Aviation Industry",
      href: "",
      iframe: "",
      dates: "",
      active: true,
      description: `Built a scalable financial model for an aviation company using advanced Excel formulas, accommodating diverse revenue and cost components with customized calculation logic. Designed the model to be user-friendly and easily adjustable, enabling clients to update inputs and perform ongoing financial analysis independently, improving long-term usability and decision-making.`,

      technologies: ["Microsoft Excel"],
      links: [],
      image: "/project/model.jpeg",
      video: "",
    },
    {
      title: "Automate Invoice Generation System",
      href: "",
      iframe: "",
      dates: "",
      active: true,
      description: `Built an end-to-end automated cashier and invoicing system using
VBA, enabling seamless transaction input, automatic PDF invoice generation, and real-time database updates.
Integrated dynamic summary dashboards with date-based filtering, allowing quick insights into sales performance. This solution significantly reduced manual processing time and improved reporting accuracy.`,

      technologies: ["Microsoft Excel", "VBA Macro"],
      links: [],
      image: "/project/invoice.jpeg",
      video: "",
    },
    {
      title: "Word to Excel Data Migration Project",
      href: "",
      iframe: "",
      dates: "",
      active: true,
      description: `Developed a VBA-based automation solution to extract and transfer customer data from Word-based forms into a structured Excel system, including both a user input form and a centralized database. The system
allows users to select a Word document, automatically parse relevant fields, and populate Excel with a single action, significantly reducing manual data entry and improving accuracy`,

      technologies: ["Microsoft Excel", "VBA Macro"],
      links: [],
      image: "/project/word.jpeg",
      video: "",
    },
    {
      title: "B2B Marketplace Google Analytics Dashboard",
      href: "",
      iframe:
        "https://www.canva.com/design/DAGZbUvQ3kc/pAJK5Gb8T2mGoQCmFdTtOg/view?embed",
      dates: "",
      active: true,
      description:
        "Built a Power BI dashboard with Google Analytics data. Highlighted peak hours, top products, and funnel performance, recommending strategies to optimize marketing and boost conversions.",

      // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: ["SQL", "Python", "Microsoft Power BI", "Google Collab"],
      links: [
        {
          type: "Google Collab",
          href: "https://colab.research.google.com/drive/1XQ-xoQXxD44ZayJqIvqbq-aMOb5kUB0S?authuser=0#scrollTo=mHdPqViiMmnI",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/b2b.jpeg",
      video: "",
    },
    {
      title: "Credit Application Funnel Analysis",
      href: "",
      iframe:
        "https://www.canva.com/design/DAGXGKpEx9I/XusgIRcixXtcRFw0DUaAVA/view?embed",
      dates: "",
      active: true,
      description:
        "Analyzed fintech credit funnel using BigQuery, SQL, Python, and Tableau. Identified issues in document verification and credit checks, recommending automation and stronger checks to improve conversion rates and revenue. ",

      // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: ["SQL", "Python", "Tableau", "Google Collab"],
      links: [
        {
          type: "Google Collab",
          href: "https://colab.research.google.com/drive/1ZtIi7oVIEbe3fbzeK_X8gRd0mS4c5Rwr#scrollTo=bpRc9r4IK1Ip",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/credit.jpeg",
      video: "",
    },

    {
      title: "Personalized Campaign Strategies Analysis",
      href: "",
      iframe:
        "https://www.canva.com/design/DAGPxJBwZQg/cmoC2C9Q3n5uwTmuvblttA/view?embed",
      dates: "",
      active: true,
      description:
        "I've been assigned to give consideration to campaign strategies to revive sales of a grocery retail company. I decided to use A/B Testing and Customer Segmentation to make personalized campaign strategies. ",

      // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: ["SQL", "Python", "Tableau", "Google Collab"],
      links: [
        {
          type: "Tableau Dashboard",
          href: "https://public.tableau.com/app/profile/rania.nisrina/viz/DEEPPEDA_17251138229630/Dashboard1",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "K-Means Clustering",
          href: "https://colab.research.google.com/drive/1JibGLr_imU15TJM5TJ-4vXI_qxnm7pVr#scrollTo=NBvuRQh5w--b",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "A/B Testing",
          href: "https://colab.research.google.com/drive/1JibGLr_imU15TJM5TJ-4vXI_qxnm7pVr#scrollTo=NBvuRQh5w--b",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/hh.jpeg",
      video: "",
    },
    {
      title: "Sales Performance Dashboard for CEO and the Executives",
      href: "",
      iframe:
        "https://docs.google.com/presentation/d/1fhECnBEU2-rJIWXzgbLY0q12B-uR2IHCy3V2OzGwI4Y/embed?start=false&loop=false&delayms=3000",
      dates: "",
      active: true,
      description:
        "CEO of an e-commerce wants me to give comprehensive insights into sales performance and customer understanding through impactful and detailed visualizations. I used Tableau to create an insightful dashboard crucial tool for guiding strategic decisions and keeping the company on track with business goals.",

      // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: ["Tableau"],
      links: [
        {
          type: "Tableau Dashboard",
          href: "https://public.tableau.com/app/profile/rania.nisrina/viz/IntermediateAssignment_RaniaNisrina/DashboardFIX",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/tableau.jpeg",
      video: "",
    },
    {
      title: "Customer Segmentation Using RFM",
      href: "",
      iframe:
        "https://docs.google.com/presentation/d/1N0wplshwMoT9x655i1yA2WXzT15W75zySCHZvAqbirs/embed?start=false&loop=false&delayms=3000",
      dates: "",
      active: true,
      description:
        "I have a project to analyze clients and sales of a Bank in credit card products. Between RFM Segmentation and K-means Clustering, I prefer using RFM because it could help better to make personal-based marketing to increase sales from existing customers.",

      // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: ["Python", "Google Collab"],
      links: [
        {
          type: "Google Collab",
          href: "https://colab.research.google.com/drive/1Eyftu0u41d9YLxR4TxBWIBGqqVf28Z72?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/rfm.jpeg",
      video: "",
    },
    {
      title: "BCG Matrix and Cohort Analysis",
      href: "",
      iframe:
        "https://docs.google.com/presentation/d/11887hSO0HBLbyXVnBj5D9qINzVhm83yYP7gIvZNJQfM/embed?start=false&loop=false&delayms=3000",
      dates: "",
      active: true,
      description:
        "I've been assigned to do analysis of an e-commerce company with BCG Matrix and cohort for making decisions to cut off resources in some categories with the lowest growth in the past 1 year.",

      // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: ["SQL", "Spreadsheet"],
      links: [
        {
          type: "Spreadsheet",
          href: "https://docs.google.com/spreadsheets/d/1wCBF9LyHtdb3DfwjRGXrnOSvWLVZFk1n4cSmDfE8Do4/edit?gid=642536688#gid=642536688",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/cohort.jpeg",
      video: "",
    },
    {
      title: "EDA and Linear Regression",
      href: "",
      iframe:
        "https://docs.google.com/presentation/d/1bqjwDUQMGjn1hdsRg9DRdCYFAN1Z1IF_a2-Mn0tgU0c/embed?start=false&loop=false&delayms=3000",
      dates: "",
      active: true,
      description:
        "I have used Spreadsheets to do Exploratory Data Analysis with Spreadsheet including Hypothesis Testing and predicting potential yearly spending with Linear Regression",

      // "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: ["Statistics", "Spreadsheet"],
      links: [
        {
          type: "Linear Regression",
          href: "https://docs.google.com/spreadsheets/d/16Y9iAHx_wF5uuszwPYJL0QEJbyQPUgnMZ7H3f1t6V84/edit?gid=639675455#gid=639675455",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Descriptive Analysis",
          href: "https://docs.google.com/spreadsheets/d/160d7Q9lbW5XbE2FXfcbeTQDf7pGDdymyh8xEX8DwfJk/edit?gid=1872736119#gid=1872736119",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/eda.jpeg",
      video: "",
    },
  ],
  certificates: [
    {
      title: "revou",
      description: "desc1",
      img: "/certificates/revouCer.pdf",
      type: "pdf" as "image" | "pdf",
      pdfThumb: "/certificates/revouThumb.png",
    },
    {
      title: "kominfo",
      description: "desc1",
      img: "/certificates/kominfo.jpg",
      type: "image" as "image" | "pdf",
    },
    {
      title: "python",
      description: "desc1",
      img: "/certificates/python.jpg",
      type: "image" as "image" | "pdf",
    },
    {
      title: "fdsfsdf2",
      description: "desc2",
      img: "/certificates/dqlab1.jpg",
      type: "image" as "image" | "pdf",
    },
    {
      title: "fdsfsdf3",
      description: "desc3",
      img: "/certificates/dqlab2.jpg",
      type: "image" as "image" | "pdf",
    },
    {
      title: "fdsfsdf4",
      description: "desc4",
      img: "/certificates/dqlab3.jpg",
      type: "image" as "image" | "pdf",
    },
  ],
} as const;
