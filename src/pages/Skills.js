import React from 'react';

const Skills = () => {
    return (
        <section className="content" id="skills">
            <div className="cont">
                <div className="row">
                    <div className="col">
                        <h3 className="title">Front &#123; </h3>
                        <div className="compets">

                            <div className="compet">
                                <dt><i className="fab fa-html5 fa-3x"></i></dt>
                                <dd>HTML 5</dd> 
                            </div>
                            
                            <div className="compet">
                                <dt><i className="fab fa-css3-alt fa-3x"></i></dt>
                                <dd>CSS 3</dd>
                            </div>
                            
                            <div className="compet">
                                <dt><i className="fab fa-js-square fa-3x"></i></dt>
                                <dd>JS</dd>
                            </div>

                            <div className="compet">
                                <dt><i className="fab fa-sass fa-3x"></i></dt>
                                <dd>Sass/Scss</dd>
                            </div>

                            <div className="compet">
                                <dt><i className="fab fa-react fa-3x"></i></dt>
                                <dd>ReactJS</dd>
                            </div>

                            <div className="compet">
                                <dt><i className="fab fa-bootstrap fa-3x"></i></dt>
                                <dd>Bootstrap</dd>
                            </div>

                        </div>
                        <h3 className="title">&#125; </h3>
                    </div>
                    <div className="col">
                        <h3 className="title">Back</h3>
                        <div className="compets">

                            <div className="compet">
                                <dt><i className="fab fa-php fa-3x"></i></dt>
                                <dd>PHP</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fas fa-database fa-3x"></i></dt>
                                <dd>MySQL</dd> 
                            </div>

                        </div>

                    </div>
                    <div className="col">
                        <h3 className="title">+</h3>

                        <div className="compets">

                            <div className="compet">
                                <dt><i className="fas fa-terminal fa-3x"></i></dt>
                                <dd>Bash</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fab fa-github fa-3x"></i></dt>
                                <dd>GitHub</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fas fa-images fa-3x"></i></dt>
                                <dd>Photoshop</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fas fa-images fa-3x"></i></dt>
                                <dd>Illustrator</dd> 
                            </div>

                            <div className="compet">
                                <dt><i className="fas fa-images fa-3x"></i></dt>
                                <dd>phpmyadmin</dd> 
                            </div>

                        </div>

                    </div>
                </div>


                {

                /*
                HTML :<i className="fab fa-html5 fa-3x"></i>
                CSS : <i className="fab fa-css3-alt fa-3x"></i>
                JS: <i className="fab fa-js-square fa-3x"></i>
                SASS: <i className="fab fa-sass fa-3x"></i>
                React : <i className="fab fa-react fa-3x"></i>
                <br/> 
                PHP: <i className="fab fa-php fa-3x"></i>
                MySQL: : <i className="fas fa-database fa-3x"></i>
                <br/>
                BASH: <i className="fas fa-terminal fa-3x"></i>
                GitHUB: <i className="fab fa-github fa-3x"></i>
                */
                }
            </div>
        </section>
    );
};

export default Skills;