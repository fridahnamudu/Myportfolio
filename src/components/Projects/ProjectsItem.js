import React from 'react'

function ProjectsItem({Image, name }) {
  return (
    <div className='projectsItem'>
        <div style={{ backgroundImage: `url(${Image})`} } ></div>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectsItem