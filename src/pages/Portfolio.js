import React, { useState } from 'react';
import chef from "../assets/imgs/site_chef.png";

const Portfolio = () => {
    const [images, setImages] = useState([]); 
    const [img, setImg] = useState({}); 

    const projet = [ 
        {nom: "Site du chef", img: "site_chef"}
    ]; 

    projet.map((element, i) => {
        let updateImages = [...images];
        //console.log(element.img); 

        import('../assets/imgs/'+element.img+'.png').then(image => setImg({image}) );
        //updateImages.push()
        //console.log();
    });

    return (
        <section className="content" id="portfolio">
            {/* <h1>Portfolio</h1> <img src={chef} alt="marche pas" />*/}

            {}

            <div className="cont">
                {
                    projet.map((el, i) => {
                        return (
                            <div key={i} className='project'> 
                                <div className="desc">{el.nom}</div> 
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