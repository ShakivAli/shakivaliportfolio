import "../styles/About.css";
import {motion} from "framer-motion";

const About = () => {
    return (
        <div className="aboutWrapper" id="about">
            <h1>~ about me</h1>
            <div className="aboutContent">
                <motion.p 
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    viewport={{once: true}}
                    className="workInfo"
                >
                    I am currently working at Carelon Global Solutions, a subsidiary of Elevance Health. 
                    I have worked with multiple teams across diverse domains, including test data creation through mainframe systems, 
                    cost analysis and validation for an insurance shopping portal, and infrastructure support, ensuring the health, 
                    stability, and performance of various application architectures.
                </motion.p>
                <motion.p 
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    viewport={{once: true}}
                    className="resume"
                >
                    Know more about the things I worked upon, check my <a href="/shakivResume.pdf" download>resume</a>
                </motion.p>
            </div>
        </div>
    );
};

export default About;