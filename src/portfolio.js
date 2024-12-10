/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

/* A goal driven Frontend Software Developer 🚀 having experience in developing Dynamic Websites for both PC and Mobile views using Bootstrap / Materila UI / SASS / JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks. */
import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Ukonu Lucky Ifeanyichukwu",
  title: "Hi Friends, I'm Lucky",
  subTitle: emoji(
    "I'm a passionate Full-Stack Developer 🚀 with expertise in building dynamic, user-friendly web and mobile apps. I work with React.js / React Native / JavaScript / Node.js / Bootstrap / Material UI / Tailwind CSS / SASS / Docker / CI-CD / Firebase and other modern frameworks to create seamless, responsive experiences for both desktop and mobile platforms."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1Vskj0UFnv7vOXlRTDK0L6LC44GViP8qx/edit",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ukonulucky",
  // linkedin: "https://www.linkedin.com/in/ukonulucky",
  gmail: "ukonulucky@gmail.com",

  stackoverflow: "https://stackoverflow.com/users/ukonulucky",
  instagram: "https://www.instagram.com/ukonulucky/",
  twitter: "https://twitter.com/ukonulucky_",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "A Fullstack Developer Who Delights In  designing And Developing Websites  and mobile application Using Current Tech Technologies.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Building and managing Api, Database management, server and application logic implementation."
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Port Harcourt",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Solid State Physics",
      duration: "January 2019 - October 2021",
    },
    {
      schoolName: "University Of Port Harcourt",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Phyiscs",
      duration: "January 2012 - August 2016",
      desc: "COnfidential",

      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%",
    },
    {
      Stack: "Programming",
      progressPercentage: "85%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack developer",
      company: "CVHUB4AFRICA",
      companylogo: require("./assets/images/CVhUB.jpeg"),
      date: "Febuary 2022 – Present",
      desc: "Building Dynamic and Responsive mobile and Webpages with Cloud Functionality.",
    },
    {
      role: "Frontend Developer",
      company: "Ububua Technologies",
      companylogo: require("./assets/images/cinfores.jpg"),
      date: "August 2021 – Febuary 2022",
      desc: "Building Dynamic and Reponsive Webpages For Clients.",
    },
    {
      role: "Frontend Developer",
      company: "Rivers State ICT Department",
      companylogo: require("./assets/images/techcreek.jpg"),
      date: "March 2021 – July 2021",
      desc: "Building of several dynamic webpages that is fully responsive for both mobile, desktop and PC views using ReactJs.",
    },

    {
      role: "Intern",
      company: "Smart Web",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "Febuary 2020 – January 2021",
      desc: "Bulding A Team of Productive Software Developers.",
      descBullets: ["Building Websites", "Project Cordination", "Coaching"],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ukonulucky", // Change to your github username to view your profile in Contact Section. like drakosi99
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image:
        "https://res.cloudinary.com/dtxai4k4r/image/upload/v1733843151/cubeet_h9caox.png",
      projectName: "Cubeet",
      projectDesc: "Personalise The Journet For every OF Your Website Visitors",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cubeet.io/",
        },
        //  you can add extra buttons here.
      ],
    },
    // {
    //   image: require("./assets/images/shop4me.png"),
    //   projectName: "Shop4me",
    //   projectDesc: "An online shopping mall",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://shop4me.com/"
    //     }
    //   ]
    // },
    {
      image:
        "https://res.cloudinary.com/dtxai4k4r/image/upload/v1733843165/hospyta_hrdrw9.jpg",
      projectName: "Hospyta",
      projectDesc: "A medical site",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hospyta.com/",
        },
      ],
    },
    /* https://play.google.com/store/apps/details?id=com.hospytaproject.hospytadoctorapp&pli=1 */
    {
      image:
        "https://res.cloudinary.com/dtxai4k4r/image/upload/v1733843615/hospytaMobile_hdwedi.webp",
      projectName: "Hospyta Android App",
      projectDesc: "A mobile application for hospyta",
      footerLink: [
        {
          name: "Visit Mobile",
          url: "https://play.google.com/store/apps/details?id=com.hospytaproject.hospytadoctorapp&pli=1",
        },
      ],
    },
    {
      image:
        "https://res.cloudinary.com/dtxai4k4r/image/upload/v1733843125/quible_t0dh5d.jpg",
      projectName: "Quible For Ecommerce | Logistics",
      projectDesc: "An app for ecomerce and logistics",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://quible.vercel.app/",
        },
      ],
    },
    {
      image: require("./assets/images/estatePic.png"),
      projectName: "www.propertype.ng",
      projectDesc: "A real Esate Mangement Site",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.propertypro.ng",
        },
      ],
    },

    // {
    //   image: require("./assets/images/cam.png"),
    //   projectName: "Loan-app",
    //   projectDesc: "An online Loan app for money lending in Nigeria",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://loan-app-sigma.vercel.app/"
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/hoodie.png"),
      projectName: "Hoodies online Shop",
      projectDesc: "An online Hoodie cloth store",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://online-store-beige.vercel.app/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "FRONTEND ENGINEER",
      description:
        "High proficiency in  JavaScript,Reactjs,Redux, SASS, Bootstrap, Material UI AND HTML5.",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Incase you wish to Discuss a project? Am allways ready.",
  number: "+44-7881168250, +234-7063033152",
  email_address: "ukonulucky@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "ukonulucky", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
