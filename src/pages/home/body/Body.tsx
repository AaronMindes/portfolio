import React from 'react'
import './body.scss'

const Body = () => {
    return (
        <div className='body-container'>
            <div className="last-experience">
                <div className="bg1">
                    <div className="header">
                        <div className="profession">- Full Stack Developer -</div>
                        <div className="location-date"><span>Israel Air Force</span> |Aug 2020 - Nov 2023|</div>
                        <div className="title">- Web Platform for Investigation and Research -</div>
                    </div>
                    <div className="content">
                        <ul>

                            <li>As a Full Stack developer, I played a central role in creating an
                                innovative web platform tailored for investigation and research,
                                embedding live video streams and drone telemetry data.
                            </li>
                            <li>Designed and developed platform features from scratch to meet
                                specific investigation needs.
                            </li>
                            <li>Proven ability to excel as a designer, optimizing user experience and
                                delivering visually appealing interfaces.</li>
                            <li>Leveraged Angular, Node.js, Nest.js, JS, TypeScript, Express and
                                MongoDB skills to establish a robust tech ecosystem.
                            </li>
                            <li>Implemented Agile methodology for efficient, rapid, and adaptive
                                development while using architecture of microservices.
                            </li>
                            <li>Experienced in efficient data transfer protocols and technologies for
                                real-time data processing for live insights and data archiving for
                                future reference (Wowza, hls , Kafka).</li>
                            <li>Close collaboration with cross-functional teams to align with goals
                                and ensure client satisfaction.</li>
                            <li>Played a crucial role in project planning, feature development and
                                deployment, ensuring smooth execution within project deadlines.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="last-experience">
                <div className="bg2">
                    <div className="header">
                        <div className="profession">- Android Developer -</div>
                        <div className="location-date"><span>Friends Team</span> |2019 – 2020|</div>
                        <div className="title">ToGo+.</div>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                Developed a coaching app while working with a team of designers
                                and artists to ensure captivating visuals and animations.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body