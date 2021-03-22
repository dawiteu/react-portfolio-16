import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
//import ReactPageScroller from 'react-page-scroller';

import Header from './components/Header'; 
import Navigation from './components/Navigation';

import About from './pages/About';
import Skills from './pages/Skills'; 
import Portfolio from './pages/Portfolio'; 
import Smedia from './pages/Smedia'; 
import Contact from './pages/Contact'; 


const App = () => {
  return (
    <Fragment>
      
      <Header />

      <Navigation />

      <Router>
        <Switch>
          <Route exact path="/">
            <About /> 
            <Skills />
            <Portfolio />
            <Smedia />
          </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
        </Switch>
      </Router>

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
