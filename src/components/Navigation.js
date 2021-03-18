import React from 'react';
import { Link } from 'react-scroll'; 


const Navigation = () => {

    return (
        <nav>
            <a href="###" className="bold">Dawid Tararuj</a>

            <ul>
                <li>
                    <Link to="about"  offset={-100} spy={true} smooth={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills"  offset={-100} spy={true} smooth={true}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" offset={-100} spy={true} smooth={true}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="smedia" offset={-100} spy={true} smooth={true}>
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