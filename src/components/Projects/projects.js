import React from 'react'
import { projectsList }  from './projectsList'
import ProjectsItem from './ProjectsItem'
import '../Projects/projects.css'

function projects() {
  return (
  <div className="projects">
    <h1 className="projectsTitle">My Projects</h1>
    <div className="projectsList">
      {projectsList.map((ProjectsItem, key)=> {
        return (
          <ProjectsItem 
          key={key}
          image={ProjectsItem.Image}
          name={ProjectsItem.name}
          />
        )
      })}
  </div>
</div>  )
}

export default projects
