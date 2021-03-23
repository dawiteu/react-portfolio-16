import React from 'react';
import { Link } from 'react-scroll'; 
import { BrowserRouter as Router } from 'react-router-dom'; 

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

    const checkLink = (e) => {
        console.log(e.target.innerHTML); 
        //scroll.scrollMore(100); // onClick={() => window.location.replace("/#about") } // 
    }

    const links = [ 
        {name: "about"}, 
        {name: "skills"}, 
        {name: "portfolio"},
        {name: "smedia"}, 
        {name: "/contact", exterior: true}
    ];

    return (
        <nav>
            <a href="/" onClick={(e) => goToTop(e)} className="bold">Dawid Tararuj</a>

            <ul>
                <Router>
                    {
                        links.map((item, i) => {
                            let name = item.name;
                            item.exterior ? name = name.substring(1) : name = name;
                            return (
                            <li> 
                                {
                                    <Link onClick={item.exterior ? (e) => checkLink(e) : null} key={i} to={item.name} isDynamic={true} hashSpy delay={0} offset={-100} spy={true} smooth={true} >{name}</Link>
                                }
                            </li>);
                        })
                    }
                {/* <li>
                    <Link to="about" onClick={(e) => checkLink(e) } isDynamic={true} hashSpy delay={0} offset={-100} spy={true} smooth={true}>
                        about
                    </Link>
                </li>
                <li>
                    <Link to="skills" onClick={(e) => checkLink(e) } hashSpy delay={0}  isDynamic={true} offset={-100} spy={true} smooth={true}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" onClick={(e) => checkLink(e) } hashSpy  isDynamic={true} delay={0} offset={-100} spy={true} smooth={true}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="smedia" onClick={(e) => checkLink(e) } hashSpy  isDynamic={true} delay={0}  offset={-100} spy={true} smooth={true}>
                        Media
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={(e) => checkLink(e) }>
                        Contact
                    </Link>
                </li> */}


                </Router>
            </ul>
        </nav>
    );
};

export default Navigation;