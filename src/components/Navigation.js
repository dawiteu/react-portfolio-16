import React from 'react';
import { Link } from 'react-scroll'; 


const Navigation = () => {

    return (
        <nav>
            <a href="###" className="bold">Dawid Tararuj</a>

            <ul>
                <li>
                    <Link to="about" delay={0} offset={0} spy={true} smooth={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" delay={0} offset={0} spy={true} smooth={true}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" delay={0} offset={0} spy={true} smooth={true}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="smedia" delay={0}  offset={0} spy={true} smooth={true}>
                        Media
                    </Link>
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;