import React from 'react'
import FooterLink from '../FooterLink/FooterLink'
import Header from '../Header/Header'
import './Skills.css'
import { skillList } from '../../assets/skillsData'
import skillsVector from './../../assets/skills_vector.png'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='section-container'>
      <Header 
        heading="My Skills"
        details="I am passionate about learning new tools and technologies. 
        I have worked with below specified tech stack" />
      
      <div className='skill-card-container'>
        {skillList.map(({name,logo})=>(
          <SkillCard name={name} logo={logo}/>
        ))}
      </div>
      
      <FooterLink 
      phrase="Check out " 
      link="my publications." 
      toAdress="/publications"/>
      
      <div className='skills-vector-frame'>
        <img 
          src={skillsVector}
          alt='skills'
          className='skills-vector'
        />
      </div>
    </div>
  )
}

export default Skills
