import React, { Fragment } from 'react';
//import { BrowserRouter as Browser, Switch, Route} from 'react-router-dom'; 


import Header from './components/Header'; 
import Navigation from './components/Navigation';

import About from './pages/About';
import Skills from './pages/Skills'; 
import Portfolio from './pages/Portfolio'; 
import Smedia from './pages/Smedia'; 

const App = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />

      <About /> 
      <Skills />
      <Portfolio />
      <Smedia />
   
    </Fragment>
  );
};

export default App;

/*


   <h1>Hello!</h1>
      <h2>Hello 2</h2>
      <p>dddd</p>
      <span>Spaan</span>



      <Browser>
        <Navigation />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery1" component={Gal1} />
            <Route exact path="/gallery2" component={Gal2} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </Switch>

        <Footer/>
      </Browser>


*/
