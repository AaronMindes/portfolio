import React, { useEffect, useRef } from 'react'
import './header.scss'
import Navbar from '../../../components/navbar/Navbar';

const Header = ({ scrollToBody, scrollToSkills, scrollToProjects, scrollToFooter }: any) => {

    const pdfLink = require('../../../assets/FullStackResumeAaronMindes.pdf');

    const headerRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     const handleMouseMove = (event: MouseEvent) => {
    //         if (headerRef.current) {
    //             const { clientX, clientY } = event;
    //             const { offsetWidth, offsetHeight } = headerRef.current;

    //             // Calcul des valeurs de rotation en fonction de la position de la souris
    //             const xRotation = ((clientY - offsetHeight / 2) / offsetHeight) * 30; // Ajustez la valeur 30 pour l'intensité de l'effet
    //             const yRotation = ((clientX - offsetWidth / 2) / offsetWidth) * -30; // Ajustez la valeur 30 pour l'intensité de l'effet

    //             headerRef.current.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    //         }
    //     };

    //     document.addEventListener('mousemove', handleMouseMove);
    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (headerRef.current) {
                const { clientX, clientY } = event;
                const { offsetWidth, offsetHeight } = headerRef.current;

                const x = (clientX / window.innerWidth) * 100;
                const y = (clientY / window.innerHeight) * 100;

                headerRef.current.style.backgroundSize = '150% 150%';
                headerRef.current.style.backgroundPosition = `${x}% ${y}%`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className="header-container" ref={headerRef}>

            {/* <div className='header-bcakground'>
            </div> */}
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