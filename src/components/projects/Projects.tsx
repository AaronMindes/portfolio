import React from 'react'
import './projects.scss'
import Visual from './behina108/Visual'

const Projects = () => {

    const src = require("./FlightManagementDemo.mp4")

    return (
        <div className='projects-container'>
            <h1>Projects</h1>
            <ul>
                <li className='toGo'>
                    <h1 style={{ textAlign: "center" }}>ToGo+</h1>
                    <a href='https://aaronmindes.github.io/fitness-sport/' target="_blank" rel="noopener noreferrer">
                        <div className='project-toGo'>
                            <div className='img'></div>
                        </div>
                        <div className='button1'><div>?</div><p>ToGo+</p></div>
                    </a>
                </li>
                <li>
                    <h1 style={{ textAlign: "center" }}>Flight Board</h1>
                    <h2 style={{ textAlign: "center" }}>Real Time date from backend</h2>
                    <Visual />
                </li>
                <li>
                    <h1 style={{ textAlign: "center" }}>Flight Management</h1>
                    <video
                        src={src}
                        controls
                        style={{ display: "block", margin: "20px auto", width: "100%", minWidth: "600px", height: "100%" }}>
                        Your browser does not support the video tag.
                    </video>
                </li>
            </ul>
        </div>
    )
}

export default Projects