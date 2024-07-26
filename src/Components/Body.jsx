import React from 'react';
import ProjectForm from './ProjectForm.jsx';

const Body = () => {
    const about = {
     jobTitle: "Software Engineer",
     infos : "jfdkmfkfkmfkdnfjdnf"
    }
  return (
    <div className='body-container'>
    <section className='about'>
        <div>
            <img src='public/image/img1' alt='profile-picture' />
            <h4>{about.jobTitle}</h4>
        </div>

        <div>
        <p>{about.infos}</p>
        </div>
    </section>
    <section className='projects'>
        <ProjectForm />
        <div></div>
        <div></div>
        <div></div>
    </section>

    <section className='resume'>
        <div></div>
        <button></button>
    </section>
    </div>
  )
}

export default Body;
