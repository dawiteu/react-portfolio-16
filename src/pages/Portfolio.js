import React, { useEffect, useState } from 'react';

import chef from "../assets/imgs/site_chef.png";
import empo from "../assets/imgs/site_emporium.png"; 


const Portfolio = () => {

    const projet = [ 
        {nom: "Site du chef", img: chef},
        {nom: "emporium", img: empo},
        {nom: "chef 2", img: chef}, 
        {nom: "empo", img: empo}
    ]; 

    return (
        <section className="content" id="portfolio">
            {/* <h1>Portfolio</h1> <img src={chef} alt="marche pas" />*/}

            <div className="cont">
                {
                    projet.map((el, i) => {
                        return (
                            <div key={i} className='project'> 
                                <div className="desc">{el.nom} <button>LIVE DEMO</button></div> 

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