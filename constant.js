import ezyform from "./public/images/projects/ezyform.png";
import eazydiner from "./public/images/projects/eazydiner.png";
import eazydinerfinance from "./public/images/projects/eazydinerfinance.png";
import robonito from "./public/images/projects/robonito.png";

export const home = {
  text: "Front-End Developer with 2+ years of experience in React.js and Next.js. Skilled in Docker and Husky. I build fast, responsive web apps that turn ideas into seamless user experiences.",
  resume: "Resume",
  contact: "Contact",
  animatedText: "From Vision to UI Code That Performs and Inspires.",
};

export const about = {
  heading: "Biography",
  text1:
    "Hi, I'm Waquar Mahboob, a Front-End Developer with 2+ years of experience building fast, scalable, and modern web applications. I specialize in React.js, Next.js, and TypeScript, with a strong eye for performance optimization and UI/UX excellence.",
  text2:
    "I led the frontend revamp of EazyDiner’s main platform using Next.js, significantly boosting performance, SEO, and user engagement through code-splitting, layout optimization, and server-side rendering. I also independently developed the Finance Platform’s frontend using React 19, TanStack Query, TanStack Table, Shadcn UI, and Tailwind CSS — implementing server-side filtering, sorting, and pagination to handle complex, real-time financial data with precision.",
  text3:
    "Beyond development, I ensured clean code and efficient workflows by setting up commitlint for Conventional Commits, enforcing strict Husky pre-commit checks (format, lint, test, build) using Nx, and containerizing the frontend with Docker within a monorepo setup. My approach blends technical depth with user-first thinking to deliver high-quality, maintainable solutions.",
  experienceText: "years of experience",
  projectstext: "projects completed",
  skillsText: "skills mastered",
  animatedText: "Code. Optimize. Deliver — With Precision and Purpose.",
};

export const skills = {
  heading: "Skills",
  sun: "Web",
  planets: [
    { name: "Docker", x: "-20vw", y: "2vw" },
    { name: "Husky", x: "-5vw", y: "-10vw" },
    { name: "Git", x: "15vw", y: "0vw" },
    { name: "Javascript", x: "20vw", y: "6vw" },
    { name: "React JS", x: "0vw", y: "12vw" },
    { name: "TypeScript", x: "15vw", y: "-12vw" },
    { name: "Next JS", x: "-20vw", y: "-15vw" },
    { name: "Jest & RTL", x: "0vw", y: "-20vw" },
    { name: "React Query (TanStack Query)", x: "32vw", y: "-5vw" },
    { name: "TanStack Table", x: "-32vw", y: "-5vw" },
    { name: "Zustand", x: "-25vw", y: "18vw" },
    { name: "Tailwind CSS", x: "18vw", y: "18vw" },
  ],
};

export const experience = {
  heading: "Experience",
  data: [
    {
      position: "SOFTWARE DEVELOPMENT ENGINEER",
      company: "EazyDiner Private Limited",
      companyLink: "https://www.eazydiner.com/",
      time: "JANUARY 2023 – Present",
      address: "Gurugram, Haryana UP, India",
      work: "EazyDiner is a restaurant aggregator & table reservation. Involved in the migration of EazyDiner's website to Next.js with a focus on optimizing its performance. Involved in the development of both the website and mobile site (msite) to improve the overall user experience.",
    },
    // {
    //   position: "TECH INTERNSHIP | FRONT-END DEVELOPER",
    //   company: "EazyDiner Private Limited",
    //   companyLink: "https://new-react-test.easydiner.com",
    //   time: "JANUARY 2023 – JULY 2023",
    //   address: "Gurugram, Haryana UP, India",
    //   work: "EazyDiner is a restaurant aggregator & table reservation.My role is to create custom components like accordion, dropdown, and carousel without using any libraries.I created a helper function that detected that we had reached the bottom of the page. We use this function in different components, so when we reach the bottom, we can change the state. ",
    // },
    {
      position: "SOFTWARE DEVELOPMENT ENGINEER",
      company: "SOFYRUS TECHNOLOGIES",
      companyLink: "https://sofyrus.com/",
      time: "FEBRUARY 2020 – SEPTEMBER 2022",
      address: "Aligarh UP, India",
      work: " My role was to map the path of web form fields from the data source. Automate the filling of PDF forms and generate the filled PDF using the PDF-LIB library",
    },
  ],
};

export const education = {
    heading: "Education",
    data: [
        {type:"MASTER IN COMPUTER SCIENCE AND APPLICATION",
        time:"2021-2023",
        place:"ALIGARH MUSLIM UNIVERSITY",
        info:"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."},
      {
        type:"BACHELOR OF SCIENCE IN COMPUTER APPLICATION",
          time:"2018-2021",
          place:"ALIGARH MUSLIM UNIVERSITY",
          info:"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
      },
     
    ],
  };

  export const projects =  {
    animatedText:"Building Real Solutions with Code and Creativity!",
      data:[
          {
              title: "EazyDiner",
              skills: "Next JS",
              summary: "EazyDiner is a restaurant aggregator & table reservation.My role is to create custom components like accordion, dropdown, andcarousel without using any libraries.",
              link: "https://www.eazydiner.com/",
              type: "Featured Project",
              img: {eazydiner},
              github: "https://www.eazydiner.com/"
          },
          {
              title: "Eazydiner Finance Platform",
              link: "#",
              type: "Project",
              img: {eazydinerfinance},
              github: "#"
          },
          {
              title: "ROBONITO",
              link: "https://www.robonito.com/",
              type: "Project",
              img: {robonito},
              github: "https://www.robonito.com/"
          },
          {
            title: "EZYFORMS",
            skills: "Electron JS, RPA, Robot Framework",
            summary: "Automate the filling of web forms and pdf forms from the data source (excel file). My role was to map the path of web form fields from the data source. Automate the filling of PDF forms and generate the filled PDF using the PDFLIB library.",
            link: "https://github.com/aslamsofyrus/ezf.git",
            type: "Featured Project",
            img: {ezyform},
            github: "https://github.com/aslamsofyrus/ezf.git"
        },
          {
              title: "ROBONITO CHROME EXTENSION",
              link: "https://www.robonito.com/",
              type: "Project",
              img: {robonito},
              github: "https://www.robonito.com/"
          }
          
         
      ]
  
  }