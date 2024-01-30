import React from 'react'
import './home.scss'
import Header from './header/Header';
import Body from './body/Body';
import Skills from '../../components/skills/Skills';
import Projects from '../../components/projects/Projects';
import Footer from './footer/Footer';

const Home = () => {

    return (
        <div className='home-container'>
            <Header />
            <Body />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home