import "../styles/Projects.css";
import {motion} from "framer-motion";

const Projects = () => {
    return (
        <div className="projectsWrapper" id="projects">
            <h1>~ projects</h1>
            <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8}}
                viewport={{once: true}}
                className="projects"
            >
                <div className="project">
                    <p className="projectHeading">Doubtify</p>
                    <p className="description">Time Study Matching Platform</p>
                    <p className="techStack">ReactJS, Tailwind CSS, NodeJS, ExpressJS, Socket.io</p>
                    <a href="https://doubtify-three.vercel.app/" target="_blank">Demo</a>
                </div>
                <div className="project">
                    <p className="projectHeading">proWork</p>
                    <p className="description">Service Marketplace Platform</p>
                    <p className="techStack">ReactJS, NodeJS, MongoDB, ExpressJS, CSS</p>
                    <span>In progress</span>                    
                </div>
                <div className="project">
                    <p className="projectHeading">Dreamy Web</p>
                    <p className="description">Social Content Platform</p>
                    <p className="techStack">ReactJS, NodeJS, MongoDB, ExpressJS, CSS</p>
                    <a href="https://dream-frontend-black.vercel.app/" target="_blank">Demo</a>
                </div>
                <div className="project">
                    <p className="projectHeading">WebScrapy</p>
                    <p className="description">Django-Based Data Aggregation System</p>
                    <p className="techStack">HTML, CSS, JS, Django, Selenium, BeautifulSoup</p>
                    <a href="https://github.com/ShakivAli/scraper" target="_blank">Demo</a>
                </div>
            </motion.div>
            <motion.p 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8}}
                viewport={{once: true}}
                className="more"
            >
                Check more on <a href="https://github.com/ShakivAli" target="_blank">github</a>
            </motion.p>
        </div>
    );
};

export default Projects;