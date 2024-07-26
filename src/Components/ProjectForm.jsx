import React from 'react'

const ProjectForm = () => {

    const projects = 
        { key:"1",
          title: "Calculator App",
         image: 'public/project1.jpg',
         info:" Modern and responsive modern calculator",
         link: "jjnjgngjng"
        }

  return (
    <div>
      {
        projects.map((project)=>(<p>{project.title}</p>)
          
          
        )}
    </div>
  )
}

export default ProjectForm;

