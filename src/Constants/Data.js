import { linkedin, github, gitlab, cart, imdb, aiweb, html, css, javascript, reactjs, redux, nodejs, mongodb, git, bootstrap, postman, tailwindcss, materialui, location, phone, email, sql, redux_CounterApp, aireusmemail, angular } from "../assets"
export const navLinks = [
    {
        id: "Projects",
        title: "Projects",
    },
    {
        id: "Experience",
        title: "Experience"
    },
    {
        id: "Skills",
        title: "Skills"
    },
    {
        id: "About_Me",
        title: "About Me"
    },
    {
        id: "Resume",
        title: "Download CV"
    },
]
export const MobNavLinks = [
    {
        id: "Projects",
        title: "Projects",
    },
    {
        id: "Experience_",
        title: "Experience"
    },
    {
        id: "Skills",
        title: "Skills"
    },
    {
        id: "About_Me_",
        title: "About Me"
    },
    {
        id: "Resume",
        title: "Download CV"
    },
]

export const socialMedia = [
    {
        id: "linkedin",
        link: "https://www.linkedin.com/in/irkfaisal/",
        icon: linkedin
    },
    {
        id: "github",
        link: "https://github.com/irkfaisal/",
        icon: github
    },
    {
        id: "gitlab",
        link: "https://gitlab.com/irkfaisal/",
        icon: gitlab,
    },
]

export const projects = [
    {
        title: "AI Resume Mailer",
        description: "A web application built to streamline the process of sending personalized resume emails to HR departments or company career mail IDs. Users fill out a form with basic professional details, like job title, experience.Using the ChatGPT API, the app creates a personalized and professional email based on the user’s inputs.The generated email is sent directly to the specified HR email",
        githubLink: "https://github.com/irkfaisal/AIResumeMailer-",
        liveLink: "https://docs.google.com/document/d/1boCr8-ec15o3YXC16mCrKyaxcbRcl7-C7TZfXIS1R-M/edit?tab=t.0",
        image: aireusmemail
    },
    {
        title: "Redux E-com cart",
        description: "A react E-commerce application with add to cart functionality using redux-toolkit. I have used https://dummyjson.com/ to get data of 100+ products of different categories. I am also filtering & searching products on the basis of category and products name ",
        githubLink: "https://github.com/irkfaisal/redux_ecom_cart",
        liveLink: "https://irkfaisal.github.io/redux_ecom_cart/",
        image: cart
    },
    {
        title: "IMDB clone",
        description: "It’s a clone app of IMDB movies website. The website comes with dierent categories of movies like Popular, Upcoming and trendy with dynamic routing, skeleton eect and a carousel at the top of the home page. We can also see the details of each movie on a separate page. I have used the IMDB API for this website",
        githubLink: "https://github.com/irkfaisal/IMDB-Clone-reactjs/",
        liveLink: "https://thismovies.netlify.app/",
        image: imdb
    },
    {
        title: "Landing Page",
        description: "It's a landing page of a website with modern UI design, color, animation and fully responsive turned into code by a figma design. This project is perfect example for React functional components and their reusability, React file and folder structure, Fundamental #CSS properties to master flex & grid.",
        githubLink: "https://github.com/irkfaisal/modernwebsite/",
        liveLink: "https://irkfaisal.github.io/modernwebsite/",
        image: aiweb
    },
    {
        title: "Redux Counter App",
        description: "A basic counter app with redux-tookit to understand basic of redux & the flow of data from one component to different components from store. We have three components and basically sending data to each other components using redux. It hepl me to understand what is store, action & reducer in redux.",
        githubLink: "https://github.com/irkfaisal/redux_counterApp",
        liveLink: "https://irkfaisal.github.io/redux_counterApp/",
        image: redux_CounterApp
    }
]

export const skills = [
    {
        id: "html",
        name: "HTML5",
        icon: html
    },
    {
        id: "css",
        name: "CSS3",
        icon: css
    },
    {
        id: "js",
        name: "JavaScript",
        icon: javascript
    },
    {
        id: "reactjs",
        name: "React js",
        icon: reactjs
    },
    {
        id: "node js",
        name: "Node js",
        icon: nodejs
    },
    {
        id: "redux",
        name: "Angular",
        icon: angular
    },
    {
        id: "mui",
        name: "Material UI",
        icon: materialui
    },
    {
        id: "bootstrap",
        name: "Boostrap",
        icon: bootstrap
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: tailwindcss
    },
    {
        id: "mongodb",
        name: "MongoDB",
        icon: mongodb
    },
    {
        id: "sql",
        name: "SQL",
        icon: sql
    },
    {
        id: "java",
        name: "Redux",
        icon: redux
    },
    {
        id: 'postman',
        name: "PostMan",
        icon: postman
    },
    {
        id: "git",
        name: "Git",
        icon: git
    },
]

export const role_resp = [
    {
        id: 1,
        text: "Assisting in the development of user interfaces: Collaborate with the development team to implement user interfaces using both React.js and Angular, ensuring they are visually appealing, intuitive, and responsive.",
        area: "Frontend Development"
    },
    {
        id: 2,
        text: " Handle Node.js and SQL queries for backend functionality.",
        area: "Backend Development"
    },
    {
        id: 3,
        text: "Develop and integrate APIs from backend to frontend.",
        area: "API Development and Integration"
    },
    {
        id: 4,
        text: "Implement state management using Redux for data consistency.",
        area: "State Management"
    },
    {
        id: 5,
        text: "Optimize performance through techniques like code splitting.",
        area: "Performance Optimization"
    },
    {
        id: 6,
        text: " Write clear and comprehensive documentation to maintain project clarity and consistency.",
        area: "Code Documentation"
    },
]

export const personalData = [
    {
        id: "location",
        text: "Noida UP",
        icon: location
    },
    {
        id: "email",
        text: "irkfaisal@gmail.com",
        icon: email
    },
    {
        id: "phone",
        text: "7001551926",
        icon: phone
    }
]