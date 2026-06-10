import "../styles/Home.css";
import {motion} from "framer-motion";

const Home = () => {
    return (
        <div className="homeWrapper" id="home">
            <p className="Greetings">Hi, I am <span>Shakiv</span></p>
            <motion.p 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8}}
                viewport={{once: true}}
                className="intro"
            >
                Software Engineer and passionate web developer. Always building, learning, and enjoying the process of turning ideas into reality.
            </motion.p>
        </div>
    );
};

export default Home;