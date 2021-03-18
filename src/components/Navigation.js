import React from 'react';
import { Link } from 'react-scroll'; 


const Navigation = () => {

    //const scroll = () => {
    //    console.log(document.scrollTop);
    //}

    //window.addEventListener("scroll", scroll);


    return (
        <nav>
            <a href="###" className="bold">Dawid Tararuj</a>

            <ul>
                <li>
                    <Link to="about" spy={true} smooth={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" spy={true} smooth={true}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="smedia" spy={true} smooth={true}>
                        Social Media
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;