import React from 'react';

import chef from "../assets/imgs/site_chef.png";
import empo from "../assets/imgs/site_emporium.png"; 
import cami from "../assets/imgs/site_caminar.png";
import flat from "../assets/imgs/site_flati.png"; 
import spac from "../assets/imgs/site_spacial.png";
import youc from "../assets/imgs/site_youcommunik.png";
import epil from "../assets/imgs/site_epilogue.png"; 
import cs16 from "../assets/imgs/site_cs16.png"; 

const Portfolio = () => {

    const goto = link => { window.location.href=link} 

    const darkmode = {
        color: "white",
        textShadow: "1px 1px 3px #000"
    }

    const lightmode = {
        color: "black",
        textShadow: "1px 2px 12px #000"
    }

    const projet = [ 
        {nom: "Site du chef", img: chef, link: "http://www.dawit.eu", dark: false},
        {nom: "emporium", img: empo, link: "https://dawiteu.github.io/cs_emporium_js_16/", dark: false},
        {nom: "Caminar", img: cami, link: "https://dawiteu.github.io/html-sass-bootstrap-caminar/", dark: true}, 
        {nom: "Flati", img: flat, link: "https://dawiteu.github.io/html-sass-flati-siteweb/", dark: true},
        {nom: "Spacial", img: spac, link: "https://dawiteu.github.io/html-sass-bootstrap-spatial/", dark: true},
        {nom: "You Communik", img: youc, link: "https://dawiteu.github.io/html-bootstrap-youcommunik/", dark:false},
        {nom: "Epilogue", img: epil, link: "https://dawiteu.github.io/html-css-epilogue-exercice/", dark: true},
        {nom: "Coding 16", img: cs16, link: "http://dawit.eu/proj/", dark: true}
    ]; 

    const style = {
        flexDirection: 'row'
    };

    return (
        <section className="content" id="portfolio">
            <h2 className="title">PROJETS:</h2>
            {/* <h1>Portfolio</h1> <img src={chef} alt="marche pas" />*/}

            <div className="cont" style={style}>
                
                {
                    projet.map((el, i) => {
                        const color = el.dark ? darkmode : lightmode; 
                        return (
                            <div key={i} className='project'> 
                                <div className="desc">
                                    <p style={color}>{el.nom}</p>
                                    <button onClick={() => goto(el.link)} style={color}>LIVE DEMO</button>
                                
                                </div> 

                                <img src={el.img} alt={el.nom} /> 
                            </div>
                        )
                    })
                }
            </div>

            
        </section>
    );
};

export default Portfolio;