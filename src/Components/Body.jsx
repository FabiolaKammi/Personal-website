import React from 'react';
import ProjectForm from './ProjectForm.jsx';
import  Profile from './Image/img1.png';

const Body = () => {

    const about = {
    image: Profile,
    name: 'Fabiola Kammi',
     jobTitle: "Software Engineer",
     infos : `I have loved languages so much that
I learned Computer's languages and launched a career as
a Software Engineer.`
    }
  return (
    <div className='body-container'>

    <section className='about-section'>
        <h1>{about.name}</h1>
        <div className='img-div'>
            <img src= {about.image} alt={'profile-picture'} />
        </div>
        <div><h4>{about.jobTitle}</h4></div>

        <div className='about-info'>
        <p>{about.infos}</p>
        </div>
    </section>
    <section className='projects-section'>
       <ProjectForm />
        
    </section>

    <section className='resume-section'>
        <h2>Resume</h2>
        <div>
            <p>I added my resume to outline my work history, 
                educational background, skills, and accomplishments.
                 As a passionate Web Developer, 
                 I bring a wealth of experience and a toolkit full of innovative solutions</p>
        </div>

        <button><a href='https://earnbetter.com/app/share/resume/01J2F2R121RM0JV2CMR0ZBD002/'>Access my Resume</a></button>
    </section>
    </div>
  )
}

export default Body;
