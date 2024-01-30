import React from 'react'
import './projects.scss'

const Projects = () => {
    return (
        <div className='projects-container'>
            <h1>Projects</h1>
            <ul>
                <li className='toGo'>
                    <a href='https://aaronmindes.github.io/fitness-sport/' target="_blank" rel="noopener noreferrer">
                        <div className='project-toGo'>
                            <div className='img'></div>
                        </div>
                        <div className='button1'><div>?</div><p>ToGo+</p></div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Projects