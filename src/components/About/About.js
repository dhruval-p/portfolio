import React from 'react'
import FooterLink from '../FooterLink/FooterLink'
import Header from '../Header/Header'
import aboutVector from './../../assets/about_vector.png'
import './About.css'
import aboutAnime from './../../assets/about_anime.gif'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='section-container'>
      <Header
        heading="About me"
        details="Below, I've listed a few of my experiences and details."
        />

      <div className='about-main'>
        <div className='about-main-left'>
          {/*Sub section 1*/}
          <h3 className='about-sub-head'>Software Engineer</h3>
          <p className='about-details'>
            I have experience developing software products using various programming languages and
            frameworks/tools. {' '}
            <a 
              className='about-link-element' 
              href='https://github.com/dhruval-p'
            >
              Check out my github account.
            </a>
          </p>

          {/*Sub section 2*/}
          <h3 className='about-sub-head'>Tech Enthusiast and Author</h3>
          <p className='about-details'>
            I enjoy exploring new technologies and experimenting with them to keep myself updated with latest advancements in the industry. I have authored 3 paper publications, including a research paper, a review paper, and a book chapter, all of which are available online on the publishers' website. {' '}

            <Link to={"/publications"} className="about-link-element">
                Check out my publications.
            </Link>

          </p>

          {/*Sub section 3*/}
          <h3 className='about-sub-head'>Teacher</h3>
          <p className='about-details'>
          I have worked as a Grader and Teaching Aide at my University for Computer Science and Physics courses respectively.{' '}
            {/* <a 
              className='about-link-element' 
              href=''
            >
              asu i-search link
            </a> */}
          </p>

        </div>

        <div className='about-main-right'>
          <img src={aboutAnime} alt='animation' className='about-anime'/>
        </div>

      </div>
      <FooterLink 
          phrase="Check out my "
          link="projects!"
          toAdress="/projects"
      />
        {/*Vector Frame!*/}
        <div className='vector-frame'>
          <img src={aboutVector} className="about-vector" alt="about"/>
        </div>
    </div>
  )
}

export default About
