import ezyform from "./public/images/projects/ezyform.png";
import toDo from "./public/images/projects/toDo.png";
import eazydiner from "./public/images/projects/eazydiner.png";
import robonito from "./public/images/projects/robonito.png";
import quiz from "./public/images/projects/quiz.png";

export const home = {
  text: "As a skilled front-end developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in React.js and web development.",
  resume: "Resume",
  contact: "Contact",
  animatedText: "Turning Vision Into Reality With Code And Design.",
};

export const about = {
  heading: "Biography",
  text1:
    "Hi, I'm Waquar Mahboob, a web developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 3+ years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.",
  text2:
    "I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.",
  text3:
    "Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.",
  experienceText: "years of experience",
  projectstext: "projects completed",
  skillsText: "skills mastered",
  animatedText: "Passion Fuels Purpose!",
};

export const skills = {
  heading: "Skills",
  sun: "Web",
  planets: [
    { name: "HTML", x: "-20vw", y: "2vw" },
    { name: "CSS", x: "-5vw", y: "-10vw" },
    { name: "Javascript", x: "20vw", y: "6vw" },
    { name: "React JS", x: "0vw", y: "12vw" },
    { name: "Electron JS", x: "15vw", y: "-12vw" },
    { name: "Next JS", x: "-20vw", y: "-15vw" },
    { name: "Node JS", x: "0vw", y: "-20vw" },
    { name: "Nest JS", x: "32vw", y: "-5vw" },
    { name: "Python", x: "-25vw", y: "18vw" },
    { name: "Tailwind CSS", x: "18vw", y: "18vw" },
  ],
};

export const experience = {
  heading: "Experience",
  data: [
    {
      position: "SOFTWARE DEVELOPMENT ENGINEER",
      company: "EazyDiner Private Limited",
      companyLink: "https://new-react-test.easydiner.com",
      time: "JJULY 2023 – Present",
      address: "Gurugram, Haryana UP, India",
      work: "EazyDiner is a restaurant aggregator & table reservation. Involved in the migration of EazyDiner's website to Next.js with a focus on optimizing its performance. Involved in the development of both the website and mobile site (msite) to improve the overall user experience.",
    },
    {
      position: "TECH INTERNSHIP | FRONT-END DEVELOPER",
      company: "EazyDiner Private Limited",
      companyLink: "https://new-react-test.easydiner.com",
      time: "JANUARY 2023 – JULY 2023",
      address: "Gurugram, Haryana UP, India",
      work: "EazyDiner is a restaurant aggregator & table reservation.My role is to create custom components like accordion, dropdown, and carousel without using any libraries.I created a helper function that detected that we had reached the bottom of the page. We use this function in different components, so when we reach the bottom, we can change the state. ",
    },
    {
      position: "PART-TIME |JUNIOR SOFTWARE DEVELOPER",
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
    animatedText:"Imagination Trumps Knowledge!",
      data:[
          {
              title: "EazyDiner",
              skills: "Next JS",
              summary: "EazyDiner is a restaurant aggregator & table reservation.My role is to create custom components like accordion, dropdown, andcarousel without using any libraries.",
              link: "https://eazydiner.vercel.app/",
              type: "Featured Project",
              img: {eazydiner},
              github: "https://eazydiner.vercel.app/"
          },
          {
              title: "ROBONITO",
              link: "https://www.robonito.com/",
              type: "Project",
              img: {robonito},
              github: "https://www.robonito.com/"
          },
          {
              title: "ROBONITO CHROME EXTENSION",
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
              title: "Quiz",
              link: "https://github.com/waquarmahboob4/Quiz_EazyDiner",
              type: "Project",
              img: {quiz},
              github: "https://github.com/waquarmahboob4/Quiz_EazyDiner"
          },
          {
              title: "To-Do",
              link: "https://github.com/waquarmahboob4/to-do_EazyDiner",
              type: "Project",
              img: {toDo},
              github: "https://github.com/waquarmahboob4/to-do_EazyDiner"
          }
      ]
  
  }