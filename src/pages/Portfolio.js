import React from 'react';

import chef from "../assets/imgs/site_chef.png";
import empo from "../assets/imgs/site_emporium.png"; 


const Portfolio = () => {

    const goto = link => { window.location.href=link} 


    const projet = [ 
        {nom: "Site du chef", img: chef, link: "http://www.dawit.eu"},
        {nom: "emporium", img: empo, link: "http://www.dawit.eu"},
        {nom: "chef 2", img: chef, link: "http://www.dawit.eu"}, 
        {nom: "empo", img: empo, link: "http://www.dawit.eu"}
    ]; 

    return (
        <section className="content" id="portfolio">
            {/* <h1>Portfolio</h1> <img src={chef} alt="marche pas" />*/}

            <div className="cont">
                {
                    projet.map((el, i) => {
                        return (
                            <div key={i} className='project'> 
                                <div className="desc">
                                    {el.nom} 
                                    <button onClick={() => goto(el.link)}>LIVE DEMO</button>
                                
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