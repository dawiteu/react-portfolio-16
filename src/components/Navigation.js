import React from 'react';
import { Link } from 'react-scroll'; 
import { BrowserRouter as Router, NavLink } from 'react-router-dom'; 

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const Navigation = () => {

    const goToTop = (e) => {
        if (window.location.href.indexOf("contact") > -1) {
            scroll.scrollToTop();
        }else{
            e.preventDefault();
            scroll.scrollToTop();
        }
    }

    return (
        <nav>
            <a href="/" onClick={(e) => goToTop(e)} className="bold">Dawid Tararuj</a>

            <ul>
                <Router>
                
                <li>
                    <Link to="about" hashSpy delay={0} offset={-350} spy={true} smooth={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" hashSpy delay={0} offset={-350} spy={true} smooth={true}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" hashSpy delay={0} offset={-350} spy={true} smooth={true}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="smedia" hashSpy delay={0}  offset={-350} spy={true} smooth={true}>
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