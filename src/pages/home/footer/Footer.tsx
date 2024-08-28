import React from 'react'
import './footer.scss'
import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon ,} from '@fortawesome/react-fontawesome'
import { faI, faMailBulk, faN, faPhone, faT, faUser, faVideo, faY } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'


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
                        <div className="name"><div style={{width:"25px",textAlign:"center"}}><FontAwesomeIcon icon={faUser} color='black'/></div> Aaron Mindes</div>
                        <div className="mail"><div style={{width:"25px",textAlign:"center"}}><FontAwesomeIcon icon={faMailBulk} color='black'/></div> mindesaaron@gmail.com</div>
                        <div className="num"><div style={{width:"25px",textAlign:"center"}}><FontAwesomeIcon icon={faPhone} color='black'/></div> 0584187251</div>
                    </div>
                </div>
                <div className="links">
                    <div className="linkedin"><a href='https://www.linkedin.com/in/aaron-mindes-49670617b/' target="_blank" rel="noopener noreferrer">Linkedin <span><FontAwesomeIcon icon={faFacebook as IconProp}></FontAwesomeIcon><FontAwesomeIcon icon={faN} color='white'></FontAwesomeIcon></span></a></div>
                    <div className="YT"><a href='https://www.youtube.com/@KodKodProgramming' target="_blank" rel="noopener noreferrer">Youtube Programation <span><FontAwesomeIcon icon={faYoutube as IconProp}></FontAwesomeIcon><FontAwesomeIcon icon={faT} color='white'></FontAwesomeIcon></span></a></div>
                    <div className="YT"><a href='https://www.youtube.com/@AaronMindes' target="_blank" rel="noopener noreferrer">YouTube Music <span><FontAwesomeIcon icon={faYoutube as IconProp}></FontAwesomeIcon><FontAwesomeIcon icon={faT} color='white'></FontAwesomeIcon></span></a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer