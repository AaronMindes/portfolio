import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faI, faN, faT, faVideo, faY } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div id="wave"></div>
            <div className='footer'>
                <div className="info">
                    <div className="name-img">
                        <div className="img"></div>
                    </div>
                    <div className="contact">
                        <div className="name">Aaron Mindes</div>
                        <div className="mail">mindesaaron@gmail.com</div>
                        <div className="num">0584187251</div>
                    </div>
                </div>
                <div className="links">
                    <div className="linkedin"><a href='https://www.linkedin.com/in/aaron-mindes-49670617b/' target="_blank" rel="noopener noreferrer">Linkedin <span><FontAwesomeIcon icon={faI} color='white'></FontAwesomeIcon><FontAwesomeIcon icon={faN} color='white'></FontAwesomeIcon></span></a></div>
                    <div className="YT"><a href='https://www.youtube.com/@KodKodProgramming' target="_blank" rel="noopener noreferrer">Youtube Programation <span><FontAwesomeIcon icon={faY} color='white'></FontAwesomeIcon><FontAwesomeIcon icon={faT} color='white'></FontAwesomeIcon></span></a></div>
                    <div className="YT"><a href='https://www.youtube.com/@AaronMindes' target="_blank" rel="noopener noreferrer">YouTube Music<span><FontAwesomeIcon icon={faY} color='white'></FontAwesomeIcon><FontAwesomeIcon icon={faT} color='white'></FontAwesomeIcon><FontAwesomeIcon  icon={['fab', 'facebook-f']}></FontAwesomeIcon></span></a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer