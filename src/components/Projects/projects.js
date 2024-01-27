import React from 'react'
import { projectsList }  from './projectsList'
import ProjectsItem from './ProjectsItem'
import '../Projects/projects.css'

function projects() {
  return (
  <div className="projects">
    <h2 className="projectsTitle">My Projects</h2>
    <div className="projectsList">
      {projectsList.map((Item, key)=> (
        // return (
          <ProjectsItem 
          key={key}
          Image={Item.Image}
          name={Item.name}

          />
        
      ))}
  </div>
</div>  )
}

export default projects
