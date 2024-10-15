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
    // {
    //   title: "Magic UI",
    //   iframe:
    //     "https://www.canva.com/design/DAGPxJBwZQg/cmoC2C9Q3n5uwTmuvblttA/view?embed",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
  ],
  certificates: [
    {
      title: "revou",
      description: "desc1",
      img: "/certificates/revouCer.pdf",
      type: "pdf" as "image" | "pdf",
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
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
