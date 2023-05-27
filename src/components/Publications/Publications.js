import React from "react"
import FooterLink from "../FooterLink/FooterLink"
import Header from "../Header/Header"
import './Publications.css'
import publicationsVector from './../../assets/publications_vector.png'

const Publications = () => {
    return (
        <div className="section-container">
            <Header
                heading="My Paper Publications"
                details= "I've worked on the publications listed below, all of which are accessible online."
                />

            <div className="publications-main">
                <div className="publications-main-center">

                  <ul>
                    {/*Sub Section 1*/}
                    <li>
                    <h3 className="publications-sub-head">Recommendation Systems: Types, Applications, and Challenges</h3>
                    <p className="publications-details">
                        This is a Review Paper which was published in the year 2023.{' '}
                        <a
                          style={{ color: 'blue' }}
                          className="publications-link-element"
                          href="https://journal.uob.edu.bh/handle/123456789/4772"
                        >
                          Review Paper link
                        </a>
                    </p>
                    </li>

                    {/*Sub Section 2*/}
                    <li>
                    <h3 className="publications-sub-head">5G-enabled deep learning-based framework for healthcare mining: State of the art and challenges</h3>
                    <p className="publications-details">
                        This is a Book Chapter which was published in the year 2022.{' '}
                        <a
                          style={{ color: 'blue' }}
                          className="publications-link-element"
                          href="https://www.sciencedirect.com/science/article/abs/pii/B9780323906159000165?via%3Dihub"
                        >
                          Book Paper link
                        </a>
                    </p>
                    </li>

                    {/*Sub Section 3*/}
                    <li>
                    <h3 className="publications-sub-head">Ant Colony Optimization for Traveling Salesman Problem with Modified Pheromone Update Formula</h3>
                    <p className="publications-details">
                        This is a Research Paper which was published in the year 2021.{' '}
                        <a
                          style={{ color: 'blue' }}
                          className="publications-link-element"
                          href="https://link.springer.com/chapter/10.1007/978-981-16-0733-2_2"
                        >
                          Research Paper link
                        </a>
                    </p>
                    </li>
                  </ul>
                </div>
            </div>
            <FooterLink
                phrase="Get in "
                link="touch."
                toAdress="/contact"
            />
            {/*Vector Frame!*/}
            <div className="publications-vector-frame">
            <img 
                src={publicationsVector}
                alt="publications"
                className="publications-vector"/>
            </div>
        </div>
    )
}

export default Publications