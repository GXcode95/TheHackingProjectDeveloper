import React from 'react'
import { ThemeContext } from 'context/ThemeContext'
import Project from './Project'    
import '../../index.scss'
const lorem = "Phasellus et nisi eget quam venenatis condimentum at in justo. In sollicitudin id libero sit amet hendrerit. Proin sodales sapien et venenatis viverra. Phasellus nec mauris nec erat hendrerit iaculis id vitae nisl. Duis vitae sem arcu. Proin blandit viverra orci vel fermentum. Morbi nisi leo, vehicula ut nulla quis, faucibus tincidunt purus."

const Works = () => {
  const {theme} = React.useContext(ThemeContext)

  const project1 = {
    title: "Projet N°1",
    content: lorem,
    img: "https://picsum.photos/200/300"
  }
  const project2 = {
    title: "Projet N°2",
    content: lorem,
    img: "https://picsum.photos/200/300"
  }
  const project3 = {
    title: "Projet N°3",
    content: lorem,
    img: "https://picsum.photos/200/300"
  }
  
  return (
    <div className={theme ? 'Works go-light' : 'Works go-dark'}>
      <h2>Liste de mes projet</h2>
      <p><em>Certain on été réalisé dans le cadre e The Hacking Project d'autre sont des projet personnel</em></p>
      <div className={theme ? "project-container go-light" : "project-container go-dark"}>
        <Project project={project1} />
        <Project project={project2} />
        <Project project={project3} />
      </div>
    </div>
  )
}
    
export default Works
