import ezyform from "../../../public/images/projects/ezyform.png";
import toDo from "../../../public/images/projects/toDo.png";
import eazydiner from "../../../public/images/projects/eazydiner.png";
import robonito from "../../../public/images/projects/robonito.png";
import quiz from "../../../public/images/projects/quiz.png";
const ProjectData = () => {
    const data=[
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
    return [data]

}
export default ProjectData