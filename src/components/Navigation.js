import React from 'react';
import { Link } from 'react-scroll'; 
import { BrowserRouter as Router, NavLink } from 'react-router-dom'; 

const Navigation = () => {

    return (
        <nav>
            <a href="###" className="bold">Dawid Tararuj</a>

            <ul>
                <Router>
                
                <li>
                    <Link to="about" delay={0} offset={-100} spy={true} smooth={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" delay={0} offset={-100} spy={true} smooth={true}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" delay={0} offset={-100} spy={true} smooth={true}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="smedia" delay={0}  offset={-100} spy={true} smooth={true}>
                        Media
                    </Link>
                </li>
                <li>
                    <NavLink to="/contact" exact activeClassName="active">
                        Contact
                    </NavLink>
                </li>
                </Router>
            </ul>
        </nav>
    );
};

export default Navigation;