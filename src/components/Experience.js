import "../styles/Experience.css";
import {motion} from "framer-motion";

const Experience = () => {
    return (
        <div className="experienceWrapper" id="experience">
            <h1>~ experience</h1>
            <motion.div
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8}}
                viewport={{once: true}}
                className="experienceContent"
            >
                <p className="company">
                    Associate Software Engineer 1 @ <span>Carelon Global Solutions</span>
                </p>
                <p className="date">
                    SEP 2024 - PRESENT
                </p>
                <p className="details">
                    <ul>
                        <li>
                            Automated and maintained test data provisioning pipelines using SQL, Angular, TypeScript and
                            mainframe systems, supporting multiple Scrum teams and reducing environment inconsistencies.
                        </li>
                        <li>
                            Supported UI validation and data integrity checks for healthcare cost analysis modules in the
                            Shopper Portal.
                        </li>
                        <li>
                            Leveraged Linux, Argo CD, Datadog, and Google Cloud Platform (GCP) to monitor and troubleshoot
                            Linux-based environments, improving visibility into deployments, system health, and production
                            issues.
                        </li>
                    </ul>
                </p>
            </motion.div>
        </div>
    );
};

export default Experience;