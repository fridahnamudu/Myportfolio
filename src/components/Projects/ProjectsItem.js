import React from 'react'
import '../Projects/projects.css'


function ProjectsItem({Image, name, message, link }) {
  return (
    <div className='projectsItem'>
      <img src={Image} />
      <h1>{name}</h1>
      <p>{message}</p>
      <a href={link} target='blank' rel='noopener noreferrer'> <button>View project</button></a>
      

      
    </div>
  )
}

export default ProjectsItem