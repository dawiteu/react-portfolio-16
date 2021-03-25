import React from 'react';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;


const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <footer>
            <a onClick={scrollToTop} className="totop"><i className="fas fa-arrow-up"></i></a>
            <p>Copyright &copy; dawiteu</p>  
        </footer>
    );
};

export default Footer;