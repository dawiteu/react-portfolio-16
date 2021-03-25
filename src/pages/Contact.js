import React from 'react';
import photocv from "../assets/imgs/cv_screen.png";


var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;


const Contact = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <section className="content" id="contact">
            <div className="cont">
                <div className="row">
                        <div className="col f-1">
                            <div className="project">
                                    <div className="desc">
                                        <button>Voir</button>
                                        <button>Télécharger</button>
                                    </div>
                                <img src={photocv} alt="photo" />
                            </div>
                        </div>
                        <div className="col f-2">
                            <div className="row">
                                <div className="col">
                                    11
                                </div>
                                <div className="col">
                                    22
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    33
                                </div>
                                <div className="col">
                                    44
                                </div>
                            </div>
                            <a href="#">TEL: 0484 11 22 33</a> 
                            <a href="#">@: Dawid @ Tararuj .be</a> 
                            <a href="#">Adress: 1030 Bruxelles</a> 
                            <a href="#">WWW: www.dawit.eu</a> 
                        </div>
                        <div className="col f-4">
                        
                        </div>
                    </div>                   
                </div>
            <a onClick={scrollToTop}>To the top!</a>
        </section>
    );
};

export default Contact;