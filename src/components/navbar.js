import '../styles/Navbar.css';
import {MdEmail} from 'react-icons/md';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`navbarWrapper ${isOpen ? 'active' : ''}`}>
            <nav className='navbar'>
                <a href='/' className='logo'>Shakiv Ali</a>
                <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </nav>
            <div className={`navbarItems ${isOpen ? 'active' : ''}`}>
                <div className='sections'>
                    <a href='/#home'>Home</a>
                    <a href='/#about'>About</a>
                    <a href='/#experience'>Experience</a>
                    <a href='/#projects'>Projects</a>
                </div>
                <div className='links'>
                    <a href='mailto:shakivaliamir123@gmail.com'><MdEmail/></a>
                    <a href='https://www.linkedin.com/in/shakiv-ali-b16b30205/' target='_blank' rel="noreferrer"><FaLinkedin/></a>
                    <a href='https://github.com/ShakivAli' target='_blank' rel="noreferrer"><FaGithub/></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;