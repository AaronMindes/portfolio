import React from 'react'
import './header.scss'
import Navbar from '../../../components/navbar/Navbar';

const Header = ({ scrollToBody, scrollToSkills, scrollToProjects, scrollToFooter }: any) => {

    const pdfLink = require('../../../assets/FullStackResumeAaronMindes.pdf');


    return (
        <div className="header-container">
            <Navbar scrollToBody={scrollToBody}
                scrollToSkills={scrollToSkills}
                scrollToProjects={scrollToProjects}
                scrollToFooter={scrollToFooter} />
            <div className='about'>
                <div className='header'>

                    <div className='hello-container'>
                        <div className='dash-container'>
                            <div>-</div>
                            <div>-</div>
                            <div>-</div>
                        </div>
                        <div className='hello'>Hello</div>
                    </div>

                    <div className='name-container'>
                        <div className='Iam'>I'm</div>
                        <div className='name'>Aaron Mindes</div>
                        <div className='name profession'>Full-stack Developer</div>
                        <div className="cv">
                            <a href={pdfLink} download="FullStackCvAaronMindes">Download Resume</a>
                        </div>
                    </div>
                </div>
                <div className='about-me'>
                    <div className='label'>About</div>
                    <div className='border-line'></div>
                    <p>I’m a creative individual and a quick learner, with a strong background in self-teaching. From mastering programming and drawing to learning to play nine musical instruments, I have developed a knack for quickly grasping new concepts and creating visually appealing, detail-oriented designs. I’m a friendly person with a passion for design and Front-end development.
                        As a highly talented and experienced Full-stack/Front-end developer, I have been programming since the age of 16. My expertise lies particularly in design and Front-end development, where I combine technical skills with a keen eye for aesthetics.</p>
                </div>


            </div>
        </div>
    )
}

export default Header