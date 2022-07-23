import React from 'react';
import "./Tab.scss";

const Tab = () => {
  return (
    <div className='tab-container'>
        <div className='tab-inner'>
            <div className='tab-double'>
                <div className='tab'>
                    <h2>SKILLS</h2>
                    {/* <p>Develop fast, secure and scalable blockchain solutions with hopes to revolutionalize financial system as we know it.</p> */}
                    <h4>LANGUAGES</h4>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Dart</li>
                        <li>SQL</li>
                    </ul>
                    <h4>FRAMEWORKS & LIBRARIES</h4>
                    <ul>
                        <li>React</li>
                        <li>Ethers</li>
                        <li>Hardhat</li>
                        <li>Flutter</li>
                        <li>Flask</li>
                        <li>.NET Core</li>
                    </ul>
                    <h4>OTHER</h4>
                    <ul>
                        <li>Remix</li>
                        <li>Firebase</li>
                        <li>Figma</li>
                        <li>GitHub</li>
                        <li>Adobe Cloud</li>
                    </ul>
                </div>
                <div className='tab'>
                    <h2>EDUCATION</h2>
                    <h4>BACHELOR OF COMPUTER SCIENCE</h4>
                    <p>Faculty of Computer Science and Informatics, University of Ljubljana</p>
                    <h4>ERASMUS EXCHANGE</h4>
                    <p>TU Dublin - Computer Science</p>
                </div>
            </div>
            <div className='tab'>
                <h2>EXPERIENCE</h2>
                <h4>BACKEND DEVELOPER</h4>
                <p>Worked for a Slovenian company iPLUS (6 months) where I developed parts of their new gambling platform. This job really enhanced my OOP skills.
                    <ul>
                        <li>C#</li>
                        <li>.NET Core</li>
                        <li>GitHub</li>
                        <li>OOP</li>
                        <li>Teamwork</li>
                    </ul>
                </p>
                <h4>MOBILE DEVELOPER</h4>
                <p>Full-stack remote work for Austrian startup Tutorium (9 months). Developed an app for an improved tutor-student communication, grade monitoring and tutoring session scheduling. Great representation of my ability to work remotely effectively.
                    <ul>
                        <li>Flutter (Dart)</li>
                        <li>Firebase database</li>
                        <li>Adobe Cloud</li>
                        <li>Figma</li>
                        <li>Communication</li>
                    </ul>
                </p>
                <h4>PSEUDOPILOT</h4>
                <p>Student pseudopilot at Slovenia Control (2 years). I was responsible for the execution and quality of exercises air traffic controlers use for their examination. Not directly a computer science based job but it helped me develop a lot of important soft skills.
                    <ul>
                        <li>Time management</li>
                        <li>Problem solving</li>
                        <li>Ability to multitask</li>
                        <li>Leadership</li>
                    </ul>
                </p>
            </div>
            <div className='tab'>
                <h2>INTERESTS</h2>
                <h4>BLOCKCHAIN & CRYPTO</h4>
                <p>I have been involved in crypto since 2019. First just as an investor and trader, later on as a developer. I love researching new crypto projects, especially DeFi and crypto gaming.</p>
                <h4>SPORT</h4>
                <p>Sport always played a big part in my life. From multiple National Karate Champion titles as a teenager, to playing a lot of basketball and volleyball later on, these days I keep myself active with daily gym sessions and playing group sports with friends.</p>
                <h4>TRAVEL</h4>
                <p>Since programming allows me to work remotely, I like to travel around the world and work from different places. Traveling inspires me and gives me fresh ideas.</p>
                <h4>GAMING</h4>
                <p>Video games are just amazing so I naturally try to find time in my day and squeeze in some RPG content.</p>
                <h4>FOOD</h4>
                <p>In order to be able to maintain an active lifestyle I also need to take care of what I eat, which over the years turned into a really wholesome hobby. I'm always down for a bowl of ramen and some sushi.</p>
            </div>
        </div>
    </div>
  )
}

export default Tab