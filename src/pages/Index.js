import React, { Fragment } from 'react';


import About from './About';
import Skills from './Skills'; 
import Portfolio from './Portfolio'; 
import Smedia from './Smedia'; 

const Index = () => {
    return (
        <Fragment>
            <About /> 
            <Skills />
            <Portfolio />
            <Smedia />
        </Fragment>
    );
};

export default Index;