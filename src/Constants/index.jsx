import html5 from '../assests/html5.png';
import css from '../assests/css.png';
import reactjs from '../assests/reactjs.png';
import web from '../assests/web.png';
import js from '../assests/js.png';
import tw from '../assests/tw.png';
import njs from '../assests/njs.png';
import working from '../assests/working.png';
//import { image } from 'framer-motion/client';
import portfolio from '../assests/portfolio.png';

const services = [
    {
        title: "Web Developer",
        icon: web,
    },

    {
        title: "React Developer",
        icon: reactjs,
    },
]

// Technologie

const technologies = [
    {
        name: "HTML 5",
        icon: html5,
    },

    {
        name: "CSS",
        icon: css,
    },

    {
        name: "React JS",
        icon: reactjs,
    },

    {
        name: "JavaScript",
        icon: js,
    },

    {
        name: "Tailwind",
        icon: tw,
    },
    {
        name: "Node Js",
        icon: njs,
    },
]

// Beispiel Projekte

const projects = [
    {
        name: "Portfolio",
        description:
            "Mein eigenes Portfolio mit dem ich mich und meine Arbeit besser vorstellen kann.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
        ],
        image: portfolio,
        source_code_lik: "https://github.com/ignac1987/Portfolio.git",
        
    },

    // Übungen

    {
        name: "Urlaubs - Projekt",      
        description:
            "Ich mache das, um zu üben!",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
        ],
        image: working,
        source_code_lik: "https://github.com/ignac1987/Urlaub.git",
    },
    
    {
        name: "To Do - Projekt",        
        description:
            "Ich mache das, um zu üben!",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
        ],
        image: working,
        source_code_lik: "https://github.com/ignac1987/Urlaub.git",
    },
];
export {services, technologies, projects};