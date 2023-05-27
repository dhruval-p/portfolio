import React from 'react'
import FooterLink from '../FooterLink/FooterLink'
import Header from '../Header/Header'
import './Projects.css'
import { projectsData } from '../../assets/projectsData'
import ProjectCard from './ProjectCard' 

const Projects = () => {
  return (
    <div className='section-container'>
      <Header
        heading='My Projects.'
        details="Here are the some cool projects I have worked on. 
        Do check them out!"/>

      <div className='project-cards-container'>
        {
          projectsData.map((
            {projectName,
            projectDescription,
            imageUrl,
            projectUrl
          })=>{
            return (<ProjectCard
            projectName={projectName}
            projectDescription={projectDescription}
            imageUrl={imageUrl}
            projectUrl={projectUrl}/>
            );
          })
        }
      </div>

      <FooterLink 
        phrase="Check out "
        link="my skills!"
        toAdress="/skills"/>
    </div>
  )
}

export default Projects
