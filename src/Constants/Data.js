import { linkedin, github, gitlab, cart, imdb, aiweb, html, css, javascript, reactjs, redux, nodejs, mongodb, git, bootstrap, postman, tailwindcss, materialui, location, phone, email, sql, java, redux_CounterApp } from "../assets"
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
        title: "Shopping Cart",
        description: "It’s a simple shopping cart website, where we can add or remove products in cart and also has a filter property to the products. I have used useContext hook for passing data and useReducerhook for add or remove functionality in cart.",
        githubLink: "https://github.com/irkfaisal/react_Ecom_Cart/",
        liveLink: "https://shopping-cart-with-reactjs.netlify.app/",
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
        name: "Redux",
        icon: redux
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
        name: "Java",
        icon: java
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
        text: "Assisting in the development of user interfaces: Collaborate with the development team to implement user interfaces using React.js, ensuring they are visually appealing, intuitive, and responsive."
    },
    {
        id: 2,
        text: " Take on assigned tasks related to frontend development, such as coding HTML, CSS, and JavaScript, and integrating them into React.js components."
    },
    {
        id: 3,
        text: "Optimised CSS code, fixed responsiveness, learned best folder structure format of application."
    },
    {
        id: 4,
        text: "Contribute to maintaining documentation, including code comments. Assist in organizing and managing code repositories, ensuring a clean and efficient codebase."
    },
    {
        id: 5,
        text: "Bug fixing and troubleshooting: Assist in identifying and resolving issues reported by users or identified during testing, ensuring the smooth functioning of the application."
    },
]

export const personalData = [
    {
        id: "location",
        text: "Asansol WB INDIA",
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