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
                                    <div className="col"> <i className="fas fa-phone-alt"></i></div>
                                    <div className="col"> <a href="#">0484 11 22 33</a> </div>
                                </div>

                                <div className="row">
                                    <div className="col"> <i className="fas fa-at"></i> </div>
                                    <div className="col"> <a href="#"> Dawid @ Tararuj .be</a> </div>
                                </div>

                                <div className="row">
                                    <div className="col"> <i className="fas fa-home"></i>  </div>
                                    <div className="col"> <a href="#"> 1030 Bruxelles</a> </div>
                                </div>
                                    
                                <div className="row">
                                    <div className="col"> <i className="fas fa-laptop"></i>  </div>
                                    <div className="col"> <a href="#"> www.dawit.eu</a>    </div>
                                </div>  

                                <div className="row">
                                    <div className="col center">
                                    <a href="###"><i className="fab fa-facebook"></i></a>
                                    <a href="###"><i className="fab fa-instagram"></i></a>
                                    <a href="###"><i className="fab fa-twitter"></i></a>
                                    <a href="###"><i className="fab fa-snapchat"></i></a>
                                    </div>
                                </div>

                        </div>
                        <div className="col f-4">
                            <form method="post" action="" onSubmit={(e) => {alert('erreur..');e.preventDefault() }}>
                                <div className="row">
                                    <div className="col f-2">
                                            <label for="nom">Nom: </label>  <input type="text" name="nom" />

                                            <label for="prenom">Prénom: </label> <input type="text" name="prenom" />

                                            <label for="subject">Sujet: </label> <input type="text" name="prenom" />
                                    </div>

                                    <div className="col f-4">
                                        <label for="message">Message:</label>
                                        <textarea></textarea>
                                    </div>

                                </div>

                                <input type="submit" className="submit" value="Envoyer >> " />

                            </form>
                        </div>
                    </div>                   
                </div>
        </section>
    );
};

export default Contact;