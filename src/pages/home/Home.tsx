import React, { useRef } from 'react'
import './home.scss'
import Header from './header/Header';
import Body from './body/Body';
import Skills from '../../components/skills/Skills';
import Projects from '../../components/projects/Projects';
import Footer from './footer/Footer';

const Home = () => {

    const bodyRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToSection = (sectionRef: any) => {
        console.log(sectionRef.current.offsetTop)
            window.scrollTo({
                top: sectionRef.current.offsetTop,
                behavior: 'smooth'
            });
    };

    return (
        <div className='home-container'>
             <Header
                scrollToBody={() => scrollToSection(bodyRef)}
                scrollToSkills={() => scrollToSection(skillsRef)}
                scrollToProjects={() => scrollToSection(projectsRef)}
                scrollToFooter={() => scrollToSection(footerRef)}
            />
         <div ref={bodyRef} >
                <Body />
            </div>
            <div ref={skillsRef} >
                <Skills />
            </div>
            <div ref={projectsRef} >
                <Projects />
            </div>
            <div ref={footerRef} >
                <Footer />
            </div>
        </div>
    )
}

export default Home