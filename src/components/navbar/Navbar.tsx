import React from 'react'
import "./navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ scrollToBody, scrollToSkills, scrollToProjects, scrollToFooter }: any) => {
    return (
        <div className='navbar-container'>
            <ul>
                <li className='initial'>AM</li>
                <li onClick={scrollToBody}>Experience</li>
                <li onClick={scrollToSkills}>Skills</li>
                <li onClick={scrollToProjects}>Projects</li>
                <li onClick={scrollToFooter}>Contact</li>
                <div className='social-network'>
                    <li className='linkedIn'><FontAwesomeIcon icon={faLinkedinIn as IconProp} fontSize={20} /></li>
                    <li className='youtube'><FontAwesomeIcon icon={faYoutube as IconProp} fontSize={20} /></li>
                    <li className='github'><FontAwesomeIcon icon={faGithub as IconProp} fontSize={20} /></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar