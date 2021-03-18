import React from 'react';
import photo from '../assets/imgs/daw.JPG';
const About = () => {
    return (
        <section className="content" id="about">
            {/* <h2>About moi: </h2> */}
            <div className="cont">
                <h2>moi:</h2>
                <img src={photo} alt="..?" />
                <p>Passioné na na na Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate ea aut. Consectetur, sit architecto?</p>
            </div>
        </section>
    );
};

export default About;