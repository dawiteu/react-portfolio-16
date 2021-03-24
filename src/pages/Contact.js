import React from 'react';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;


const Contact = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <section className="content" id="contact">
            <div className="cont">
                Appelez-moi. // DawiT
            </div>
            <a onClick={scrollToTop}>To the top!</a>
        </section>
    );
};

export default Contact;