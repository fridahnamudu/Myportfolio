import React from 'react'
import '../Projects/projects.css'


function ProjectsItem({Image, name }) {
  return (
    <div className='projectsItem'>
      <img src={Image} />
      <h1>{name}</h1>
      
    </div>
  )
}

export default ProjectsItem