import React from 'react'
import './header.scss'

const Header = () => {

    const pdfLink = require('../../../assets/FullStackResumeAaronMindes.pdf');


    return (
        <div className="header-container">
            <div className="name">
                <span>A</span>
                <span>a</span>
                <span>r</span>
                <span>o</span>
                <span>n</span>
                <span>M</span>
                <span>i</span>
                <span>n</span>
                <span>d</span>
                <span>e</span>
                <span>s</span>
            </div>
            <div className="moon-container">
                <div className="moon"></div>
                <div className="star"></div>
            </div>
            <div className="container-p-cv">
                <div className="profession">Full-stack Developper</div>
                <div className="profession-effect">Full-stack Developper</div>
                <div>Oriented Front-end</div>
                <div className="cv">
                    <a href={pdfLink} download="FullStackCvAaronMindes">Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Header