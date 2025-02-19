import React from 'react';
import Tindog from './Image/Tindog project.jpg';
import img1 from './Image/img1.png';
import img2 from './Image/calc-app.jpg';
import img3 from './Image/The todo app.jpg';
import img4 from './Image/websiteperso.jpg';

const projects = [
    {
        photo:img3,
        title:"To-Do List",
        info: `Developed an intuitive to-do list application,
enabling users to manage daily tasks with ease, featuring add,
delete, and edit functionalities.`,
        link: "https://theodoapp.netlify.app/",
        code: `"https://github.com/FabiolaKammi/TODO-APP.git"`
    },
    {
        photo:img2,
        title:"Calculator",
        info: `Designed and developed a fully functional calculator that supports various
mathematical operations, embodying the core principles of software development.`,
       link: "https://theodoapp.netlify.app/",
        code: `"https://github.com/FabiolaKammi/TODO-APP.git"`
    },
    {
        photo:img1,
        title:"Rock, Paper, Scissors Game",
        info: `Brought the classic game to life with a digital twist,
implementing logic that mirrors human choice versus computer randomness.`,
        link: "https://theodoapp.netlify.app/",
        code: `"https://github.com/FabiolaKammi/TODO-APP.git"`
    },
    {
        photo:img4,
        title:"Personal-Website",
        info: `Took on the challenge of building my own multipage website from the ground up,
serving as a portfolio for my projects and a platform to share my journey and insights.`,
        link: "https://theodoapp.netlify.app/",
        code: `"https://github.com/FabiolaKammi/TODO-APP.git"`
    },
    {
        photo:Tindog,
        title:"Counter Program",
        info: `Created a simple yet effective counter tool,
useful for tracking increments in any scenario, 
showcasing my ability to simplify complex problems.`,
        link: "https://theodoapp.netlify.app/",
        code: `"https://github.com/FabiolaKammi/TODO-APP.git"`
    },
    {
        photo:img2,
        title:"Timer Program",
        info: `Engineered a user-friendly timer application,
emphasizing my focus on utility and user experience in software development.`,
        link: "https://theodoapp.netlify.app/",
        code: `"https://github.com/FabiolaKammi/TODO-APP.git"`
    },
    {
        photo:img2,
        title:"Q & Answer Game",
        info: `Designed an engaging quiz game that tests users' knowledge across various topics in tech,
demonstrating my ability to create interactive and educational software.`,
        link: "https://theodoapp.netlify.app/",
        code: `"https://github.com/FabiolaKammi/TODO-APP.git"`
    },
    {
        photo:Tindog,
        title:"Tindog-website",
        info: `Combined my passion for coding and dog by developing a website,
making it easier for dog owner to find friend for their dogs.`,
        link: "https://theodoapp.netlify.app/",
        code: `"https://github.com/FabiolaKammi/TODO-APP.git"`
    }
    
];



const ProjectForm = () => {

  return (
    
    <div className='row'>
        
        {projects.map((item, i) => {
          return (
            <div key={i} className='project-form'>
       <img src={item.photo} alt={item.title} width="300" height="300" />
        <h3>{item.title}</h3>
        <h5>{item.info}</h5>
        <ul>
          <li>
            <button className='project-button'>
              <a href={item.code}>Code</a>
            </button>
          </li>
          <li>
            <button className='project-button'>
              <a href={item.link}>Website</a>
            </button>
          </li>
        </ul>
            </div>
          )
        })}
    </div>)
}

export default ProjectForm;

